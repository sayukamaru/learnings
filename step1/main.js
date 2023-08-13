function stopWatch(){
  // ||演算子によるデフォルト値の準備
  options = options || {};
  var color = options.color || 'lightblue';
  var backgroundColor = options.backgroundColor || 'black';
  var displayElm = document.getElementsByClassName('display')[0];

  displayElm.style.color = color;
  displayElm.style.backgroundColor = backgroundColor;

  var startButton = document.getElementsByClassName('startButton')[0];
  var timer = null;
  // 元々startButtonのイベントハンドラの中に入れていたがstopButtonにも使えるように外に出した
  var logElem = document.getElementsByClassName('log')[0];
  
  // ボタンを表示してログを表示するのを関数化
  function addMessage (message){
      var startText = document.createElement('p');
      var now = new Date();
      startText.innerText = now.getHours() + '時' + now.getMinutes() + '分' + now.getSeconds() + '秒' + message;
      logElem.append(startText);
  }
  
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
      addMessage('開始');
  });
  
  var stopButton = document.getElementsByClassName('stopButton')[0];
  stopButton.addEventListener('click', function(){
      if(timer !== null) {
          // 上の関数で設定したtimer変数(intervalID)をclearintervalで一時停止する
          clearInterval(timer);
          timer = null;
          addMessage('終了');
      }
  });
}
var options = {
  color: 'limegreen',
  backgroundColor: '#4d4d4d'
}
stopWatch();






// bugs
// 01.  スタートボタンを複数回クリックしたらカウントの数字が２回表示される
//      -- タイマーが動いている時にスタートをクリックしても何もしない
// 02.　01の状態になるとEndボタンが機能しなくなる
// 　　　-- タイマーが止まっている時にストップボタンをクリックしても何もしない