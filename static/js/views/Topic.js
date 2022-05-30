import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(){
    super();
    this.setTitle("Topic");
  }

  async getHtml(){
    return `
    <div class="topic-form" id="topicForm">
      <div class="topic-Frame" id="frame">
        <div class="topButtonThree">
         <a href="/teams" data-link class="teams">Teams</a>
         <a href="/settings" data-link class="settings">Settings</a>
         <a href="/topic" data-link class="words">Words</a>
        </div>
        <h2 id="textCategories" onclick="updateCategoty()">Categories:</h2>
        <div class="categoriesClass" id="categories" onclick="swapColor()">
          <div class="nameCategories" id="nameOfCategories">
            <h3 class="categoriesWord">Quick game</h3>
            <output name="numeberOfWord" id="numberWord">14</output>
            <p class="categoriesWord" id="wordFromCategory">Cake, lemon, car</p>
          </div>
        </div>
        <div class="bottomButtonThree">
         <a  id="edit">Edit</a>
         <a href="/edit" data-link id="create">Create</a>
         <button type="button" name="delete" id="delete" onclick="deleteTopic()">Delete</button>

        </div>
      </div>
      <a href="/rules" data-link class="UFO"></a>
      <a href="/start" data-link class="Start">Start</a>
    </div>
    `;
  }


}
