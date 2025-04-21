const quizData = [
    {
      question: "Qual linguagem é usada para estilizar páginas web?",
      options: ["HTML", "Python", "CSS", "Java"],
      answer: "CSS"
    },
    {
      question: "O que significa 'DOM'?",
      options: ["Document Object Model", "Design of Machines", "Data Over Method", "Do Other Math"],
      answer: "Document Object Model"
    },
    {
      question: "Qual destes é um framework JavaScript?",
      options: ["Laravel", "Django", "React", "Flask"],
      answer: "React"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");
  const scoreEl = document.getElementById("score");
  
  function showQuestion() {
    const q = quizData[currentQuestion];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.innerText = option;
      btn.onclick =() => selectOption(btn, q.answer);
      optionsEl.appendChild(btn);
    });
  
    nextBtn.style.display = "none";
  }
  
  function selectOption(button, correctAnswer) {
    const buttons = optionsEl.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);
  
    if (button.innerText === correctAnswer) {
      button.style.backgroundColor = "#00c853";
      score++;
    } else {
      button.style.backgroundColor = "#d50000";
    }
  
    nextBtn.style.display = "block";
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      questionEl.innerText = "Quiz finalizado!";
      optionsEl.innerHTML = "";
      nextBtn.style.display = "none";
      scoreEl.innerText = `Você acertou ${score} de ${quizData.length} perguntas!`;
    }
  });
  
  showQuestion();