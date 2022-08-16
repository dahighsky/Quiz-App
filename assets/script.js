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

let users = [
  {
    userName: "Aakash",
    userScore: 69
  }
]

var score = 0;

function quiz(){
  console.log("here")
  let question = document.getElementById("quest");
  let opt = document.querySelectorAll(".quest-opt")
  let result = document.getElementById("check")

  newQuestion();
  function newQuestion(questionIndex = 0){
    if(questionIndex < questions.length){
      question.innerHTML = questions[questionIndex].questionText
      console.log("iteration check 1")
      opt.forEach(function(text, index){
        opt[index].innerText = questions[questionIndex].options[index]
        console.log("iteration check 2", questionIndex)
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
    else{
      displayScore(score)
    }
  }  
}

function displayScore(score){
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "flex";
  console.log(score)
  document.getElementById("show-score").innerText = score;
  document.getElementById("initials").addEventListener("keyup", function(event){
    uName = event.target.value
    console.log(uName)
  })

  document.getElementById("save-user").addEventListener("click", function(){
    console.log(uName + "user here")
    if(uName){
      addUser(uName, score)
      console.log("User here")
    }
  })
}

function addUser(uName, score){
  users.push({userName: uName,
              userScore: score})
  showHighscores()
}

document.getElementById("leaderboard").addEventListener("click", showHighscores)

function showHighscores(){
  document.getElementById("intro").style.display = "none";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("check").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("highscores").style.display = "flex";
  
  var scoreList = ""

  users.forEach(function(value, index){
    rank = index + 1
    scoreEntry = `${rank}. ${users[index].userName} - ${users[index].userScore} <br>`
    scoreList = scoreList + scoreEntry
  })

  scoresView = document.getElementById("scores")
  scoresView.innerHTML = scoreList

  document.getElementById("go-back").addEventListener("click", restart)
  document.getElementById("clear-scores").addEventListener("click", clearHighscores)
}

function clearHighscores(){
  users = [
    {
      userName: "Aakash",
      userScore: 69
    }
  ]
  showHighscores()
}

function restart(){
  document.getElementById("intro").style.display = "flex";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("check").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("highscores").style.display = "none";
}
function startQuiz(){
  document.getElementById("intro").style.display = "none";
  document.getElementById("quiz").style.display = "flex";
  quiz()
}