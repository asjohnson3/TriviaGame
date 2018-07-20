
// var time = 1000 * 30;

// setTimeout(timeUp, time);
// setTimeout(timeUp, 1000 * 15);


// function timeUp() {

  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  // console.log("done");
  // $("#time-left").append("<h2>Time's Up!</h2>");
  // console.log("time is up");

  //  The following line will play the audio file we linked to above:
//   audio.play();
// }
var counter = setInterval(countdown,1000);
var timeleft = 30;
var running = 0

function countdown(){
  if (running === 1){
    clearInterval(counter);
    timeleft = timeleft;
    return;
  }
  if (timeleft > 0){
    timeleft--;
  }else{
    clearInterval(counter);
    alert("done");
    return;
  }
  $("#time").html("<h2>"+timeleft+"s</h2");
}

// function countdown(){
//   if (timeleft > 0){
//     timeleft--;
//   }else if (timeleft = 0){
//     clearInterval(counter);
//     alert("done");
//     return;
//   }else if ($("#results").len){
// timeleft = timeleft;
//   }
// }


var submitAnswer = function() {
  var correct = 0;
  running = 1;
  var button1 = document.getElementsByName('one');
  var answer1= "";
  for (var i = 0, length = button1.length; i < length; i++) {
      if (button1[i].checked) {
         answer1 = button1[i].value; 
         break;
       }
  }

  var button2 = document.getElementsByName('two');
  var answer2= "";
  for (var i = 0, length = button2.length; i < length; i++) {
      if (button2[i].checked) {
         answer2 = button2[i].value; 
         break;
       }
  }

  var button3 = $("[name='three']");
  var answer3= "";
  for (var i = 0, length = button3.length; i < length; i++) {
      if (button3[i].checked) {
         answer3 = button3[i].value; 
         break;
       }
  }

  var button4 = document.getElementsByName('four');
  var answer4= "";
  for (var i = 0, length = button4.length; i < length; i++) {
      if (button4[i].checked) {
         answer4 = button4[i].value; 
         break;
       }
  }

  if (answer1 === "Donald Trump"){
    correct++;
  }
  if (answer2 === "8"){
    correct++;
  }
  if (answer3 === "1964"){
    correct++;
  }
  if (answer4 === "Hypertext Markup Language"){
    correct++;
  }
  console.log(correct);
  $("#results").html('<p>'+'You got ' + correct+ ' correct answers!');
  
  if (answer1 == "" || answer2 =="" || answer3 =="" ||answer4 =="") {
    alert('You Failed to Complete the Test!');
  } 
  // else if ( answer1 == "Scripting" && answer2 == "Programming") {
  //   alert('Answer is correct !');
  // } else {
  //   alert('Answer is wrong');
  // }
};


// setInterval()
// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.text(minutes + ":" + seconds);

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
//     console.log(timer);
// }


// jQuery(function ($) {
//     var fiveMinutes = 60 * 2,
//         display = $('#time');
//     startTimer(fiveMinutes, display);
// });

