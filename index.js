import books from "./userdata.js";

//Display Books

const displayBooks = (currentArr) => {
  const cardsContainer = document.querySelector("[data-cards-container]");
  cardsContainer.innerHTML = "";

  for (var i = 0; i < currentArr.length; i++) {
    cardsContainer.innerHTML += `
    <div class="cards">
        <img src="${currentArr[i].imageAddress}"
        alt="">
        <h2 class="mt-2">${currentArr[i].bookTitle}</h2>
          <h5> By: ${currentArr[i].author}</h5>
          <p class="book-desc none">${currentArr[i].description}</p>
    </div>
     `;
  }
};
displayBooks(books);

const mouseDetect = () => {
  const cardsContainer = document.querySelector("[data-cards-container]");
  cardsContainer.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "IMG") {
      const firstSibling = e.target.nextElementSibling;
      const secondSibling = firstSibling.nextElementSibling;
      const thirdSibling = secondSibling.nextElementSibling;
      thirdSibling.classList.remove("none");
    }
  });
};

const cardsContainer = document.querySelector("[data-cards-container]");
cardsContainer.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "IMG") {
    const firstSibling = e.target.nextElementSibling;
    const secondSibling = firstSibling.nextElementSibling;
    const thirdSibling = secondSibling.nextElementSibling;
    thirdSibling.classList.add("none");
  }
});
mouseDetect();

//Search function

const search = document.querySelector("[data-search]");

search.addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();
  const filtered = books.filter((data) => {
    return (
      data.bookTitle.toLowerCase().includes(value) ||
      data.author.toLowerCase().includes(value)
    );
  });
  displayBooks(filtered);

  // mouseDetect(cardsContainer);
});
