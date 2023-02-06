import './style.css'

document.getElementById("timerResult").innerHTML;


window.reaktionsBtn = reaktionsBtn;

var randomNumberOutput;

function reaktionsBtn() {
  randomNumberOutput = Math.floor(Math.random() * 5000);
  console.log(randomNumberOutput);
  setTimeout(reaktionsClick, randomNumberOutput);
  scoreboard.sort(function (a, b) { return a - b });
}
var scoreboard = [];



// scoreboard.forEach(createHTML);

// function createHTML(item){
//   document.createElement("h1");
// }

function reaktionsClick() {
  document.getElementById("ReaktionsTest").style.background = '#008000';
  document.getElementById("ReaktionsTest").innerHTML = "JETZT!";
  let date1 = new Date();
  var time_now = date1.getTime();
  scoreboard.sort(function (a, b) { return a - b });
  function Cal_Result() {
    let date2 = new Date();
    var time_later = date2.getTime();
    const timeResult = (time_later - time_now);
    scoreboard.push(timeResult);
    document.getElementById("Scoreboard").innerHTML = JSON.stringify(scoreboard);
    console.log(scoreboard);
    document.getElementById("timerResult").innerHTML = timeResult + "ms";
    document.getElementById("ReaktionsTest").style.background = "#f5f5f5";
    document.getElementById("ReaktionsTest").innerHTML = "Drücke diesen button wenn er grün ist"
    document.getElementById("ReaktionsButton").innerHTML = "Start Game"
    console.log(timeResult);
    ReaktionsTest.removeEventListener("click", Cal_Result)
  }

  document.getElementById("ReaktionsTest");
  ReaktionsTest.addEventListener("click", Cal_Result)

}



 //server start: npm run dev

// PROBLEME:

// 


//PLÄNE:

// Versuch nur EIN output von jeder function zu bekommen                                   ++++++++DONE+++++++++
// Versuch nach der ersten funktion die zweite irgendwie zu delayen                        ++++++++DONE+++++++++   
// funktion reaktionsClick() soll nach der ausführung farbe ändern                         ++++++++DONE+++++++++
//function reaktionsClick() sol timlen wie lange er nicht geclickt wurde                   ++++++++DONE+++++++++
// mach eine function die das game neustartet ohne die website zu restarten                ++++++++DONE+++++++++
// Wenn alles klappt dann versuchen ein scoreboard zu machen was die 10 besten runs mit  und milisekunden trackt
// Versuch das score board entwieder rechts oder links and die seite zu stellen
// Ein reset button ist nötig für das erneue spielen !!Aber das scoreboard und die einträge müssen noch bleiben!!
// Wenn das scoreboard funktoniert dann verschöner die website mit css 
