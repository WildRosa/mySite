function startGame() {
  turn += 1;
  score = 0;
  document.getElementById('startGame').hidden = true;
  let timeGame  = time;
  let maxForRandom = wordPack.get(0).length - 1;
  let index = topicName.indexOf(selectTopic);
  document.getElementById('wordForGame').innerHTML = wordPack.get(index)[Math.floor(Math.random() * maxForRandom)];

  var downloadTimer = setInterval(function() {
    document.getElementById("timer").innerHTML = "Time:" + timeGame;
    timeGame -= 1;
    if (timeGame < 0 || score >= wordForWin) {
      clearInterval(downloadTimer);
      if(score > wordForWin){
        listScore[turn] = wordForWin;
      }
      else{
        listScore[turn] = score;
        finalScore[turn] += score;
      }

      document.getElementById("transitionPostion").click();
    }
  }, 1000);

  guessed.onclick = function() {
    score += 1;
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById('wordForGame').innerHTML = wordPack.get(0)[Math.floor(Math.random() * maxForRandom)];
  }
  pass.onclick = function() {
    score -= 1;
    document.getElementById("score").innerHTML = "Score:" + score;
    document.getElementById('wordForGame').innerHTML = wordPack.get(0)[Math.floor(Math.random() * maxForRandom)];
  }

}
