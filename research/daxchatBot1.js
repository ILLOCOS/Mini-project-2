// Collapsible
const coll = document.getElementsByClassName("chatcollapsible");
const robotImg = document.querySelector('#robot');


for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        if (this.classList.contains('d-none')) {
            this.classList.replace("d-none", "active");
        } else if (this.classList.contains('active')) {
            this.classList.replace('active', 'd-none');
            robotImg.classList.remove('d-none');
        }

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

robotImg.addEventListener('click',function() {
    this.classList.add('d-none');
    let main = document.querySelector('#main').classList;
        main.remove('d-none')
        document.querySelector('.chatcollapsible').click();

});



function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Greetings and good day! How can I help you today?"
    document.getElementById("botStarterMessage").innerHTML = 
        `<div class="text-start d-flex flex-nowrap">

            <img src="/media/DaxRobot.png" class="rounded-circle p-1 ms-2 mb-3 bg-primary align-self-end chatIcon"/>
            
            <div class="chatbotText pb-3"><span>${firstMessage}</span></div>

        </div>

        <div>
        <button id="q1Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary ms-3 my-1 p-1 chatBtn">What is BrainTech?</button>
        </div>

        <div>
        <button id="q2Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary ms-3 my-1 p-1 chatBtn">What are the courses offered?</button>
        </div>

        <div>
        <button id="q3Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary ms-3 my-1 p-1 chatBtn">How much?</button>
        </div>
        `;

    let time = getTime();
    let chatTimeStamp = document.querySelector('#chat-timestamp');
    let userInput = document.querySelector('#userInput');


    chatTimeStamp.append(time);
    userInput.scrollIntoView(false);
}

firstBotMessage();



// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = botResponse;
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text from the input box and processes it
function getResponse(userText) {

    if (userText == "") {
        userText = $("#textInput").val();
    }
    
    let userHtml = `<p class="chatuserText"><span class="text-left">${userText}</span></p>`;

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText.toLowerCase());
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="chatuserText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

}

function sendButton(userText) {
    if (userText == "") {
        userText = $("#textInput").val();
    }
    getResponse(userText);
}

function heartButton() {
    buttonSendText("&#x1F496")
}

// Press enter to send a message
function sendEnter(event) {
    var x = event.key;
  
    if (x == "Enter") { 
      getResponse ($('#textInput').val());
    }
  }