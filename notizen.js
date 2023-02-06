

 function Cal_Result () {
    let date2 = new Date();
    var time_later = date2.getTime();
    const timeResult = (time_later - time_now);
    Scoreboard.push(timeResult);
    console.log(Scoreboard);
    document.getElementById("timerResult").innerHTML = timeResult + "ms";
    document.getElementById("ReaktionsTest").style.background = "#f5f5f5";
    document.getElementById("ReaktionsTest").innerHTML = "Drücke diesen button wenn er grün ist"
    document.getElementById("ReaktionsButton").innerHTML = "Start Game"
    console.log(timeResult);
    removeEventListener("click",)
  }
