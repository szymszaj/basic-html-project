let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItem = () => {
    if (basket.length !== 0) {
        return ShoppingCart.innerHTML = basket
            .map((x) => {
                let { id, item } = x
                let search = shopItemsData.find((z) => z.id === id) || []
                return `
            <div class="cart-item">
            <img width="100" src=${search.img} alt="" />

            <div class="details">
                <div class="title-price-x">
                <h4 class="title-price">
                <p> ${search.name}</p>
                <p class="cart-item-price">$ ${search.price}</p>

                </h4>
                <i class="fa-solid fa-xmark"></i>
                </div>

                <div class="cart-buttons">
                    <div class="buttons">
                    <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                    <div id=${id} class="quantity">${item}</div>
                    <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                     </div>
                </div>

                <h3></h3>
             </div>
             </div>
            
            
            
            `
            })
    }
    else {
        ShoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="index.html">
        <button class="HomeBtn">Back to home</button>
    </a>
        `
    }
}
generateCartItem()