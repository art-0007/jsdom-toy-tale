let addToy = false;

const toyCollection = document.querySelector("#toy-collection")
const toysUrl = 'http://localhost:3000/toys'

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  loadsToys();

});

function loadsToys() {
  fetch(toysUrl)
  .then(resp => resp.json())
  .then(results => {
    results.forEach(toy => addToys(toy))
  })
}

function addToys(toy) {
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  toyCollection.appendChild(divCard);
  
  const h2 = document.createElement("h2");
  h2.innerHTML = toy.name
  divCard.appendChild(h2);

  const img = document.createElement("img");
  img.src = toy.image;
  divCard.appendChild(img);

  const p = document.createElement("p");
  p.innerHTML = toy.likes + "Likes"
  divCard.appendChild(p);

  const button = document.createElement("button");
  button.classList.add("like-btn");
  button.innerHTML = "Like"
  divCard.appendChild(button);
  
}
