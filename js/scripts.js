//business logic
function pingpong(number) {
  var num = [];

  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      //console.log("pingpong");
      num.push("pingpong")
    }else if (i % 3 === 0) {
      //console.log("ping")
      num.push("ping")
    } else if (i % 5 === 0) {
      //console.log("pong");
      num.push("pong")
    }else {
      //console.log(i);
      num.push(i);
    }

  }
  return num;
}


//UI logic
$(document).ready(function () {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var number = $("input#num").val();
    var result = pingpong(number);

    $("#result").text(result);
  })

});
