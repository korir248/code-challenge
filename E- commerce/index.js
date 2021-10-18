
let rev = 0;
carousel(rev);

let previousReview = () => {
    rev = rev - 1;
    carousel(rev);

}
  
let nextReview=() => {
    rev = rev + 1;
    carousel(rev);
}
  
let carousel=(review) =>{
    let reviews = document.getElementsByClassName("review__items");
  
    if (review >= reviews.length) {
        review = 0;
        rev = 0;
    }
    if (review < 0) {
        review = reviews.length - 1;
        rev = reviews.length - 1;
    }
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
     reviews[review].style.display = "block";
}

const items = document.getElementById('items');
const show = document.getElementById('show');

let beds = [
    {
        id:1,
        // image:'./resources/',
        price: 200,
        name:'queen',
        description:'5 by 6'
    },
    {
        id:2,
        // image:'bed1.jpg',
        price: 300,
        name:'king',
        description:'3 by 6'
    },
    {
        id:3,
        // image:'bed1.jpg',
        price: 400,
        name:'king',
        description:'2 by 6'
    },
    {
        id:4,
        // image:'bed1.jpg',
        price: 500,
        name:'queen',
        description:'3 by 6'
    },
    {
        id:5,
        // image:'bed1.jpg',
        price: 600,
        name:'king',
        description:'4 by 6'
    }
];

function createItem(beds) {
    beds.map(bed => {
        
        let singleItem = document.createElement("div");
        // let bedImage = document.createElement('img');
        let price = document.createElement("h4");
        let name = document.createElement("h5");
        let description = document.createElement('p');
        let btn = document.createElement('button');

        bedImage.classList.add('bedImage');
        singleItem.classList.add('singleItem');
        btn.classList.add('addToCart');

        description.innerText = bed.description;
        name.innerText = bed.name;
        price.innerText = bed.price;
        bedImage.src = bed.image;
        btn.innerHTML = 'add to cart';

        // singleItem.appendChild(bedImage);
        singleItem.appendChild(price);
        singleItem.appendChild(name);
        singleItem.appendChild(description);
        singleItem.appendChild(btn);
       // singleItem.appendChild(description);
        items.appendChild(singleItem);

    });
}

items.addEventListener('click', function () {
    console.log('joan');
});
createItem(beds);
items.addEventListener
