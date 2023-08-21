// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Fotografia Design",
    duration: "9 meses",
    thumb: "images/curso-photography-thumb.jpg",
    video_id: "o_d1HrLkPIs"
  },
  {
    title: "Marketing Digital",
    duration: "8 meses",
    thumb: "images/thumbnail_redes-sociais.jpg",
    video_id: "dwG8hWF6N5g"
  },
  {
    title: "Art Design",
    duration: "14 meses",
    thumb: "images/art-design-thumb-299x300.jpg",
    video_id: "pen08MZFQlo"
  },
  {
    
    title: "Programação Full Stack",
    duration: "1 ano",
    thumb: "images/curso_fullstack-299x300.jpg",
    video_id: "o_d1HrLkPIs"
  },
  {
    title: "Film Design",
    duration: "14 meses",
    thumb: "https://infinityschool.com.br/wp-content/uploads/2018/02/Layer-522-1.png",
    video_id: "ysMuwSpVoec"
  },
  {
    title:
      "Design Full Stack",
    duration: "1 ano",
    thumb: "images/curso-ilustracao-digital.png",
    video_id: "aLYP8uyUaXQ"
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});
