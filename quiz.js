const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "Who is President of Russia?", answer: "vladimir putin" },
  { question: "Which language is used for web development?", answer: "javascript" }
];

function runQuiz() {
  let score = 0; // Initialize score

  // Loop through all questions
  for (let i = 0; i < quizQuestions.length; i++) {
    // Take user input
    const userAnswer = prompt(quizQuestions[i].question);

    // Normalize input (case-insensitive + trim spaces)
    if (
      userAnswer &&
      userAnswer.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()
    ) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  // Show final score
  alert("Quiz Over! Your final score is " + score + " out of " + quizQuestions.length);
}

// Run the quiz
runQuiz();