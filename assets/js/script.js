// script.js
let currentQuiz = 1;
const totalQuizzes = 30;
const laterQuizzes = new Set();

function showQuiz(quizNumber) {
  const quizzes = document.querySelectorAll(".quiz");

  quizzes.forEach((quiz) => {
    quiz.style.display = "none";
  });

  const currentQuizElement = document.getElementById(`quiz-${quizNumber}`);
  if (currentQuizElement) {
    currentQuizElement.style.display = "block";
  }
}

function nextQuiz() {
  if (currentQuiz < totalQuizzes) {
    currentQuiz++;
    showQuiz(currentQuiz);
  } else {
    alert("마지막 퀴즈입니다.");
  }
}

function previousQuiz() {
  if (currentQuiz > 1) {
    currentQuiz--;
    showQuiz(currentQuiz);
  } else {
    alert("첫 번째 퀴즈입니다.");
  }
}

function goToQuiz(quizNumber) {
  currentQuiz = quizNumber;
  showQuiz(currentQuiz);
}

function markQuizAsLater(quizNumber) {
  const checkbox = document.getElementById(`check-quiz-${quizNumber}`);
  if (checkbox.checked) {
    laterQuizzes.add(quizNumber);
  } else {
    laterQuizzes.delete(quizNumber);
  }
  updateQuizMenu();
}

function updateQuizMenu() {
  const quizMenuItems = document.querySelectorAll(".quiz-menu a");

  quizMenuItems.forEach((menuItem, index) => {
    const quizNumber = index + 1;
    if (laterQuizzes.has(quizNumber)) {
      menuItem.classList.add("not-solved");
    } else {
      menuItem.classList.remove("not-solved");
    }
  });
}

// 초기화면 설정
showQuiz(1);
updateQuizMenu();
