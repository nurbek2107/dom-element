import data from "./data.js";

const ol = document.querySelector("ol")

data.forEach((product) => {
    const {
        id,
        title,
        
        description,
        price,
        discountPercentage,
        rating,
        brand,
        stock,
        category,
        thumbnail,
        images,
    } = product

const li = document.createElement("li")
const h2 = document.createElement("h2")
const img = document.createElement("img")

h2.textContent = title;
img.scr = thumbnail;
img.width = 500;
})