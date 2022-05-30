import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(){
    super();
    this.setTitle("Rules");
  }

  async getHtml(){
    return `
    <div class="rules-form" id="rulesForm">
      <div class="rules-Frame" id="frame">
        <div class="underLine">
          <h2 id="headRules">How to playes Alias game<hr></h2>
        </div>
        <p id="rulesAlias">
        Alias ​​or "Say otherwise" is a verbal developing team game in which the player needs to explain as much as possible while loading the download. <br>
        For each correct word guessed, the team receives a point. The team that scores the most points wins.<br>
        When explaining, you can not use single-root words, use translations into foreign languages ​​and clearly show the word with gestures.<br>
        <span class="odd">Scoring</span>
         - For guessing the word krmanda gets 1 point. For the missing word -1.<br>
         - If the team did not have time to answer the last word - the word is not taken into account. The team gets 0 points.
        <span class="odd">Determination of the winner</span>
        The game continues until one of the teams scores the number of points necessary to win.
        </p>
      </div>
      <a href="/" data-link id="backToMenu">Back to menu</a>

    </div>
    `;
  }


}
