$(document).ready(function () {
  var rand = Math.floor(Math.random() * 101 + 19)
  $('#neg').text(rand);

  var char1 = Math.floor(Math.random() * 11 + 1)
  var char2 = Math.floor(Math.random() * 11 + 1)
  var char3 = Math.floor(Math.random() * 11 + 1)
  var char4 = Math.floor(Math.random() * 11 + 1)

  var charlie = 0;
  var dates = 0;
  var rejections = 0;
  $('#dates').text(dates);
  $('#rejections').text(rejections);

  function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    $('#neg').text(rand);
    char1 = Math.floor(Math.random() * 11 + 1);
    char2 = Math.floor(Math.random() * 11 + 1);
    char3 = Math.floor(Math.random() * 11 + 1);
    char4 = Math.floor(Math.random() * 11 + 1);
    charlie = 0;
    $('#total').text(charlie);
    console.log(rand);
  }

  function scored() {
    alert("You got a date!");
    dates++;
    $('#dates').text(dates);
    reset();
  }
  function rejected() {
    alert("You over-negged!");
    rejections++;
    $('#rejections').text(rejections);
    reset()
  }
  $('#charlie1').on('click', function () {
    charlie = charlie + char1;
    $('#total').text(charlie);
    if (charlie == rand) {
      scored();
    }
    else if (charlie > rand) {
      rejected();
    }
    console.log("Charlie Total= " + charlie);
  })
  $('#charlie2').on('click', function () {
    charlie = charlie + char2;
    $('#total').text(charlie);
    if (charlie == rand) {
      scored();
    }
    else if (charlie > rand) {
      rejected();
    }
    console.log("Charlie Total= " + charlie);
  })
  $('#charlie3').on('click', function () {
    charlie = charlie + char3;
    $('#total').text(charlie);
    if (charlie == rand) {
      scored();
    }
    else if (charlie > rand) {
      rejected();
    }
    console.log("Charlie Total= " + charlie);
  })
  $('#charlie4').on('click', function () {
    charlie = charlie + char4;
    $('#total').text(charlie);
    if (charlie == rand) {
      scored();
    }
    else if (charlie > rand) {
      rejected();
    }
    console.log("Charlie Total= " + charlie);
  });
}); 