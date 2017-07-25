//Business logic

function Room () {
  this.roomNumber = 1;
  this.objects = ["a door", "a steel chest", "and a trail of blood"];
}

var showHelp = function() {
     return "<p>Commands for House Escape:</p>" +
    "<p>look = look around the room</p>" +
    "<p>open + object = attempt to open the object</p>" +
    "<p>use + object = interact with the object in the room or inventory</p>" +
    "<p>grab + object = attempt to grab the object</p>" +
    "<p>inspect + object = obtain further details about the object</p>";

}

var look = function() {
  return
}

//User Interface Logic
$(document).ready(function() {
  $("#formInput").submit(function(event){
    event.preventDefault();

    var userText = $("#inputArea").val()

    switch(userText) {
      case "help":
        $(".mainSection").append(showHelp());
        break;
      case "look" || "look around":
        look();
    };
  });
});
