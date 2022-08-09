const quizData = [
    {
        question: "The _______ is one of the main ways to communicate with a computer. There are many different types of keyboards, but most are very similar and allow you to accomplish the same basic tasks.?",
        a: "Keyboard",
        b: "Mouse",
        c: "Monitor",
        d: "Speaker",
        correct: "a",
    },
    {
        question: "The _____ is another important tool for communicating with computers. Commonly known as a pointing device, it lets you point to objects on the screen, click on them, and move them.?",
        a: "Keyboard",
        b: "Mouse",
        c: "Monitor",
        d: "Speaker",
        correct: "b",
    },
    {
        question: "The _________ uses a rolling ball to detect movement and requires regular cleaning to work properly.?",
        a: "Keyboard",
        b: "Mouse",
        c: "Monitor",
        d: "Mechanical Mouse",
        correct: "d",
    },
    {
        question: "A _________ has a ball that can rotate freely. Instead of moving the device like a mouse, you can roll the ball with your thumb to move the pointer.?",
        a: "Keyboard",
        b: "Mouse",
        c: "Trackball",
        d: "Mechanical Mouse",
        correct: "c",
    },
    {
        question: "A ________  is a touch-sensitive pad that lets you control the pointer by making a drawing motion with your finger. Touchpads are common on laptop computers.?",
        a: "Keyboard",
        b: "Mouse",
        c: "Trackpad",
        d: "Mechanical Mouse",
        correct: "c",
    },


];
console.log(typeof(currentQuizData));




const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0
 let num = 1;
loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]


    questionEl.innerText = ("Question " +(num++) +"/"+( quizData.length)+ "\n\n")+currentQuizData.question
    
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <a href="ComputerBasics4.html"><button >Finish</button></a>
           `
       }
    }
})
function myFunction() {
    alert("Welcome to E-Learning platfrom");
  }