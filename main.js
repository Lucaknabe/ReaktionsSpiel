import './style.css'

document.getElementById("timerResult").innerHTML;


window.reaktionsBtn = reaktionsBtn;

var randomNumberOutput;
var scoreboard = [];
var top_10 = [];
var Filteredtop10 = [];

console.log("Filteredtop10 init",Filteredtop10)


function reaktionsBtn() {
  randomNumberOutput = Math.floor(Math.random() * (5000 - 1000) + 1000);
  console.log("randomNumberOutput",randomNumberOutput );
  setTimeout(reaktionsClick, randomNumberOutput);
  
}




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
    
    
    
    
    for (let i = 0; i <=10 || i < scoreboard.length -1 ; i++){
      console.log("scoreboard länge",scoreboard.length);
      top_10[i] = scoreboard[i];     
      Filteredtop10 =top_10.filter(Number);
      console.log("top_10[i]",i);

      if (top_10.length =9){
        top_10.pop;
      }
       Filteredtop10.filter(Boolean);

    }
    console.log("FilterTop 10 nach For Schleife",Filteredtop10)
    top_10.filter(Number);
    document.getElementById(0).innerHTML = JSON.stringify(Filteredtop10[0]);

     if (Filteredtop10.length === 2){
     document.getElementById(1).innerHTML = JSON.stringify(Filteredtop10[1]);
    }else if (Filteredtop10.length === 3){
      document.getElementById(2).innerHTML = JSON.stringify(Filteredtop10[2]);
    }else if (Filteredtop10.length === 4){
      document.getElementById(3).innerHTML = JSON.stringify(Filteredtop10[3]);
    }else if (Filteredtop10.length === 5){
      document.getElementById(4).innerHTML = JSON.stringify(Filteredtop10[4]);
    }else if (Filteredtop10.length === 6){
      document.getElementById(5).innerHTML = JSON.stringify(Filteredtop10[5]);
    }else if (Filteredtop10.length === 7){
      document.getElementById(6).innerHTML = JSON.stringify(Filteredtop10[6]);
    }else if (Filteredtop10.length === 8){
      document.getElementById(7).innerHTML = JSON.stringify(Filteredtop10[7]);
    }else if (Filteredtop10.length === 9){
      document.getElementById(8).innerHTML = JSON.stringify(Filteredtop10[8]);
    }else if (Filteredtop10.length === 10){
      document.getElementById(9).innerHTML = JSON.stringify(Filteredtop10[9]);
    }
    
    
    
    
    
    
    
    
    
    console.log("scoreboard",scoreboard);
    document.getElementById("timerResult").innerHTML = timeResult + "ms";
    document.getElementById("ReaktionsTest").style.background = "#f5f5f5";
    document.getElementById("ReaktionsTest").style.backgroundColor = "#5b6fe2"
    document.getElementById("ReaktionsTest").innerHTML = "Drücke diesen button wenn er grün ist"
    // document.getElementById("ReaktionsButton").innerHTML = "Start Game"
    console.log("timeResult",timeResult);
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

// farbe(Welche Farbe würde am besten passen??????)
// undefined values wenn leaderboard gezeigt wird velleicht mit if else if else checken ob die Filteredtop10 eine bestimmte länge hat und dann bei html definieren


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