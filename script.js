const Products = [
  {
    
    title: "Apple screen",
    description: "screen with artificial intelligence",
    price: 549,
    
    brand: "Apple",
    category: "Scrrens",
    thumbnail: "./images/p1.jpg",
  },
  {
    id: 2,
    title: "lenovo screen",
    description:
      "Screen supports HD display",
    price: 899,

    brand: "Lenovo",
    category: "Scrrens",
    thumbnail: "./images/p2.jpg",
  },
  {
    id: 3,
    title: "Prechen Screen",
    description:
      "New screen with awesome features",
    price: 1249,

    brand: "Prechen",
    category: "Scrrens",
    thumbnail: "./images/p3.jpg",
  },
  {
    id: 4,
    title: "Asus Screen",
    description: "first version of new edge of screens",
    price: 280,

    brand: "ASUS",
    category: "Scrrens",
    thumbnail: "./images/p4.jpg",
  },
  {
    id: 5,
    title: "BenQ",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,

    brand: "BenQ",
    category: "Scrrens",
    thumbnail: "./images/p5.jpg",
  },
  {
    id: 6,
    title: "TOSHIBA",
    description:
      "Most powerful screen",
    price: 1749,

    brand: "toshiba",
    category: "Scrrens",
    thumbnail: "./images/p6.jpg",
  },
  {
    id: 7,
    title: "HP Screen",
    description:
      "Screen with high resolution",
    price: 1499,

    brand: "HP",
    category: "Scrrens",
    thumbnail: "./images/p7.jpg",
  },
  {
    id: 8,
    title: "Apple screen",
    description:
      "Style and speed , best choice",
    price: 1499,

    brand: "Apple",
    category: "Scrrens",
    thumbnail: "./images/p7.jpg",
  },
  {
    id: 9,
    title: "Gaming Screen",
    description:
      "Best choice for gamers",
    price: 1099,

    brand: "Dell",
    category: "Scrrens",
    thumbnail: "./images/screen2.jpg",
  },
  {
    
    title: "LG Screen",
    description:
      "most powerful and fasted screens",
    price: 1099,
    brand: "HP Pavilion",
    category: "Scrrens",
    thumbnail: "./images/screen3.jpg",
  },

];

const slideContainer = document.querySelector(".slide-container");
const searchInput = document.querySelector("#search-input");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


function displayAllProducts() {
 
  while (slideContainer.firstChild) {
    slideContainer.removeChild(slideContainer.firstChild);
  }


  Products.forEach((product) => {
    const cardSlide = createCardSlide(product);
    slideContainer.appendChild(cardSlide);
  });

  
  currentIndex = 0;
  slideContainer.style.transform = `translateX(0)`;
}


function createCardSlide(product) {
  const cardSlide = document.createElement("div");
  cardSlide.classList.add("slide");
  const card = document.createElement("div");
  card.classList.add("card");
  const img = document.createElement("img");
  img.src = product.thumbnail;
  img.alt = product.title;
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  const h2 = document.createElement("h2");
  h2.textContent = product.title;
  const p = document.createElement("p");
  p.textContent = product.description;

  const span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "arrow_right_alt";

  cardContent.appendChild(h2);
  cardContent.appendChild(p);

  card.appendChild(img);
  card.appendChild(cardContent);

  cardSlide.appendChild(card);

  return cardSlide;
}


searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.trim().toLowerCase();
  
  if (searchTerm.length === 0) {
    displayAllProducts();
    return;
  }

  const filteredProducts = Products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );


  while (slideContainer.firstChild) {
    slideContainer.removeChild(slideContainer.firstChild);
  }


  filteredProducts.forEach((product) => {
    const cardSlide = createCardSlide(product);
    slideContainer.appendChild(cardSlide);
  });


  currentIndex = 0;
  slideContainer.style.transform = `translateX(0)`;
});
let currentIndex = 0;
let totalSlides = 0;
let slidesToShow = 6; 
const slideWidth = 20; 
let intervalId;


function moveToNextSlide() {
  totalSlides = slideContainer.children.length;
  if (currentIndex <= totalSlides - slidesToShow) {
    currentIndex++;
    slideContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }%)`;


    const cardsShown = Math.min(slidesToShow, totalSlides - currentIndex);
    console.log(`Number of cards shown: ${cardsShown}`);
  } else {
    currentIndex = 0;
    slideContainer.style.transform = `translateX(0)`;
  }
}


nextBtn.addEventListener("click", () => {
  moveToNextSlide();

});


function updateSlidesToShow() {

  slidesToShow = window.innerWidth >= 768 ? 6 : 1;
}
function moveToPrevSlide() {
  totalSlides = slideContainer.children.length;
  if (currentIndex > 0) {
    currentIndex--;
    slideContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }%)`;

    const cardsShown = Math.min(slidesToShow, totalSlides - currentIndex);
    console.log(`Number of cards shown: ${cardsShown}`);
  } else {
    currentIndex = totalSlides - slidesToShow;
    slideContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }%)`;
  }
}

prevBtn.addEventListener("click", () => {
  moveToPrevSlide();
});


updateSlidesToShow();

window.addEventListener("resize", updateSlidesToShow);


displayAllProducts();


