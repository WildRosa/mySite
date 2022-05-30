function editTime() {
  time = document.getElementById('resultTime').value;
}

function editWordRange(){
  wordForWin = document.getElementById('resultWord').value;
}

function updateSettings() {
  let url = window.location.href;
  if (url.indexOf('http://localhost:5080/settings') != -1){
    document.getElementById("rangeTime").value = time;
    document.getElementById("resultTime").innerHTML = time;
    document.getElementById("rangeWord").value = wordForWin;
    document.getElementById("resultWord").innerHTML = wordForWin;
  }
}
