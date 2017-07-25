# _Word Adventure_

#### _Word Adventure 07.25.17_

#### By _**Robert Murray, Victor Puentes, Michael Woldemedihin, Charlie Brown, Jessi***_

## Description


_This is a text based game whose objective is solving puzzles to scape from the room_

| Behavior  | Input  | Output  |
|---|---|---|
| User visits website |  website loads| You wake up in an unfamiliar room on the floor. <br> On the ceiling written in blood "Type 'help' to see commands" <br> You consider it as you stand up.  |
|User types "help"| `help` | Commands for House Escape <br>`look` = look around the room <br>`open` + `object` = open the object if it can be opened <br>`use` + `object` = interact with the object in the room <br>`grab` + `object` = grab the object if it can be grabbed <br>`inspect` + `object` = look at the object closely|
| User enters "look" | `look`, `look around` |  You see a trail of blood, a steel box with a keypad and a door |
|  User types "open" | `open`  | What are you trying to open? |
| User types "use"   | `use`  | What are you trying to use?  |
| User types "grab" | `grab`  |  What are you trying to grab? |
|  User types "inspect" |  `inspect` |  What would you like to inspect?|
|   User types "inspect door" without key | `inspect door`  | The door appears to be locked  |
| User types "open door" | `open door` | You try vigorously to get out but the door seems to be locked. Your mind starts to race.|
| User types "use door" | `use door` | What the heck do you mean "use" door? Did you mean "open door"?|
| User types "grab door" | `grab door `| You grab the door handle and it doesn't open |
|  User types "inspect blood" |  `inspect blood` | The blood on the ground leads to a hole in the wall  |
| User types "grab blood" | `grab blood` | Now the blood is on your hands. I hope the cops don't show up. |
| User types "open blood" | `open blood` | You can't open that |
|  User types "inspect hole" |  `inspect hole, inspect wall, inspect hole in the wall, inspect hole in wall`| The blood on the ground leads to a hole in the wall and you pear in the hole to see a small piece of paper|
| User types "open hole" | `open hole `| You can't open that |
| User types "grab paper"| `grab paper` | "The paper is smeared with blood. You look closer and see a message that says,"My fondest moment as a programmer was my first website and it said *HoWled roll*......I think, but that's probably not right"  |
| User types "inspect paper"| `inspect paper` | "The paper is smeared with blood. You look closer and see a message that says,"My fondest moment as a programmer was my first website and it said *HoWled roll*...... I think"|
| User types "open paper" | `open paper` | You can't open that |
| User types "inspect box" | `inspect box ` | The box seems to be locked and made of industry-grade stainless steel with a alphanumeric digital keypad on the side and some text on the side that says, "To see what's inside this box you must know what all first websites have in common". |
| User types "open box" | `open box `| The box is locked but you see that it has an alphanumeric keypad|
| User types "grab box" | `grab box` | The box is bolted to the ground|
| User types "use box" | `use box` | How do you intend to use the box? It's a box that is yearning to be opened|
| User types "use keypad" | `use keypad` | A text box will appear prompting the use to enter the passcode|
| User types something other than "hello world" | `some text` | A message populates the LCD screen on the keypad saying "Incorrect passcode, please try again"|
| User types "hello world" | `hello world` | You hear a click and the box creaks open. A key glows from the bottom of the box.|
| User types "grab key" | `grab key` | You grab the key and your heart fills with glee. You realize that their might be a way out of this awful room.|
| User types "use key"| `use key` | This key looks like it was made for a door. Try opening one.|
| User types "inspect key"| `inspect key` | This key looks like it was made for a door. Try opening one.|
| User types "open key"| `open key` | Keys are for opening things not the other way around.|
| User types "open door" with key in inventory |` open door `| Congratulations you open the door and step into a dark room that smells of fragrant cheese and the door slams shut behind you|





## Setup/Installation Requirements

* _Clone this repository_

## Known Bugs


## Technologies Used

_JavaScript & jQuery_

### License

This software is licensed by the MIT License

Copyright (c) 2017 **_Robert Murray & Kaili Nishihira_**
