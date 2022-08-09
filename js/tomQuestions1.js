const quizData = [
    {
        question: " ________is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data.?",
        a: "Calculator",
        b: "Washing Machine",
        c: "Stove",
        d: "Computer",
        correct: "d",
    },
    {
        question: "________is any part of your computer that has a physical structure, such as the keyboard or mouse. It also includes all of the computer's internal parts?",
        a: "hardware",
        b: "software",
        c: "Warehouse",
        d: "topperware",
        correct: "a",
    },
    {
        question: "_________is any set of instructions that tells the hardware what to do and how to do it. Examples of software include web browsers, games, and word processors.?",
        a: "hardware",
        b: "software",
        c: "Warehouse",
        d: "topperware",
        correct: "b",
    },
    {
        question: " _________is the metal and plastic box that contains the main components of the computer, including the motherboard, central processing unit (CPU), and power supply. The front of the case usually has an On/Off button and one or more optical drives.?",
        a: "Computer Case",
        b: "Cabinet",
        c: "Drawer",
        d: "Divider",
        correct: "a",
    },
    {
        question: " _________ works with a video card, located inside the computer case, to display images and text on the screen. ?",
        a: "Speaker",
        b: "Printer",
        c: "Graphics Tablet",
        d: "Monitor",
        correct: "d",
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

           <a href="ComputerBasics3.html"><button >Finish</button></a>
           `
       }
    }
})
function myFunction() {
    alert("Welcome to E-Learning platfrom");
  }