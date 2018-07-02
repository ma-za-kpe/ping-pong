//business logic


//UI logic
$(document).ready(function () {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var number = $("input#number").val();
    var result = pingpong(number);

    $("#result").text(result);
  })

});
