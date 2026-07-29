const products = [
    {
        id:1,
        name:"Laptop",
        price:1000
    },
    {
        id:2,
        name:"Mouse",
        price:50
    },
    {
        id:3,
        name:"Keyboard",
        price:100
    }
];


let cart = [];


function displayProducts(){

    const container =
    document.getElementById(
        "products-container"
    );


    products.forEach(product=>{


        const div =
        document.createElement(
            "div"
        );


        div.setAttribute(
            "data-product-id",
            product.id
        );


        div.innerHTML = `

            <h2>
                ${product.name}
            </h2>

            <p>
                Price: $${product.price}
            </p>


            <button 
            class="add-cart"
            data-id="${product.id}">
                Add To Cart
            </button>

        `;


        container.appendChild(div);


    });


    document
    .querySelectorAll(".add-cart")
    .forEach(button=>{


        button.onclick=function(){

            const id =
            Number(
                this.dataset.id
            );


            addToCart(id);

        };


    });


}



function addToCart(productId){

    const product =
    products.find(
        p=>p.id===productId
    );


    cart.push(product);


    document
    .getElementById(
        "cart-count"
    )
    .innerText =
    cart.length;


}



displayProducts();