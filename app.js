const designs = [
  {
    id: "neon",
    name: "Neon Stream",
    description: "Tech-Magazin mit Glow, Progress-Bar und Story-Feed.",
  },
  {
    id: "tabloid",
    name: "Der Reißer",
    description: "Boulevard-Alarm mit Breaking-Ticker und Pop-ups.",
  },
  {
    id: "kinetic",
    name: "Kinetic Arts",
    description: "High-End Kunstkatalog mit viel Weißraum.",
  },
  {
    id: "newspaper",
    name: "Classic Newspaper",
    description: "Retro-Print mit Spalten, Linien und Rubriken.",
  },
  {
    id: "social",
    name: "Social Magazine",
    description: "Cards, Stories und mobile First News-Feed.",
  },
  {
    id: "minimal",
    name: "Minimal & Accessible",
    description: "Maximale Lesbarkeit und Ruhe.",
  },
  {
    id: "timeline",
    name: "Timeline Reportage",
    description: "Kapitel entlang einer Storyline.",
  },
  {
    id: "experimental",
    name: "Presentation Mode",
    description: "Scroll-Snap Slides für den Beamer.",
  },
];

const fallbackImages = [
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
];

const articles = [
  {
    id: "editorial",
    title: "Der KUBI – Von uns, für euch!",
    subtitle: "Vorwort der Redaktion",
    author: "Kubi-Redaktion (AG Schulzeitung)",
    image: "https://i.imgur.com/O5FXEsI.jpg",
    fallback: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Eigentlich unglaublich, aber ihr haltet schon die vierte Ausgabe unserer Schulzeitung \"Kubi\" in euren Händen.",
      "In dieser Ausgabe haben wir wieder viel Wissenswertes rund um das Leben an der Realschule Alsdorf im KuBiZ zusammengestellt. Ihr findet Berichte, Interviews, Eindrücke vom Tag der offenen Tür und viele Fotos aus unserem bunten Schulleben.",
      "Auch das aktuelle Redaktionsteam stellt sich euch erneut vor.",
      "Wir wünschen euch viel Spaß beim Lesen!",
    ],
  },
  {
    id: "kubiz",
    title: "Das KuBiZ – viel mehr als Schule",
    author: "Redaktion",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Das KuBiZ ist nicht nur ein Schulgebäude, sondern ein lebendiger Campus. Moderne Räume, helle Flure, gemeinsame Bereiche und viel Platz zum Lernen und Leben machen unsere Schule zu einem besonderen Ort.",
      "Hier treffen sich Realschule und Gymnasium, teilen Mensa, Sporthalle und viele Angebote – Schule als Gemeinschaft.",
    ],
  },
  {
    id: "feuerwehr",
    title: "Wir im Ehrenamt: Die Jugendfeuerwehr",
    author: "Hannah Bosten & Marla Dicken",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Die Jugendfeuerwehr richtet sich an Kinder und Jugendliche von 10 bis 18 Jahren und gibt Einblicke in das Leben der Freiwilligen Feuerwehr.",
      "Ziele: Teamarbeit, Verantwortung, Gemeinschaft und Feuerwehrwissen stehen im Mittelpunkt. Durch Übungen und Veranstaltungen lernen die Jugendlichen Funk, Erste Hilfe, Löschübungen und Gerätekunde.",
      "Besondere Aktionen: Highlights sind Zeltlager und sogenannte Berufsfeuerwehrtage. Dabei erleben die Jugendlichen einen 24-Stunden-Dienst mit realistisch nachgespielten Einsätzen.",
      "Interesse? Treffen ist montags von 18–20 Uhr an der Hauptwache in Alsdorf. Schnuppertage sind jederzeit möglich.",
    ],
  },
  {
    id: "sitzplan",
    title: "Die Sitzplan-Theorie – ein (nicht) ganz ernst gemeinter Vorschlag",
    author: "Sara Gebhardt",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Sitzordnungen beeinflussen Motivation und Mitarbeit. Wer neben Freunden sitzt, arbeitet oft besser mit und hat mehr Freude am Unterricht.",
      "Störende Schüler sollten nicht die ganze Klasse beeinträchtigen. Unser Vorschlag: Wer stört, sitzt allein – nicht die Ruhigen.",
      "Rücksicht aufeinander macht Unterricht für alle angenehmer.",
    ],
  },
  {
    id: "theater",
    title: "Wortwitz und tolles Schauspiel im Langhaus",
    author: "Sara Gebhardt & Hannah Bosten",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Zwei Schauspieler spielten vier Rollen im Theaterstück \"Demenz\". Es ging um einen Großvater, der zunehmend vergisst, wer er selbst und seine Familie sind.",
      "Die Aufführung war spannend, emotional und lehrreich – und regte zum Nachdenken über die Krankheit an.",
    ],
  },
  {
    id: "gleichberechtigung",
    title: "Gleichberechtigung – was bedeutet das eigentlich?",
    author: "Redaktion",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Gleichberechtigung bedeutet gleiche Rechte und Chancen – unabhängig von Geschlecht, Herkunft, Religion oder sexueller Orientierung.",
      "Feminismus setzt sich dafür ein, Rollenbilder zu hinterfragen und Ungleichheit abzubauen. Ziel ist Fairness für alle Menschen.",
    ],
  },
  {
    id: "technik",
    title: "„Technik kann wichtig für die Berufswahl sein“",
    author: "Collin Jeske & Jannis Wentland",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Nadine Kaltenborn unterrichtet Technik und Sonderpädagogik. Sie legt Wert auf praktisches Arbeiten und darauf, dass Schüler eigene Projekte bauen können.",
      "Ein gutes Verhältnis zu den Schülern ist das A und O. Technik hilft bei der Berufsorientierung, sagt sie.",
    ],
  },
  {
    id: "warhammer",
    title: "Kreativität, Strategie und Gemeinschaft – Die Warhammer-AG",
    author: "Collin Jeske, Aron Goerenz, Felix Hinkelmann & Felix Höring",
    image: "https://i.imgur.com/NkVNloa.jpg",
    fallback: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    text: [
      "In einem Klassenzimmer voller Farben, Würfel und Miniaturen entsteht Kreativität pur. Die Warhammer-AG verbindet Basteln, Malen und Strategie.",
      "Warhammer ist ein Tabletop-Spiel mit selbst bemalten Miniaturen. Jede Figur ist ein Unikat. Neben Strategie lernen die Mitglieder Geduld, Genauigkeit und Teamarbeit.",
      "Ziel der AG ist es, weiterzuwachsen und das Projekt an jüngere Schüler weiterzugeben.",
    ],
  },
  {
    id: "handy",
    title: "„Handy aus oder raus“ – Was hinter der neuen Regel steckt",
    author: "Felix Hinkelmann",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1512499617640-c2f999fe06c0?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Seit den Osterferien gilt: Handys dürfen auf dem Schulgelände nicht benutzt werden. Ziel ist mehr Konzentration und echtes Miteinander.",
      "Geräte können vorübergehend eingezogen werden. Ein längerer Entzug ist rechtlich umstritten, da das Handy Privatbesitz ist.",
      "Fazit: Wer sein Handy nicht benutzt, muss es auch nicht abgeben.",
    ],
  },
  {
    id: "vergebung",
    title: "Vergeltung oder Vergebung?",
    author: "Aron Goerenz",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80",
    text: [
      "\"Auge um Auge\" steht für Vergeltung und gerechte Strafe im Alten Testament. \"Halte auch die andere Backe hin\" fordert im Neuen Testament Vergebung statt Rache.",
      "Zwei unterschiedliche Wege mit Konflikten umzugehen – Strafe oder Versöhnung.",
    ],
  },
  {
    id: "chatgpt",
    title: "Das sagt ChatGPT über unsere Schülerzeitung",
    author: "Redaktion",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Die KI beschreibt den KUBI als Schülerzeitung, die Interviews, Schulberichte, SV-Themen und Alltagstipps vereint.",
      "Sie hebt hervor: Schüler bekommen eine Stimme, dokumentieren Schulleben und lernen journalistisches Arbeiten.",
    ],
  },
  {
    id: "mobbing",
    title: "Mobbing – kein Spaß!",
    author: "Sara Gebhardt",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    fallback: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    text: [
      "Mobbing bedeutet systematisches Ärgern, Demütigen oder Ausgrenzen. Es gibt verbales, körperliches, soziales und Cybermobbing.",
      "Folgen können Angst, Depressionen und geringes Selbstwertgefühl sein.",
      "Wichtig: Hinsehen, helfen und melden. Achtet aufeinander!",
    ],
  },
];

const designGrid = document.getElementById("design-grid");
const landing = document.getElementById("landing");
const reader = document.getElementById("reader");
const compare = document.getElementById("compare");
const designContent = document.getElementById("design-content");
const toc = document.getElementById("toc");
const progress = document.getElementById("progress");
const readerTitle = document.getElementById("reader-title");
const readerSubtitle = document.getElementById("reader-subtitle");
const designSwitch = document.getElementById("design-switch");
const textModeToggle = document.getElementById("toggle-text-mode");
const modal = document.getElementById("article-modal");
const modalBody = document.getElementById("modal-body");
const compareGrid = document.getElementById("compare-grid");

const compareArticleSelect = document.getElementById("compare-article");
const compareDesign1 = document.getElementById("compare-design-1");
const compareDesign2 = document.getElementById("compare-design-2");
const compareDesign3 = document.getElementById("compare-design-3");
const compareThirdToggle = document.getElementById("compare-third-toggle");
const compareDesign3Wrap = document.getElementById("compare-design-3-wrap");

const state = {
  mode: "landing",
  activeDesign: "neon",
};

function createDesignCards() {
  designs.forEach((design, index) => {
    const card = document.createElement("div");
    card.className = "design-card";
    card.style.animationDelay = `${index * 0.05}s`;
    card.innerHTML = `
      <div class="preview" style="background: ${getPreviewGradient(design.id)}">
        ${buildPreviewLayout(design.id)}
      </div>
      <h3>${design.name}</h3>
      <p>${design.description}</p>
      <span class="tag">Lesemodus öffnen</span>
    `;
    card.addEventListener("click", () => showDesign(design.id));
    designGrid.appendChild(card);
  });
}

function buildPreviewLayout(id) {
  return `
    <div class="preview-layout ${id}">
      <span class="preview-block wide"></span>
      <span class="preview-block"></span>
      <span class="preview-block tall"></span>
      <span class="preview-block"></span>
      <span class="preview-block wide"></span>
      <span class="preview-block"></span>
    </div>
  `;
}

function getPreviewGradient(id) {
  const gradients = {
    neon: "linear-gradient(120deg, #00d1ff, #6d5dfc)",
    tabloid: "linear-gradient(120deg, #e3000f, #ff7b00)",
    kinetic: "linear-gradient(120deg, #111, #f5f2e8)",
    newspaper: "linear-gradient(120deg, #f3ede0, #c3b89c)",
    social: "linear-gradient(120deg, #6d5dfc, #1c1f3b)",
    minimal: "linear-gradient(120deg, #ffffff, #dfe4ea)",
    timeline: "linear-gradient(120deg, #0f2027, #2c5364)",
    experimental: "linear-gradient(120deg, #3b1d7a, #0f0c29)",
  };
  return gradients[id] || gradients.neon;
}

function showDesign(designId) {
  state.activeDesign = designId;
  state.mode = "reader";
  landing.classList.add("hidden");
  compare.classList.add("hidden");
  reader.classList.remove("hidden");
  document.body.className = `design-${designId}`;
  document.body.classList.remove("text-mode");
  progress.classList.toggle("hidden", designId !== "neon");

  const design = designs.find((item) => item.id === designId);
  readerTitle.textContent = design?.name || "Lesemodus";
  readerSubtitle.textContent = design?.description || "";
  designSwitch.value = designId;
  textModeToggle.classList.toggle("hidden", designId !== "minimal");
  textModeToggle.textContent = "Textmodus";

  renderDesignContent(designId);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDesignContent(designId) {
  designContent.innerHTML = "";
  toc.innerHTML = "";
  toc.classList.toggle("hidden", designId !== "neon");

  if (designId === "social") {
    const stories = document.createElement("div");
    stories.className = "stories";
    articles.slice(0, 6).forEach(() => {
      const story = document.createElement("div");
      story.className = "story";
      stories.appendChild(story);
    });
    designContent.appendChild(stories);
  }

  if (designId === "tabloid") {
    const ticker = document.createElement("div");
    ticker.className = "ticker";
    ticker.innerHTML = `<span>Breaking News · Skandal! · Alarm! · Exklusiv! · KUBI Spezial · Breaking News · Skandal! · Alarm! · Exklusiv!</span>`;
    designContent.appendChild(ticker);
  }

  if (designId === "experimental") {
    const controls = document.createElement("div");
    controls.className = "slide-controls";
    controls.innerHTML = `
      <button class="ghost" id="prev-slide">Prev</button>
      <button class="ghost" id="next-slide">Next</button>
    `;
    designContent.appendChild(controls);

    const slideMap = document.createElement("div");
    slideMap.className = "slide-map";
    slideMap.id = "slide-map";
    designContent.appendChild(slideMap);
  }

  const tocList = document.createElement("ul");

  const observer = createArticleObserver();

  articles.forEach((article, index) => {
    const articleEl = document.createElement("article");
    articleEl.className = "article";
    articleEl.id = `article-${article.id}`;

    const chapter = designId === "timeline" ? `<p class="chapter">Kapitel ${String(index + 1).padStart(2, "0")}</p>` : "";
    const eyecatcher = designId === "tabloid" ? `<p class="eyecatcher">Exklusiv · KUBI Report</p>` : "";
    const subtitle = article.subtitle ? `<p class="subtitle">${article.subtitle}</p>` : "";
    const fallbacks = getFallbacks(article).join("|");

    articleEl.innerHTML = `
      ${chapter}
      ${eyecatcher}
      <h3>${article.title}</h3>
      ${subtitle}
      <p class="meta">${article.author}</p>
      <img src="${article.image}" alt="${article.title}" data-fallbacks="${fallbacks}" data-fallback-index="0" />
      <div class="content">
        ${article.text.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      ${designId === "newspaper" ? `<p class="caption">Rubrik · KUBI Ausgabe</p>` : ""}
      ${designId === "tabloid" ? `<button class="primary read-more">Artikel öffnen</button>` : ""}
    `;

    if (designId === "tabloid") {
      const button = articleEl.querySelector(".read-more");
      button.addEventListener("click", () => openModal(article));
    }

    designContent.appendChild(articleEl);
    observer.observe(articleEl);

    const tocItem = document.createElement("li");
    tocItem.innerHTML = `<a href="#article-${article.id}">${article.title}</a>`;
    tocList.appendChild(tocItem);
  });

  toc.appendChild(tocList);

  attachFallbacks();

  if (designId === "experimental") {
    const prev = document.getElementById("prev-slide");
    const next = document.getElementById("next-slide");
    const slides = designContent.querySelectorAll("article");
    const scrollContainer = designContent;
    const slideMap = document.getElementById("slide-map");

    let slideIndex = 0;

    slideMap.innerHTML = Array.from(slides)
      .map((_, idx) => `<button class="slide-dot ${idx === 0 ? "active" : ""}" data-index="${idx}"></button>`)
      .join("");

    const scrollToSlide = (index) => {
      slideIndex = Math.max(0, Math.min(index, slides.length - 1));
      slides[slideIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    };

    prev.addEventListener("click", () => scrollToSlide(slideIndex - 1));
    next.addEventListener("click", () => scrollToSlide(slideIndex + 1));

    slideMap.querySelectorAll(".slide-dot").forEach((dot) => {
      dot.addEventListener("click", () => scrollToSlide(Number(dot.dataset.index)));
    });

    scrollContainer.addEventListener("scroll", () => {
      const nearest = Array.from(slides).reduce(
        (closest, slide, idx) => {
          const distance = Math.abs(slide.getBoundingClientRect().top - scrollContainer.getBoundingClientRect().top);
          return distance < closest.distance ? { distance, idx } : closest;
        },
        { distance: Infinity, idx: 0 }
      );
      slideIndex = nearest.idx;
      slideMap.querySelectorAll(".slide-dot").forEach((dot, idx) => {
        dot.classList.toggle("active", idx === slideIndex);
      });
    });
  }
}

function openModal(article) {
  const fallbacks = getFallbacks(article).join("|");
  modalBody.innerHTML = `
    <h3>${article.title}</h3>
    <p class="meta">${article.author}</p>
    <img src="${article.image}" alt="${article.title}" data-fallbacks="${fallbacks}" data-fallback-index="0" />
    ${article.text.map((paragraph) => `<p>${paragraph}</p>`).join("")}
  `;
  modal.classList.remove("hidden");
  attachFallbacks();
}

function closeModal() {
  modal.classList.add("hidden");
}

function showCompare() {
  state.mode = "compare";
  landing.classList.add("hidden");
  reader.classList.add("hidden");
  compare.classList.remove("hidden");
  document.body.className = "compare-mode";
  progress.classList.add("hidden");
  renderCompare();
}

function renderCompare() {
  compareGrid.innerHTML = "";
  const articleId = compareArticleSelect.value || articles[0].id;
  const designIds = [compareDesign1.value, compareDesign2.value];
  if (compareThirdToggle.checked) {
    designIds.push(compareDesign3.value);
  }

  const article = articles.find((item) => item.id === articleId) || articles[0];

  compareGrid.style.gridTemplateColumns = `repeat(${designIds.length}, minmax(0, 1fr))`;

  designIds.forEach((id) => {
    const column = document.createElement("div");
    column.className = `compare-column design-${id}`;
    const fallbacks = getFallbacks(article).join("|");
    column.innerHTML = `
      <h3>${designs.find((design) => design.id === id)?.name || "Design"}</h3>
      <article class="article visible">
        <h4>${article.title}</h4>
        <p class="meta">${article.author}</p>
        <img src="${article.image}" alt="${article.title}" data-fallbacks="${fallbacks}" data-fallback-index="0" />
        ${article.text.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </article>
    `;
    compareGrid.appendChild(column);
  });

  attachFallbacks();
}

function attachFallbacks() {
  document.querySelectorAll("img[data-fallbacks]").forEach((img) => {
    if (img.dataset.fallbackBound) {
      return;
    }
    img.dataset.fallbackBound = "true";
    img.addEventListener("error", () => {
      const fallbacks = (img.dataset.fallbacks || "").split("|").filter(Boolean);
      const index = Number(img.dataset.fallbackIndex || 0);
      if (index >= fallbacks.length) {
        return;
      }
      img.dataset.fallbackIndex = String(index + 1);
      img.src = fallbacks[index];
    });
  });
}

function getFallbacks(article) {
  const list = [article.fallback, ...fallbackImages];
  return Array.from(new Set(list.filter(Boolean)));
}

function createArticleObserver() {
  const existing = document.querySelectorAll(".article.visible");
  existing.forEach((article) => article.classList.remove("visible"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  return observer;
}

function populateCompareControls() {
  articles.forEach((article) => {
    const option = document.createElement("option");
    option.value = article.id;
    option.textContent = article.title;
    compareArticleSelect.appendChild(option);
  });

  designs.forEach((design) => {
    [compareDesign1, compareDesign2, compareDesign3].forEach((select) => {
      const option = document.createElement("option");
      option.value = design.id;
      option.textContent = design.name;
      select.appendChild(option.cloneNode(true));
    });
  });

  compareDesign1.value = designs[0].id;
  compareDesign2.value = designs[1].id;
  compareDesign3.value = designs[2].id;
}

function updateProgress() {
  if (state.mode !== "reader" || state.activeDesign !== "neon") {
    progress.style.width = "0";
    return;
  }
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progress.style.width = `${percentage}%`;
}

function showLanding() {
  state.mode = "landing";
  landing.classList.remove("hidden");
  reader.classList.add("hidden");
  compare.classList.add("hidden");
  document.body.className = "";
  document.body.classList.remove("text-mode");
  progress.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

createDesignCards();
populateCompareControls();
showLanding();

designs.forEach((design) => {
  const option = document.createElement("option");
  option.value = design.id;
  option.textContent = design.name;
  designSwitch.appendChild(option);
});
designSwitch.value = state.activeDesign;

window.addEventListener("scroll", updateProgress);

compareThirdToggle.addEventListener("change", () => {
  compareDesign3Wrap.classList.toggle("hidden", !compareThirdToggle.checked);
  renderCompare();
});

compareArticleSelect.addEventListener("change", renderCompare);
compareDesign1.addEventListener("change", renderCompare);
compareDesign2.addEventListener("change", renderCompare);
compareDesign3.addEventListener("change", renderCompare);

const openCompareButtons = [
  document.getElementById("open-compare"),
  document.getElementById("open-compare-alt"),
];
openCompareButtons.forEach((button) => button.addEventListener("click", showCompare));

document.getElementById("back-to-landing").addEventListener("click", showLanding);
document.getElementById("back-from-compare").addEventListener("click", showLanding);
document.getElementById("close-modal").addEventListener("click", closeModal);
designSwitch.addEventListener("change", (event) => showDesign(event.target.value));
textModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("text-mode");
  textModeToggle.textContent = document.body.classList.contains("text-mode") ? "Bildmodus" : "Textmodus";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
