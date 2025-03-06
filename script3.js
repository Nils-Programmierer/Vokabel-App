let one = "";
var right = 0;
var wrong = 0;
var all;
let ErrorWrong;
let already = 0;
let still = 0;



function startQuiz() {
    right = "";
    wrong = "";
    all = "";
    ErrorWrong = "";
    already = 0;
    still = 0;
    var HowNumber = 0;
    var ausgewaehlteOption = selection.value;
    var WantedKey = "dictionary:" + ausgewaehlteOption;
    var zeilenArray = [];


    if (localStorage.getItem(WantedKey) !== null) {
        var wertInDerZeile = localStorage.getItem(WantedKey);

        if (wertInDerZeile && wertInDerZeile.trim() !== '' && wertInDerZeile.length > 6) {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                if (key === WantedKey) {
                    var zeilenDaten = localStorage.getItem(key);
                    var dictionaryObj = JSON.parse(zeilenDaten);
                    for (var item in dictionaryObj) {
                        zeilenArray.push({ key: item, value: dictionaryObj[item] });
                    }
                }
            }

            let container = document.getElementById('container');
            let container1 = document.getElementById('container1');
            container.innerHTML = '';
            container1.innerHTML = '';

            zeilenArray.forEach(function (element) {
                let keyDiv = document.createElement('div');
                keyDiv.innerText = element.key;
                keyDiv.classList.add('div1');

                let valueDiv = document.createElement('div');
                valueDiv.innerText = element.value;
                valueDiv.classList.add('div1');
                HowNumber = HowNumber + 1;


                valueDiv.id = `${HowNumber}`;
                keyDiv.id = `${HowNumber}`;


                container.appendChild(keyDiv);
                container1.appendChild(valueDiv);


                keyDiv.addEventListener('click', function () {
                    handleContainerClick(this.id);
                });

                valueDiv.addEventListener('click', function () {
                    handleContainerClick(this.id);
                });
            });


            if (HowNumber < 7) {
                showMessage("Diese Vokabelliste enthält zu wenig Vokabeln!", "error", "Fehler");
            } else {
                const startButton = document.querySelector('.mdl-button--accent');
                startButton.style.display = 'none';

                const checkContainer = document.querySelector('.check');
                checkContainer.style.display = 'none';

                const hiddenElements = document.querySelectorAll('.hidden');
                for (const element of hiddenElements) {
                    element.classList.remove('hidden');
                }

                if (HowNumber < 7) {
                    still = HowNumber;
                } else {
                    still = 7;
                    let zahlenArray = [];

                    for (let i = 1; i <= HowNumber; i++) {
                        zahlenArray.push(i);
                    }


                    for (let i = 0; i < 7; i++) {
                        let randomIndex = Math.floor(Math.random() * zahlenArray.length);
                        zahlenArray.splice(randomIndex, 1);
                    }


                    zahlenArray.forEach(id => {
                        let idString = id.toString();
                        let elementsToRemove = container.querySelectorAll(`[id='${idString}']`);

                        elementsToRemove.forEach(element => {
                            container.removeChild(element);
                        });
                    });


                    zahlenArray.forEach(id => {
                        let idString = id.toString();
                        let elementsToRemove = container1.querySelectorAll(`[id='${idString}']`);

                        elementsToRemove.forEach(element => {
                            container1.removeChild(element);
                        });
                    });
                }

                const divContainers = Array.from(container.children);

                function shuffleArray(array) {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                }

                shuffleArray(divContainers);

                divContainers.forEach(div => {
                    container.appendChild(div);
                });


                const divContainers1 = Array.from(container1.children);


                function shuffleArray(array) {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                }

                shuffleArray(divContainers1);

                divContainers1.forEach(div => {
                    container1.appendChild(div);
                });


                var mainContainer = document.getElementById('container');

                if (mainContainer) {
                    var childContainers = mainContainer.querySelectorAll('div');

                    if (childContainers.length >= 7) {
                        childContainers.forEach(function (container, index) {
                            container.id = index + 50;
                        });

                    } else {
                        childContainers.forEach(function (container, index) {
                            container.id = index + 50;
                        });
                    }
                }

                let alle = document.getElementById("number");
                alle.innerText = already + "/" + still;
                starteZeitzähler();
            }
        } else {
            showMessage("Diese Vokabelliste ist leer oder enthält zu wenig Vokabeln!", "error", "Fehler");
        }
    } else {
        showMessage("Vokabelliste wurde nicht gefunden!", "error", "Fehler");
    }
}


let Seconds = 0;
let MiniSeconds = 0;
let timerInterval;

function starteZeitzähler() {
    timerInterval = setInterval(function () {
        var containerId = 'container';
        var container1Id = 'container1';

        var containerIsEmpty = document.getElementById(containerId).innerHTML.trim() === '';
        var container1IsEmpty = document.getElementById(container1Id).innerHTML.trim() === '';


        if (containerIsEmpty && container1IsEmpty || Seconds > 120) {
            let h = document.getElementById("container");
            let h2 = document.getElementById("container1");
            h.innerHTML = "";
            h2.innerHTML = "";
            stoppeZeitzähler();
        } else {
            MiniSeconds += 10;
            if (MiniSeconds === 1000) {
                MiniSeconds = 0;
                Seconds++;
            }

            let formatierteSeconds = Seconds < 10 ? "0" + Seconds : Seconds;
            let formatierteMiniSeconds = MiniSeconds < 10 ? "00" + MiniSeconds : MiniSeconds < 100 ? "0" + MiniSeconds : MiniSeconds;


            let zeitString = `${formatierteSeconds}:${formatierteMiniSeconds}`;
            document.getElementById("time").innerHTML = zeitString;
        }

    }, 10);
}


function stoppeZeitzähler() {
    clearInterval(timerInterval);
    ende();
}

function handleContainerClick(content) {
    if (one === content) {
        var containerToColor = document.getElementById(content);

        if (containerToColor) {
            containerToColor.style.backgroundColor = "#b2bbb2";
        }
        one = "";


    } else {
        if (one.length === 0) {
            one = content;

            var containerToColor = document.getElementById(one);

            if (containerToColor) {
                containerToColor.style.backgroundColor = "yellow";
            }

        } else {
            var ausgewaehlteOption = selection.value;
            var WantedKey = "dictionary:" + ausgewaehlteOption;

            var storedvalue = localStorage.getItem(WantedKey);

            var containerToRetrieveText = document.getElementById(one);
            var containerToRetrieveText2 = document.getElementById(content);
            let Value1 = containerToRetrieveText.innerText;
            let Value2 = containerToRetrieveText2.innerText;


            if (storedvalue && (storedvalue.includes('"' + Value1 + '":"' + Value2 + '"') || storedvalue.includes('"' + Value2 + '":"' + Value1 + '"'))) {
                var containerToRemove = document.getElementById(one);
                var old = document.getElementById(content);


                if (containerToRemove) {
                    containerToRemove.remove();
                }

                if (old) {
                    old.remove();
                }
                one = "";
                right++;
                already++;
                let alle = document.getElementById("number");
                alle.innerText = already + "/" + still;
            } else {
                var containerToColor = document.getElementById(one);

                if (containerToColor) {
                    containerToColor.style.backgroundColor = "#b2bbb2";
                }

                var containerToRetrieveText = document.getElementById(one);
                var containerToRetrieveText2 = document.getElementById(content);
                let Value1 = containerToRetrieveText.innerText;
                let Value2 = containerToRetrieveText2.innerText;
                Seconds = Seconds + 3;
                ErrorWrong = ErrorWrong + ";" + Value1 + ":" + Value2;
                one = "";
                wrong++;
            }
        }

    }
}

function ende() {
    all = 7;
    var woContainer = document.getElementById("where");

    if (right > 0 && wrong > 0) {
        woContainer.innerHTML = `
        Richtige Paare: ${right}
        <br>
        <br>
        Falsche Paare: ${wrong}
        <br>
        <br>
        Gesamtpaaranzahl: ${all}
    `;
    } else if (right > 0) {
        woContainer.innerHTML = `
        Richtige Paare: ${right}
        <br>
        <br>
        Falsche Paare: 0
        <br>
        <br>
        Gesamtpaaranzahl: ${all}
    `;
    } else {
        woContainer.innerHTML = `
        Richtige Paare: 0
        <br>
        <br>
        Falsche Paare: ${wrong}
        <br>
        <br>
        Gesamtpaaranzahl: ${all}
    `;
    }

    var falseVocabularyList = document.getElementById("falsevocabulary");
    falseVocabularyList.innerHTML = '';
    var fehlerArray = ErrorWrong.split(';');

    fehlerArray.forEach(function (fehlerInfo) {
        if (fehlerInfo.trim() !== '') {
            var fehlerTeile = fehlerInfo.split(':');
            var content = fehlerTeile[0];
            var one = fehlerTeile[1];

            var liElement = document.createElement("li");
            liElement.textContent = content + ": " + one;


            falseVocabularyList.appendChild(liElement);
        }
    });


    var Container = document.getElementById("allend");
    Container.style.display = "block";

    let alle = document.getElementById("HowNumber");
    alle.style.display = "none";
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