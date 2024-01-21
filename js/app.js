// DOM => Document Object Model
// BOM => Browser Object Model
const containerElem = document.querySelector('.container');
const shoesArray = [
    {
        id: 1,
        title: 'SPORT SHOE',
        price: '$53',
        src: 'images/1.png'
    },
    {
        id: 2,
        title: 'WOMEN SHOE',
        price: '$87',
        src: 'images/2.png'
    },
    {
        id: 3,
        title: 'MEN SHOE',
        price: '$34',
        src: 'images/3.png'
    }
];

shoesArray.forEach(function(product){
    containerElem.insertAdjacentHTML('beforeend', `<div class="product-card">
    <h1>${product.title}</h1>
    <p>Lorem ipsum, or ipsum as it is sometimes known</p>
    <div class="product-pic" style="background-image: url(${product.src});"></div>
    <div class="product-info">
      <div class="product-price">${product.price}</div>
      <a href="product.html?id=${product.id}" class="product-button" >See More</a>
    </div>
    </div>`);
})


