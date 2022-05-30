import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(){
    super();
    this.setTitle("Settings");
  }

  async getHtml(){
    return `
     <div class="settings-form" id="settingsForm">
      <div class="settings-Frame" id="frame">
        <div class="topButtonThree">
         <a href="/teams" data-link class="teams">Teams</a>
         <a href="/settings" data-link class="settings">Settings</a>
         <a href="/topic" data-link class="words">Words</a>
        </div>
        <form oninput="result.value=parseInt(word.value)">
         <h2 id="wordLimit">Word limit:</h2>
         <p id="limitWord">need words to win: <output name="result" id="resultWord">50</output></p>
         <input type="range" min="10" max="100" name="word" value="50" id="rangeWord" onchange="editWordRange()" />
        </form>

        <form oninput="result.value=parseInt(time.value)">
         <h2 id="textTimeLimit">Time limit:</h2>
         <p id="limitTime">one round time: <output name="result" id="resultTime">60</output> sec</p>
         <input type="range" min="10" max="180" name="time" value="60" id="rangeTime" onchange="editTime()" />
        </form>

      </div>
      <a href="/rules" data-link class="UFO"></a>
      <a href="/start" data-link class="Start">Start</a>
    </div>
    `;
  }


}
