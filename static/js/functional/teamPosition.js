function OverallRound(){
  String.prototype.repeat = function(n) {
    return new Array(n + 1).join(this);
  }
  positionsTeams.innerHTML = "";
  const mediaQuery = window.matchMedia('(max-width: 399px)')
  let space = '&nbsp;';
  let max = maxLengthLi();
    for (var i = 0; i < listTeam.length; ++i) {
      let newElement = document.createElement('li');
      let different = max > listTeam[i].length ? max - listTeam[i].length : 0;
      if (mediaQuery.matches) {
        newElement.innerHTML = listTeam[i] + ":" + space.repeat(1 + different) + finalScore[i];
      } else {
        newElement.innerHTML = listTeam[i] + ":" + space.repeat(70 + different) + finalScore[i];
      }
      positionsTeams.append(newElement);
    }
}

function currentRound() {
  let url = window.location.href;
  if (url.indexOf('http://localhost:5080/position') != -1){
  String.prototype.repeat = function(n) {
    return new Array(n + 1).join(this);
  }
  positionsTeams.innerHTML = "";
  const mediaQuery = window.matchMedia('(max-width: 399px)')
  let space = '&nbsp;';
  let max = maxLengthLi();
    for (var i = 0; i < listTeam.length; ++i) {
      let newElement = document.createElement('li');
      let different = max > listTeam[i].length ? max - listTeam[i].length : 0;
      if (mediaQuery.matches) {
        newElement.innerHTML = listTeam[i] + ":" + space.repeat(1 + different) + listScore[i];
      } else {
        newElement.innerHTML = listTeam[i] + ":" + space.repeat(70 + different) + listScore[i];
      }
      positionsTeams.append(newElement);
    }
    for(var i = 0; i < finalScore.length; ++i){
      if(finalScore[i] >= wordForWin){
        document.getElementById('winner').innerHTML = "Team " + listTeam[i] + " win";
        newGame = true;
      }
      else if (listScore.includes(wordForWin)) {
        document.getElementById('winner').innerHTML = "Team " + listTeam[turn] + " win";
        newGame = true;
      }
    }
  }
}

function nextGame(){
  if(newGame == true){
    turn = -1;
    listScore = [0, 0, 0, 0, 0];
    finalScore= [0, 0, 0, 0, 0];
    newGame = false;
    document.getElementById("restart").click();
  }
  else if (listTeam.length == turn + 1) {
    turn = -1;
    listScore = [0, 0, 0, 0, 0];
    newGame = false;
    document.getElementById("transitionPostion").click();
  }
  else{
    newGame = false;
    document.getElementById("transitionPostion").click();
  }

}


function maxLengthLi() {
  let max = listTeam[0].length;
  for (var i = 0; i < listTeam.length; i++) {
    if (max < listTeam[i].length) {
      max = listTeam[i].length;
    }
  }
  return max;
}
