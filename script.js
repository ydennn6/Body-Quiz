const topics = [
  {
    title: "Otak",
    description: "Otak merupakan pusat pengendali sistem saraf. Organ ini menerima dan mengolah informasi dari tubuh, mengatur aktivitas tubuh, serta mengoordinasikan berbagai gerakan.",
    extra: "Otak memiliki beberapa bagian dengan fungsi berbeda, seperti otak besar, otak kecil, dan batang otak.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Major_parts_of_the_brain.jpg"
  },
  {
    title: "Sumsum Tulang Belakang",
    description: "Sumsum tulang belakang merupakan bagian dari sistem saraf pusat yang berada di dalam ruas tulang belakang. Bagian ini menghubungkan otak dengan saraf di berbagai bagian tubuh.",
    extra: "Sumsum tulang belakang juga berperan dalam gerak refleks tertentu, sehingga tubuh dapat memberikan respons dengan cepat.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Human_brain_and_spinal_cord.jpg"
  },
  {
    title: "Saraf Tepi",
    description: "Saraf tepi menghubungkan sistem saraf pusat dengan seluruh bagian tubuh. Saraf ini membawa informasi dari reseptor menuju sistem saraf pusat dan meneruskan perintah menuju organ tubuh.",
    extra: "Saraf tepi membantu tubuh menerima rangsangan dan menjalankan respons.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Peripheral_Nervous_System.jpg"
  },
  {
    title: "Tulang",
    description: "Tulang merupakan penyusun rangka manusia. Tulang berfungsi menopang tubuh, memberi bentuk tubuh, melindungi organ dalam, dan menjadi tempat melekatnya otot.",
    extra: "Tulang disebut alat gerak pasif karena tidak dapat menghasilkan gerakan sendiri.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Human_skeleton_diagram.png"
  },
  {
    title: "Sendi",
    description: "Sendi merupakan tempat bertemunya dua tulang atau lebih. Sendi menghubungkan tulang dan memungkinkan bagian tubuh melakukan berbagai gerakan.",
    extra: "Contoh sendi adalah sendi engsel pada siku dan lutut serta sendi peluru pada bahu.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Synovial_Joint.png"
  },
  {
    title: "Otot",
    description: "Otot merupakan alat gerak aktif yang menghasilkan gerakan melalui proses kontraksi dan relaksasi. Otot bekerja dengan menarik tulang sehingga bagian tubuh dapat bergerak.",
    extra: "Otot rangka umumnya melekat pada tulang dan bekerja dengan bantuan sistem saraf.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Muscular_system.svg"
  },
  {
    title: "Hubungan Sistem Saraf dan Sistem Gerak",
    description: "Sistem saraf dan sistem gerak bekerja sama untuk menghasilkan respons tubuh. Reseptor menerima rangsangan, saraf membawa informasi menuju sistem saraf pusat, kemudian perintah diteruskan kepada otot.",
    extra: "Alur sederhana: Rangsangan → Reseptor → Saraf → Sistem saraf pusat → Otot → Gerakan. Pada gerak refleks tertentu, respons dapat diproses melalui sumsum tulang belakang.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Human_Nervous_System_diagram.svg"
  }
];

const questions = [
  ["Apa fungsi utama otak?", ["Menghasilkan sel darah", "Mengolah informasi dan mengatur aktivitas tubuh", "Menyaring makanan", "Menghubungkan tulang"], 1],
  ["Bagian sistem saraf pusat yang berada di dalam tulang belakang adalah...", ["Saraf tepi", "Otot", "Sumsum tulang belakang", "Sendi"], 2],
  ["Apa fungsi saraf tepi?", ["Menghubungkan sistem saraf pusat dengan tubuh", "Melindungi jantung", "Menghasilkan gerakan langsung", "Membentuk rangka"], 0],
  ["Fungsi utama tulang adalah...", ["Mengolah informasi", "Menghasilkan impuls", "Menopang dan melindungi tubuh", "Mengatur pernapasan"], 2],
  ["Tempat bertemunya dua tulang atau lebih disebut...", ["Otot", "Sendi", "Saraf", "Reseptor"], 1],
  ["Otot disebut alat gerak aktif karena...", ["Dapat berkontraksi dan relaksasi", "Tidak dapat bergerak", "Melindungi organ", "Menyimpan informasi"], 0],
  ["Gerakan dihasilkan melalui kerja sama...", ["Otak dan kulit", "Tulang, sendi, dan otot", "Jantung dan paru-paru", "Darah dan lambung"], 1],
  ["Bagian yang menerima rangsangan disebut...", ["Efektor", "Reseptor", "Sendi", "Tulang"], 1],
  ["Pada gerak refleks tertentu, respons dapat diproses melalui...", ["Lambung", "Paru-paru", "Sumsum tulang belakang", "Tulang paha"], 2],
  ["Urutan sederhana respons tubuh yang benar adalah...", ["Otot → Rangsangan → Saraf", "Rangsangan → Reseptor → Saraf → Sistem saraf pusat → Otot", "Tulang → Otak → Reseptor", "Sendi → Otot → Rangsangan"], 1]
];

const pages = [...document.querySelectorAll(".page")];
const navLinks = [...document.querySelectorAll("[data-page-link]")];
const topicTabs = document.getElementById("topic-tabs");
const topicContent = document.getElementById("topic-content");
let currentTopic = 0;
let currentQuestion = 0;
let selectedAnswers = [];
let answerLocked = false;

function showPage(pageId) {
  pages.forEach(page => page.classList.toggle("hidden", page.id !== pageId));
  navLinks.forEach(link => link.classList.toggle("active", link.dataset.pageLink === pageId));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.go));
});
navLinks.forEach(link => {
  link.addEventListener("click", () => showPage(link.dataset.pageLink));
});

function createTopicTabs() {
  topicTabs.innerHTML = "";
  topics.forEach((topic, index) => {
    const button = document.createElement("button");
    button.className = "topic-tab";
    button.textContent = topic.title;
    button.type = "button";
    button.addEventListener("click", () => {
      currentTopic = index;
      renderTopic();
    });
    topicTabs.appendChild(button);
  });
}

function renderTopic() {
  const topic = topics[currentTopic];
  topicContent.innerHTML = "";

  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = `TOPIK ${String(currentTopic + 1).padStart(2, "0")}`;

  const heading = document.createElement("h2");
  heading.textContent = topic.title;

  const image = document.createElement("img");
  image.className = "topic-image";
  image.src = topic.image;
  image.alt = `Ilustrasi ${topic.title}`;
  image.loading = "lazy";
  image.onerror = () => {
    image.alt = `Ilustrasi ${topic.title} tidak dapat dimuat.`;
    image.classList.add("image-unavailable");
    image.style.display = "none";
  };

  const description = document.createElement("p");
  description.className = "topic-description";
  description.textContent = topic.description;

  const extra = document.createElement("p");
  extra.className = "topic-extra";
  extra.textContent = topic.extra;

  const source = document.createElement("a");
  source.className = "image-source";
  source.href = topic.image.replace("/Special:FilePath/", "/wiki/File:");
  source.target = "_blank";
  source.rel = "noopener noreferrer";
  source.textContent = "Sumber ilustrasi (Wikimedia Commons)";

  topicContent.append(eyebrow, heading, image, description, extra, source);

  [...topicTabs.children].forEach((tab, index) => {
    tab.classList.toggle("active", index === currentTopic);
    tab.setAttribute("aria-pressed", String(index === currentTopic));
  });

  document.getElementById("prev-topic").disabled = currentTopic === 0;
  document.getElementById("next-topic").textContent =
    currentTopic === topics.length - 1 ? "Mulai Kuis →" : "Selanjutnya →";
}

document.getElementById("prev-topic").addEventListener("click", () => {
  if (currentTopic > 0) {
    currentTopic--;
    renderTopic();
  }
});

document.getElementById("next-topic").addEventListener("click", () => {
  if (currentTopic < topics.length - 1) {
    currentTopic++;
    renderTopic();
  } else {
    showPage("quiz");
  }
});

function renderQuestion() {
  const [question, options, correctIndex] = questions[currentQuestion];
  answerLocked = false;

  document.getElementById("question-count").textContent =
    `Soal ${currentQuestion + 1} dari ${questions.length}`;
  document.getElementById("question-percent").textContent =
    `${(currentQuestion + 1) * 10}%`;
  document.getElementById("progress-bar").style.width =
    `${(currentQuestion + 1) * 10}%`;
  document.getElementById("question-text").textContent = question;
  document.getElementById("feedback").textContent = "";

  const optionsContainer = document.getElementById("answer-options");
  optionsContainer.innerHTML = "";
  const nextButton = document.getElementById("next-question");
  nextButton.disabled = true;
  nextButton.textContent = currentQuestion === questions.length - 1
    ? "Lihat Hasil"
    : "Selanjutnya →";

  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener("click", () => {
      if (answerLocked) return;
      answerLocked = true;
      selectedAnswers[currentQuestion] = index;

      [...optionsContainer.children].forEach((choice, choiceIndex) => {
        choice.disabled = true;
        if (choiceIndex === correctIndex) choice.classList.add("correct");
        else if (choiceIndex === index) choice.classList.add("incorrect");
      });

      const isCorrect = index === correctIndex;
      const feedback = document.getElementById("feedback");
      feedback.textContent = isCorrect
        ? "Benar! Jawaban kamu tepat."
        : `Belum tepat. Jawaban yang benar: ${options[correctIndex]}.`;
      feedback.style.color = isCorrect ? "#15803d" : "#b91c1c";
      nextButton.disabled = false;
    });
    optionsContainer.appendChild(button);
  });
}

document.getElementById("next-question").addEventListener("click", () => {
  if (!answerLocked) return;
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  const correct = selectedAnswers.reduce((total, answer, index) =>
    total + (answer === questions[index][2] ? 1 : 0), 0);
  document.getElementById("score").textContent = correct * 10;
  document.getElementById("correct-count").textContent = correct;
  document.getElementById("wrong-count").textContent = questions.length - correct;

  let message = "Terus belajar. Baca kembali materi dan coba lagi.";
  if (correct >= 8) message = "Bagus! Kamu memahami sebagian besar materi.";
  else if (correct >= 5) message = "Cukup baik. Pelajari kembali beberapa topik untuk memperkuat pemahaman.";
  document.getElementById("result-message").textContent = message;
  showPage("result");
}

function resetQuiz() {
  currentQuestion = 0;
  selectedAnswers = [];
  renderQuestion();
  showPage("quiz");
}

document.getElementById("retry-quiz").addEventListener("click", resetQuiz);

createTopicTabs();
renderTopic();
renderQuestion();
showPage("home");
