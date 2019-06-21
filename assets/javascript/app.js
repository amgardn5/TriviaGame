const data = [
    {
      "question" : "Against what opposing team did Babe Ruth hit his first career home run?",
      "options" : ["New York Yankees","Chicago Cubs","Boston Red Sox","Baltimore Black Sox"],
      "answer" : 1
    },
    {
      "question" : "Who was the first Major League player to pitch a ball over 100 mph?",
      "options" : ["Roger Clemens","Nolan Ryan","Tom Seaver", "Dwight Gooden"],
      "answer" : 2
    },
    {
      "question" : "What is the name of the capital of Australia?",
      "options" : ["Brisbane","Melbourne","Sydney", "Canberra"],
      "answer" : 4
    },
    {
      "question" : "What plant is traditionally the primary ingredient in tequila?",
      "options" : ["Grape","Plum","Agave", "Aloe"],
      "answer" : 3
    },
    {
      "question" : "What country is sushi from?",
      "options" : ["China","Japan"," South Korea", "Thailand"],
      "answer" : 2
    },
    {
      "question" : "About how many countries are there in the world?",
      "options" : ["200","100","150", "100"],
      "answer" : 1
    },
    {
      "question" : "How many planets are there in the solar system? ",
      "options" : ["7","8","9", "10"],
      "answer" : 2
    },
    {
      "question" : "The result of __ toNumber([]); __ in javascript is?",
      "options" : ["false","true","1", "0"],
      "answer" : 4
    },
    {
      "question" : "Which team won the World Series in 2018?",
      "options" : ["New York Yankees","Chicago Cubs","Boston Red Sox", "Houston Astros"],
      "answer" : 3
    }
];
const number_questions = data.length;
var i = 0; // index of the questions
var counter = 30;
var score = 0;
var wrong_answers = 0;
var timeout;
$("#restart").hide();
$(document).ready(function(){
    timeout = setTimeout('setCounter()', 0);
    setbackground();
});
  
function setbackground(){
    
    $("#question").text(data[i].question);
    $("#btn1").val(data[i].options[0]);
    $("#btn2").val(data[i].options[1]);
    $("#btn3").val(data[i].options[2]);
    $("#btn4").val(data[i].options[3]);
  
    $("#btn1").text(data[i].options[0]);
    $("#btn2").text(data[i].options[1]);
    $("#btn3").text(data[i].options[2]);
    $("#btn4").text(data[i].options[3]);
}
  
$("#btn1").click(function(){
    let answer_index = data[i].answer -1;
    if (data[i].answer === 1) {
      alert("Correct\n" + data[i].options[answer_index]);
      score++;
    } else {
      wrong_answers++;
      alert("Wrong\nCorrect answer:\n" + data[i].options[answer_index]);
    }
    changeQuestion();
  
});
  
$("#btn2").click(function(){
    let answer_index = data[i].answer -1;
    if (data[i].answer === 2) {
      alert("Correct\n" + data[i].options[answer_index]);
      score++;
    } else {
      wrong_answers++;
      alert("Wrong\nCorrect answer:\n" + data[i].options[answer_index]);
    }
    changeQuestion();
});
  
$("#btn3").click(function(){
    let answer_index = data[i].answer -1;
    if (data[i].answer === 3) {
      alert("Correct\n" + data[i].options[answer_index]);
      score++;
    } else {
      wrong_answers++;
      alert("Wrong\nCorrect answer:\n" + data[i].options[answer_index]);
    }
    changeQuestion();
});
  
$("#btn4").click(function(){
    let answer_index = data[i].answer -1;
    if (data[i].answer === 4) {
      alert("Correct\n" + data[i].options[answer_index]);
      score++;
    } else {
      wrong_answers++;
      alert("Wrong\nCorrect answer:\n" + data[i].options[answer_index]);
    }
    changeQuestion();
});

$("#restart").click(function(){
    i = 0;
    $("#timer").show();
    setbackground();
    $("#restart").hide();
    score = 0;
    wrong_answers = 0;
});
  
function setCounter(){
    $("#timer").text(counter);
    counter--;
    if (counter < 0){
      counter = 30;
      let answer_index = data[i].answer -1;
      alert("Timeout\nCorrect answer:\n" + data[i].options[answer_index]);
      changeQuestion();
    }
    timeout = setTimeout('setCounter()', 1000);
}
  
function changeQuestion(){
    i++;
    if (i < number_questions){
      counter = 30;
      setbackground();
    } else {
      alert("End of Game\nFinal Score:" + score + "\nWrong answers:"+ wrong_answers);
      $("#timer").hide();
      $("#restart").show();
    }
}
