let liste;
let askedVocabularies = [];
const WrongEnteredVocabulary = [];
let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};
let ran_key;
let language;
let already = 0;
let still = 0;

function startCards() {
    var ChooseSelect = document.getElementById("selection");
    var ausgewaehlteOption = ChooseSelect.value;
    var WantedKey = "dictionary:" + ausgewaehlteOption;


    if (ausgewaehlteOption.length === 0 || ausgewaehlteOption === undefined) {
        showMessage("Du musst eine Vokabelliste zuerst erstellen!", "info", "Information")
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
        showMessage("Vokabelliste wurde nicht gefunden!", "error", "Fehler");
    }
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


    if (selectedOption === "1") { // Deutsch - Englisch
        const storedList = localStorage.getItem(liste);
        const dictionary = storedList ? JSON.parse(storedList) : {};
        text.textContent = `Schade! Die Antwort wäre '${dictionary[ran_key]}' gewesen.`;
        WrongEnteredVocabulary.push({ deutsch: ran_key, englisch: dictionary[ran_key] });
    } else { //Englisch - Deutsch
        const storedList = localStorage.getItem(liste);
        const dictionary = storedList ? JSON.parse(storedList) : {};
        text.textContent = `Schade! Die Antwort wäre '${ran_key}' gewesen.`;
        WrongEnteredVocabulary.push({ deutsch: ran_key, englisch: dictionary[ran_key] });
    }

    nextVocabulary();
}


function compare2() {
    const radioButtons = document.querySelectorAll('input[name="options"]');
    let selectedOption;

    for (const radio of radioButtons) {
        if (radio.checked) {
            selectedOption = radio.value;
            break;
        }
    }


    if (selectedOption === "1") { // Deutsch - Englisch
        const storedList = localStorage.getItem(liste);
        const dictionary = storedList ? JSON.parse(storedList) : {};
        text.textContent = `Perfekt! Die Antwort war '${dictionary[ran_key]}'.`;
    } else { //Englisch - Deutsch
        text.textContent = `Perfekt! Die Antwort war '${ran_key}'.`;
    }

    nextVocabulary();
}


function compare3() {
    if (language === "deutsch") { // Deutsch - Englisch
        const storedList = localStorage.getItem(liste);
        const dictionary = storedList ? JSON.parse(storedList) : {};
        word.innerHTML = `${dictionary[ran_key]}`;
        language = "englisch";

    } else { //Englisch - Deutsch
        word.innerHTML = `${ran_key}`;
        language = "deutsch";
    }
}


function nextVocabulary() {
    const radioButtons = document.querySelectorAll('input[name="options"]');
    let selectedOption;
    let HowNumber = document.getElementById("number");
    

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
        language = "deutsch"
        if (already === 0) {
            HowNumber.innerText = already + "/" + still;
            already++;
        } else {
            HowNumber.innerText = already + "/" + still;
            already++;
        }
    } else if (selectedOption === "2") { // Englisch - Deutsch
        word.innerHTML = `'${dictionary[ran_key]}'?`;
        language = "englisch"
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
                listItem.innerHTML = `<strong>Deutsch:</strong> ${AVocabulary.deutsch}, <strong>Englisch:</strong> ${AVocabulary.englisch}`;
                falseVocabularyList.appendChild(listItem);
            });

            const storedList = localStorage.getItem(liste);
            const dictionary = storedList ? JSON.parse(storedList) : {};

            const gesamtanzahlVokabeln = Object.keys(dictionary).length;
            const falschGeschriebeneWörter = WrongEnteredVocabulary.length;
            const richtigGeschriebeneWörter = gesamtanzahlVokabeln - falschGeschriebeneWörter;
            const gesamtanzahlWörter = richtigGeschriebeneWörter + falschGeschriebeneWörter;

            const all = document.getElementById('where');
            all.innerHTML = `Gewusste Wörter: ${richtigGeschriebeneWörter}<br><br>Nicht gewusste Wörter: ${falschGeschriebeneWörter}<br><br>Gesamtwörteranzahl: ${gesamtanzahlWörter}`;
        }

        populateFalseVocabularyList();
    }, 3000);
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