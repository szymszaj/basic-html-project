let shop = document.getElementById("shop")

let generateShop = () => {
    return (shop.innerHTML =`
    <div class="item">
    <img width="220" src="images/img-1.jpg" alt="">
    <div class="details">
        <h3>Casual Shirt</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div class="price-quantity">
            <h2>$ 45</h2>
            <div class="buttons">
                <i class="fa-solid fa-minus"></i>
                <div class="quantity">0</div>
                <i class="fa-solid fa-plus"></i>
            </div>
        </div>
    </div>
</div>
    `)
}

generateShop()