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
        'question': 'Wer lernt Front-End Entwicklung?',
        'answer_1': 'Sven',
        'answer_2': 'Dina',
        'answer_3': 'Andreas',
        'answer_4': 'Dennis',
        'right_answer': 4
    },
    {
        'question': 'Wer ist der Fette Kater?',
        'answer_1': 'Spike',
        'answer_2': 'Zehn-oh',
        'answer_3': 'Groot',
        'answer_4': 'Sami',
        'right_answer': 2
    },
    {
        'question': 'Wer ist der dumme Kater?',
        'answer_1': 'Groot',
        'answer_2': 'Zehn-oh',
        'answer_3': 'Spike',
        'answer_4': 'Sami',
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
        document.getElementById('progress-percent').innerHTML = percent + '%';
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
    for (let i = 0; i < questions.length; i++) {
        document.getElementById(`answer_${i + 1}`).classList.remove('btn-danger');
        document.getElementById(`answer_${i + 1}`).classList.remove('btn-success');
    }
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
    console.log(percent);
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