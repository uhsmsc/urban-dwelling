document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      image: "img/cards/img-1.png",
      name: "Встраиваемый светильник Markt",
      price: 3490,
      oldPrice: 5060,
      isDiscount: true,
    },
    {
      image: "img/cards/img-2.png",
      name: "Линейный светильник ARG",
      price: 6700,
      oldPrice: null,
      isDiscount: false,
    },
    {
      image: "img/cards/img-3.png",
      name: "Светодиодный светильник",
      price: 5060,
      oldPrice: 6060,
      isDiscount: true,
    },
    {
      image: "img/cards/img-1.png",
      name: "Встраиваемый светильник Markt",
      price: 3490,
      oldPrice: null,
      isDiscount: false,
    },
    {
      image: "img/cards/img-2.png",
      name: "Линейный светильник ARG",
      price: 6700,
      oldPrice: 6060,
      isDiscount: true,
    },
    {
      image: "img/cards/img-3.png",
      name: "Светодиодный светильник",
      price: 5060,
      oldPrice: null,
      isDiscount: false,
    },
    {
      image: "img/cards/img-1.png",
      name: "Встраиваемый светильник Markt",
      price: 3490,
      oldPrice: 6060,
      isDiscount: true,
    },
    {
      image: "img/cards/img-2.png",
      name: "Линейный светильник ARG",
      price: 6000,
      oldPrice: null,
      isDiscount: false,
    },
  ];

  const grid = document.querySelector(".cards-grid");

  products.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (item.isDiscount) card.classList.add("card--discount");

    card.innerHTML = `
      <div class="card-image-wrapper">
        <img class="card-image" src="${item.image}" alt="${item.name}">
        ${item.isDiscount ? '<div class="badge-sale">Акция</div>' : ""}
        <div class="card-overlay"><button class="btn-more">Подробнее</button></div>
      </div>
      <div class="card-content">
        <div class="card-title">${item.name}</div>
        <div class="card-price${item.isDiscount ? " discount" : ""}">
          ${item.price.toLocaleString("ru-RU")} ₽
          ${
            item.oldPrice
              ? `<span class="old-price">${item.oldPrice.toLocaleString(
                  "ru-RU"
                )} ₽</span>`
              : ""
          }
        </div>
      </div>
    `;

    grid.append(card);
  });
});
