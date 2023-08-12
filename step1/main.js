var displayElm = document.getElementsByClassName('display')[0];

var startButton = document.getElementsByClassName('startButton')[0];
var timer = null;
startButton.addEventListener('click', function(){
    var seconds = 0;
    // intervalIDをtimer変数に設定している
    if(timer===null){
        timer = setInterval(function(){
            seconds++;
            displayElm.innerHTML = seconds;
            console.log(seconds);
        }, 1000);
    }
    console.log('start:'+ timer);
    var logElem = document.getElementsByClassName('log')[0];
    var startText = document.createElement('p');
    startText.innerText = '開始'
    logElem.append(startText);
});


var stopButton = document.getElementsByClassName('stopButton')[0];
stopButton.addEventListener('click', function(){
    if(timer !== null) {
        console.log('stop:'+ timer);
        // 上の関数で設定したtimer変数(intervalID)をclearintervalで一時停止する
        clearInterval(timer);
        timer = null;
        var logElem = document.getElementsByClassName('log')[0];
        var endText = document.createElement('p');
        endText.innerText = '終了'
        logElem.append(endText);

    }
});




// bugs
// 01.  スタートボタンを複数回クリックしたらカウントの数字が２回表示される
//      -- タイマーが動いている時にスタートをクリックしても何もしない
// 02.　01の状態になるとEndボタンが機能しなくなる
// 　　　-- タイマーが止まっている時にストップボタンをクリックしても何もしない