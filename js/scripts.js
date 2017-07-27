var inventory = [];

//Business logic

function Room () {
  this.roomNumber = 1;
  this.look = "You see a door, a stainless steel box, and a trail of blood.";
}

function Room2 () {
  this.roomNumber = 2;
  wall = new Wall(true);
  this.look = "You see four buttons, one in the north, one in the east, one in the south, and one in the west. You also notice an etching in the middle of the room.";
  this.northButton = false;
  this.southButton = false;
  this.eastButton = false;
  this.westButton = false;
  this.buttonOrder = [];
  this.correctOrder = ["north", "west", "south", "east"];
}

var wall = null;

function Wall () {
  this.wallOpen = false;
}

var buttonPress =  function(direction, room) {
  switch(direction) {
    case 'north':
      if (room.northButton === true) {
        return 'This button has already been pressed.';
      }
      room.northButton = true;
      break;
    case 'east':
    if (room.eastButton === true) {
      return 'This button has already been pressed.';
    }
      room.eastButton = true;
      break;
    case 'south':
    if (room.southButton === true) {
      return 'This button has already been pressed.';
    }
      room.southButton = true;
      break;
    case 'west':
    if (room.westButton === true) {
      return 'This button has already been pressed.';
    }
      room.westButton = true;
      break;
  }
  room.buttonOrder.push(direction);
  var returnStr = "You press the button. ";
  if (room.buttonOrder.length === 4) {
    return checkOrder(room);
  } else {
    return returnStr += "The button stays in.";
  }
}

// use north {
//   northButton = true;
//   buttonOrder.push("north");
// }
// use south {
//   southButton = true;
//   buttonOrder.push("south");
// }
// use east {
//   eastButton = true;
//   buttonOrder.push("east");
// }
// use west {
//   westButton = true;
//   buttonOrder.push("west");
//   "You press the button."
//   if (buttonOrder.length === 4) {
//     return checkOrder()
//   } else {
//     "The button stays in."
//   }
// }

var checkOrder = function(room) {
    for (var i = 0; i < 4; i++) {
      if (room.buttonOrder[i] != room.correctOrder[i]) {
        room.northButton = false;
        room.southButton = false;
        room.eastButton = false;
        room.westButton = false;
        room.buttonOrder = [];
        return "As you as you press in the button, all the buttons pop out. Clearly you are doing something wrong...";
      }
    }
    wall.wallOpen = true;
    return "As you as you press in the last button, the northwestern wall opens and you see a bright light shimmering through.";
}

function Door() {
  this.locked = true;
}
function Box() {
  this.locked = true;
  this.passcode = "hello world";
}
// function KeyPad() {
//   this.passcode = "hello world";
// }
function Paper(){
  this.anagram = "HoWled roll";
  this.message = "My fondest moment as a programmer was my first website and it said '" + this.anagram + "'......I think, but that's probably not right";
}
var userInteraction = function(input, room) {
  switch(input) {
    case "help":
     return showHelp();
      break;
    case "look" || "look around":
      return look(room);
  };
}

var showHelp = function() {
    return "<p>Commands for House Escape:</p>" +
      "<p>look = look around the room</p>" +
      "<p>open + object = attempt to open the object</p>" +
      "<p>use + object = interact with the object in the room or inventory</p>" +
      "<p>grab + object = attempt to grab the object</p>" +
      "<p>inspect + object = obtain further details about the object</p>";
}

var look = function(room) {
  return room.look;
}

var open = function(userInput, object) {
  //debugger;
  var userInputArr = userInput.split(' ');
  var article = userInputArr [1];
  if (!article) {
    return "What are you trying to open?";
  }else if (article === 'key') {
  	return 'Keys are for opening things not the other way around.';
  } else {
    if (object instanceof Door) {
      if (inventory[0] === "key") {
        room = new Room2();
        return "Congratulations!!! You open the door and step into a dark room that smells of fragrant cheese. The door slams shut behind you.";
      } else {
      return "You try vigorously to get out but the door seems to be locked. Your mind starts to race.";
      }
    } else if (object instanceof Box) {
      if (object.locked) {
        return 'The box is locked but you see that it has an alphanumeric keypad.';
      } else {
        return 'This box is already open!';
      }
    } else {
      return "You can't open that...";
    }
  }
}

var use = function(userInput, object) {
  var userInputArr = userInput.split(' ');
  var article = userInputArr[1];
  if (!article) {
    return "What are you trying to use?";
  } else if (object instanceof Door) {
    return "What the heck do you mean 'use' door? Did you mean 'open door'?";
  } else if (object instanceof Box) {
    if (article === "box") {
      return "How do you intend to use the box? It's a box that is yearning to be opened.";
    }else if (article === "keypad") {
      var enterPasscode = prompt("Please enter the passcode:");
      if (enterPasscode.toLowerCase() === object.passcode) {
        object.locked = false;
        return "You hear a click and the box creaks open. A key glows from the bottom of the box."
      } else {
        return "Incorrect passcode, please try again"
      }
    }
  } else if (article === 'key') {
    return "This key looks like it was made for a door. Try opening one."
  // } else if (object instanceof Box){
  //   // var enterPasscode = prompt("Please enter the passcode:");
  //   // if (enterPasscode.toLowerCase() === object.passcode) {
  //   //   object.locked = false;
  //   //   return "You hear a click and the box creaks open. A key glows from the bottom of the box."
  //   // } else {
  //   //   return "A message populates the LCD screen on the keypad saying 'Incorrect passcode, please try again'"
  //   // }
  }
  else {
    return "You can't use that..."
  }
}

var inspect = function(userInput, object) {
  var userInputArr = userInput.split(' ');
  var article = userInputArr[1];
  if (!article) {
    return "What would you like to inspect?";

  } else if (room.roomNumber === 2) {
    if (article === 'north') {
      return 'Upon getting close to the button, you hear a faint crackling noise. You start to feel uncomfortably hot.';
    } else if (article === 'east'){
        return 'Upon getting close to the button you smell fresh soil. The button feels especially firm.';
    } else if (article === 'south') {
        return 'As you reach the button you hear a babbling brook. Your hair and clothes start to dampen.';
    } else if (article === 'west'){
        return 'As you reach the button you feel a slight breeze brush against your face.';
    } else if (article === 'etching') {
        return 'You can make out 4 letters on the ground: "F A W E"';
    } else if (article === 'light' && wall.wallOpen) {
        $(".main-section").text('');
        return 'You make your way through the wall and into the light...';
    } else {
        return "You can't see any such object.";
    }

  } else if (object instanceof Door) {
      if (inventory[0] === 'key') {
        return "The door appears to be locked.";
      } else {
        return "Maybe you should unlock this door.";
      }
  } else if (article === 'blood') {
    return "The blood on the ground leads to a hole in the wall.";
  } else if (article === 'hole' || article === 'wall') {
    return "You peer in the hole and see a small piece of paper.";
  } else if (article === 'paper') {
    return "The paper is smeared with blood. You look closer and see a message that says,\"My fondest moment as a programmer was my first website and it said 'HoWled roll'......I think, but that's probably not right. I may have mixed up the order of the letters..\"";
  } else if (article === 'box') {
    if (!object.locked) {
      return "The box is open.";
    } else {
      return "The box seems to be locked and made of industry-grade stainless steel with an alphanumeric digital keypad on the side. Perhaps there is a clue somewhere around the room...";
    }
  } else if (article === 'key') {
    if (!object.locked) {
      return "This key looks like it was made for a door. Try opening one.";
    } else {
      return "You can't see any such object."
    }
  } else if (article === 'keypad') {
      return "It appears to be a keypad that you can enter a password into. Perhaps you could try using it.";
  } else {
    return "You can't see any such object.";
  }
}

var grab = function(userInput, object) {
  var userInputArr = userInput.split(' ');
  var article = userInputArr[1];
  if (!article) {
    return "What are you trying to grab?";
  } else if (article === "key") {
    if (!object.locked) {
      if (inventory[0] != "key") {
        inventory.push("key");
        return "You grab the key and your heart fills with glee. You realize that there might be a way out of this awful room.";
      } else {
        return "You already picked up the key. You should probably get your eyes checked."
      }
    } else {
      return "You can't grab that!"
    }
  } else if (article === "blood") {
    return "Now the blood is on your hands. I hope the cops don't show up.";
  } else {
    if (object instanceof Paper) {
      return "The paper is smeared with blood. You look closer and see a message that says,\"My fondest moment as a programmer was my first website and it said 'HoWled roll'......I think, but that's probably not right. I may have mixed up the order of the letters..\"";
    } else if (object instanceof Box) {
      return "The box is bolted to the ground";
    }else {
      return "You cant grab that!";
    }
  }
}
var room = new Room2();
//User Interface Logic
$(document).ready(function() {
  $("#inputArea").focus();
  var door = new Door();
  var box = new Box();

  // var keypad = new KeyPad();
  var paper = new Paper();
  $("#formInput").submit(function(event){
    event.preventDefault();
    //debugger;

    var userText = $("#inputArea").val()
    var userTextArr = userText.split(' ');
    var response;
    //debugger;
    switch (userTextArr[0]) {
      // case "help":
      //   response =  userInteraction(userText, room);
      //   break;
      case "look":
        if (userTextArr.length > 1) {
          response = 'Did you mean inspect?';
        } else {
          response =  userInteraction(userText, room);
        }
        break;
      case "open":
        if (userTextArr[1] === 'door') {
          // door = new Door();
          response = open(userText, door);
        }else if (userTextArr[1] === 'box') {
          // box = new Box();
          response = open(userText, box);
        } else {
          response = open(userText);
        }
        break;
      case "use":
        // response = use(userText);
        if (userTextArr[1] === 'door') {
          response = use(userText, door);
        }else if (userTextArr[1] === 'box' || userTextArr[1] === 'keypad') {
          response = use(userText, box);
        }else if (userTextArr[1] === 'north' || userTextArr[1] === 'east' || userTextArr[1] === 'south' || userTextArr[1] === 'west' ) {
          response = buttonPress(userTextArr[1], room);
        }else if (userTextArr[1] === 'button') {
           response = "Which button do you want to press?";
        }else {
          response = use(userText);
        }
        break;
      case "grab":
        if (userTextArr[1] === 'door') {
          response = grab(userText, door);
        }else if (userTextArr[1] === 'box') {
          response = grab(userText, box);
        } else if (userTextArr[1] === 'keypad') {
          response = grab(userText, box);
        } else if (userTextArr[1] === 'paper') {
          response = grab(userText, paper);
        } else if (userTextArr[1] === 'key') {
          response = grab(userText, box);
        } else {
          response = grab(userText);
        }
        break;
      case "inspect":
        if (userTextArr[1] === 'door') {
          response = inspect(userText, door);
        }else if (userTextArr[1] === 'box') {
          response = inspect(userText, box);
        } else if (userTextArr[1] === 'keypad') {
          response = inspect(userText, box);
        }else if (userTextArr[1] === 'paper') {
          response = inspect(userText, paper);
        } else if (userTextArr[1] === 'key') {
          response = inspect(userText, box);
        } else if (userTextArr[1] === 'north' || userTextArr[1] === 'east' || userTextArr[1] === 'south' || userTextArr[1] === 'west') {
          response = inspect(userText, room)
        } else {
          response = inspect(userText);
        }
        break;
      default:
        response = "That's not a command I recognize.";
        break;
    }
    // if (userText === "help" || userText === "look") {
    //   $(".mainSection").append(response);
    // }else if (userText === "open" || userText === "open door") { debugger;
    //   response = open(userText);
    //   $(".mainSection").append(response);
    //
    // }
    $(".main-section").append('<p><span class="userTextOutput">>' + userText + '</span></p>');
    $(".main-section").append('<p>' + response + '</p>');
    $("#sidebar").text(inventory[0]);

    sidebar
     $("#inputArea").val('');
    $('.main-section').animate({scrollTop: $('.main-section').prop("scrollHeight")}, 5);
  });
});
