//business logic
function pingpong(number) {

  if (typeof number === "number") {
    for (var i = one; i <= number; i++) {

    }
  } else {
    return "enter a number"
  }

/**var one = 1;
for (var i = one; i <= number; i++) {

  if (i % 15 === 0 ) {
    console.log("pingpong");
  }else if (i % 3 === 0) {
    console.log("ping");
  }else if (i % 5 === 0) {
    console.log("pong");
  }else {
    console.log(i);
  }

}*/

}


//UI logic
$(document).ready(function () {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var number = $("input#number").val();
    var result = pingpong(number);

    $("#result").text(result);
  })

});
