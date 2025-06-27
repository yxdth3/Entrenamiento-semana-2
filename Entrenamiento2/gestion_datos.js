
//We initialize the program
console.log("😃 Data management and use of Objects, Sets and Maps 😃");


//We define the products object
const products = {
    1:{ id: 1, nombre: "Stitch plush", precio: 65000},
    2:{ id: 2, nombre: "Bouquet of 30 roses", precio:90000},
    3:{ id: 3, nombre: "Raymmond chocolates", precio: 32000},
};

console.log("Products: ",products);

//We created a Set with the names of all the products
const setProducts = new Set(Object.values(products).map(products => products.nombre));
console.log("Unique product Set: ",setProducts);


//We will use map to add categories to the products
const mapProducts = new Map([
    ["Desserts", "Tiramisu"],
    ["Sweets", "Mashmallow"],
    ["Flowers", "Peonies"],
]);

console.log("Products and categories Map: ",mapProducts);

//We will recover the previously created products object.
for (const id in products){
    console.log(`ID Products: ${id}, Details: `,products[id]);
};

//We will recover the products Set
for (const product of setProducts){
    console.log("Unique product: ",product);
};

//We will recover the products Map
mapProducts.forEach((products,category) =>{
    console.log(`Category: ${category}, Product: ${products}`);
});


// Display products in table
function renderTable() {  //clears the contents of the table and redraws the product list.
    const tbody = document.getElementById("table-body");
    tbody.innerHTML = "";

    for (const id in products) {
        const product = products[id];
        const row = document.createElement("tr"); //createElement creates a new HTML element, in this case a row.

        //add information to a row
        row.innerHTML = ` 
            <td>${product.id}</td>
            <td>${product.nombre}</td>
            <td>$${product.precio.toLocaleString()}</td>
            <td><button onclick="deleteProduct(${product.id})">Delete</button></td>
        `;

        tbody.appendChild(row); //appendChild allows you to insert a new element
    }
}

// Add a product
function addProduct() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const alert = document.getElementById("alert");

    // Here it is validated that the fields are not empty.
    if (!id || !name || !price) {
        alert.textContent = "Please fill all fields.";
        return;
    }

    //Check if a product with that ID already exists
    if (products[id]) {
        alert.textContent = "⚠️ Product ID already exists!";
        return;
    }

    // Add product
    products[id] = {
        id: Number(id),
        nombre: name,
        precio: Number(price),
    };

    setProducts.add(name);

    alert.textContent = "";
    renderTable();  // Redraws the table with the new product
}

// Delete a product
function deleteProduct(id) {
    if (products[id]) {
        setProducts.delete(products[id].nombre);
        delete products[id];
        renderTable(); // Redraws the table after deletion
    }
}


// Initial render
renderTable();

//We show everything
console.log("Complete data management tests: ");
console.log("List of products (object): ", products);
console.log("List of unique products (Set): ", setProducts);
console.log("Categories and products (Map): ", mapProducts);


