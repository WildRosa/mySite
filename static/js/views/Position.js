import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(){
    super();
    this.setTitle("Position");
  }

  async getHtml(){
    return `
    <div class="position-form" id="positionForm">
      <div class="position-Frame" id="frame">
      <a href="/start"  data-link id="transitionPostion"></a>
      <a href="/teams"  data-link id="restart"></a>
        <div class="top-button" id="topButtonTwo">
            <button type="button" name="buttonCurrentRound" id="currentRound" onclick="currentRound()">Current round</button>
            <button type="button" name="buttonOverallStandings" id="OverallStandings" onclick="OverallRound()">Overall standings</button>
        </div>
        <ul id="positionsTeams">
          <!-- <li class="positionTeam">Team "Kittens" <output name="result" id="resultRound">0</output></li>
          <hr class="break">
          <li class="positionTeam">Team "Scooby-doo" <output name="result" id="resultRound">0</output> </li>
          <hr class="break"> -->
        </ul
      </div>
      <h2 id="winner"></h2>
    </div>
      <button type="button" name="buttonNextGame" id="nextGame" onclick="nextGame()">To the next game</button>
    `;
  }


}
