const filter = document.getElementById("categoryFilter");
const sort = document.getElementById("priceSort");
const productContainer = document.querySelector(".products");
let products = Array.from(document.querySelectorAll(".product"));

// Filter by category
filter.addEventListener("change", () => {
    const category = filter.value;
    products.forEach(product => {
        const productCategory = product.dataset.category;
        const match = category === "all" || productCategory === category;
        product.style.display = match ? "block" : "none";
    });
});

// Sort by price
sort.addEventListener("change", () => {
    const order = sort.value;
    let sorted = [...products];

    if (order === "asc") {
        sorted.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
    } else if (order === "desc") {
        sorted.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
    }

    productContainer.innerHTML = "";
    sorted.forEach(product => productContainer.appendChild(product));
});

// Add to cart button
products.forEach(product => {
    const button = product.querySelector("button");
    if (button) {
        button.addEventListener("click", () => {
            alert("Added to cart!");
        });
    }
});
