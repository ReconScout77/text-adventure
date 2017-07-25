//Business logic

function Room () {

}

var showHelp = function() {
  $(".mainSection").append(
    "<p>Commands for House Escape:</p>" +
    "<p>look = look around the room</p>" +
    "<p>open + object = attempt to open the object</p>" +
    "<p>use + object = interact with the object in the room or inventory</p>" +
    "<p>grab + object = attempt to grab the object</p>" +
    "<p>inspect + object = obtain further details about the object</p>"
    )
}

//User Interface Logic
$(document).ready(function() {
  $("#formInput").submit(function(event){
    event.preventDefault();
    var userText = $("#inputArea").val()
    switch(userText) {
      case "help":
        showHelp();
    };
  });
});
