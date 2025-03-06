let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};
let ran_key;
let buttonTitle;
let liste;
let still = 0;
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


function addVocabulary() {
    const germanWord = germanText.value.trim();
    const englishWord = englishText.value.trim();
    var ausgewaehlteOption = selection.value;
    var vollstaendigerKey = "dictionary:" + ausgewaehlteOption;

    if (germanWord.length > 30 || englishWord.length > 30) {
        showMessage('Die eingegebenen Wörter dürfen nicht länger als 30 Zeichen sein!', 'error', 'Fehler');
        return;
    } else

        if (containsForbiddenCode(germanWord) || containsForbiddenCode(englishWord)) {
            showMessage('Quellcode ist nicht erlaubt!', 'error', 'Fehler');
            germanText.value = '';
            englishText.value = '';
            return;
        } else if (ausgewaehlteOption.length === 0 || ausgewaehlteOption === undefined) {
            showMessage("Du musst eine Vokabelliste zuerst erstellen!", "error", "Fehler");
        } else {
            var existingDictionary = JSON.parse(localStorage.getItem(vollstaendigerKey)) || {};
            existingDictionary[germanWord] = englishWord;
            localStorage.setItem(vollstaendigerKey, JSON.stringify(existingDictionary));


            germanText.value = '';
            englishText.value = '';

            render();
        }
}


function containsForbiddenCode(text) {
    const lowercasedText = text.toLowerCase();
    for (const keyword of keywords) {
        if (lowercasedText.includes(keyword)) {
            return true;
        }
    }
    return false;
}


function render2() {
    let HowNumber = 0;
    vocabularyList.innerHTML = '';
    var currentContent = document.getElementById('title2').textContent;
    let newText = 'dictionary:' + currentContent;
    newText = newText.replace(/\s+/g, '').trim();
    let newB = dictionary = JSON.parse(localStorage.getItem(newText)) || {};
    let Vocabulary = document.getElementById("Vocabulary");

    for (let key in newB) {
        vocabularyList.innerHTML += `
            <li>${key} - ${dictionary[key]} 
            <button class="ED ml10" onclick="deleteVocabulary('${key}')">❌</button>
            <button class="ED" onclick="editVocabulary('${key}')">📝</button>
            </li>`;
        HowNumber++;
    }

    if (HowNumber > 1) {
        Vocabulary.innerText = HowNumber + " Vokabeln";
    } else {
        Vocabulary.innerText = HowNumber + " Vokabel";
    }

}


function deleteVocabulary(valueToDelete) {
    var buttonTitle = localStorage.getItem('buttonTitle');
    var title = "dictionary:" + buttonTitle;

    var dictionary = JSON.parse(localStorage.getItem(title)) || {};
    var keyInSameRow = Object.keys(dictionary).find(key => key.includes(valueToDelete));


    if (keyInSameRow) {
        delete dictionary[keyInSameRow];
        localStorage.setItem(title, JSON.stringify(dictionary));
    }
    render2();
}

 async function deleteAllVocabularies() {
    var deleteAll = await showQuestion('Bist du dir sicher?', 'Möchtest du wirklich alle Vokabeln und alle Vokabellisten löschen?');

    if (deleteAll) {
        dictionary = {};
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key) && key.startsWith('dictionary')) {
                localStorage.removeItem(key);
            }
        }
        render();
    }
}

async function editVocabulary(key) {
    var buttonTitle = localStorage.getItem('buttonTitle');
    var title = "dictionary:" + buttonTitle;

    const newGerman = await getNewTranslation('Neue deutsche Übersetzung:', key);
    if (newGerman !== null && newGerman.trim() !== '') {
        const newEnglish = await getNewTranslation('Neue englische Übersetzung:', dictionary[key]);
        if (newEnglish !== null && newEnglish.trim() !== '') {
            const unsafe = keywords.some(keyword => newGerman.includes(keyword));
            const unsafe2 = keywords.some(keyword => newEnglish.includes(keyword));

            if (unsafe || unsafe2) {
                showMessage("Quellcode ist nicht erlaubt!", "error", "Fehler");
            } else {
                if (newGerman !== key) {
                    delete dictionary[key];
                }

                dictionary[newGerman] = newEnglish;

                localStorage.setItem(title, JSON.stringify(dictionary));
                render2();
            }
        }
    }
}


function newlist() {
    const title = document.getElementById("title").value.trim();
    myKey = "dictionary:" + title;
    const unsafe = keywords.some(keyword => title.includes(keyword));

    if (unsafe) {
        showMessage("Quellcode ist nicht erlaubt!", "error", "Fehler");
        document.getElementById("title").value = "";
    } else {
        if (localStorage.getItem(myKey)) {
            showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
        } else {
            if (title.length > 20) {
                showMessage("Dein Titel ist zu lang!", "error", "Fehler");
            } else if (title.length === 0 || title.length === 1 || title.length === 2) {
                showMessage("Dein Titel ist zu kurz!", "error", "Fehler");
            } else {
                document.getElementById("title").value = "";
                localStorage.setItem('dictionary:' + title, JSON.stringify({}));
                render();
                showMessage("Die Vokabelliste wurde erfolgreich erstellt!", "success", "Erfolgreich");
            }
        }
    }
}


function render() {
    var titlesArray = [];
    var listeContainer = document.getElementById("liste");
    listeContainer.innerHTML = "";


    for (var key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key.startsWith("dictionary:")) {

            var title = key.substring("dictionary:".length);
            titlesArray.push(title);
        }
    }


    titlesArray.forEach(function (title) {
        var newDiv = document.createElement("div");
        newDiv.className = "liste";
        newDiv.textContent = title;

        newDiv.addEventListener("click", function () {
            localStorage.removeItem('buttonTitle');
            buttonTitle = "",
                buttonTitle = this.textContent;
            localStorage.setItem('buttonTitle', buttonTitle);
            window.location.href = 'vocabulary.html';
        });

        listeContainer.appendChild(newDiv);
    });

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


async function deleteAll() {
    var currentContent = document.getElementById('title2').textContent;
    let newText = 'dictionary:' + currentContent;
    newText = newText.replace(/\s+/g, '').trim();

    var confirmDelete = await showQuestion('Bist du dir sicher?', 'Möchtest du wirklich diese Liste löschen?');

    if (confirmDelete) {
        if (localStorage.getItem(newText)) {
            localStorage.removeItem(newText);
            window.location.href = 'index.html';
        }
    }
}


function next() {
    window.location.href = 'list.html';
}


async function titlechange() {
    var neuerTitel = await getNewTranslation("Bitte gib einen neuen Titel ein:");
    myKey = "dictionary:" + neuerTitel;
    const unsafe = keywords.some(keyword => neuerTitel.includes(keyword));

    if (unsafe) {
        showMessage("Quellcode ist nicht erlaubt!", "error", "Fehler");
    } else {
        if (localStorage.getItem(myKey)) {
            showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
        } else {
            if (neuerTitel.length > 20) {
                showMessage("Dein Titel ist zu lang!", "error", "Fehler");
            } else if (neuerTitel.length === 0 || neuerTitel.length === 1 || neuerTitel.length === 2) {
                showMessage("Dein Titel ist zu kurz!", "error", "Fehler");
            } else {
                var containerInhalt = document.getElementById("title2").innerHTML.trim();
                containerInhalt = containerInhalt.replace(/<\/?h1>/g, '');
                localStorage.removeItem("buttonTitle");
                localStorage.setItem("buttonTitle", neuerTitel);
                containerInhalt = "dictionary:" + containerInhalt;
                neuerTitel = "dictionary:" + neuerTitel;

                var wert = localStorage.getItem(containerInhalt);
                localStorage.removeItem(containerInhalt);
                localStorage.setItem(neuerTitel, wert);
                window.location.href = 'vocabulary.html';
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', function () {
    var title2Element = document.getElementById('title2');
    var buttonTitle = localStorage.getItem('buttonTitle');
    var h1Element = document.createElement('h1');
    h1Element.textContent = buttonTitle;

    if (title2Element) {
        title2Element.appendChild(h1Element);
        render2();
    }
});


function showMessage(message, icon, title) {
    Swal.fire({
        title: title,
        text: message,
        icon: icon,
        confirmButtonText: "Okay"
    });
}


async function showQuestion(title, text) {
    const result = await Swal.fire({
        title: title,
        text: text,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Ja",
        cancelButtonText: "Nein"
    });
    return result.isConfirmed;
}

async function getNewTranslation(title, key) {
    const placeholder = key ? "Gib die Übersetzung ein..." : "Neuer Titel";

    const { value } = await Swal.fire({
        title: title,
        input: "text",
        inputPlaceholder: placeholder,
        inputValue: key,
        showCancelButton: true,
        confirmButtonText: "Speichern",
        cancelButtonText: "Abbrechen"
    });

    return value;
}