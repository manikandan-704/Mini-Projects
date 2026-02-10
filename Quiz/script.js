const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resulScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const questionSection = document.getElementById("dispaly-qus");
const anserOptions = document.getElementById("ans-container");

const questionIndex = document.getElementById("current-question");
const scoreSpan = document.getElementById("score");

const progressBar = document.getElementById("prgress-bar");

const questionDisp=document.getElementById("display-qus")

const finalSpan = document.getElementById("final-score");
const resMess = document.getElementById("result-message");


const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

let currentquestionIndex = 0;
let score = 0;
let disableAns = false;

startBtn.addEventListener('click',startQuiz);
restartBtn.addEventListener('click',restartQuiz);

function startQuiz() {
  currentquestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();

}

function showQuestion(){
    disableAns=false;
    const currentQus=questionIndex=quizQuestions[currentquestionIndex]

    questionIndex.textContent=currentquestionIndex+1;

    const progressPersent=(currentquestionIndex / quizQuestions.length)*100;
    progressBar.style.width=progressPersent+"%";

    questionDisp.textContent=currentQus.question;

    anserOptions.innerText=""
    currentQus.answers.forEach(answer => {
        const button=document.createElement("button")
        button.textContent=answer.text
        button.classList.add("ans-btn")

        button.dataset.correct=answer.correct

        button.addEventListener('click',selectAnswer)
        anserOptions.appendChild(button)
    });
}

    function selectAnswer(e){
        if(disableAns) return disableAns=true
        const selectedBtn=e.target;
        const isCorrect=selectedBtn.dataset.correct === "true"

        Array.from(anserOptions.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct")
            }
            else{
                  button.classList.add("incorrect")  
                }
        });
        if(isCorrect){
            score++;
            scoreSpan.textContent=score;
        }
        setTimeout(()=>{
            currentquestionIndex++;
            if(currentquestionIndex<quizQuestions.length){
                showQuestion
            }
            else{
                showResult()
            }
        },1000)
    }
    function showResult(){
        quizScreen.classList.remove("active")
        resulScreen.classList.add("active")

        finalSpan.textContent=score;
        const Persentage=(score/quizQuestions.length)*100;
        if(Persentage===100){
            resMess.textContent="Perfect"
        }
        else{
            resMess.textContent="keep it up"
        }
    }

function restartQuiz() {
  console.log("restarted");
}
