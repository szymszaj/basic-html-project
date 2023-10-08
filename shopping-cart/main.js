let shop = document.getElementById("shop")

let shopItemsData = [{
    id: "ppppop",
    name: "Casual shirt",
    price: 45,
    desc: "Lorem ipsum  sit amet consecteturipsum dolor sit amet consectetur sit amet consectetur adipisicing.",
    img: "images/img-1.jpg"
},
{
    id: "ppppp",
    name: "Office shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet ipsum dolor sit amet consectetur consectetur adipisicing.",
    img: "images/img-2.jpg"
},
{
    id: "pppop",
    name: "T shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur.",
    img: "images/img-3.jpg"
},
{
    id: "pppo",
    name: "Mens Suit",
    price: 259,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-4.jpg"
},
]

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
                <i class="fa-solid fa-minus"></i>
                <div id=${id} class="quantity">0</div>
                <i class="fa-solid fa-plus"></i>
            </div>
        </div>
    </div>
</div>
    `
        })
        .join(""));
};

generateShop()