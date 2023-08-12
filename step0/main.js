console.log('ファイルの読み込みテスト');
var element = document.getElementById('innerTest');
element.innerHTML ='<strong>Javascript</strong>で書きました';

var btnElement = document.getElementById('button');
console.log(btnElement);
btnElement.addEventListener('click', function(){
    var number = document.getElementById('number');
    var val = number.value;
    if (val % 2 == 0){
        console.log('偶数です');
    } else {
        console.log('奇数です');
    }
});
var fruits = ['りんご', 'ぶどう', 'みかん'];
var fruitStr = [];
for (i=0; i<fruits.length; i++){
    fruitStr +=  '<li class="fruit">'+ fruits[i] + '</li>'
}
document.getElementById('arrayTest').innerHTML = fruitStr;


// fruitクラスのテキストを抜き出す
var fruitElements = document.getElementsByClassName('fruit');
console.log(fruitElements);
for (i=0; i<fruitElements.length; i++){
    console.log(fruitElements[i].textContent);
}

// 連想配列
var colorsObj = {
    red: 'あか',
    blue: 'あお',
    green: 'みどり'
}

console.log(colorsObj);