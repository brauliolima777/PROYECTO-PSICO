let carts = document.querySelectorAll('.buy-btn')


let productos = [
    {
        name: 'Como un caballito',
        price: 500,
        inCart: 0,
    },
    {
        name: 'Cara de cabra',
        price: 500,
        inCart: 0,
    },
    {
        name: 'American Psico',
        price: 500,
        inCart: 0,
    },
    {
        name: 'American Psico b/w',
        price: 450,
        inCart: 0,
    }    
]


for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.far fa-shopping-cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.far fa-shopping-cart span').textContent = 1;
    }

    
}