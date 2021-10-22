// const addToCartBtn1 = document.getElementById('button1');
// const addToCartBtn2 = document.getElementById('button2');
// const addToCartBtn3 = document.getElementById('button3');
// const addToCartBtn4 = document.getElementById('button4');
// const addToCartBtn5 = document.getElementById('button5');
// const addToCartBtn6 = document.getElementById('button6');

// addToCartBtn1.addEventListener("click",()=>{
//     console.log("Added 1 to cart")
// })
// addToCartBtn2.addEventListener("click",()=>{
//     console.log("Added 2 to cart")
// })
// addToCartBtn3.addEventListener("click",()=>{
//     console.log("Added 3 to cart")
// })
// addToCartBtn4.addEventListener("click",()=>{
//     console.log("Added 4 to cart")
// })
// addToCartBtn5.addEventListener("click",()=>{
//     console.log("Added 5 to cart")
// })
// addToCartBtn6.addEventListener("click",()=>{
//     console.log("Added 6 to cart")
// })

let beds = [{
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
        console.log(beds[i].id)
        singleBed= beds[i]
        single += '<div class="my-beds">' +
                        '<img src="' +singleBed.image+'">'+
                        '<h4>' +singleBed.description +'</h4>'+
                        '<h4>' +singleBed.price + '</h4>'+
                        '<button onClick=addToCart('+ singleBed.id+')>'+"Add to cart" +'</button>'+
                     '</div>'

    }
    myBedsDiv.innerHTML= single
    
}
showBeds()