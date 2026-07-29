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


let cart = {};


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

    const product = products.find(p=>p.id===productId);

    // track counts per product id
    if(!cart[productId]){
        cart[productId] = {
            product: product,
            count: 0
        };
    }

    cart[productId].count += 1;

    renderCart();

}


function renderCart(){
    // total item count (sum of counts)
    const totalItems = Object.values(cart).reduce((s,i)=>s + i.count, 0);

    document.getElementById("cart-count").innerText = totalItems;
    document.getElementById("cart-total-items").innerText = totalItems;

    // render list of items with counts
    const list = document.getElementById("cart-items-list");
    list.innerHTML = '';

    let totalPrice = 0;

    Object.values(cart).forEach(entry =>{
        const li = document.createElement('li');
        const name = entry.product.name;
        const count = entry.count;
        const price = entry.product.price * count;
        totalPrice += price;
        li.innerText = `${name} — ${count} x $${entry.product.price} = $${price}`;
        list.appendChild(li);
    });

    document.getElementById('cart-total-price').innerText = totalPrice;
}



displayProducts();