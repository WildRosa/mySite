import Main from "./views/Main.js"
import Rules from "./views/Rules.js"
import Teams from "./views/Teams.js"
import Settings from "./views/Settings.js"
import Topic from "./views/Topic.js"
import Edit from "./views/Edit.js"
import Start from "./views/Start.js"
import Position from "./views/Position.js"

const navigateTo = url => {
  history.pushState(null, null, url);

  router();


};

const router = async() => {
  const routes = [
      {path: "/", view: Main },
      {path: "/rules", view: Rules },
      {path: "/teams", view: Teams},
      {path: "/settings", view: Settings},
      {path: "/topic", view: Topic},
      {path: "/edit", view: Edit},
      {path: "/start", view: Start},
      {path: "/position", view: Position},

  ];


  const potentialMatches = routes.map(route => {
    return{
      route: route,
      isMatch: location.pathname === route.path

    };

  }

);

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match){
      match = {
        route: routes[0],
        isMatch: true
      };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
    transitionUpdates();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () =>{
  document.body.addEventListener("click", e =>{

    if(e.target.matches("[data-link]")){
      e.preventDefault();
      navigateTo(e.target.href);
      console.log(e.target.href);

    }
  });

  router();


});
