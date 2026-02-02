document.addEventListener("DOMContentLoaded",async () => {

    async function fetchProduct() {
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response.data);
        return response.data;
    }

    const downloadedProducts = await fetchProduct();

    async function fetchProductsByCategory(category) {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        console.log(response.data);
        return response.data;
    }

    async function fetchCategories(){
        // This fucntion is maeked asyn so this will also return as promise.
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();
        return data;
    }

    async function loadProducts(flag, customProducts) {
        let products = customProducts;
        const queryParams = new URLSearchParams(window.location.search);
        const queryParamsObject = Object.fromEntries(queryParams.entries());
        if(flag == false) {
            if(queryParamsObject[`category`]){
                products = await fetchProductsByCategory(queryParamsObject[`category`]);
            }else{
                products = await fetchProduct();
            }
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

    async function populateCategories() {
        const categories = await fetchCategories();
        const categoryList = document.getElementById("categoryList")
        categories.forEach(category => {
            const categoryLink = document.createElement("a");
            categoryLink.classList.add("d-flex","text-decoration-none");
            categoryLink.textContent = category;
            categoryLink.href = `productList.html?category=${category}`;

            categoryList.appendChild(categoryLink);
        })
    }

    async function downloadContentAndPopulate() {
        Promise.all([loadProducts(false),populateCategories()])
        .then(() => {
            const loaderBackdrop = document.getElementById("loader-backdrop");
            loaderBackdrop.style.display = 'none';
        });
    }

    downloadContentAndPopulate();

    const filterSearch = document.getElementById("search");
    filterSearch.addEventListener("click",async () => {
        const productList = document.getElementById("productList");

        const minPrice = Number(document.getElementById("minPrice").value);
        const maxPrice = Number(document.getElementById("maxPrice").value);
        const products = downloadedProducts;
        filterProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
        productList.innerHTML = "";
        loadProducts(true,filterProducts);
    });


    const resetFilter = document.getElementById("clear");
    resetFilter.addEventListener("click", () => {
        window.location.reload();
    })
});