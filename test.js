const testList = [
  { answer: '무야호', imageUrl: 'assets/test1.jpeg' },
  { answer: '아모르파티', imageUrl: 'assets/test2.jpeg' },
  { answer: '던질까말까', imageUrl: 'assets/test3.jpeg' },
  { answer: '깡', imageUrl: 'assets/test4.jpeg' },
  { answer: '4달라', imageUrl: 'assets/test5.jpeg' },
  { answer: '호롤롤로', imageUrl: 'assets/test6.jpeg' },
  { answer: '아안돼', imageUrl: 'assets/test7.jpeg' },
  { answer: 'ppap', imageUrl: 'assets/test8.jpeg' },
  { answer: '마포대교는무너졌냐', imageUrl: 'assets/test9.jpeg' },
  { answer: '이제는더이상물러날곳이없다', imageUrl: 'assets/test10.jpeg' },
];

let currentQuestion = 0;
let userAnswers = [];

document.addEventListener('DOMContentLoaded', function () {
  const questionNumberElem = document.getElementById('question-number');
  const questionImageElem = document.getElementById('question-image');
  const answerInputElem = document.getElementById('answer-input');
  const submitBtnElem = document.getElementById('submit-btn');
  const resultContainerElem = document.getElementById('result-container');
  const finalScoreElem = document.getElementById('final-score');
  const resultListElem = document.getElementById('result-list');

  function loadQuestion() {
    const currentData = testList[currentQuestion];
    questionNumberElem.textContent = `문제 ${currentQuestion + 1}`;
    questionImageElem.src = currentData.imageUrl;
    questionImageElem.alt = `문제 ${currentQuestion + 1} 이미지`;
    answerInputElem.value = '';
  }

  function showResults() {
    resultContainerElem.style.display = 'block';
    let score = 0;

    testList.forEach((question, index) => {
      const userAnswer = userAnswers[index] || '';
      const isCorrect =
        userAnswer.toLowerCase() === question.answer.toLowerCase();
      if (isCorrect) {
        score++;
      }

      const resultItem = document.createElement('li');
      resultItem.classList.add('list-group-item');
      resultItem.textContent = `문제 ${index + 1}: 정답은 "${
        question.answer
      }", 당신의 답은 "${userAnswer}" (${isCorrect ? '정답' : '오답'})`;
      resultListElem.appendChild(resultItem);
    });

    finalScoreElem.textContent = `당신의 최종 점수는 ${score} / ${testList.length} 입니다.`;
  }

  submitBtnElem.addEventListener('click', function () {
    const userAnswer = answerInputElem.value.trim();
    userAnswers[currentQuestion] = userAnswer;

    currentQuestion++;

    if (currentQuestion < testList.length) {
      loadQuestion();
    } else {
      document.querySelector('.card').style.display = 'none';
      showResults();
    }
  });

  loadQuestion();
});
