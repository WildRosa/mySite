import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(){
    super();
    this.setTitle("Start");
  }

  async getHtml(){
    return `
     <div class="game-form" id="gameForm">
      <a href="/position"  data-link id="transitionPostion"></a>
      <div class="game-Frame" id="frame">
        <h2 id="wordForGame">Word</h2>
        <h3 id="timer">Time:</h3>
        <h3 id="score">Score:0</h3>
      </div>
      <button type="button" name="pass" id="pass">  pass  </button>
      <button type="button" name="guessed" id="guessed">guessed</button>
      <button type='button' name="startGame" id="startGame" onclick="startGame()">start game</button>
    </div>
    `;
  }


}
