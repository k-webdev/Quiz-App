let questions = [
    {
        'question': 'Wer hat HTML erfunden?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Justin Bieber',
        'right_answer': 3
    },
    {
        'question': 'Das flächenmäßig kleinste Bundesland heißt?',
        'answer_1': 'Berlin',
        'answer_2': 'Bremen',
        'answer_3': 'Saarland',
        'answer_4': 'Hamburg',
        'right_answer': 2
    },
    {
        'question': 'Was bedeutet das lateinische “carpe diem”?',
        'answer_1': 'Genieße das Leben',
        'answer_2': 'Nutze den Tag',
        'answer_3': 'Dein Tag wird toll werden',
        'answer_4': 'Man sieht sich immer zweimal im Leben',
        'right_answer': 2
    },
    {
        'question': 'Was ist die “Goldene Himbeere”?',
        'answer_1': 'Ein Preis für die schlechteste Leistung innerhalb eines Filmjahres',
        'answer_2': 'Eine Nachspeise aus Russland',
        'answer_3': 'Das teuerste Schmuckstück der Welt',
        'answer_4': 'Das Symbol einer Sekte',
        'right_answer': 1
    },
    {
        'question': 'Welcher deutsche Herrscher trug den Beinamen “der Große”?',
        'answer_1': 'Friedrich der I. von Preußen',
        'answer_2': 'Friedrich der III. von Sachsen',
        'answer_3': 'Friedrich II. von Preußen',
        'answer_4': 'Friedrich der III. von Österreich',
        'right_answer': 3
    },
    {
        'question': 'Welcher Pilz ist einer der giftigsten der Welt?',
        'answer_1': 'Der Fliegenpilz',
        'answer_2': 'Der Grüne Knollenblätterpilz',
        'answer_3': 'Der Gemeine Kartoffelbovist',
        'answer_4': 'Der Satansröhrling',
        'right_answer': 2
    },
    {
        'question': 'Welche Gürtelfarbe existiert nicht im Kampfsport Karate?',
        'answer_1': 'Schwarz',
        'answer_2': 'Weiß',
        'answer_3': 'Braun',
        'answer_4': 'Rot',
        'right_answer': 4
    },
    {
        'question': 'Einen Feinschmecker nennt man auch?',
        'answer_1': 'Gourmet',
        'answer_2': 'Gourmed',
        'answer_3': 'Genießer',
        'answer_4': 'Leckermäulchen',
        'right_answer': 1
    },
    {
        'question': 'Welche Insel gehört nicht zu den balearischen Inseln?',
        'answer_1': 'Ibiza',
        'answer_2': 'Formentera',
        'answer_3': 'Cabrera',
        'answer_4': 'Gran Canaria',
        'right_answer': 4
    },
    {
        'question': 'Welcher Schauspieler hat nicht in einem James Bond-Film mitgespielt?',
        'answer_1': 'Timothy Dalton',
        'answer_2': 'Leonardo DiCaprio',
        'answer_3': 'Daniel Craig',
        'answer_4': 'Javier Bardem',
        'right_answer': 2
    },
    {
        'question': 'Folgt man dem Äquator um die Welt, legt man wie viele Kilometer zurück?',
        'answer_1': 'Rund 40.070 km',
        'answer_2': 'Rund 30.070 km',
        'answer_3': 'Rund 60.070 km',
        'answer_4': 'Rund 80.070 km',
        'right_answer': 1
    },
    {
        'question': 'Wer oder was ist eine “Druidin”?',
        'answer_1': 'Eine Kräutersammlerin im Harz',
        'answer_2': 'Eine Hunderasse aus China',
        'answer_3': 'Ein Magnetfeld',
        'answer_4': 'Eine Priesterin oder Zauberin der keltischen Religion',
        'right_answer': 4
    },
    {
        'question': 'Mit welcher Tiergruppe sind die Dinosaurier am engsten verwandt?',
        'answer_1': 'Vögeln',
        'answer_2': 'Eidechsen',
        'answer_3': 'Alligatoren',
        'answer_4': 'Affen',
        'right_answer': 1
    },
    {
        'question': 'Was meinen Weinkenner, wenn sie das Wort “rassig” verwenden?',
        'answer_1': 'Es beschreibt Weine mit vielen Duftstoffen.',
        'answer_2': 'Es beschreibt alkohol- und körperreiche Weine.',
        'answer_3': 'Es beschreibt Weine mit einer ausgeglichenen, aber ausgeprägten Säure.',
        'answer_4': 'Es beschreibt Weine, die im Geschmack an frisches Obst erinnern.',
        'right_answer': 3
    },
    {
        'question': 'Welches Metall leitet Wärme am besten?',
        'answer_1': 'Silber',
        'answer_2': 'Kupfer',
        'answer_3': 'Gold',
        'answer_4': 'Aluminium',
        'right_answer': 1
    }
];

let currentQuestion = 0;
let scores = 0;
let percent = 0;
let AUDIO_SUCCESS = new Audio('./sounds/success.mp3');
let AUDIO_FAIL = new Audio('./sounds/wrong.mp3');

function init() {
    questionQuantitys();
    showQuestion();
}

function questionQuantitys() {
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questionQuantity').innerHTML = questions.length;
}

function showQuestion() {
    calcPercent();
    if (currentQuestion >= questions.length) {
        finished();
    } else {
        document.getElementById('progress-percent').innerHTML = percent.toFixed(0) + '%';
        document.getElementById('progress-percent').style = `width:${percent.toFixed(2)}%;`;
        let question = questions[currentQuestion];
        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let correctAnswer = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('btn-success');
        AUDIO_SUCCESS.play();
        scores++;
    } else {
        AUDIO_FAIL.play();
        document.getElementById(selection).classList.add('btn-danger');
        document.getElementById(correctAnswer).classList.add('btn-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    questionQuantitys();
    document.getElementById('next-button').disabled = true;
    removeLogs();
    showQuestion();
}

function removeLogs() {
    /* for (let i = 0; i < questions.length; i++) { */
        document.getElementById(`answer_1`).classList.remove('btn-danger');
        document.getElementById(`answer_2`).classList.remove('btn-danger');
        document.getElementById(`answer_3`).classList.remove('btn-danger');
        document.getElementById(`answer_4`).classList.remove('btn-danger');
        document.getElementById(`answer_1`).classList.remove('btn-success');
        document.getElementById(`answer_2`).classList.remove('btn-success');
        document.getElementById(`answer_3`).classList.remove('btn-success');
        document.getElementById(`answer_4`).classList.remove('btn-success');
    /* } */
}

function finished() {
    document.getElementById('endscreen').style = '';
    document.getElementById('questionBody').style = `display: none`;
    document.getElementById('imgChange').src = `./img/trophy.png`;
    document.getElementById('endscreen').classList.add('text-center');
    document.getElementById('winHeadline').style = '';
    document.getElementById('scored-points').innerHTML = scores;
    document.getElementById('points-of').innerHTML = questions.length;
}

function calcPercent() {
    percent = (currentQuestion + 1) / questions.length * 100;
}

function restartGame() {
    document.getElementById('imgChange').src = `./img/pencil.jpg`;
    document.getElementById('winHeadline').style = `display: none;`;
    document.getElementById('endscreen').style = `display: none;`;
    document.getElementById('questionBody').style = ``;
    currentQuestion = 0;
    scores = 0;
    percent = 0;
    init();
}