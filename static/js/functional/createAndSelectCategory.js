function addWord() {
  let ul = document.getElementById("editWordForm");
  let li = document.createElement('li');
  let inputWord = document.createElement('input');
  inputWord.type = 'text';
  inputWord.setAttribute('maxLength', 18);
  li.append(inputWord);
  editWordForm.appendChild(li);
  document.getElementById("add").disabled = true;
  document.getElementById('save').disabled = true;
  inputWord.addEventListener('change', updateValue);

  function updateValue(e) {
    let newElement = document.createElement('li');
    newElement.innerHTML = e.target.value;
    document.getElementById("add").disabled = false;
    document.getElementById("save").disabled = false
  }
}

function swapColor() {
  let mainBlock = document.getElementById("categories");
  let insideDiv = mainBlock.getElementsByTagName("div");
  var target = getEventTarget(event);

  if (target.tagName == 'DIV' && target.id !== "categories") {
    for (let i = 0; i < insideDiv.length; ++i) {
      insideDiv[i].style.background = 'transparent';
    }
    selectTopic = target.getElementsByTagName("h3").item(0).textContent;
    target.style.background = 'purple';
  }
}


function saveCategory() {
  let name = document.getElementById('editName').value;
  let checkHollow = true;
  if (name !== '') {
    let ul = document.getElementById("editWordForm");
    let items = ul.getElementsByTagName("input");
    let newKey = lastKey() + 1;
    let newWord = [];
    for (let i = 0; i < items.length; ++i) {
      if (items[i].value == "") {
        checkHollow = false;
        items[i].placeholder = 'The field cannon be empty';
        break;
      }
      newWord.push(items[i].value);
    }
    if (checkHollow) {
      wordPack.set(newKey, newWord);
      topicName.push(name);
      document.getElementById("back").click();
    }


  } else {
    editName.placeholder = 'The field cannon be empty';
  }
}

function changeWord() {
  var target = getEventTarget(event);
  if (target.tagName == 'INPUT') {
    target.addEventListener('change', updateWord);

    function updateWord(e) {
      if (e.target.value == '' && editWordForm.contains(target.parentElement)) {
        editWordForm.removeChild(target.parentElement);
      }
    }
  }
}

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

function updateCategoty() {
  let url = window.location.href;
  if (url.indexOf('http://localhost:5080/topic') != -1) {
    let maxKey = lastKey();
    let mainBlock = document.getElementById("categories");
    mainBlock.innerHTML = "";
    for (let i = 0; i <= maxKey; i++) {
      let block = document.createElement('div');
      block.className = "nameCategories";
      let nameTopic = document.createElement('h3');
      nameTopic.innerHTML = topicName[i];
      nameTopic.className = "categoriesWord";
      let numberWord = document.createElement('output');
      numberWord.innerHTML = wordPack.get(i).length;
      numberWord.id = "numberWord";
      let exampleWord = document.createElement('p');
      exampleWord.innerHTML = wordPack.get(i).slice(0, 3);
      exampleWord.className = "categoriesWord";
      block.appendChild(nameTopic);
      block.appendChild(numberWord);
      block.appendChild(exampleWord);
      mainBlock.appendChild(block);

    }
  }
}

function deleteTopic() {
  let mainBlock = document.getElementById("categories");
  let insideDiv = mainBlock.getElementsByTagName("div");
  if (selectTopic !== "Simple" && selectTopic !== "Middle") {
    insideDiv.item(topicName.indexOf(selectTopic)).hidden = true;
  }
}

function lastKey() {
  let maxKey = 0;
  for (var [key, value] of wordPack) {
    if (maxKey < key) {
      maxKey = key;
    }
  }
  return maxKey;
}
