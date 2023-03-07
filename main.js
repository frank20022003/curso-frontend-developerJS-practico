const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  if(!isAsideClosed){
  aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
  
}


function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  if(!isAsideClosed){
  aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    aside.classList.toggle('inactive');
}
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

if (!isMobileMenuClosed) {
  mobileMenu.classList.add('inactive');
}

const productList = [];
productList.push({
  nombre: 'Bike',
  Precio: 120,
  Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
  nombre: 'PC',
  Precio: 780,
  Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
  nombre: 'Pantalla',
  Precio: 500,
  Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  nombre: 'Bike',
  Precio: 120,
  Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
  nombre: 'PC',
  Precio: 780,
  Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
  nombre: 'Pantalla',
  Precio: 500,
  Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})




function renderProducts(productList) {
  for(product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add("product-card");
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.Image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add("product-info");
  
    const productInfoDiv = document.createElement('div');
  
  
    const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.Precio;
    const productName = document.createElement('p');
    productName.innerText = product.nombre;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
}
renderProducts(productList);
