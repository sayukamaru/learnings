var displayElm = document.getElementsByClassName('display')[0];

var startButton = document.getElementsByClassName('startButton')[0];
var timer = null;
startButton.addEventListener('click', function(){
    var seconds = 0;
    timer = setInterval(function(){
        seconds++;
        console.log(seconds);
        displayElm.innerHTML = seconds;
    }, 1000);
});


var stopButton = document.getElementsByClassName('stopButton')[0];
stopButton.addEventListener('click', function(){
    console.log(timer);
    clearInterval(timer);
    timer = null;
});