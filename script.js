const pages = [...document.querySelectorAll(".page")];
const navLinks = [...document.querySelectorAll(".nav-link")];
function showPage(id){
  pages.forEach(page => page.classList.toggle("active", page.id === id));
  navLinks.forEach(link => link.classList.toggle("active", link.dataset.page === id));
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-page]").forEach(el => el.addEventListener("click", () => showPage(el.dataset.page)));

document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t === tab));
  document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.toggle("active", panel.id === tab.dataset.tab));
}));

const detailModal = document.getElementById("detail-modal");
document.querySelectorAll(".detail-btn").forEach(btn => btn.addEventListener("click", () => {
  document.getElementById("modal-title").textContent = btn.dataset.title;
  document.getElementById("modal-detail").textContent = btn.dataset.detail;
  detailModal.classList.add("show");
  detailModal.setAttribute("aria-hidden","false");
}));
function closeDetail(){detailModal.classList.remove("show");detailModal.setAttribute("aria-hidden","true")}
document.getElementById("close-modal").addEventListener("click",closeDetail);
document.getElementById("modal-ok").addEventListener("click",closeDetail);
detailModal.addEventListener("click",e=>{if(e.target===detailModal)closeDetail()});

const questions = [
 {question:"Bagian sistem saraf pusat yang berfungsi menghubungkan otak dengan saraf di seluruh tubuh dan menjadi pusat gerak refleks disebut apa?",answers:["Sumsum tulang belakang","Otak","Saraf tepi","Otot rangka"],correct:0,explain:"Sumsum tulang belakang menghubungkan otak dengan saraf di seluruh tubuh dan menjadi pusat gerak refleks."},
 {question:"Bagian sistem saraf pusat yang berfungsi sebagai pusat pengendali tubuh adalah ...",answers:["Sumsum tulang belakang","Otak","Saraf tepi","Otot rangka"],correct:1,explain:"Otak merupakan pusat kendali yang mengolah informasi dan mengatur aktivitas tubuh."}
];
let currentQuestion=0, selectedAnswer=null, score=0;
const answersEl=document.getElementById("answers");
const nextBtn=document.getElementById("next-question");
const feedback=document.getElementById("feedback");
const feedbackCard=feedback.querySelector(".feedback-card");
function renderQuestion(){
  const q=questions[currentQuestion]; selectedAnswer=null; nextBtn.disabled=true;
  document.getElementById("question-meta").textContent=`PERTANYAAN 0${currentQuestion+1}`;
  document.getElementById("question-text").textContent=q.question;
  answersEl.innerHTML="";
  q.answers.forEach((answer,index)=>{
    const button=document.createElement("button");
    button.className="answer-option";
    button.innerHTML=`<span class="answer-letter">${String.fromCharCode(65+index)}</span><span>${answer}</span>`;
    button.addEventListener("click",()=>{
      selectedAnswer=index;
      document.querySelectorAll(".answer-option").forEach((option,i)=>option.classList.toggle("selected",i===index));
      nextBtn.disabled=false;
    });
    answersEl.appendChild(button);
  });
}
function openFeedback(isCorrect){
  const q=questions[currentQuestion];
  feedbackCard.className=`feedback-card ${isCorrect?"correct":"wrong"}`;
  document.getElementById("feedback-symbol").className=`feedback-symbol ${isCorrect?"":"wrong"}`;
  document.getElementById("feedback-symbol").textContent=isCorrect?"✓":"×";
  document.getElementById("feedback-title").textContent=isCorrect?"Jawaban benar!":"Belum tepat";
  document.getElementById("feedback-copy").textContent=isCorrect?q.explain:`Jawaban yang tepat adalah ${q.answers[q.correct]}. ${q.explain}`;
  document.getElementById("feedback-continue").textContent=isCorrect?(currentQuestion===questions.length-1?"Lihat Hasil":"Lanjutkan"):"Lanjutkan";
  feedback.classList.add("show");feedback.setAttribute("aria-hidden","false");
}
function closeFeedback(){feedback.classList.remove("show");feedback.setAttribute("aria-hidden","true")}
nextBtn.addEventListener("click",()=>{
  if(selectedAnswer===null)return;
  const correct=selectedAnswer===questions[currentQuestion].correct;
  if(correct)score++;
  openFeedback(correct);
});
document.getElementById("feedback-continue").addEventListener("click",()=>{
  closeFeedback();
  if(currentQuestion<questions.length-1){currentQuestion++;renderQuestion();}
  else showResults();
});
function showResults(){
  const finalScore=Math.round(score/questions.length*100);
  document.getElementById("score-value").textContent=finalScore;
  document.getElementById("result-message").textContent=finalScore===100?"Sempurna! Kamu memahami materi dengan sangat baik.":finalScore>=50?"Bagus! Terus pelajari bagian yang masih perlu kamu kuasai.":"Jangan menyerah. Pelajari materi lagi dan coba kuis sekali lagi.";
  showPage("hasil");
}
function restartQuiz(){currentQuestion=0;selectedAnswer=null;score=0;renderQuestion();showPage("kuis")}
document.getElementById("retry-quiz").addEventListener("click",restartQuiz);
renderQuestion();