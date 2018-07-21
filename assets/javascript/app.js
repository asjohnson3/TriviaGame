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

};


