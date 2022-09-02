const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoCompras = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('#shoppingCart');
const cardsContainer = document.querySelector('.cards-container')
const productDetail = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

navEmail.addEventListener('click', toggleDesktopMenu );
carritoCompras.addEventListener('click', toggleProducDetail );
menuHamIcon.addEventListener('click', toggleMobileMenu );
productDetailCloseIcon.addEventListener('click', closeProducDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCart.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCart.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    closeProducDetailAside();
}

function toggleProducDetail(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

   if(!isMobileMenuClosed){
       mobileMenu.classList.add('inactive');
   }

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
   
    if(!isDesktopMenuClosed){
       desktopMenu.classList.add('inactive');
   }

    const isproducDetailClose = productDetail.classList.contains('inactive');

   if(!isproducDetailClose){
    productDetail.classList.add('inactive');
   }

    shoppingCart.classList.toggle('inactive');
}

function openProducDetailAside(){
    shoppingCart.classList.add('inactive');

    productDetail.classList.remove('inactive');

}

function closeProducDetailAside(){
    productDetail.classList.add('inactive')
}

const productList= [];
productList.push({
    name : 'Pc',
    price: 200,
    img: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="product-img',
});
productList.push({
    name : 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="product-img',
});
productList.push({
    name : 'cell',
    price: 500,
    img: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="product-img',
});
productList.push({
    name : 'Car',
    price: 1200,
    img: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="product-img',
});
productList.push({
    name : 'Pc',
    price: 200,
    img: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="product-img',
});
productList.push({
    name : 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="product-img',
});
productList.push({
    name : 'cell',
    price: 500,
    img: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="product-img',
});
productList.push({
    name : 'Car',
    price: 1200,
    img: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="product-img',
});
productList.push({
    name : 'Pc',
    price: 200,
    img: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="product-img',
});
productList.push({
    name : 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="product-img',
});
productList.push({
    name : 'cell',
    price: 500,
    img: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="product-img',
});
productList.push({
    name : 'Car',
    price: 1200,
    img: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="product-img',
});

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name,price,img} -> product.img
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.addEventListener('click', openProducDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg' );
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);    
    }
}
renderProducts(productList);


