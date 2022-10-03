const randomQuote = 'https://api.quotable.io/random';
const quoteDisplayElement = document.querySelector('#quoteDisplay');
const quoteInputElement = document.querySelector('#quoteInput');
const timerElementMin = document.querySelector('#min');
const timerElementSec = document.querySelector('#sec');
const wpmElement = document.querySelector('#wpm');
const rankElement = document.querySelector('#rank');
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const topMarker = document.querySelector('#topMarker');



startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', () => {
    clearInterval(myInterval);
    timerElementMin.innerHTML = '00';
    timerElementSec.innerHTML = '00';
    stopBtn.classList.add('d-none');
    startBtn.classList.remove('d-none');
    topMarker.scrollIntoView(true);
});

quoteInputElement.addEventListener('input', () => {
    
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split('');
    const arrayWords = quoteInputElement.value.split(' ');

    let correct = true;
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false;
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        } else {
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
            correct = false;
        }
    })
    
    if (correct) {

        // Calculate Words per Minute
        let totalSec = (Number(timerElementMin.innerHTML) * 60) + Number(timerElementSec.innerHTML);
        let wpm = Math.round((arrayWords.length / totalSec) * 60);
        
        // Determine Ranking
        if (wpm <= 15) {
            rankElement.innerHTML = 'Warrior';
        } else if (wpm <= 30 && wpm > 15) {
            rankElement.innerHTML = 'Elite';
        } else if (wpm <= 50 && wpm > 30) {
            rankElement.innerHTML = 'Master';
        } else if (wpm <= 75 && wpm > 50) {
            rankElement.innerHTML = 'Grandmaster';
        } else if (wpm <= 100 && wpm > 75) {
            rankElement.innerHTML = 'Epic';
        } else if (wpm <= 200 && wpm > 100) {
            rankElement.innerHTML = 'Legend';
        } else if (wpm > 200) {
            rankElement.innerHTML = 'Mythic';
        }

        clearInterval(myInterval);
        renderNewQuote();
        
        wpmElement.innerHTML = wpm;
        timerElementMin.innerHTML = '00';
        timerElementSec.innerHTML = '00';
        stopBtn.classList.add('d-none');
        startBtn.classList.remove('d-none');
        rankElement.scrollIntoView(true);
    }
});



const getRandomQuote = async () => {
    const res = await fetch(randomQuote);
    const data = await res.json();
    return data.content;
};

async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerHTML = ''
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null
};



let startTime
let myInterval

function startTimer() {
    
    stopBtn.classList.remove('d-none');
    startBtn.classList.add('d-none');
    timerElementMin.innerHTML = '00';
    timerElementSec.innerHTML = '00';
    startTime = new Date();
    myInterval = setInterval(timer, 1000)
};

function timer() {
    let sec = getTimerTime() % 60;
    let min = Math.floor(getTimerTime() / 60)

    if (sec < 10) {
        timerElementSec.innerHTML = `0${sec}`;
    } else {
        timerElementSec.innerHTML = sec;
    }

    if (min < 10) {
        timerElementMin.innerHTML = `0${min}`;
    } else {
        timerElementMin.innerHTML = min;
    }

};



function getTimerTime() {
    return Math.floor((new Date() - startTime)/ 1000)
};

renderNewQuote();