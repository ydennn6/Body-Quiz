const FILE = f => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}?width=900`;
const PAGE = f => `https://commons.wikimedia.org/wiki/File:${f}`;

const chapters = [
  { group: "Sistem Saraf", title: "Otak",
    img: ["Brain-anatomy.jpg", "Brain_diagram_without_text.svg"],
    cap: "Otak besar dan lobus-lobusnya",
    lead: "Otak berada di dalam rongga tengkorak dan menjadi pusat pengendali seluruh tubuh. Semua informasi dari mata, telinga, kulit, dan organ lain dikumpulkan di sini, diolah, lalu diputuskan harus direspons seperti apa.",
    pts: [
      ["Otak besar (serebrum)", "Bagian terbesar otak. Mengatur berpikir, ingatan, kesadaran, pengolahan indra, dan gerak yang kita sengaja, seperti mengangkat tangan atau menulis."],
      ["Otak kecil (serebelum)", "Terletak di belakang bawah. Menjaga keseimbangan, postur, dan membuat gerakan terasa halus serta terkoordinasi, misalnya saat bersepeda."],
      ["Batang otak", "Menghubungkan otak dengan sumsum tulang belakang. Mengatur fungsi vital yang berjalan tanpa kita sadari, seperti pernapasan dan detak jantung."]
    ],
    note: "Otak besar terbagi menjadi empat lobus: frontal (berpikir dan gerak), parietal (perabaan), temporal (pendengaran dan ingatan), dan oksipital (penglihatan)." },
  { group: "Sistem Saraf", title: "Sumsum Tulang Belakang",
    img: ["Medulla_spinalis_-_Section_-_English.svg"],
    cap: "Penampang melintang sumsum tulang belakang",
    lead: "Sumsum tulang belakang adalah jalur utama yang memanjang dari batang otak ke dalam ruas-ruas tulang belakang. Ruas tulang melindunginya, seperti pipa pelindung untuk kabel penting.",
    pts: [
      ["Jalur dua arah", "Informasi dari tubuh naik menuju otak, sedangkan perintah dari otak turun menuju otot. Keduanya melewati sumsum tulang belakang."],
      ["Materi kelabu dan materi putih", "Di tengah terdapat materi kelabu berbentuk kupu-kupu yang berisi badan sel saraf. Di sekelilingnya ada materi putih berisi serabut saraf pembawa impuls."],
      ["Pusat gerak refleks", "Pada refleks, seperti menarik tangan dari benda panas, respons diolah di sumsum tulang belakang tanpa menunggu otak, sehingga jauh lebih cepat."]
    ],
    note: "Karena refleks tidak harus lewat otak, tubuhmu bisa menghindar dari bahaya sebelum kamu sempat menyadari rasa sakitnya." },
  { group: "Sistem Saraf", title: "Saraf Tepi",
    img: ["Nervous_system_diagram-en.svg", "Nervous_system_diagram_numbered.svg"],
    cap: "Saraf tepi menyebar ke seluruh tubuh",
    lead: "Saraf tepi adalah jaringan kabel yang menghubungkan sistem saraf pusat (otak dan sumsum tulang belakang) dengan seluruh bagian tubuh, dari ujung jari kaki sampai kulit kepala.",
    pts: [
      ["Saraf sensorik (aferen)", "Membawa informasi dari reseptor, misalnya kulit, mata, dan telinga, menuju sistem saraf pusat."],
      ["Saraf motorik (eferen)", "Membawa perintah dari sistem saraf pusat menuju efektor, yaitu otot dan kelenjar, sehingga terjadi gerakan atau sekresi."],
      ["Jumlah saraf", "Manusia memiliki 12 pasang saraf kranial yang keluar dari otak dan 31 pasang saraf spinal yang keluar dari sumsum tulang belakang."]
    ],
    note: "Mudah diingat: sensorik = masuk ke pusat (merasakan), motorik = keluar dari pusat (menggerakkan)." },
  { group: "Sistem Gerak", title: "Tulang",
    img: ["Human_skeleton_front_en.svg"],
    cap: "Rangka manusia tampak depan",
    lead: "Tulang menyusun rangka yang menjadi kerangka tubuh. Orang dewasa memiliki sekitar 206 tulang. Tulang disebut alat gerak pasif karena tidak bisa bergerak sendiri dan baru bergerak ketika ditarik otot.",
    pts: [
      ["Menopang dan memberi bentuk", "Rangka membuat tubuh tegak dan menentukan bentuk badan."],
      ["Melindungi organ dalam", "Tengkorak melindungi otak, tulang rusuk melindungi jantung dan paru-paru, ruas tulang belakang melindungi sumsum tulang belakang."],
      ["Tempat melekat otot dan pembentuk darah", "Otot melekat pada tulang lewat tendon. Sumsum tulang merah di dalam tulang tertentu menghasilkan sel darah."]
    ],
    note: "Tulang bukan benda mati. Ia terus diperbarui dan bisa menyambung kembali ketika patah." },
  { group: "Sistem Gerak", title: "Sendi",
    img: ["Human_arm_bones_diagram.svg"],
    cap: "Tulang lengan; siku adalah sendi engsel",
    lead: "Sendi adalah pertemuan dua tulang atau lebih. Tanpa sendi, rangka akan kaku seperti patung. Sendi memberi tulang ruang untuk bergerak dengan arah dan jangkauan tertentu.",
    pts: [
      ["Sendi engsel", "Gerak satu arah seperti engsel pintu. Contohnya siku dan lutut."],
      ["Sendi peluru", "Kepala tulang berbentuk bola yang masuk ke cekungan, sehingga bisa bergerak ke segala arah. Contohnya bahu dan panggul."],
      ["Sendi putar dan sendi geser", "Sendi putar memungkinkan memutar, misalnya leher saat menoleh. Sendi geser memungkinkan gerak meluncur terbatas, misalnya pada pergelangan tangan."]
    ],
    note: "Ujung tulang di sendi dilapisi tulang rawan, dan cairan sinovial bertindak sebagai pelumas. Ligamen mengikat tulang agar sendi tidak lepas." },
  { group: "Sistem Gerak", title: "Otot",
    img: ["Muscles_anterior_labeled.png", "Blausen_0801_SkeletalMuscle.png"],
    cap: "Otot rangka tampak depan",
    lead: "Otot adalah alat gerak aktif. Otot menghasilkan gerakan dengan cara berkontraksi (memendek dan menegang) lalu berelaksasi (memanjang dan mengendur), sehingga menarik tulang yang dilekatinya.",
    pts: [
      ["Otot antagonis", "Otot bekerja berpasangan dengan efek berlawanan. Saat biseps berkontraksi menekuk lengan, triseps berelaksasi. Untuk meluruskan lengan, perannya bertukar."],
      ["Tiga jenis otot", "Otot rangka bekerja atas kehendak kita. Otot polos (dinding lambung dan usus) serta otot jantung bekerja tanpa kita sadari."],
      ["Tendon", "Jaringan kuat yang menghubungkan otot dengan tulang. Tarikan otot disalurkan ke tulang melalui tendon."]
    ],
    note: "Otot tidak bisa mendorong. Ia hanya menarik, itulah sebabnya otot harus bekerja berpasangan." },
  { group: "Gabungan", title: "Hubungan Sistem Saraf dan Sistem Gerak",
    img: ["Nervous_system_diagram_numbered.svg", "Nervous_system_diagram-en.svg"],
    cap: "Jaringan saraf yang menggerakkan seluruh tubuh",
    lead: "Otot hanya bergerak jika diperintah sistem saraf, dan sistem saraf memerlukan otot untuk mewujudkan keputusannya. Keduanya bekerja sebagai satu rantai respons.",
    pts: [
      ["Alur gerak sadar", "Rangsangan → reseptor → saraf sensorik → otak → saraf motorik → otot → gerakan."],
      ["Alur gerak refleks", "Rangsangan → reseptor → saraf sensorik → sumsum tulang belakang → saraf motorik → otot. Otak hanya diberi tahu belakangan."],
      ["Peran tulang dan sendi", "Ketika otot menarik, tulang berfungsi sebagai tuas dan sendi sebagai poros, sehingga tarikan berubah menjadi gerakan terarah."]
    ],
    note: "Jika jalur saraf ke otot terputus, otot tetap utuh tetapi tidak menerima perintah, sehingga bagian tubuh itu sulit digerakkan." }
];

const questions = [
  { q: "Bagian otak yang menjaga keseimbangan dan koordinasi gerak halus adalah...", o: ["Otak besar", "Otak kecil", "Batang otak", "Sumsum tulang belakang"], a: 1, ch: 0, e: "Otak kecil (serebelum) mengoordinasikan gerakan dan menjaga keseimbangan." },
  { q: "Tanganmu langsung menjauh dari benda panas sebelum kamu sempat sadar. Respons cepat ini diolah di...", o: ["Otak besar", "Sumsum tulang belakang", "Tulang", "Sendi"], a: 1, ch: 1, e: "Pada gerak refleks, respons diproses di sumsum tulang belakang sehingga lebih cepat." },
  { q: "Saraf yang membawa perintah dari sistem saraf pusat ke otot adalah...", o: ["Saraf sensorik", "Saraf motorik", "Reseptor", "Tendon"], a: 1, ch: 2, e: "Saraf motorik (eferen) membawa perintah keluar dari pusat menuju otot atau kelenjar." },
  { q: "Tulang rusuk melindungi jantung dan paru-paru. Ini menunjukkan fungsi tulang sebagai...", o: ["Pelindung organ dalam", "Penghasil impuls", "Pengolah informasi", "Penghubung saraf"], a: 0, ch: 3, e: "Salah satu fungsi rangka adalah melindungi organ dalam yang lunak." },
  { q: "Sendi bahu memungkinkan lengan bergerak ke segala arah. Jenis sendinya adalah...", o: ["Sendi engsel", "Sendi peluru", "Sendi putar", "Sendi geser"], a: 1, ch: 4, e: "Sendi peluru (bahu dan panggul) memberi kebebasan gerak ke banyak arah." },
  { q: "Saat biseps berkontraksi untuk menekuk lengan, otot triseps akan...", o: ["Ikut berkontraksi", "Berelaksasi", "Berubah menjadi tendon", "Menghasilkan impuls"], a: 1, ch: 5, e: "Otot antagonis bekerja berlawanan: satu berkontraksi, pasangannya berelaksasi." },
  { q: "Urutan jalur gerak sadar yang benar adalah...", o: ["Otot → Otak → Reseptor → Saraf", "Rangsangan → Reseptor → Saraf sensorik → Otak → Saraf motorik → Otot", "Otak → Rangsangan → Otot → Saraf", "Sendi → Tulang → Otak → Rangsangan"], a: 1, ch: 6, e: "Informasi harus masuk lewat reseptor dan saraf sensorik, diolah di pusat, lalu keluar lewat saraf motorik ke otot." },
  { q: "Jika sumsum tulang belakang di leher terputus total, kaki sulit digerakkan secara sadar karena...", o: ["Otot kaki hilang", "Tulang kaki melemah", "Perintah dari otak tidak sampai ke otot", "Sendi lutut membeku"], a: 2, ch: 1, e: "Sumsum tulang belakang adalah jalur perintah dari otak ke otot. Jika terputus, perintah tidak sampai." }
];

const $ = id => document.getElementById(id);
const pages = ["home", "materi", "kuis"];
let current = 0, quiz = { i: 0, answers: [], locked: false, done: false };

function buildToc() {
  let html = "", last = "";
  chapters.forEach((c, i) => {
    if (c.group !== last) { html += `<h2>${c.group}</h2>`; last = c.group; }
    html += `<a href="#/materi/${i + 1}" data-i="${i}"><i>${String(i + 1).padStart(2, "0")}</i>${c.title}</a>`;
  });
  $("toc").innerHTML = html;
}

function loadImage(img, list, link) {
  let n = 0;
  const wrap = img.parentElement;
  const next = () => {
    if (n >= list.length) {
      wrap.classList.add("done");
      wrap.innerHTML = '<p class="img-fail">Gambar tidak dapat dimuat. Periksa koneksi internetmu lalu muat ulang halaman.</p>';
      return;
    }
    const f = list[n++];
    link.href = PAGE(f);
    img.src = FILE(f);
  };
  img.onerror = next;
  img.onload = () => { img.classList.add("ready"); wrap.classList.add("done"); };
  next();
}

function showChapter(i, dir) {
  const c = chapters[i];
  const no = String(i + 1).padStart(2, "0");
  $("chapter").innerHTML = `
  <article class="chapter ${dir === "prev" ? "prev" : ""}">
    <div class="chapter-head"><span class="no" aria-hidden="true">${no}</span>
      <div><p class="group">${c.group} · Bab ${i + 1} dari ${chapters.length}</p><h1 tabindex="-1" id="ch-title">${c.title}</h1></div></div>
    <div class="cols">
      <figure class="figure"><div class="img-wrap"><img alt="Ilustrasi ${c.title}: ${c.cap}" width="900" height="900"></div>
        <figcaption><span>Gambar</span>${c.cap} · <a id="img-src" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a></figcaption></figure>
      <div class="text"><p class="lead">${c.lead}</p>
        <div class="points">${c.pts.map((p, k) => `<div class="point"><span>${k + 1}</span><h3>${p[0]}</h3><p>${p[1]}</p></div>`).join("")}</div>
        <aside class="note"><strong>Ingat ini:</strong> ${c.note}</aside></div>
    </div>
  </article>`;
  loadImage(document.querySelector(".img-wrap img"), c.img, $("img-src"));
  const last = i === chapters.length - 1;
  $("pager").innerHTML = `
    ${i > 0 ? `<a class="btn btn-ghost" href="#/materi/${i}">← ${chapters[i - 1].title.split(" ")[0]}</a>` : `<span></span>`}
    <span class="count">${i + 1} / ${chapters.length}</span>
    <a class="btn btn-primary" href="${last ? "#/kuis" : `#/materi/${i + 2}`}">${last ? "Mulai kuis →" : chapters[i + 1].title.split(" ")[0] + " →"}</a>`;
  document.querySelectorAll("#toc a").forEach(a => a.classList.toggle("on", +a.dataset.i === i));
  const on = document.querySelector("#toc a.on");
  if (on && on.scrollIntoView) on.scrollIntoView({ block: "nearest", inline: "center" });
  document.title = `${c.title} · NeuroMotion`;
  current = i;
}

function renderQuiz() {
  const box = $("quiz");
  if (quiz.done) return renderResult();
  const q = questions[quiz.i], n = questions.length;
  box.innerHTML = `
    <div class="q-meta"><span>Soal ${quiz.i + 1} dari ${n}</span><span>${Math.round(quiz.i / n * 100)}% selesai</span></div>
    <div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${quiz.i}"><i style="transform:scaleX(${(quiz.i + 1) / n})"></i></div>
    <div class="q-card"><h2>${q.q}</h2>
      <div class="opts">${q.o.map((t, k) => `<button class="opt" type="button" data-k="${k}"><b>${"ABCD"[k]}</b>${t}</button>`).join("")}</div>
      <div id="fb" aria-live="polite"></div>
      <div class="q-actions"><a class="btn btn-ghost" href="#/materi/${q.ch + 1}">Baca ulang bab</a>
        <button class="btn btn-primary" id="nextq" type="button" disabled>${quiz.i === n - 1 ? "Lihat hasil" : "Soal berikutnya →"}</button></div></div>`;
  quiz.locked = false;
  box.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => answer(+b.dataset.k)));
  $("nextq").addEventListener("click", () => { quiz.i < n - 1 ? quiz.i++ : quiz.done = true; renderQuiz(); window.scrollTo({ top: 0 }); });
}

function answer(k) {
  if (quiz.locked) return;
  quiz.locked = true;
  const q = questions[quiz.i], right = k === q.a;
  quiz.answers[quiz.i] = k;
  document.querySelectorAll(".opt").forEach((b, idx) => {
    b.disabled = true;
    if (idx === q.a) b.classList.add("ok"); else if (idx === k) b.classList.add("no");
  });
  $("fb").innerHTML = `<div class="explain"><strong>${right ? "Tepat!" : "Belum tepat."}</strong>${q.e}</div>`;
  $("nextq").disabled = false;
  $("nextq").focus({ preventScroll: true });
}

function renderResult() {
  const n = questions.length;
  const wrong = questions.filter((q, i) => quiz.answers[i] !== q.a);
  const ok = n - wrong.length, pct = Math.round(ok / n * 100);
  const msg = pct >= 80 ? "Pemahamanmu sudah kuat. Kamu siap mengerjakan soal yang lebih sulit." : pct >= 50 ? "Sudah cukup baik. Buka lagi bab yang masih meleset, lalu coba ulang." : "Tidak apa-apa, ini bagian dari belajar. Baca ulang babnya pelan-pelan lalu coba lagi.";
  const chs = [...new Set(wrong.map(q => q.ch))];
  $("quiz").innerHTML = `<div class="result"><p class="kicker">Kuis selesai</p>
    <div class="score">${pct}<small>/100</small></div>
    <p class="lead">${ok} dari ${n} jawaban benar. ${msg}</p>
    ${chs.length ? `<div class="review"><strong>Perlu diulang:</strong><ul>${chs.map(c => `<li><a href="#/materi/${c + 1}">${chapters[c].title}</a></li>`).join("")}</ul></div>` : ""}
    <div class="cta" style="justify-content:center"><button class="btn btn-primary" id="retry" type="button">Ulangi kuis</button><a class="btn btn-ghost" href="#/materi/1">Kembali ke materi</a></div></div>`;
  $("retry").addEventListener("click", () => { quiz = { i: 0, answers: [], locked: false, done: false }; renderQuiz(); });
}

function route() {
  const [p, n] = location.hash.replace(/^#\/?/, "").split("/");
  const page = pages.includes(p) ? p : "home";
  pages.forEach(id => $(id).classList.toggle("hidden", id !== page));
  document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("on", a.dataset.nav === page));
  if (page === "materi") {
    const i = Math.min(Math.max((parseInt(n, 10) || 1) - 1, 0), chapters.length - 1);
    showChapter(i, i < current ? "prev" : "next");
    $("ch-title").focus({ preventScroll: true });
  } else if (page === "kuis") { document.title = "Kuis · NeuroMotion"; renderQuiz(); }
  else document.title = "NeuroMotion · Media Belajar";
  window.scrollTo({ top: 0 });
}

buildToc();
window.addEventListener("hashchange", route);
route();
