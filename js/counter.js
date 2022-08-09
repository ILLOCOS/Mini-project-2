// Achievement Counter
var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
		counter();
    }, { threshold: [1] });

observer.observe(document.querySelector("#counter"));

const counter = () => {
    var counter1 = Number(document.getElementById("counter1").innerHTML)
    var counter2 = Number(document.getElementById("counter1").innerHTML)
    var counter3 = Number(document.getElementById("counter1").innerHTML)
    var appendCounter1 = document.getElementById("counter1");
    var appendCounter2 = document.getElementById("counter2");
    var appendCounter3 = document.getElementById("counter3");
    var Interval;

    if (counter1 != 0) {
        clearInterval(Interval)
    } else {
        var counter1 = 00;
        var counter2 = 00;
        var counter3 = 00;
        
        clearInterval(Interval);
        Interval = setInterval(startTimer, 20);
    
        function startTimer() {
            counter1+=50;
            counter2++;
            counter3+=50;
    
            if (counter1 <= 2500) {
                appendCounter1.innerHTML = counter1;
            } else {
                appendCounter1.innerHTML = 2500;
            }
    
            if (counter2 <= 150) {
                counter2++;
                appendCounter2.innerHTML = counter2;
            } else {
                appendCounter2.innerHTML = 150;
            }
    
            if (counter3 <= 2500) {
                appendCounter3.innerHTML = counter3;
            } else {
                appendCounter3.innerHTML = 2500;
            }
    
            if (counter1 == 2500 && counter2 == 150 && counter3 == 2500) {
                clearInterval(Interval);   
            }
        };
    };
};
