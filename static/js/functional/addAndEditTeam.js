function editElement() {
  if (document.getElementById('teamsName').getElementsByTagName('input').length < 1) {
    var ul = document.getElementById('teamsName');
    let numberOfLi = document.getElementById('teamsName').getElementsByTagName('li').length;
    var target = getEventTarget(event);
    let inputTeam = document.createElement('input');
    inputTeam.type = 'text';
    inputTeam.setAttribute('maxLength', 14);
    let oldValue = target;
    ul.replaceChild(inputTeam, target);
    inputTeam.value = target.textContent;
    inputTeam.addEventListener('change', updateValue);
    document.getElementById("addNewTeam").disabled = true;

    function updateValue(e) {
      let ul = document.getElementById("teamsName");
      let newElement = document.createElement('li');
      newElement.innerHTML = e.target.value;
      if (newElement.textContent === "") {
        if (numberOfLi < 3) {
          teamsName.replaceChild(oldValue, inputTeam);
        } else {
          teamsName.removeChild(inputTeam);
        }

      } else {
        teamsName.replaceChild(newElement, inputTeam);
      }

      inputTeam.remove();
      localStorage.clear;
      localStorage.setItem('newTeams', teamsName.innerHTML);
      document.getElementById("addNewTeam").disabled = false;
    }
  }
}

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

function addTeam() {
  if (document.getElementById('teamsName').getElementsByTagName('li').length < 5) {

    let ul = document.getElementById("teamsName");
    let inputTeam = document.createElement('input');
    inputTeam.type = 'text';
    inputTeam.setAttribute('maxLength', 14);
    let addLast = document.createElement('li');
    addLast.innerHTML = inputTeam.type;
    ul.append(inputTeam);
    inputTeam.addEventListener('change', updateValue);
    document.getElementById("addNewTeam").disabled = true;

    function updateValue(e) {
      let ul = document.getElementById("teamsName");
      let size = document.getElementById('teamsName').getElementsByTagName('li').length;
      let newElement = document.createElement('li');
      newElement.innerHTML = e.target.value;
      teamsName.append(newElement);
      inputTeam.remove();
      localStorage.setItem('newTeams', teamsName.innerHTML);
      document.getElementById("addNewTeam").disabled = false;
    }
  }

}

function restoreList() {
  let url = window.location.href;
  if (url.indexOf('http://localhost:5080/teams') != -1) {
    let ul = document.getElementById("teamsName");
    let items = ul.getElementsByTagName("li");
    let updateList = localStorage.getItem('newTeams');
    if (ul !== null && updateList !== undefined) {
      ul.innerHTML = updateList;
    }
    for (let i = 0; i < items.length; ++i) {
        listTeam[i]  =  items[i].textContent;
      }
  }
}
