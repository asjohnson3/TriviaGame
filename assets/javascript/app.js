
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
var timeleft = 11;

function countdown(){
  if (timeleft > 0){
    timeleft--;
  }else {
    clearInterval(counter);
    console.log("done");
    return;
  }
  $("#time").html(timeleft+"s");
}




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

