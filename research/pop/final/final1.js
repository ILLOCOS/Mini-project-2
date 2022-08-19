// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

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
        `<p class="botText"><span>${firstMessage}</span></p>

        <div>
        <button id="q1Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary ms-3 my-1 p-1">What is BrainTech?</button>
        </div>

        <div>
        <button id="q2Btn" class="btn btn-primary ms-3 my-1 p-1">What are the courses offered?</button>
        </div>

        <div>
        <button id="q3Btn" class="btn btn-primary ms-3 my-1 p-1">How much?</button>
        </div>
        `;

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();




// Questions on Buttons
//Record on local storage default questions
// Update message contents on local storage

let firstMessage = 'This is the first message!';
let message =  `<p class="botText"><span>${firstMessage}</span></p>
<button id="q1Btn" onclick="getResponse('What is BrainTech?')" class="btn btn-primary ms-3 my-1 p-1">What is BrainTech?</button><br>
<button id="q2Btn" class="btn btn-primary ms-3 my-1 p-1">What are the courses offered?</button>
<button id="q3Btn" class="btn btn-primary ms-3 my-1 p-1">How much?</button>
`;

window.localStorage.setItem('message', message);




// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse(userText) {

    if (userText == "") {
        userText = $("#textInput").val();
    }
    
    // let textInput = $("#textInput").val();

    // if (textInput == "") {
    //     userText = "";
    // }

    
    // userText = $("#textInput").val();
    
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    // //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("&#x1F496")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
