document.addEventListener("DOMContentLoaded", () => {

    async function fetchProduct() {
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response.data);
        return response.data;
    }

    

    async function loadProducts(flag, customProducts) {
        let products = customProducts;
        if(flag == false) {
            products = await fetchProduct();
        }
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

    loadProducts(false);

    const filterSearch = document.getElementById("search");
    filterSearch.addEventListener("click",async () => {
        const productList = document.getElementById("productList");

        const minPrice = Number(document.getElementById("minPrice").value);
        const maxPrice = Number(document.getElementById("maxPrice").value);
        const products = await fetchProduct();
        filterProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
        productList.innerHTML = "";
        loadProducts(true,filterProducts);
    });


    const resetFilter = document.getElementById("clear");
    resetFilter.addEventListener("click", () => {
        window.location.reload();
    })
});