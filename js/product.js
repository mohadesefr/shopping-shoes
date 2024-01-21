let detailElem = document.querySelector('.details');
let backBtn = document.getElementById('Back');
const shoesArray = [
    {
        id: 1,
        title: 'SPORT SHOE',
        price: '$53',
        src: 'images/1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? SPORT SHOE'
    },
    {
        id: 2,
        title: 'WOMEN SHOE',
        price: '$87',
        src: 'images/2.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? WOMEN SHOE'
    },
    {
        id: 3,
        title: 'MEN SHOE',
        price: '$34',
        src: 'images/3.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? MEN SHOE'
    }
];

backBtn.addEventListener('click', function () {
    history.back();
});

let urlSearch = new URLSearchParams(location.search);
let userIDParams = urlSearch.get('id');

let currentShoe = shoesArray.find(function(product){
    return product.id === Number(userIDParams);
})

if(currentShoe){
    detailElem.insertAdjacentHTML('afterbegin', `<div class="desc">
    <h1>${currentShoe.title}</h1>
    <p>${currentShoe.text}</p>
    </div>
    <div class="image">
    <img src="${currentShoe.src}" />
    </div>`);
    
}else{
location.href = 'file:///Users/mohadese/Downloads/245-explian-of-shoes-shop-project/source/index.html'
}


