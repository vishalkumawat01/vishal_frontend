
// Array of 8 product objects
let products = [

    { name: "Wireless Mouse", category: "Electronics", price: 799 },

    { name: "Bluetooth Speaker", category: "Electronics", price: 1999 },

    { name: "USB Cable", category: "Electronics", price: 199 },

    { name: "Notebook Pack", category: "Stationery", price: 249 },

    { name: "Gel Pen Set", category: "Stationery", price: 99 },

    { name: "Running Shoes", category: "Fashion", price: 2499 },

    { name: "Cotton T-Shirt", category: "Fashion", price: 599 },

    { name: "Backpack", category: "Fashion", price: 1299 }

];


// Get HTML Elements
let searchInput = document.getElementById("search");

let categorySelect = document.getElementById("category");

let productList = document.getElementById("productList");

let count = document.getElementById("count");


// Function to Display and Filter Products
function displayProducts() {

    // Get search text
    let searchValue = searchInput.value.toLowerCase();

    // Get selected category
    let selectedCategory = categorySelect.value;


    // Filter products using search and category
    let filteredProducts = products.filter(function(product) {

        // Check product name
        let nameMatch = product.name.toLowerCase().includes(searchValue);

        // Check category
        let categoryMatch =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        // Both conditions must be true
        return nameMatch && categoryMatch;

    });


    // Clear previous products
    productList.innerHTML = "";


    // Check if products are available
    if (filteredProducts.length === 0) {

        count.innerHTML = "No products found.";

    }

    else {

        count.innerHTML =
            "Showing " + filteredProducts.length +
            " of " + products.length + " products";


        // Display each product
        filteredProducts.forEach(function(product) {

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h4>${product.name}</h4>
                <p class="category">${product.category}</p>
                <p class="price">Rs. ${product.price}</p>
            `;

            productList.appendChild(card);

        });

    }

}


// Search when user types
searchInput.addEventListener("input", displayProducts);


// Filter when category changes
categorySelect.addEventListener("change", displayProducts);


// Display all products when page loads
displayProducts();
