const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
const keywords = [
    '<',
    '>',
    'script',
    'javascript',
    'eval',
    'alert',
    'onclick',
    'onload',
    'onerror',
    'javascript:',
    'onmouseover',
    'onmouseout',
    'oninput',
    'onfocus',
    'onblur',
    'onchange',
    'onsubmit',
    'onkeydown',
    'onkeyup',
    'onkeydown',
    'onkeyup',
    'onload'
];


function render() {
    var titlesArray = [];
    var ChooseSelect = document.getElementById("selection");
    ChooseSelect.innerHTML = "";

    for (var key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key.startsWith("dictionary:")) {
            var title = key.substring("dictionary:".length);
            titlesArray.push(title);

            var option = document.createElement("option");
            option.value = title;
            option.text = title;
            ChooseSelect.add(option);
        }
    }
    return titlesArray;
}


function back() {
    window.location.href = 'index.html';
}


const worker = Tesseract.createWorker({
    logger: m => {
        if (m.status === "recognizing text") {
            progress.innerHTML = "Text wird verarbeitet" + (m.progress ? ` ${Math.round(m.progress * 100)}%` : '');
        } else {
            progress.innerHTML = "Software wird geladen" + (m.progress ? ` ${Math.round(m.progress * 100)}%` : '');
        }
    },
    workerOptions: {
        memoryGrowth: true,
    }
});


const fileSelector = document.getElementById('input');
const start = document.getElementById('start');
const progress = document.querySelector('.progress');

function MakeImg() {
    var title = document.getElementById("selection").value;

    if (title) {
        fileSelector.setAttribute("capture", "environment");
        fileSelector.click();
    } else {
        showMessage("Erstelle erst eine Vokabelliste!", "info", "Information")
    }
}

function OpenImg() {
    var title = document.getElementById("selection").value;

    if (title) {
        fileSelector.removeAttribute("capture");
        fileSelector.click();
    } else {
        showMessage("Erstelle erst eine Vokabelliste!", "info", "Information")
    }
}


fileSelector.onchange = () => {
    const file = fileSelector.files[0];

    if (file && validImageTypes.includes(file.type)) {
        start.disabled = false;
        progress.innerHTML = "Ein Bild wurde ausgewählt.";
    } else {
        progress.innerHTML = "Fehler! Kein Bild wurde ausgewählt!";
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const imgElement = new Image();
        imgElement.src = reader.result;
        imgElement.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = imgElement.width / 2;
            canvas.height = imgElement.height / 2;
            ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
        };
    };
}



start.onclick = async () => {
    const textarea = document.getElementById('output');
    textarea.innerHTML = '';
    start.disabled = true;
    await worker.load();
    await worker.loadLanguage('deu');
    await worker.initialize('deu');
    const file = fileSelector.files[0];

    if (file && validImageTypes.includes(file.type)) {

        const reader = new FileReader();
        reader.onload = async () => {
            const base64Image = reader.result;

            try {
                const { data } = await worker.recognize(base64Image);
                data.text = data.text.replace(/\[.*?\]/g, '').replace(/\|.*?\|/g, '').replace(/[|'|]/g, '');
                textarea.innerHTML = data.text;
                progress.innerHTML = 'Erfolgreich!';
                start.disabled = false;
            } catch (err) {
                console.error("OCR Error:", err);
                progress.innerHTML = "Fehler bei der Erkennung des Textes!";
            }

            await worker.terminate();
        };
        reader.readAsDataURL(file);
    } else {
        progress.innerHTML = "";
        start.disabled = false;
    }
};


function addVoc() {
    var title = document.getElementById("selection").value;
    var text = document.getElementById("output").value.trim();
    const file = fileSelector.files[0];
    const unsafe = keywords.some(keyword => text.includes(keyword));


    if (file && validImageTypes.includes(file.type) && !unsafe && title && text.length > 10 && text.length < 700) {
        const result = {};
        const lines = text.split("\n");

        lines.forEach(line => {
            const match = line.match(/^(\S.*?)(?:\s{2,}|\t+)(.+)$/);
            if (match) {
                const key = match[1].trim();
                const value = match[2].trim();
                result[key] = value;
            }
        });

        console.log(JSON.stringify(result, null, 2));

        const existingData = localStorage.getItem("dictionary:" + title);
        const parsedData = existingData ? JSON.parse(existingData) : {};

        const updatedData = { ...parsedData, ...result };

        localStorage.setItem("dictionary:" + title, JSON.stringify(updatedData));
        showMessage("Vokabeln wurden erfolgreich hinzugefügt!", "success", "Erfolgreich");
        window.location.href = "pic.html";
    } else {
        showMessage("Lade erst ein Bild hoch und Quellcode wird nicht akzeptiert!", "error", "Fehler");
    }
}


function showMessage(message, icon, title) {
    Swal.fire({
        title: title,
        text: message,
        icon: icon,
        confirmButtonText: "Okay"
    });
}
