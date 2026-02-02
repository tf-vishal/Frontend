document.addEventListener("DOMContentLoaded", () => {

    
    
    async function populateProduct() {


        const queryParams = getQueryParams(); //this is called from common.js
        if(queryParams['id']){
            
            const productId = queryParams['id'];
            const product = await fetchProductById(productId);
            console.log(product);

            const productName = document.getElementById('product-name');
            const productPrice = document.getElementById('product-price');
            const productImg = document.getElementById('product-img');
            const productDescription = document.getElementById('product-description-data');

            productName.textContent = product.title;
            productPrice.textContent = `&#8377; ${product.price}`;

            const imageInsideProductImage = document.createElement('img')
            imageInsideProductImage.src = product.image;
            productImg.appendChild(imageInsideProductImage);

            productDescription.textContent = product.description;

            
            removeloader();
        }
    }
    
    populateProduct();
    
})