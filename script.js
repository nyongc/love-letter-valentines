const questions = [
  {
    q: "Question 1: San tayo unang nagkita?",
    options: ["Bahay", "Church", "Grocery Store", "Resort"],
    correct: 1,
    correctMsg: "Yey the first time where i laid my eyes on you 🥺💖",
    wrongMsg: "Nagkamali pa aray ko!"
  },
  {
    q: "Question 2: San tayo unang nagdate?",
    options: ["Tambayan", "Rohi", "Samgyupsalan", "Lomihan sa Malasen"],
    correct: 3,
    correctMsg: "Oum un ung time na napakaganda ng eyes mo as you look in the stars i love you🥰",
    wrongMsg: "Maliii 😜"
  },
  {
    q: "Question 3: San sa katawan ko pag nagcucuddle tayo ang gusto mokong ikiss?",
    options: ["Neck", "Kamay", "Balikat", "Lips"],
    correct: 0,
    correctMsg: "Yan nanghihina talaga ako pag jan 😍🔥",
    wrongMsg: "Sa neck kasi yon!"
  },
  {
    q: "Question 4: Hulaan mo kung gaano na kita kamiss at kagigil in cuddling with you?",
    options: [
      "25%, medj okay pa",
      "50% nafefeel kona pagkamiss ko sayo",
      "75%, in heat na",
      "100% i wanna mess you all over and mark you arghh"
    ],
    correct: 3,
    correctMsg: "Dahil tama ka jan, kiss all over ka saken 🩷",
    wrongMsg: "Lohh kitang kita niya na nga oh 💕"
  },
  {
    q: "Question 5: Gusto kong itawag mo sakin when i feel down?",
    options: [
      "Come here asawa ko, i love you",
      "Pahinga ka maigi",
      "Eyyy",
      "Lohh feeling down yarn"
    ],
    correct: 0,
    correctMsg: "Obvious na ha hehe i love you 🥺💞",
    wrongMsg: "Talagang laro 😘"
  }
];

let current = 0;
let started = false;

const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");

function showQuestion() {
  const q = questions[current];

  quiz.innerHTML = `
    <h2>${q.q}</h2>

    <div class="options-grid">
      ${q.options.map((opt, index) => `
        <label class="option">
          <input type="radio" name="answer" value="${index}">
          <span class="letter">${String.fromCharCode(65 + index)}.</span>
          <span class="text">${opt}</span>
        </label>
      `).join("")}
    </div>

    <div id="reaction" style="margin-top:10px; font-weight:bold;"></div>
  `;
}

nextBtn.onclick = () => {

  // START MODE
  if (!started) {
    started = true;
    showQuestion();
    nextBtn.innerText = "Next 💕";
    return;
  }

  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Choose an answer first 😅");
    return;
  }

  const answerIndex = parseInt(selected.value);
  const reaction = document.getElementById("reaction");

  if (answerIndex === questions[current].correct) {
    reaction.innerHTML = "💖 " + questions[current].correctMsg;
    reaction.style.color = "green";
  } else {
    reaction.innerHTML = "💔 " + questions[current].wrongMsg;
    reaction.style.color = "red";
  }

  nextBtn.disabled = true;

  setTimeout(() => {
    current++;
    nextBtn.disabled = false;

    if (current < questions.length) {
      showQuestion();
    } else {
      window.location.href = "letter.html";
    }
  }, 2000);
};
