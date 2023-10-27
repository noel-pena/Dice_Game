var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var diceName1 = './images/dice' + randomNum1 + '.png';
var diceName2 = './images/dice' + randomNum2 + '.png';
document.getElementById('img1').setAttribute('src', diceName1);
document.getElementById('img2').setAttribute('src', diceName2);
if(randomNum1 < randomNum2){
    document.querySelector('h1').innerText = 'Player 2 wins 🚩';
}
if(randomNum1 > randomNum2){
    document.querySelector('h1').innerText = '🚩 Player 1 wins';     
    }
if(randomNum1 === randomNum2){
    document.querySelector('h1').innerText = 'Draw';
}
