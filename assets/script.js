const questions = [
    {
      questionText: "Commonly used data types DO NOT include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: 2,
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
      ],
      answer: 3,
    },
    {
      questionText:
        "String values must be enclosed within _____ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
      answer: 2,
    },
    {
      questionText:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
      ],
      answer: 3,
    },
    {
      questionText:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      options: ["1. break", "2. stop", "3. halt", "4. exit"],
      answer: 0,
    },
  ];

function quiz(){
  console.log("here")
  let question = document.getElementById("quest");
  let opt = document.querySelectorAll(".quest-opt")
  let result = document.getElementById("check")

  var score = 0;
  newQuestion();
  function newQuestion(questionIndex = 0){
    question.innerHTML = questions[questionIndex].questionText
    console.log("iteration check 1")
    opt.forEach(function(text, index){
      opt[index].innerText = questions[questionIndex].options[index]
      console.log("iteration check 2")
      opt[index].addEventListener("click", function(){
        if(index == questions[questionIndex].answer){
          result.innerText = "Correct!"
          score++
          console.log("herehere")
          questionIndex++
          newQuestion(questionIndex)
        }
        else{
          result.innerText = "Incorrect!"
          console.log("hehehe")
          questionIndex++
          newQuestion(questionIndex)
        }
      })
    })
    console.log(score)
  }  
}

function startQuiz(){
  document.getElementById("intro").style.display = "none";
  document.getElementById("quiz").style.display = "flex";
  quiz()
}