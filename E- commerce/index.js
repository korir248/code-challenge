const myCart= []

// Beds
const beds = [{
    id: 1,
    image: "./resources/bed2.jpg",
    description: "King Size Bed",
    price: 3400
},
{
    id: 2,
    image: "./resources/bed3.jpg",
    description: "Queen Size Bed",
    price: 6000
},{
    id: 3,
    image: "./resources/bed1.jpg",
    description: "Normal Size Bed",
    price: 3700
},{
    id: 4,
    image: "./resources/bed3.jpg",
    description: "Queen Size Bed",
    price: 4000
},{
    id: 5,
    image: "./resources/bed2.jpg",
    description: "King Size Bed",
    price: 5000
},{
    id: 6,
    image: "./resources/bed1.jpg",
    description: "Kids Bed",
    price: 4300
}]

// carousel
let i =0
const carouselImages= ["./resources/bed1-carousel.jpg","resources/bed2-carousel.jpg","resources/bed2-carousel.jpg"]

const changeImage=()=>{
    document.slide.src= carouselImages[i]

    if (i<carouselImages.length - 1) {
        i++        
    } else {
        i=0        
    }

    setTimeout("changeImage()",2000);
}
window.onload= changeImage

//Display beds
const showBeds= (array)=> {
    array.map((item) => {
      let container = document.querySelector(".items");
      let card = document.createElement("div");
      card.classList.add("card");
      let description = document.createElement("p");
      description.innerText = `${item.description}`
      let img = document.createElement("img");
      img.classList.add("card-image")
      img.setAttribute("src", item.image);
      let price = document.createElement("p");
      price.innerText = `Ksh. ${item.price}`;
      let button = document.createElement("button");
      button.innerText = "Add to Cart";
      button.setAttribute("id", item.id);
      button.classList.add("addToCart-btn");
      card.appendChild(img);
      card.appendChild(description)
      card.appendChild(price);
      card.appendChild(button);
      container.appendChild(card);
    });
  }

showBeds(beds)

function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

const addToCartButton = document.querySelectorAll(".addToCart-btn")
for (let i = 0; i < addToCartButton.length; i++) {
    const button = addToCartButton[i];

    button.addEventListener('click', (event)=>{
        console.log("Button clicked");
        let button = event.target
        let shopItem = button.parentElement.parentElement
        let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
        let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
        let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
        addItemToCart(title, price, imageSrc)
        updateCartTotal()

    })
    
}
function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    console.log(cartItems);
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return;
        }
    }
        let cartRowContents = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
// const addToCart =(id)=>{
//     let cart= document.querySelector('.cart')
//     let cartItem = cart.innerHTML
    
//     let count = 1
//     for (let i = 0; i < beds.length; i++){
//         if (id==beds[i].id) {

//             let currentBed= {
//                 ...beds[i]
//             }

//             cartItem += '<tr>'+
//                         '<td>'+beds[i].description+'</td>'+
//                         '<td>'+beds[i].price+ '</td>'+
//                         '<td><button>-</button>'+count+'<button onClick="increasecount('+ count+')">+</button></td>'+
//                         '<td>'+(count * beds[i].price)+'</td>'+
//                         '<td></td>'+
//                         '<td> <button  onclick="deleteFromCart(' + beds[i].id + ')">delete</button> </td>'+
//                         '</tr>'

//             // myCart.push(currentBed)
//             for (let i = 0; i < myCart.length; i++) {
//                 if (myCart[i] === myCart[i+1]) {
//                     myCart.splice(i,1)
                    
//                 }
                
//             }
//             console.log(myCart)
            
            
//         }
//     }
//     cart.innerHTML= cartItem

// }
// addToCart()
// const deleteFromCart =(id)=>{
//     if (cart[i].id == id) {
//         cart.pop
        
//     }
// }
// const decreasecount=(count)=>{
//     return count -= 1
// }
// const increasecount= (count)=>{
//     return count+=1
// }