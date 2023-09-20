// function stopWatchをES6に書き直す　使うのは「関数のデフォルト引数」と「分割代入」
// (options = {})と書くことで、引数が空だった場合は空のオブジェクトを代入するという記述になる。なので①が省略できる
// function stopWatch (options = {}){
//     let {color, backgroundColor} = options;
//     color = color || 'lightblue';
//     backgroundColor = backgroundColor || 'black';
    
// }

// クラスを適用する
class StopWatch{
    constructor(options = {}){
        this.options = options;
    }
    init() {
        let {color, backgroundColor} = this.options;
        color = color || 'lightblue';
        backgroundColor = backgroundColor || 'black';
        const displayElm = document.getElementsByClassName('display')[0];
        displayElm.style.color = color;
        displayElm.style.backgroundColor = backgroundColor;

        this.logElm = document.querySelector('.log');

        const startButton = document.getElementsByClassName('startButton')[0];
        let timer = null;

        startButton.addEventListener('click', function(){
            let seconds = 0;
            // intervalIDをtimer変数に設定している
            if(timer===null){
                timer = setInterval(function(){
                    seconds++;
                    displayElm.innerHTML = seconds;
                    console.log(seconds);
                }, 1000);
                this.addMessage('開始');
            }
        });

        const stopButton = document.getElementsByClassName('stopButton')[0];
        stopButton.addEventListener('click', function(){
            if(timer !== null) {
                // 上の関数で設定したtimer変数(intervalID)をclearintervalで一時停止する
                clearInterval(timer);
                timer = null;
                this.addMessage('終了');
            }
        })
    }
    addMessage(message) {
        const messageElm = document.createElement('div');
        const now = new Date();
        messageElm.innerText = `${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒 ${message}`;
        messageElm.classList = ['message'];
        this.logElm.appendChild(messageElm);
    }
}

const options = {
    color: 'limegreen',
    backgroundColor: '#4d4d4d'
  }
const stopWatch = new StopWatch(options);
stopWatch.init();


// function stopWatch(options){
//   // ||演算子によるデフォルト値の準備・・・・①
//   options = options || {};
//   const color = options.color || 'lightblue';
//   const backgroundColor = options.backgroundColor || 'black';
//   const displayElm = document.getElementsByClassName('display')[0];

//   displayElm.style.color = color;
//   displayElm.style.backgroundColor = backgroundColor;

//   const startButton = document.getElementsByClassName('startButton')[0];
//   let timer = null;
//   // 元々startButtonのイベントハンドラの中に入れていたがstopButtonにも使えるように外に出した
//   const logElem = document.getElementsByClassName('log')[0];
  
//   // ボタンを表示してログを表示するのを関数化
//   function addMessage (message){
//       const startText = document.createElement('p');
//       const now = new Date();
//       startText.innerText = `${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒 ${message}`;
//       logElem.append(startText);
//   }
  
//   startButton.addEventListener('click', function(){
//       let seconds = 0;
//       // intervalIDをtimer変数に設定している
//       if(timer===null){
//           timer = setInterval(function(){
//               seconds++;
//               displayElm.innerHTML = seconds;
//               console.log(seconds);
//           }, 1000);
//       }
//       addMessage('開始');
//   });
  
//   const stopButton = document.getElementsByClassName('stopButton')[0];
//   stopButton.addEventListener('click', function(){
//       if(timer !== null) {
//           // 上の関数で設定したtimer変数(intervalID)をclearintervalで一時停止する
//           clearInterval(timer);
//           timer = null;
//           addMessage('終了');
//       }
//   });
// }



// let options = {
//   color: 'limegreen',
//   backgroundColor: '#4d4d4d'
// }
// stopWatch();





// bugs
// 01.  スタートボタンを複数回クリックしたらカウントの数字が２回表示される
//      -- タイマーが動いている時にスタートをクリックしても何もしない
// 02.　01の状態になるとEndボタンが機能しなくなる
// 　　　-- タイマーが止まっている時にストップボタンをクリックしても何もしない


// ここからはメモ


