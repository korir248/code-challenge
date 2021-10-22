const myCart= []
const beds = [{
    id: 1,
    image: "./resources/bed1.jpg",
    description: "King Size",
    price: 3400
},
{
    id: 2,
    image: "./resources/bed1.jpg",
    description: "Queen Size",
    price: 6000
},{
    id: 3,
    image: "./resources/bed1.jpg",
    description: "Normal Size",
    price: 3700
},{
    id: 4,
    image: "./resources/bed1.jpg",
    description: "Queen Size",
    price: 4000
},{
    id: 5,
    image: "./resources/bed1.jpg",
    description: "King Size",
    price: 5000
},{
    id: 6,
    image: "./resources/bed1.jpg",
    description: "Kids Bed",
    price: 4300
}]



const showBeds= () => {
    let myBedsDiv = document.querySelector('.beds')
    let single= ''
    for (let i = 0; i < beds.length; i++) {
        // console.log(beds[i].id)
        singleBed= beds[i]
        single += '<div class="my-beds">' +
                        '<img src="' +singleBed.image+'">'+
                        '<h4>' +singleBed.description +'</h4>'+
                        '<h4>' +singleBed.price + '</h4>'+
                        '<button  onclick="addToCart(' + singleBed.id + ')">Add to cart</button>'+
                     '</div>'

    }
    myBedsDiv.innerHTML= single

    
}
showBeds()

const addToCart =(id)=>{
    let cart= document.querySelector('.cart')
    let cartItem = cart.innerHTML
    
    let count = 1
    for (let i = 0; i < beds.length; i++){
        if (id==beds[i].id) {

            let currentBed= {
                ...beds[i]
            }

            cartItem += '<tr>'+
                        '<td>'+beds[i].description+'</td>'+
                        '<td>'+beds[i].price+ '</td>'+
                        '<td><button>-</button>'+count+'<button onClick="increasecount('+ count+')">+</button></td>'+
                        '<td>'+(count * beds[i].price)+'</td>'+
                        '<td></td>'+
                        '<td> <button  onclick="deleteFromCart(' + beds[i].id + ')">delete</button> </td>'+
                        '</tr>'

            // myCart.push(currentBed)
            for (let i = 0; i < myCart.length; i++) {
                if (myCart[i] === myCart[i+1]) {
                    myCart.splice(i,1)
                    
                }
                
            }
            console.log(myCart)
            
            
        }
    }
    cart.innerHTML= cartItem

}
addToCart()
const deleteFromCart =(id)=>{
    if (cart[i].id == id) {
        cart.pop
        
    }
}
const decreasecount=(count)=>{
    return count -= 1
}
const increasecount= (count)=>{
    return count+=1
}