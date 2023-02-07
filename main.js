import './style.css'

document.getElementById("timerResult").innerHTML;


window.reaktionsBtn = reaktionsBtn;

var randomNumberOutput;

function reaktionsBtn() {
  randomNumberOutput = Math.floor(Math.random() * (5000 - 1000) + 1000);
  console.log(randomNumberOutput);
  setTimeout(reaktionsClick, randomNumberOutput);
  
}
var scoreboard = [];
var top_10 = [];


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
    scoreboard.sort(function (a, b) { return a - b });
    for (let i = 0; (i <=10 || i < scoreboard.length -1 ); i++){
      console.log("scoreboard länge",scoreboard.length);
      top_10[i] = scoreboard[i];
       top_10.filter(obj => obj);
       console.log("top_10[i]",top_10[i]);
    //  top_10.filter(Element => Element !== null);
    }
    // if (top_10.length >=11){
    //   top_10.splice(10, 1);
    // }
    
    document.getElementById("Top10").innerHTML = JSON.stringify(top_10);
    console.log(scoreboard);
    document.getElementById("timerResult").innerHTML = timeResult + "ms";
    document.getElementById("ReaktionsTest").style.background = "#f5f5f5";
    document.getElementById("ReaktionsTest").innerHTML = "Drücke diesen button wenn er grün ist"
    // document.getElementById("ReaktionsButton").innerHTML = "Start Game"
    console.log(timeResult);
    ReaktionsTest.removeEventListener("click", Cal_Result)
  }

  document.getElementById("ReaktionsTest");
  ReaktionsTest.addEventListener("click", Cal_Result)

}

// für git:
//git status
//git add .
//git commit -m "test"
// git push



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
// Wenn das scoreboard funktoniert dann verschöner die website mit css 
  


// Design pläne: scoreboard an die seie packen mit einen gutem hintergrund 
// versuchen das so zu machen das der array scoreboard all in einem colum gepusht werden, dazu auch verschieden arrays zu machen für z. score 1 score 2 usw.