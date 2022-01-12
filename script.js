/* const { Alert } = require("bootstrap"); */

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

 function init(){
    questionQuantitys();
    showQuestion();
 }

 function questionQuantitys(){
    document.getElementById('questionQuantity').innerHTML = questions.length;
 }

 function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
 }

 function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    if(selectedQuestionNumber == question['right_answer']){
        console.log('Die richtige Antwort ist', question[selection]);
    }else{
        console.log('Das war die falsche antwort!');
    }
 }