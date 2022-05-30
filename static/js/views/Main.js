import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(){
    super();
    this.setTitle("Main");
  }

  async getHtml(){
    return `
    <div class="main-form" id="mainForm">
      <div class="textMain">
        <h2 id="nameGame">Online version of the game <br> Alias</h2>
        <p id="description">Inspider by the board game Alias. Now you can play Alias on any device
          with a browser.</p>
      </div>

    <div class="mainbutton">
      <a href="/teams" data-link>Play</a>
      <a href="/rules" data-link>Rules</a>
    </div>

    </div>
    `;
  }


}
