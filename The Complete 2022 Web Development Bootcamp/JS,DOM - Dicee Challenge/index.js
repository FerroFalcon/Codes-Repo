var randomNumber1 = Math.floor(Math.random() * 6);
var arr1 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
// document.querySelector("img1").setAttribute("src", arr1[randomNumber1]);
document.getElementsByTagName("img")[0].setAttribute("src", arr1[randomNumber1]);

var randomNumber2 = Math.floor(Math.random() * 6);
var arr2 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
document.getElementsByTagName("img")[1].setAttribute("src", arr2[randomNumber2]);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins🚩";
}
else {
  document.querySelector("h1").textContent = "Draw!";
}
