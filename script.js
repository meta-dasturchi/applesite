/* =========================================================
   MA'LUMOTLAR — mahsulotlar ro'yxati
   Rasmni o'zgartirish uchun "img" ga o'z rasm manzilingizni yozing
   (masalan: "images/iphone.png")
   ========================================================= */
const CDN = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/";

const CATEGORIES = [
  { id: "iphone",  title: "iPhone",   sub: "Sizga eng mos iPhone'ni tanlang.", gray: true },
  { id: "ipad",    title: "iPad",     sub: "Ish, o'qish va ijod uchun.",       gray: false },
  { id: "mac",     title: "Mac",      sub: "Apple Silicon kuchi bilan.",       gray: true },
  { id: "watch",   title: "Apple Watch", sub: "Sog'lik va sport hamrohi.",     gray: false },
  { id: "airpods", title: "AirPods",  sub: "Simsiz. Sehrli. Siz uchun.",       gray: true },
];

const PRODUCTS = [
  // ---------- iPhone ----------
  { id: 1, cat: "iphone", name: "iPhone 17 Pro", tag: "Eng kuchli Pro", badge: "Yangi", price: 14990000,
    img: CDN + "iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=800&hei=800&fmt=png-alpha",
    colors: ["#c8b39b", "#3c3c3d", "#e3e4e5", "#bfbab1"],
    specs: ["6.3\" Super Retina XDR, ProMotion 120Hz", "A19 Pro chip", "48MP Pro kamera tizimi", "256 GB dan boshlab", "Titan korpus"] },
  { id: 2, cat: "iphone", name: "iPhone Air", tag: "Eng yupqa iPhone", badge: "Yangi", price: 12990000,
    img: CDN + "iphone-16-finish-select-202409-6-1inch-ultramarine?wid=800&hei=800&fmt=png-alpha",
    colors: ["#9bb5ce", "#e6e1d6", "#1f1f1f", "#f2f2f2"],
    specs: ["6.5\" ProMotion displey", "A19 Pro chip", "48MP Fusion kamera", "Ultra yupqa dizayn"] },
  { id: 3, cat: "iphone", name: "iPhone 17", tag: "Ajoyib va kuchli", badge: "", price: 10990000,
    img: CDN + "iphone-16-finish-select-202409-6-1inch-pink?wid=800&hei=800&fmt=png-alpha",
    colors: ["#f2adda", "#9aadf6", "#b0d4d2", "#fafafa", "#3c4042"],
    specs: ["6.3\" Super Retina XDR", "A19 chip", "48MP ikki kamerali tizim", "Camera Control tugmasi"] },
  { id: 4, cat: "iphone", name: "iPhone 16e", tag: "Hamyonbop iPhone", badge: "", price: 7990000,
    img: CDN + "iphone-16e-finish-select-202502-white?wid=800&hei=800&fmt=png-alpha",
    colors: ["#fafafa", "#232a31"],
    specs: ["6.1\" OLED displey", "A18 chip", "48MP Fusion kamera", "Uzoq ishlaydigan batareya"] },

  // ---------- iPad ----------
  { id: 5, cat: "ipad", name: "iPad Pro", tag: "M5 chip bilan", badge: "Yangi", price: 13990000,
    img: CDN + "ipad-pro-finish-select-202405-13inch-spaceblack-wifi?wid=800&hei=800&fmt=png-alpha",
    colors: ["#3c3c3d", "#e3e4e5"],
    specs: ["11\" yoki 13\" Ultra Retina XDR", "M5 chip", "Apple Pencil Pro qo'llab-quvvatlash", "Juda yupqa — 5.1 mm"] },
  { id: 6, cat: "ipad", name: "iPad Air", tag: "Yengil va kuchli", badge: "", price: 8990000,
    img: CDN + "ipad-air-finish-select-gallery-202405-11inch-blue?wid=800&hei=800&fmt=png-alpha",
    colors: ["#a0b4c8", "#d9c9e0", "#e8dcc8", "#3c3c3d"],
    specs: ["11\" yoki 13\" Liquid Retina", "M3 chip", "Touch ID", "Wi‑Fi 6E"] },
  { id: 7, cat: "ipad", name: "iPad", tag: "Har kun uchun", badge: "", price: 5490000,
    img: CDN + "ipad-finish-select-202410-blue-wifi?wid=800&hei=800&fmt=png-alpha",
    colors: ["#8db3d3", "#f2b8c6", "#f3e48b", "#e3e4e5"],
    specs: ["11\" Liquid Retina", "A16 chip", "12MP kamera", "USB‑C"] },
  { id: 8, cat: "ipad", name: "iPad mini", tag: "Kichik. Kuchli.", badge: "", price: 6990000,
    img: CDN + "ipad-mini-select-202410-blue-wifi?wid=800&hei=800&fmt=png-alpha",
    colors: ["#a5b8d3", "#d9c9e0", "#e8e0d5", "#3c3c3d"],
    specs: ["8.3\" Liquid Retina", "A17 Pro chip", "Apple Intelligence", "Apple Pencil Pro"] },

  // ---------- Mac ----------
  { id: 9, cat: "mac", name: "MacBook Air 13\"", tag: "M4 chip bilan", badge: "Ommabop", price: 13490000,
    img: CDN + "mba13-midnight-select-202402?wid=800&hei=800&fmt=png-alpha",
    colors: ["#2e3642", "#f0e4d3", "#a7c1d9", "#e3e4e5"],
    specs: ["13.6\" Liquid Retina", "M4 chip, 10 yadroli CPU", "16 GB xotira", "18 soatgacha batareya"] },
  { id: 10, cat: "mac", name: "MacBook Pro 14\"", tag: "Professionallar uchun", badge: "Yangi", price: 21990000,
    img: CDN + "mbp14-spaceblack-select-202410?wid=800&hei=800&fmt=png-alpha",
    colors: ["#2e2e30", "#e3e4e5"],
    specs: ["14.2\" Liquid Retina XDR", "M5 / M4 Pro / M4 Max", "24 soatgacha batareya", "Thunderbolt 5"] },
  { id: 11, cat: "mac", name: "iMac", tag: "Rang-barang kompyuter", badge: "", price: 17490000,
    img: CDN + "imac-24-blue-selection-hero-202410?wid=800&hei=800&fmt=png-alpha",
    colors: ["#5b88b5", "#d7a3b8", "#90b89a", "#e8d47c", "#e3e4e5"],
    specs: ["24\" 4.5K Retina", "M4 chip", "12MP Center Stage kamera", "Juda yupqa dizayn"] },
  { id: 12, cat: "mac", name: "Mac mini", tag: "Kichik, ammo ulkan", badge: "", price: 7490000,
    img: CDN + "mac-mini-202410-gallery-1?wid=800&hei=800&fmt=png-alpha",
    colors: ["#e3e4e5"],
    specs: ["M4 yoki M4 Pro chip", "5×5 dyuym o'lcham", "Old tomonda USB‑C portlar", "Apple Intelligence"] },

  // ---------- Watch ----------
  { id: 13, cat: "watch", name: "Apple Watch Series 11", tag: "Eng aqlli soat", badge: "Yangi", price: 5490000,
    img: CDN + "MXL93ref_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR?wid=800&hei=800&fmt=png-alpha",
    colors: ["#1d1d1f", "#f0d9c8", "#e3e4e5"],
    specs: ["Keng OLED displey", "Uyqu va yurak monitoringi", "24 soat batareya", "Suvga chidamli 50 m"] },
  { id: 14, cat: "watch", name: "Apple Watch Ultra 3", tag: "Ekstremal sharoitlar uchun", badge: "", price: 10990000,
    img: CDN + "MX4E3ref_VW_34FR+watch-case-49-titanium-natural-ultra2_VW_34FR?wid=800&hei=800&fmt=png-alpha",
    colors: ["#cbc4b8", "#1d1d1f"],
    specs: ["49 mm titan korpus", "3000 nit yorqinlik", "42 soat batareya", "Sun'iy yo'ldosh aloqasi"] },
  { id: 15, cat: "watch", name: "Apple Watch SE", tag: "Asosiy imkoniyatlar", badge: "", price: 3290000,
    img: CDN + "MXEK3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR?wid=800&hei=800&fmt=png-alpha",
    colors: ["#2e3642", "#f0e4d3", "#e3e4e5"],
    specs: ["Retina displey", "Yiqilishni aniqlash", "Faollik kuzatuvi", "Suvga chidamli"] },

  // ---------- AirPods ----------
  { id: 16, cat: "airpods", name: "AirPods Pro 3", tag: "Shovqinni bostirish", badge: "Yangi", price: 3490000,
    img: CDN + "MTJV3?wid=800&hei=800&fmt=png-alpha",
    colors: ["#fafafa"],
    specs: ["Faol shovqin bostirish (ANC)", "Yurak urishini o'lchash", "Jonli tarjima", "USB‑C quvvatlash qutisi"] },
  { id: 17, cat: "airpods", name: "AirPods 4", tag: "Qulay va yengil", badge: "", price: 1990000,
    img: CDN + "MXP63?wid=800&hei=800&fmt=png-alpha",
    colors: ["#fafafa"],
    specs: ["Yangi ergonomik shakl", "H2 chip", "Shaxsiy fazoviy ovoz", "30 soatgacha tinglash"] },
  { id: 18, cat: "airpods", name: "AirPods Max", tag: "Yuqori sifatli ovoz", badge: "", price: 7490000,
    img: CDN + "airpods-max-select-202409-midnight?wid=800&hei=800&fmt=png-alpha",
    colors: ["#2e3642", "#a7c1d9", "#e8b5c0", "#e6d6b8", "#d17b4e"],
    specs: ["Over-ear dizayn", "Faol shovqin bostirish", "20 soat batareya", "USB‑C"] },
];

/* =========================================================
   YORDAMCHI FUNKSIYALAR
   ========================================================= */
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const formatPrice = n => n.toLocaleString("ru-RU").replace(/,/g, " ") + " so'm";

// Rasm yuklanmasa — zaxira blok ko'rsatish
function attachFallback(img) {
  img.addEventListener("error", () => {
    const box = document.createElement("div");
    box.className = "img-fallback";
    box.textContent = img.dataset.fallback || img.alt || "Rasm";
    img.replaceWith(box);
  }, { once: true });
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2800);
}

/* =========================================================
   MAHSULOT BO'LIMLARINI CHIQARISH
   ========================================================= */
function renderProducts() {
  const main = $("#products");
  main.innerHTML = CATEGORIES.map(c => {
    const items = PRODUCTS.filter(p => p.cat === c.id);
    return `
      <section class="section ${c.gray ? "section--gray" : ""}" id="${c.id}">
        <div class="section__head">
          <div>
            <h2 class="section__title">${c.title}</h2>
            <p class="section__sub">${c.sub}</p>
          </div>
          <a href="#compare" class="link" data-link>Barcha modellarni taqqoslash ›</a>
        </div>
        <div class="grid">
          ${items.map(cardHTML).join("")}
        </div>
      </section>`;
  }).join("");

  $$("img", main).forEach(attachFallback);
}

function cardHTML(p) {
  return `
    <article class="card" data-id="${p.id}">
      <div class="card__badge">${p.badge}</div>
      <div class="card__img"><img src="${p.img}" alt="${p.name}" loading="lazy" data-fallback="${p.name}"></div>
      <div class="card__colors">${p.colors.map(c => `<i style="background:${c}"></i>`).join("")}</div>
      <h3>${p.name}</h3>
      <p class="card__tag">${p.tag}</p>
      <ul class="card__specs">${p.specs.map(s => `<li>${s}</li>`).join("")}</ul>
      <p class="card__price">Narxi: <b>${formatPrice(p.price)}</b></p>
      <div class="card__btns">
        <button class="btn btn--blue" data-buy="${p.name}">Sotib olish</button>
        <button class="btn btn--outline" data-detail="${p.id}">Batafsil</button>
      </div>
    </article>`;
}

/* =========================================================
   TAQQOSLASH BO'LIMI
   ========================================================= */
function renderCompare() {
  const list = PRODUCTS.filter(p => p.cat === "iphone");
  $("#compareGrid").innerHTML = list.map(p => `
    <div class="cmp">
      <img src="${p.img}" alt="${p.name}" data-fallback="${p.name}">
      <h4>${p.name}</h4>
      <p class="price">${formatPrice(p.price)} dan</p>
      <button class="btn btn--blue" data-buy="${p.name}">Sotib olish</button>
      <dl>
        <dt>Displey</dt><dd>${p.specs[0]}</dd>
        <dt>Protsessor</dt><dd>${p.specs[1]}</dd>
        <dt>Kamera</dt><dd>${p.specs[2]}</dd>
      </dl>
    </div>`).join("");
  $$("#compareGrid img").forEach(attachFallback);
}

/* =========================================================
   CAROUSEL
   ========================================================= */
function initCarousel() {
  const track = $("#carouselTrack");
  const slides = $$(".slide", track);
  const dotsBox = $("#carouselDots");
  let index = 0, timer;

  $$("img", track).forEach(attachFallback);

  slides.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "dot";
    d.setAttribute("aria-label", `${i + 1}-slayd`);
    d.addEventListener("click", () => { go(i); restart(); });
    dotsBox.appendChild(d);
  });
  const dots = $$(".dot", dotsBox);

  function go(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((s, k) => s.classList.toggle("is-active", k === index));
    dots.forEach((d, k) => d.classList.toggle("active", k === index));
  }
  const next = () => go(index + 1);
  const prev = () => go(index - 1);
  const restart = () => { clearInterval(timer); timer = setInterval(next, 5000); };

  $("#nextBtn").addEventListener("click", () => { next(); restart(); });
  $("#prevBtn").addEventListener("click", () => { prev(); restart(); });

  // Sichqoncha ustida bo'lsa to'xtaydi
  const car = $("#carousel");
  car.addEventListener("mouseenter", () => clearInterval(timer));
  car.addEventListener("mouseleave", restart);

  // Telefonda surish (swipe)
  let startX = 0;
  car.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
  car.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); restart(); }
  });

  // Klaviatura strelkalari
  document.addEventListener("keydown", e => {
    if ($(".modal.open")) return;
    if (e.key === "ArrowRight") { next(); restart(); }
    if (e.key === "ArrowLeft") { prev(); restart(); }
  });

  go(0);
  restart();
}

/* =========================================================
   NAVBAR: havolalar, burger menyu, aktiv bo'lim, qidiruv
   ========================================================= */
function initNav() {
  const links = $("#navLinks");
  const burger = $("#burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    links.classList.toggle("open");
    document.body.style.overflow = links.classList.contains("open") ? "hidden" : "";
  });

  // Har qanday data-link bosilganda menyuni yopish
  document.addEventListener("click", e => {
    const a = e.target.closest("[data-link]");
    if (!a) return;
    burger.classList.remove("open");
    links.classList.remove("open");
    document.body.style.overflow = "";
    $("#searchPanel").classList.remove("open");
  });

  // Scroll paytida aktiv bo'limni belgilash
  const navAnchors = $$(".nav__item > a");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach(s => observer.observe(s));

  // Qidiruv
  const panel = $("#searchPanel");
  const input = $("#searchInput");
  const results = $("#searchResults");
  $("#searchBtn").addEventListener("click", () => {
    panel.classList.toggle("open");
    if (panel.classList.contains("open")) setTimeout(() => input.focus(), 300);
  });
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.innerHTML = ""; return; }
    const found = PRODUCTS.filter(p => (p.name + " " + p.cat + " " + p.tag).toLowerCase().includes(q));
    results.innerHTML = found.length
      ? found.map(p => `<a href="#${p.cat}" data-link data-goto="${p.id}">${p.name} <span>${formatPrice(p.price)}</span></a>`).join("")
      : `<p style="color:#86868b;padding:10px 14px">Hech narsa topilmadi</p>`;
  });
  results.addEventListener("click", e => {
    const a = e.target.closest("[data-goto]");
    if (!a) return;
    setTimeout(() => {
      const card = $(`.card[data-id="${a.dataset.goto}"]`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.animate([{ boxShadow: "0 0 0 0 rgba(0,113,227,.6)" }, { boxShadow: "0 0 0 14px rgba(0,113,227,0)" }], { duration: 1200, iterations: 2 });
      }
    }, 50);
  });

  $("#bagBtn").addEventListener("click", () => {
    const n = bag.length;
    toast(n ? `Savatda ${n} ta mahsulot: ${bag.join(", ")}` : "Savat bo'sh");
  });
}

/* =========================================================
   KARTOCHKALAR SCROLLDA PAYDO BO'LISHI
   ========================================================= */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const delay = [...en.target.parentElement.children].indexOf(en.target) * 90;
        setTimeout(() => en.target.classList.add("visible"), delay);
        io.unobserve(en.target);
      }
    });
  }, { threshold: .15 });
  $$(".card").forEach(c => io.observe(c));
}

/* =========================================================
   MODALLAR
   ========================================================= */
let pendingProduct = null;
const bag = [];

function openModal(id) {
  const m = $("#" + id);
  m.classList.add("open");
  m.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal(m) {
  m.classList.remove("open");
  m.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openRegister(productName = null) {
  pendingProduct = productName;
  $("#modalProduct").innerHTML = productName
    ? `<b>${productName}</b> ni sotib olish uchun ro'yxatdan o'ting`
    : "";
  switchTab("register");
  openModal("registerModal");
}

function switchTab(name) {
  $$(".tab").forEach(t => t.classList.toggle("active", t.dataset.tab === name));
  $("#registerForm").classList.toggle("hidden", name !== "register");
  $("#loginForm").classList.toggle("hidden", name !== "login");
}

function openDetail(id) {
  const p = PRODUCTS.find(x => x.id === +id);
  if (!p) return;
  $("#detailBox").innerHTML = `
    <button class="modal__close" data-close aria-label="Yopish">&times;</button>
    <div class="detail">
      <div class="detail__img"><img src="${p.img}" alt="${p.name}" data-fallback="${p.name}"></div>
      <div>
        <div class="card__badge">${p.badge}</div>
        <h2>${p.name}</h2>
        <p class="card__tag">${p.tag}</p>
        <p class="price"><b>${formatPrice(p.price)}</b></p>
        <ul class="card__specs">${p.specs.map(s => `<li>${s}</li>`).join("")}</ul>
        <div class="card__colors" style="justify-content:flex-start">${p.colors.map(c => `<i style="background:${c}"></i>`).join("")}</div>
        <button class="btn btn--blue btn--full" data-buy="${p.name}">Sotib olish</button>
      </div>
    </div>`;
  $$("#detailBox img").forEach(attachFallback);
  openModal("detailModal");
}

function initModals() {
  // Global bosish hodisalari (event delegation)
  document.addEventListener("click", e => {
    const buy = e.target.closest("[data-buy]");
    const det = e.target.closest("[data-detail]");
    const reg = e.target.closest("[data-register]");
    const cls = e.target.closest("[data-close]");

    if (buy) {
      e.preventDefault();
      const open = $(".modal.open");
      if (open) closeModal(open);
      openRegister(buy.dataset.buy);
    }
    if (det) openDetail(det.dataset.detail);
    if (reg) { e.preventDefault(); openRegister(); }
    if (cls) closeModal(cls.closest(".modal"));
  });

  $("#userBtn").addEventListener("click", () => openRegister());
  $$(".tab").forEach(t => t.addEventListener("click", () => switchTab(t.dataset.tab)));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { const m = $(".modal.open"); if (m) closeModal(m); }
  });
}

/* =========================================================
   FORMA VALIDATSIYASI
   ========================================================= */
function setState(input, msg) {
  const f = input.closest(".field");
  f.classList.toggle("error", !!msg);
  f.classList.toggle("success", !msg);
  $("small", f).textContent = msg || "";
  return !msg;
}
const rules = {
  name:  v => v.trim().length >= 3 ? "" : "Kamida 3 ta harf kiriting",
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Email noto'g'ri",
  phone: v => /^\+?998[\s-]?\d{2}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(v.trim()) ? "" : "Format: +998 90 123 45 67",
  pass:  v => v.length >= 8 ? "" : "Parol kamida 8 belgi bo'lsin",
  msg:   v => v.trim().length >= 10 ? "" : "Kamida 10 ta belgi yozing",
};

function clearForm(form) {
  form.reset();
  $$(".field", form).forEach(f => { f.classList.remove("error", "success"); $("small", f).textContent = ""; });
}

function initForms() {
  // Ro'yxatdan o'tish
  $("#registerForm").addEventListener("submit", e => {
    e.preventDefault();
    const ok = [
      setState($("#rName"),  rules.name($("#rName").value)),
      setState($("#rEmail"), rules.email($("#rEmail").value)),
      setState($("#rPhone"), rules.phone($("#rPhone").value)),
      setState($("#rPass"),  rules.pass($("#rPass").value)),
      setState($("#rPass2"), $("#rPass2").value && $("#rPass2").value === $("#rPass").value ? "" : "Parollar mos emas"),
    ].every(Boolean);
    if (!$("#rAgree").checked) { toast("Iltimos, shartlarga rozilik bildiring"); return; }
    if (!ok) return;

    const name = $("#rName").value.trim().split(" ")[0];
    if (pendingProduct) {
      bag.push(pendingProduct);
      const c = $("#bagCount");
      c.textContent = bag.length;
      c.classList.add("show");
      toast(`Rahmat, ${name}! ${pendingProduct} savatga qo'shildi 🛍️`);
    } else {
      toast(`Xush kelibsiz, ${name}! Ro'yxatdan o'tdingiz ✅`);
    }
    clearForm(e.target);
    closeModal($("#registerModal"));
  });

  // Kirish
  $("#loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const ok = [
      setState($("#lEmail"), rules.email($("#lEmail").value)),
      setState($("#lPass"),  rules.pass($("#lPass").value)),
    ].every(Boolean);
    if (!ok) return;
    toast("Tizimga kirdingiz ✅");
    clearForm(e.target);
    closeModal($("#registerModal"));
  });

  // Aloqa formasi
  $("#contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const phone = $("#cPhone").value.trim();
    const ok = [
      setState($("#cName"),  rules.name($("#cName").value)),
      setState($("#cEmail"), rules.email($("#cEmail").value)),
      setState($("#cPhone"), phone ? rules.phone(phone) : ""),
      setState($("#cMsg"),   rules.msg($("#cMsg").value)),
    ].every(Boolean);
    if (!ok) return;
    toast("Xabaringiz yuborildi! Tez orada bog'lanamiz 📩");
    clearForm(e.target);
  });

  // Yozish paytida xatoni olib tashlash
  $$(".field input, .field textarea").forEach(inp =>
    inp.addEventListener("input", () => {
      const f = inp.closest(".field");
      if (f.classList.contains("error")) { f.classList.remove("error"); $("small", f).textContent = ""; }
    })
  );
}

/* =========================================================
   ISHGA TUSHIRISH
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCompare();
  initCarousel();
  initNav();
  initModals();
  initForms();
  initReveal();
});
