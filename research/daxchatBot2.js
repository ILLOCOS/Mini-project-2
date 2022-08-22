function getBotResponse(input) {

    const chatIcon = `<img src="/media/DaxRobot.png" class="rounded-circle p-1 ms-2 mb-3 bg-primary align-self-end chatIcon"/>`;

    const computerBasics = `
        <div class="text-start ps-3">
        <button id="q1Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary my-1 p-1 chatBtn">Computer Basics</button>
        </div>`;

    const photoshop =`
        <div class="text-start ps-3">
            <button id="q2Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary my-1 p-1 chatBtn">Photoshop</button>
        </div>`;

    const graphicDesign =`
        <div class="text-start ps-3">
            <button id="q3Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary my-1 p-1 chatBtn">Graphic Design</button>
        </div>`;

    const digitalMarketing =`
        <div class="text-start ps-3 pb-3">
            <button id="q3Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary my-1 p-1 chatBtn">Digital Marketing</button>
        </div>`;



    // Simple responses
    if (input == "how much?") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                Eight thousand pesos for the Computer Basic and Photoshop Course while nine thousand pesos for the Graphic Design and Digital Marketing
                </span></div>
            
            </div>`
            );

    } else if (input == "how to enroll?") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                Thru gcash payment 09617453383 then screenshot proof of payment and kindly post it here"
                </span></div>
             
             </div>`
             );

    } else if (input == "class schedule of cb and ps") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                Computer Basic Starts on September 1, 2022 from 8 Am to 5pm, Duration is 12 to 15 weeks and Photoshop Starts on October 24, 2022 from 8 am to 5pm, Duration is 12 to 15 weeks
                </span></div>
            
            </div>`
            );

    } else if (input == "class schedule of gd and dm") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                Graphic Design Starts on November 1, 2022 from 8 am to 5pm, Duration is 12 to 15 weeks and Digital Marketing Starts on November 11, 2022 from 8 am to 5pm, Duration is 12 to 15 weeks
                </span></div>
            
            </div>`
            );

    } else if (input == "is it via zoom or skype?") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                online class will be via Zoom. In addition, Link will be sent to your email a week before your class starts and by the way we have a promo, if you enroll now, we will give you a discount! so just message our number 09617453383 and we will be glad to assist you!
                </span></div>
            
            </div>`
            );

    } else if (input == "what is braintech?") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                We are an e-learning platform providing interactive online education for students with our self-paced free courses or instructor-led classes.<br>
                We cater to students wanting to augment their studies and learn more in a short time.<br>
                Learn more about us <a href="AboutUs.html" target="_blank">here.</a>
                </span></div>

            </div>
            
            <div class="text-start ps-3">
            <button id="q2Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary ms-3 my-1 p-1 chatBtn">What are the courses offered?</button>
            </div>

            <div class="text-start ps-3">
            <button id="q3Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary ms-3 my-1 p-1 chatBtn">How much?</button>
            </div>
            <br>`
            );

    } else if (input == "what are the courses offered?") {
        return (
        `<div class="text-start d-flex flex-nowrap">

            ${chatIcon}

            <div class="chatbotText pb-3"><span>We have a variety of FREE courses when you 
            <a href=#modalSignUp data-bs-toggle="modal">create an account</a>
             or Enroll in our upcoming courses below.</span></div>

        </div>
        ${computerBasics}
        ${photoshop}
        ${graphicDesign}
        ${digitalMarketing}
        
        `);

    } else if (input == "computer basics") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                Learn what a computer is and how it functions.<br>

                <a href=#modalSignUp data-bs-toggle="modal">Enroll Now</a>
                </span></div>

            </div>
            
            <div class="text-start ps-3 pb-3">
            <button id="q3Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary my-1 p-1 chatBtn">Schedule of Classes - CB</button>
            </div>`
            );

    } else if (input == "photoshop") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                Learn how to create stunning digital art with Photoshop.<br>

                <a href=#modalSignUp data-bs-toggle="modal">Enroll Now</a>
                </span></div>

            </div>
            
            <div class="text-start ps-3 pb-3">
            <button id="q3Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary my-1 p-1 chatBtn">Schedule of Classes - PS</button>
            </div>`
            );

    } else if (input == "digital marketing") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                Learn the art of reaching your audience through digital marketing.<br>

                <a href=#modalSignUp data-bs-toggle="modal">Enroll Now</a>
                </span></div>

            </div>
            
            <div class="text-start ps-3 pb-3">
            <button id="q3Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary my-1 p-1 chatBtn">Schedule of Classes - DM</button>
            </div>`
            );

    } else if (input == "graphic design") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                Learn the integral elements of graphic design.<br>

                <a href=#modalSignUp data-bs-toggle="modal">Enroll Now</a>
                </span></div>

            </div>
            
            <div class="text-start ps-3 pb-3">
            <button id="q3Btn" onclick="getResponse(this.innerHTML)" class="btn btn-primary my-1 p-1 chatBtn">Schedule of Classes - GD</button>
            </div>`
            );

    } else if (input == "schedule of classes - cb") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                Start: Sept. 1, 2022<br><br>
                Class hour: 8AM - 5PM<br><br>
                Duration: 12-15 weeks<br>

                <a href=#modalSignUp data-bs-toggle="modal">Enroll Now</a>
                </span></div>

            </div>
            ${photoshop}
            ${graphicDesign}
            ${digitalMarketing}
            `);

    } else if (input == "schedule of classes - ps") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                Start: Sept. 1, 2022<br><br>
                Class hour: 8AM - 5PM<br><br>
                Duration: 12-15 weeks<br>

                <a href=#modalSignUp data-bs-toggle="modal">Enroll Now</a>
                </span></div>

            </div>
            ${computerBasics}
            ${graphicDesign}
            ${digitalMarketing}
            `);

    } else if (input == "schedule of classes - dm") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                Start: Sept. 1, 2022<br><br>
                Class hour: 8AM - 5PM<br><br>
                Duration: 12-15 weeks<br>

                <a href=#modalSignUp data-bs-toggle="modal">Enroll Now</a>
                </span></div>

            </div>
            ${computerBasics}
            ${photoshop}
            ${graphicDesign}
            `);

    } else if (input == "schedule of classes - gd") {
        return (
            `<div class="text-start d-flex flex-nowrap">

                ${chatIcon}

                <div class="chatbotText pb-3"><span>
                Start: Sept. 1, 2022<br><br>
                Class hour: 8AM - 5PM<br><br>
                Duration: 12-15 weeks<br>

                <a href=#modalSignUp data-bs-toggle="modal">Enroll Now</a>
                </span></div>

            </div>
            ${computerBasics}
            ${photoshop}
            ${digitalMarketing}
            `);

    } else {
        return (
        `<div class="text-start d-flex flex-nowrap">

            ${chatIcon}

            <div class="chatbotText pb-3"><span>

            Hi Guest! Thanks for getting in touch. We received your message and we'll get back to you. Our operating hours are from 8 AM to 8 PM, Mondays to Saturdays (except holidays).

            Should you wish to take our FREE courses, Sign Up now!

            <a href=#modalSignUp data-bs-toggle="modal">Create an Account</a>

            </span></div>
        
        </div>`
        );
    }
};