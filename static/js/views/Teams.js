import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(){
    super();
    this.setTitle("Teams");
  }

  async getHtml(){
    return `
    <div class="teams-form" id="teamsForm">
      <div class="teams-Frame" id="frame">
        <div class="topButtonThree">
          <a href="/teams" data-link class="teams" >Teams</a>
          <a href="/settings" data-link class="settings">Settings</a>
          <a href="/topic" data-link class="words">Words</a>
        </div>
        <h2 id="listOfTeams" onclick="restoreList()">List of teams:</h2>
        <ul id="teamsName" onclick="editElement()">
          <li class="teamName">Team "Kittens"</li>
          <li class="teamName">Team "Scooby-doo"</li>
        </ul>
        <button type="button" id="addNewTeam" name="buttonAddTeams" onclick="addTeam()">Add new team</button>
      </div>
      <a href="/rules" data-link class="UFO"></a>
      <a href="/start" data-link class="Start">Start</a>
    </div>

    `;
  }


}
