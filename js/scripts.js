var inventory = [];

//Business logic

function Room () {
  this.roomNumber = 1;
  this.look = "You see a door, a stainless steel box, and a trail of blood.";
  this.objects = [door, box];
}

function Door(locked) {
  this.locked = locked;
}

function Box(locked) {
  this.locked = locked;
}

var userInteraction = function(input) {
  switch(input) {
    case "help":
      $(".mainSection").append(showHelp());
      break;
    case "look" || "look around":
      look(room);
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
  // var returnStr = 'You see ';
  // room.objects.forEach(object, index) {
  //   if (index === objects.length - 1) {
  //     returnStr+= "and " + object + ".";
  //   } else {
  //     returnStr+= object + ", "
  //   }
  // }
  return room.look;
}

var open = function(article = '', door) {
  if (!article) {
    return "What are you trying to open?";
  } else {
    if (article === 'door') {
      if (door.locked) {
        return "You try vigorously to get out but the door seems to be locked. Your mind starts to race.";
      } else {
        return "Congratulations!!! You open the door and step into a dark room that smells of fragrant cheese. The door slams shut behind you.";
      }
    } else if (article === 'box') {
      return 'The box is locked but you see that it has an alphanumeric keypad.';
    } else if (article === 'key') {
      	return 'Keys are for opening things not the other way around.';
    } else {
      return "You can't open that...";
    }
  }
}

var use = function(article = '') {
  if (!article) {
    return "What are you trying to use?";
  } else if (article === 'door') {
    return "What the heck do you mean 'use' door? Did you mean 'open door'?";
  } else if (article === 'box') {
    return "How do you intend to use the box? It's a box that is yearning to be opened.";
  } else if (article === 'key') {
    return "This key looks like it was made for a door. Try opening one."
  } else if (article === 'keypad'){
    var enterPasscode = prompt("Please enter the passcode:");
    if (enterPasscode.toLowerCase() === "hello world") {
      box.locked = false;
      return "You hear a click and the box creaks open. A key glows from the bottom of the box."
    } else {
      return "A message populates the LCD screen on the keypad saying 'Incorrect passcode, please try again'"
    }
  } else {
    return "You can't use that..."
  }
}

var inspect = function(article = '') {
  if (!article) {
    return "What would you like to inspect?";
  } else {
    if (article === 'door') {
      if (nokey) {
        return "The door appears to be locked.";
      } else {
        return "Maybe you should unlock this door.";
      }
    } else if (article === 'blood') {
      return "The blood on the ground leads to a hole in the wall.";
    } else if (article === 'hole' || article === 'wall') {
      return "You peer in the hole and see a small piece of paper.";
    } else if (article === 'paper') {
      return "The paper is smeared with blood. You look closer and see a message that says,\"My fondest moment as a programmer was my first website and it said 'HoWled roll'......I think, but that's probably not right.\"";
    } else if (article === 'box') {
      return "The box seems to be locked and made of industry-grade stainless steel with a alphanumeric digital keypad on the side and some text on the side that says, 'To see what's inside this box you must know what all first websites have in common.'";
    } else if (article === 'key') {
      if (!box.locked) {
        return "This key looks like it was made for a door. Try opening one.";
      } else {
        return "You can't see any such object."
      }
    } else {
      return "You can't see any such object.";
    }
  }
}

var grab = function(article = '') {
  if (!article) {
    return "What are you trying to grab?";
  } else {
    if (article === 'door') {
      return "You grab the door handle and it doesn't open.";
    } else if (article === 'blood') {
      return "Now the blood is on your hands. I hope the cops don't show up.";
    } else if (article === 'paper') {
      return "The paper is smeared with blood. You look closer and see a message that says,\"My fondest moment as a programmer was my first website and it said 'HoWled roll'......I think, but that's probably not right.\"";
    } else if (article === 'box') {
      return "The box is bolted to the ground.";
    } else if (article === 'key') {
      if (box.locked) {
        return "You can't grab that.";
      } else if (inventory[0] != "key") {
        inventory.push("key");
        return "You grab the key and your heart fills with glee. You realize that there might be a way out of this awful room.";
      } else {
        return "You already picked up the key. You should probably get your eyes checked."
      }
    } else {
      return "You can't grab that...";
    }
  }
}

//User Interface Logic
$(document).ready(function() {
  $("#formInput").submit(function(event){
    event.preventDefault();

    var userText = $("#inputArea").val()
    userInteraction(userText);

  });
});
