let shop = document.getElementById("shop")

let shopItemsData = [{
    id: "TB789",
    name: "Casual shirt",
    price: 45,
    desc: "This casual shirt is crafted from comfortable, lightweight fabric and boasts a relaxed fit. Its versatile design makes it suitable for various informal occasions.",
    img: "images/img-1.jpg"
},
{
    id: "SKU7890",
    name: "Office shirt",
    price: 100,
    desc: "This office shirt is tailored with precision, offering a sharp, professional appearance. Its crisp white fabric and classic button-down collar make it a timeless choice for the workplace.",
    img: "images/img-2.jpg"
},
{
    id: " Kent456",
    name: "T shirt",
    price: 25,
    desc: "This T-shirt is made of soft, breathable cotton and features a classic crew neckline. Its vibrant blue color adds a pop of style to any outfit.",
    img: "images/img-3.jpg"
},
{
    id: " T955876",
    name: "Mens Suit",
    price: 599,
    desc: "Featuring a well-tailored jacket and matching trousers. The timeless design and fine craftsmanship make it a perfect choice for formal occasions and business settings.",
    img: "images/img-4.jpg"
},
]

let basket = [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, desc, img } = x
            return `
        
    <div id=product-id-${id} class="item">
    <img width="220" src=${img} alt="">
    <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
                <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                <div id=${id} class="quantity">0</div>
                <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
            </div>
        </div>
    </div>
</div>
    `
        })
        .join(""));
};

generateShop()

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem)

    if (search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1,
        })
    } else {
        search.item += 1;
    }
    console.log(basket);
}
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem)

    if (search.item === 0) return;
     else {
        search.item -= 1;
    }
    console.log(basket);
}

let update = () => { }