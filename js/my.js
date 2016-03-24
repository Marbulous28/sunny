$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var dennis = 0;
    var dee = 0;
    var mac = 0;
    var charlie = 0;

    if (question1 === 1) {
      dennis += 1;
    } else if (question1 === 2) {
      dee += 1;
    } else if (question1 === 3) {
      mac += 1;
    }
    else if (question1 === 4) {
      charlie += 1;
    }

    if (question2 === 1) {
       dennis += 1;
    } else if (question2 === 2) {
       dee += 1;
    } else if (question2 === 3) {
       mac += 1;
    } else if (question2 === 4) {
       charlie += 1;
    }

    if (question3 === 1) {
       dennis += 1;
    } else if (question3 === 2) {
       dee += 1;
    } else if (question3 === 3) {
       mac += 1;
    } else if (question3 === 4) {
       charlie += 1;
    }

    if (dennis >= 2){
      alert('You are Dennis!');
    } else if (charlie >= 2){
      alert('You Are Charlie');
    } else if (dee >= 2) {
      alert('You are Dee!');
    } else if (mac >= 2) {
      alert('You Are Mac!');
    }
  });
});
