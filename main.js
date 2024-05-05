import data from "./data.js";

const div = document.querySelector(".container")
data.forEach((product) => {
    const {
        id,
        title,
        description,
        thumbnail,
        price,
        discountPercentage,
        rating,
        brand,
        stock,
        category,
        images,
    } = product

    const img = document.createElement("img")
    const div1 = document.createElement("div")
    const p = document.createElement("p")
    const h3 = document.createElement("h3")
    const h2 = document.createElement("h2")

    h2.textContent = title;
    p.textContent = description;
    h3.textContent = `${product.price}$`;

    img.src = thumbnail;
    img.width = 500;
    img.height = 300;

    div1.appendChild(img);  
    div.appendChild(div1);
    div1.appendChild(h2);
    div1.appendChild(h3);
    div1.appendChild(p);

    console.log(div1)
}) 