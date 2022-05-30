var turn = -1;
var time = 60;
var score = 0;
var wordForWin = 10;
var wordPack = new Map();
var simple = ["Height", "Fly", "Control", "Voice", "Apple", "Sock", "Crack", "String",
  "Pet", "Trip", "Canvas", "Well", "Kiss", "Honey", "Polish", "Prison", "Grade", "Message", "Sign",
  "Thumb", "Gift", "Fire", "Size", "Tea", "Example", "Carrot", "Peace", "Rain", "Jackdaw", "Anger",
  "Farmer", "Chest", "Leg", "Hat", "Gate", "Market", "Bee", "Cook", "Toothpaste", "History", "Heart",
  "Laugh", "Goose", "Vacation", "Water", "Future", "Cow", "Story", "Cotton", "Shoe", "Brake", "Group",
  "Fall", "Finger", "Elbow", "Farm", "Part", "Channel", "Crown", "Angel", "Drink", "Call", "Office",
  "Needle", "Swim", "Pencil", "Coffee", "Ant", "Cave", "Ear", "Wall", "Sheet", "Collar", "Dust",
  "Move", "Darkness", "Wine", "Skirt", "Stream", "Weather", "Cheese", "Orange", "Tax", "Son",
  "Nail", "Twist", "Chicken", "Science", "Cub", "Onion", "Child", "Boat", "Female", "Hunter",
  "Hate", "Loss", "Donkey", "Ship", "School", "View"
];

var middle = ["Violet", "Government", "Cause", "Crowd", "Opinion", "Agony", "Fortification",
  "Lash", "Surprise", "Punishment", "Promise", "Beast", "Demonology", "Goo", "Current", "Goggles",
  "Politician", "Solid", "Decision", "Sail", "Wilderness", "Temper", "Attraction", "Windowsill",
  "Pleasure", "Freedom", "Exchange", "Coach", "Knowledge", "Degree", "Stranger", "Fuss",
  "Quicksand", "Growth", "Comparison", "Guide", "Stitch", "Beam", "Warning", "Wrist",
  "Figure", "Mathematician", "Spiritualism", "Blow", "Approval", "Passivity", "Invention",
  "Mass", "Unicorn", "Underwear", "Cattle", "Object", "Cork", "Belief", "Jellyfish", "Preparation",
  "Copper", "Parcel", "Rail", "Icicle", "Military", "Opponent", "Robin", "Beetle", "Entity",
  "Charge", "Structure", "Deer", "Crow", "Reaction", "Prayer", "Spade", "Trouble", "Addiction",
  "Development", "Cemetery", "Clam", "Broadsword", "Throat", "Negativity", "Bush", "Ladybug",
  "Tie", "Swing", "Plough", "Fold", "Warrior", "Urge", "Amusement", "Mushroom", "Downtown",
  "Hammer", "Creature", "Rest", "Representative", "Soul", "Cocktail", "Style", "Temple", "Rumour"
];

var topicName = ["Simple", "Middle"];
var selectTopic = "Simple";
var listTeam = [];
var listScore = [0, 0, 0, 0 ,0];
var finalScore = [0, 0, 0, 0, 0];
var newGame = false;
wordPack.set(0, simple);
wordPack.set(1, middle);

window.onload = function() {
    transitionUpdates();
}

function transitionUpdates() {
  restoreList();
  updateCategoty();
  updateSettings();
  currentRound();
}
