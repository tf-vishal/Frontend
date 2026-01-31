document.addEventListener("DOMContentLoaded", () => {

    async function fetchProduct() {
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response.data);
        return response.data;
    }

    

    async function loadProducts() {
        const products = await fetchProduct();
        const productList = document.getElementById("productList");

        products.forEach(products => {
            const productItem = document.createElement("a");
            productItem.target = "_blank";
            productItem.href = "productDetails.html";
            productItem.classList.add("product-item", "text-decoration-none", "d-inline-block");

            const productImage = document.createElement("div");
            const productPrice = document.createElement("div");
            const productName = document.createElement("div");

            productName.classList.add("product-name", "text-center");
            productPrice.classList.add("product-price", "text-center");
            productImage.classList.add("product-img");

            productName.textContent = products.title.substring(0,10) + "...";
            productPrice.textContent = `&#8377; ${products.price}`;

            const imageInsideProductImage = document.createElement("img")
            imageInsideProductImage.src = products.image;

            productImage.appendChild(imageInsideProductImage);
            productItem.appendChild(productImage);
            productItem.appendChild(productName);
            productItem.appendChild(productPrice);

            productList.appendChild(productItem);
            

        });

    }

    loadProducts();
});