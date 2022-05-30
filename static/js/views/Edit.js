import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(){
    super();
    this.setTitle("Edit");
  }

  async getHtml(){
    return `
     <div class="edit-form" id="editForm">
      <div class="edit-Frame" id="frame">
        <h2 id="category">Category:</h2>
         <input type="text" name="editName" id="editName">
         <h2 id="words">Words:</h2>
         <button type="button" name="add" id="add" onclick="addWord()">Add</button>

        <form class="editWord" id="editForma" >
          <ul id="editWordForm" onclick="changeWord()">
            <li><input type="text" name="editWordLi" class="editWordLi" value=""></li>
          </ul>

        </form>

        <div class="buttom-button" id="buttomButtonTwo">
            <a href="/topic"  data-link id="back">Back</a>
            <button type="button" name="save" id="save" onclick="saveCategory()">Save</button>
        </div>
      </div>
      <a href="/rules" data-link class="UFO"></a>
      <a href="/start" data-link class="Start">Start</a>
    </div>
    `;
  }


}
