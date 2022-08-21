// Achievement Counter
const observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
		counter();
    }, { threshold: [1] });


observer.observe(document.querySelector("#counter"));

const counter = () => {

    var appendCounter1 = document.getElementById("counter1");
    var appendCounter2 = document.getElementById("counter2");
    var appendCounter3 = document.getElementById("counter3");
    var Interval;

    var count1 = 00;
    var count2 = 00;
    var count3 = 00;
    
    Interval = setInterval(startCounter, 20);

    function startCounter() {

        if (count2 == 150) {
            clearInterval(Interval);
            observer.unobserve(document.querySelector("#counter")); 

        } else {
            count1+=50;
            count2+=3;
            count3+=100;    
        }  

        if (count1 <= 2500) {
            appendCounter1.innerHTML = count1;
        } else {
            count1 = 2500;
            appendCounter1.innerHTML = count1;
        };
        
        if (count2 <= 150) {
            appendCounter2.innerHTML = count2;
        } else {
            count2 = 150
            appendCounter2.innerHTML = count2;
        };

        if (count3 <= 4300) {
            appendCounter3.innerHTML = count3;
        } else {
            count3 = 4300;
            appendCounter3.innerHTML = count3;
        };

        };
    };

