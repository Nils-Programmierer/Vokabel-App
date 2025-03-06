var myKey;


function back() {
  window.location.href = 'index.html';
}


function list1() {
  myKey = "dictionary:Farben";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "grün": "green",
      "rot": "red",
      "blau": "blue",
      "gelb": "yellow",
      "orange": "orange",
      "lila": "purple",
      "rosa": "pink",
      "braun": "brown",
      "schwarz": "black",
      "weiß": "white"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list2() {
  myKey = "dictionary:Essen";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Apfel": "apple",
      "Banane": "banana",
      "Orange": "orange",
      "Erdbeere": "strawberry",
      "Traube": "grape",
      "Kiwi": "kiwi",
      "Mango": "mango",
      "Ananas": "pineapple",
      "Tomate": "tomato",
      "Karotte": "carrot",
      "Brokkoli": "broccoli",
      "Spinat": "spinach",
      "Kartoffel": "potato",
      "Zwiebel": "onion",
      "Hähnchen": "chicken",
      "Rindfleisch": "beef",
      "Schweinefleisch": "pork",
      "Wurst": "sausage",
      "Nudeln": "pasta",
      "Reis": "rice",
      "Brot": "bread",
      "Haferflocken": "oats"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list3() {
  myKey = "dictionary:Tiere";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Katze": "cat",
      "Hund": "dog",
      "Schwein": "pig",
      "Pferd": "horse",
      "Maus": "mouse",
      "Schaf": "sheep",
      "Löwe": "lion",
      "Elefant": "elephant",
      "Giraffe": "giraffe",
      "Affe": "monkey",
      "Känguru": "kangaroo",
      "Hai": "shark",
      "Pinguin": "penguin",
      "Eule": "owl",
      "Kuh": "cow",
      "Tiger": "tiger",
      "Vogel": "bird"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list4() {
  myKey = "dictionary:Wetter";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Sonnig": "sunny",
      "Bewölkt": "cloudy",
      "Regen": "rainy",
      "Schnee": "snowy",
      "Windig": "windy",
      "Sturm": "stormy",
      "Nebel": "foggy",
      "Heiter": "clear",
      "Gewitter": "thunderstorm"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list5() {
  myKey = "dictionary:Unterrichtsfächer";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Mathe": "mathematics",
      "Deutsch": "German",
      "Englisch": "English",
      "Sport": "physical education",
      "Biologie": "biology",
      "Chemie": "chemistry",
      "Physik": "physics",
      "Geschichte": "history",
      "Geografie": "geography",
      "Informatik": "computer science",
      "Kunst": "art",
      "Musik": "music"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list6() {
  myKey = "dictionary:Länder";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Amerika": "America",
      "Deutschland": "Germany",
      "Niederlande": "Netherlands",
      "England": "England",
      "Frankreich": "France",
      "Spanien": "Spain",
      "Italien": "Italy",
      "Japan": "Japan",
      "China": "China",
      "Brasilien": "Brazil",
      "Russland": "Russia",
      "Indien": "India",
      "Kanada": "Canada",
      "Australien": "Australia",
      "Schweiz": "Switzerland",
      "Österreich": "Austria",
      "Polen": "Poland"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list7() {
  myKey = "dictionary:Körperteile";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Fuß": "foot",
      "Kopf": "head",
      "Arm": "arm",
      "Bein": "leg",
      "Hand": "hand",
      "Bauch": "belly",
      "Rücken": "back",
      "Gesicht": "face",
      "Auge": "eye",
      "Ohr": "ear",
      "Nase": "nose",
      "Mund": "mouth",
      "Hals": "neck",
      "Schulter": "shoulder"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list8() {
  myKey = "dictionary:Kleidungsstücke";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Hose": "pants",
      "T-Shirt": "t-shirt",
      "Pullover": "sweater",
      "Kleid": "dress",
      "Rock": "skirt",
      "Hemd": "shirt",
      "Jacke": "jacket",
      "Mütze": "hat",
      "Schal": "scarf",
      "Handschuhe": "gloves",
      "Socken": "socks",
      "Schuhe": "shoes",
      "Bluse": "blouse",
      "Anzug": "suit",
      "Shorts": "shorts"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list9() {
  myKey = "dictionary:Musikinstrumente";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Klavier": "piano",
      "Gitarre": "guitar",
      "Schlagzeug": "drums",
      "Geige": "violin",
      "Flöte": "flute",
      "Trompete": "trumpet",
      "Saxophon": "saxophone",
      "Klarinette": "clarinet",
      "Bass": "bass",
      "Harfe": "harp",
      "Akkordeon": "accordion",
      "Trommel": "drum",
      "Keyboard": "keyboard"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list10() {
  myKey = "dictionary:Gebäude";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Kirche": "church",
      "Rathaus": "town hall",
      "Schule": "school",
      "Krankenhaus": "hospital",
      "Bibliothek": "library",
      "Supermarkt": "supermarket",
      "Flughafen": "airport",
      "Bahnhof": "train station",
      "Bank": "bank",
      "Museum": "museum",
      "Theater": "theater",
      "Kino": "cinema",
      "Restaurant": "restaurant",
      "Hotel": "hotel",
      "Wohnhaus": "residential building"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list11() {
  myKey = "dictionary:Hobbys";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Lesen": "reading",
      "Angeln": "fishing",
      "Zocken": "gaming",
      "Malen": "painting",
      "Musik hören": "listening to music",
      "Kochen": "cooking",
      "Fotografieren": "photography",
      "Reisen": "traveling",
      "Basteln": "crafting",
      "Tanzen": "dancing",
      "Schwimmen": "swimming",
      "Radfahren": "cycling",
      "Singen": "singing"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list12() {
  myKey = "dictionary:Sportarten";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Fußball": "soccer",
      "Judo": "judo",
      "Basketball": "basketball",
      "Tennis": "tennis",
      "Schwimmen": "swimming",
      "Leichtathletik": "athletics",
      "Volleyball": "volleyball",
      "Golf": "golf",
      "Radsport": "cycling",
      "Eishockey": "ice hockey",
      "Ski Alpin": "alpine skiing",
      "Boxen": "boxing",
      "Handball": "handball",
      "Badminton": "badminton",
      "Rudern": "rowing"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list13() {
  myKey = "dictionary:Verkehrsmittel";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Bus": "bus",
      "Flugzeug": "airplane",
      "Helikopter": "helicopter",
      "Taxi": "taxi",
      "Auto": "car",
      "Fahrrad": "bicycle",
      "Zug": "train",
      "Schiff": "ship",
      "Motorrad": "motorcycle",
      "U-Bahn": "subway",
      "Fähre": "ferry",
      "Auto": "car"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list14() {
  myKey = "dictionary:Zahlen";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "null": "zero",
      "eins": "one",
      "zwei": "two",
      "drei": "three",
      "vier": "four",
      "fünf": "five",
      "sechs": "six",
      "sieben": "seven",
      "acht": "eight",
      "neun": "nine",
      "zehn": "ten",
      "elf": "eleven",
      "zwölf": "twelve",
      "dreizehn": "thirteen",
      "vierzehn": "fourteen",
      "fünfzehn": "fifteen",
      "sechzehn": "sixteen",
      "siebzehn": "seventeen",
      "achtzehn": "eighteen",
      "neunzehn": "nineteen",
      "zwanzig": "twenty"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list15() {
  myKey = "dictionary:Unterrichtsmaterial";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Stift": "pen",
      "Papier": "paper",
      "Heft": "notebook",
      "Buch": "book",
      "Mäppchen": "pencil case",
      "Schulranzen": "school bag",
      "Bleistift": "pencil",
      "Radiergummi": "eraser",
      "Lineal": "ruler",
      "Klebestift": "glue stick",
      "Schere": "scissors",
      "Marker": "marker",
      "Tafel": "chalkboard",
      "Schwamm": "eraser",
      "Farbstifte": "colored pencils",
      "Zirkel": "compass",
      "Spitzer": "sharpener",
      "Notizbuch": "notebook",
      "Rucksack": "backpack"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}

function list16() {
  myKey = "dictionary:Familie";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Bruder": "brother",
      "Schwester": "sister",
      "Sohn": "son",
      "Tochter": "daughter",
      "Oma": "grandma",
      "Opa": "grandpa",
      "Vater": "father",
      "Papa": "dad",
      "Mutter": "mother",
      "Mama": "mom",
      "Onkel": "uncle",
      "Tante": "aunt",
      "Cousin": "cousin (male)",
      "Cousine": "cousin (female)",
      "Neffe": "nephew",
      "Nichte": "niece"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list17() {
  myKey = "dictionary:Räume";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Küche": "kitchen",
      "Garten": "garden",
      "Keller": "basement",
      "Garage": "garage",
      "Badezimmer": "bathroom",
      "Schlafzimmer": "bedroom",
      "Wohnzimmer": "living room",
      "Arbeitszimmer": "study room",
      "Esszimmer": "dining room",
      "Flur": "hallway",
      "Dachboden": "attic",
      "Waschküche": "laundry room",
      "Terrasse": "terrace",
      "Abstellraum": "storage room",
      "Kinderzimmer": "children's room",
      "Toilette": "toilet"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list18() {
  myKey = "dictionary:Berufe";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Lehrer": "teacher",
      "Arzt": "doctor",
      "Koch": "chef",
      "Bürgermeister": "mayor",
      "Rektor": "principal",
      "Polizist": "police officer",
      "Feuerwehrmann": "firefighter",
      "Ingenieur": "engineer",
      "Künstler": "artist",
      "Verkäufer": "salesperson",
      "Architekt": "architect",
      "Journalist": "journalist",
      "Programmierer": "programmer",
      "Frisör": "hairdresser",
      "Pilot": "pilot",
      "Anwalt": "lawyer",
      "Bäcker": "baker",
      "Gärtner": "gardener",
      "Maler": "painter",
      "Kellner": "waiter/waitress"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list19() {
  myKey = "dictionary:Präpositionen";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "auf": "on",
      "neben": "beside",
      "unter": "under",
      "zwischen": "between",
      "vor": "in front of",
      "hinter": "behind",
      "über": "above",
      "durch": "through",
      "gegenüber": "opposite"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
  }
}


function list20() {
  myKey = "dictionary:Monate";

  if (localStorage.getItem(myKey)) {
    showMessage("Es existiert bereits eine Vokabelliste mit diesen Titel.", "error", "Fehler");
  } else {
    var Vocabulary = {
      "Januar": "January",
      "Februar": "February",
      "März": "March",
      "April": "April",
      "Mai": "May",
      "Juni": "June",
      "Juli": "July",
      "August": "August",
      "September": "September",
      "Oktober": "October",
      "November": "November",
      "Dezember": "December"
    };

    var VocabularyString = JSON.stringify(Vocabulary);

    localStorage.setItem(myKey, VocabularyString);
    showMessage("Die Vokabelliste wurde erfolgreich hinzugefügt!", "success", "Erfolgreich");
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