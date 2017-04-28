var characters = [
  { firstName: "Jacob", lastName: "Green", color: "Green", occupation: "IT Consultant", age: 54, description: "He has a lot of connections and is always willing to help people out -- for a price" },
  { firstName: "Doctor", lastName: "Orchid", color: "White", occupation: "Doctor", age: 39, description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning" },
  { firstName: "Victor", lastName: "Plum", color: "Purple", occupation: "Video Game Designer", age: 31, description: "He is a billionaire video game designer who is embracing his new popularity" },
  { firstName: "Kasandra", lastName: "Scarlet", color: "Red", occupation: "A-list movie star", age: 60, description: "She is an A-list movie star whose past haunts her" },
  { firstName: "Eleanor", lastName: "Peacock", color: "Blue", occupation: "Unemployeed", age: 27, description: "She is from a wealthy family and uses her status and money to earn popularity" },
  { firstName: "Jack", lastName: "Mustard", color: "Yellow", occupation: "Football Player", age: 25, description: "He is a former football player who tries to get by on his former glory" }
];

var weapons = [
  { name: "Rope", color: "Brown", weight: '450 gr', hurt: "Low"},
  { name: "Knife", color: "Silver", weight: '250 gr', hurt: "High"},
  { name: "Candlestick", color: "Gold", weight: '1300 gr', hurt: "Medium"},
  { name: "Dumbbell", color: "Black", weight: '3000 gr', hurt: "High"},
  { name: "Poison", color: "Green", weight: '10 gr', hurt: "Very High"},
  { name: "Axe", color: "Silver", weight: '2400 gr', hurt: "Very High"},
  { name: "Bat", color: "Brown", weight: '800 gr', hurt: "Medium"},
  { name: "Trophy", color: "Gold", weight: '2200 gr', hurt: "Medium"},
  { name: "Pistol", color: "Black", weight: '500 gr', hurt: "Very High"}
];

var houseRooms = [ "Dining room", "Conservatory", "Kitchen", "Study", "Library",
  "Billiard room", "Lounge", "Ballroom", "Hall", "Spa", "Living room", "Observatory",
  "Theater", "Guest house", "Patio" ];


function randomCard (typeOfCard) {

  switch (typeOfCard) {
    var card;
    case "characters":
      card = characters.[Math.floor(Math.random()*characters.length)];
      return card;
      break;
    case "characters":
      break;
    case "characters":
      break;
    default:
      console.log("Sorry, this is not a valid type of card");
  }

};