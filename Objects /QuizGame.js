let questions = [
  {
    category: "easy",
    question: "How many days are in a week?",
    choices: ["A. 5", "B. 7", "C. 10"],
    answer: "B. 7"
  },
  {
    category: "easy",
    question: "What is the name of a shape with three sides?",
    choices: ["A. Square", "B. Circle", "C. Triangle"],
    answer: "C. Triangle"
  },
  {
    category: "easy",
    question: "Which fruit is often associated with Isaac Newton?",
    choices: ["A. Apple", "B. Banana", "C. Orange"],
    answer: "A. Apple"
  },
  {
    category: "easy",
    question: "What is the opposite of 'Hot'?",
    choices: ["A. Warm", "B. Cold", "C. Dry"],
    answer: "B. Cold"
  },
  {
    category: "easy",
    question: "Which animal says 'Meow'?",
    choices: ["A. Dog", "B. Cat", "C. Cow"],
    answer: "B. Cat"
  },
  {
    category: "tough",
    question: "What is the chemical symbol for Tungsten?",
    choices: ["A. T", "B. Tu", "C. W"],
    answer: "C. W"
  },
  {
    category: "tough",
    question: "Which of these is the smallest prime number?",
    choices: ["A. 1", "B. 2", "C. 3"],
    answer: "B. 2"
  },
  {
    category: "tough",
    question: "In what year did the Great Fire of London occur?",
    choices: ["A. 1666", "B. 1776", "C. 1492"],
    answer: "A. 1666"
  },
  {
    category: "tough",
    question: "Which gas makes up approximately 78% of Earth's atmosphere?",
    choices: ["A. Oxygen", "B. Nitrogen", "C. Argon"],
    answer: "B. Nitrogen"
  },
  {
    category: "tough",
    question: "Who developed the theory of General Relativity?",
    choices: ["A. Isaac Newton", "B. Nikola Tesla", "C. Albert Einstein"],
    answer: "C. Albert Einstein"
  }
]


function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}