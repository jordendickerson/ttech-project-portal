let cardsList = document.querySelector(".cards");
let cards = [];

let object = {
  title: "title",
  url: "google.com",
};

cards.push(object);

cards.map((card) => {
  cardsList.innerHTML += `
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <h2>${card.title}</h2>
      </div>
      <div class="card-back"><a href="project1.html">${card.title}</a></div>
    </div>
  </div>`;
});
