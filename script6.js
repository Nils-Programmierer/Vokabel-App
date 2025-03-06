let askedVocabularies = [];
const WrongEnteredVocabulary = [];

function nextVocabulary() {
    const radioButtons = document.querySelectorAll('input[name="options"]');
    let selectedOption;
    let HowNumber = document.getElementById("number");
    liste;



    for (const radio of radioButtons) {
        if (radio.checked) {
            selectedOption = radio.value;
            break;
        }
    }

    const storedList = localStorage.getItem(liste);
    const dictionary = storedList ? JSON.parse(storedList) : {};

    let obj_keys = Object.keys(dictionary);
    const unaskedVocabularies = obj_keys.filter(key => !askedVocabularies.includes(key));

    if (unaskedVocabularies.length > 0) {
        ran_key = unaskedVocabularies[Math.floor(Math.random() * unaskedVocabularies.length)];
        askedVocabularies.push(ran_key);
    }

    if (still === 0) {
        still = unaskedVocabularies.length;
    }


    if (selectedOption === "1") { // Deutsch - Englisch
        word.innerHTML = `'${ran_key}'?`;
        if (already === 0) {
            HowNumber.innerText = already + "/" + still;
            already++;
        } else {
            HowNumber.innerText = already + "/" + still;
            already++;
        }
    } else if (selectedOption === "2") { // Englisch - Deutsch
        word.innerHTML = `'${dictionary[ran_key]}'?`;
        if (already === 0) {
            HowNumber.innerText = already + "/" + still;
            already++;
        } else {
            HowNumber.innerText = already + "/" + still;
            already++;
        }
    }

    if (unaskedVocabularies.length === 0) {
        hideHiddenElements();
        return;
    }
}

askedVocabularies = [];


function hideHiddenElements() {
    const containerNein = document.getElementById('none');
    containerNein.style.display = 'none';


    setTimeout(function () {
        const hiddenElement = document.querySelector('#hiddenid');
        hiddenElement.style.display = 'none';
        hiddenElement.classList.add('hidden');

        const allendContainer = document.querySelector('#allend');
        allendContainer.style.display = 'block';

        const falseVocabularyList = document.getElementById('falsevocabulary');


        function populateFalseVocabularyList() {
            WrongEnteredVocabulary.forEach((AVocabulary) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>Deutsch:</strong> ${AVocabulary.deutsch}, <strong>Englisch:</strong> ${AVocabulary.englisch}, <strong>Deine Eingabe:</strong> ${AVocabulary.eingabe}`;
                falseVocabularyList.appendChild(listItem);
            });

            const storedList = localStorage.getItem(liste);
            const dictionary = storedList ? JSON.parse(storedList) : {};

            const gesamtanzahlVokabeln = Object.keys(dictionary).length;

            const falschGeschriebeneWörter = WrongEnteredVocabulary.length;
            const richtigGeschriebeneWörter = gesamtanzahlVokabeln - falschGeschriebeneWörter;
            const gesamtanzahlWörter = richtigGeschriebeneWörter + falschGeschriebeneWörter;

            const all = document.getElementById('where');
            all.innerHTML = `Richtige Wörter: ${richtigGeschriebeneWörter}<br><br>Falsche Wörter: ${falschGeschriebeneWörter}<br><br>Gesamtwörteranzahl: ${gesamtanzahlWörter}`;
        }

        populateFalseVocabularyList();
    }, 3000);
}


function compare() {
    const radioButtons = document.querySelectorAll('input[name="options"]');
    let selectedOption;

    for (const radio of radioButtons) {
        if (radio.checked) {
            selectedOption = radio.value;
            break;
        }
    }

    let isWrong = false;

    const forbiddenKeywords = [
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
        'onkeyup'
    ];

    function containsForbiddenKeywords(input) {
        for (const keyword of forbiddenKeywords) {
            if (input.includes(keyword)) {
                return true;
            }
        }
        return false;
    }

    const storedList = localStorage.getItem(liste);
    const dictionary = storedList ? JSON.parse(storedList) : {};

    if (selectedOption === "1") { // Deutsch - Englisch
        if (containsForbiddenKeywords(englishText.value)) {
            showMessage('Quellcode ist nicht erlaubt!', "error", "Fehler");
            englishText.value = '';
            return;
        }
        if (englishText.value === dictionary[ran_key]) {
            text.innerHTML = 'Richtig!';
        } else {
            isWrong = true;
            text.innerHTML = `Falsch! Richtig wäre '${dictionary[ran_key]}' gewesen.`;
        }
    } else if (selectedOption === "2") { // Englisch - Deutsch
        if (containsForbiddenKeywords(germanText.value)) {
            showMessage('Quellcode ist nicht erlaubt!', "error", "Fehler");
            germanText.value = '';
            return;
        }
        if (germanText.value === ran_key) {
            text.innerHTML = 'Richtig!';
        } else {
            isWrong = true;
            text.innerHTML = `Falsch! Richtig wäre '${ran_key}' gewesen.`;
        }
    }

    if (isWrong) {
        WrongEnteredVocabulary.push({ deutsch: ran_key, englisch: dictionary[ran_key], eingabe: selectedOption === "1" ? englishText.value : germanText.value });
    }

    if (selectedOption === "1") {
        englishText.value = '';
    } else if (selectedOption === "2") {
        germanText.value = '';
    }

    nextVocabulary();
}

function startQuiz() {
    var ausgewaehlteOption = selection.value;
    var WantedKey = "dictionary:" + ausgewaehlteOption;

    if (ausgewaehlteOption.length === 0 || ausgewaehlteOption === undefined) {
        showMessage("Du musst eine Vokabelliste zuerst erstellen!", "info", "Information");

    } else if (localStorage.getItem(WantedKey) !== null) {
        var wertInDerZeile = localStorage.getItem(WantedKey);

        if (wertInDerZeile && wertInDerZeile.trim() !== '' && wertInDerZeile.length > 6) {
            liste = WantedKey;
            const hiddenElements = document.querySelectorAll('.hidden');
            for (const element of hiddenElements) {
                element.classList.remove('hidden');
            }

            const startButton = document.querySelector('.mdl-button--accent');
            startButton.style.display = 'none';

            const checkContainer = document.querySelector('.check');
            checkContainer.style.display = 'none';


            const radioButtons = document.querySelectorAll('input[name="options"]');
            for (const radio of radioButtons) {
                if (radio.checked) {
                    if (radio.value === "1") {
                        document.getElementById("englischDeutschForm").style.display = "none";
                        document.getElementById("deutschEnglischForm").style.display = "block";
                    } else if (radio.value === "2") {
                        document.getElementById("deutschEnglischForm").style.display = "none";
                        document.getElementById("englischDeutschForm").style.display = "block";
                    }
                    already = 0;
                    still = 0;
                    nextVocabulary();
                }
            }
        } else {
            showMessage("Diese Vokabelliste ist leer oder enthält zu wenig Vokabeln!", "error", "Fehler");
        }
    } else {
        showMessage("Fehler! Vokabelliste wurde nicht gefunden!", "error", "Fehler");
    }

}


document.addEventListener('DOMContentLoaded', function () {
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
});

function showMessage(message, icon, title) {
    Swal.fire({
        title: title,
        text: message,
        icon: icon,
        confirmButtonText: "Okay"
    });
}