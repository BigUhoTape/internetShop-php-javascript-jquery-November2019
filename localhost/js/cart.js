// let cart = {};
//
// function checkCart() {
//     // проверка наличия товара в localstorage
//     if (localStorage.getItem('cart')){
//         cart = JSON.parse(localStorage.getItem('cart'));
//         showCart();
//     }
//     else {
//         $('.cart').html('Корзина пуста');
//     }
// }
//
// function showCart() {
//     $.getJSON('item.json', function (data) {
//         let items = data;
//         let out = '';
//         for (let key in cart){
//             // out += `<img  src="${items[key].image}" alt="jaskndkajdn">`;
//             out += `<p>${items[key].cost}</p>`;
//         }
//         $('.card__cart-block').html(out);
//     });
// }

// $(document).ready(function () {
//     checkCart();
// });

let cart = {};
let count = 0;


function loadCart() {
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расширфровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
        count = JSON.parse(localStorage.getItem('count'));
        showCart();
    }
    else {
        $('.card__cart-block').html('Корзина пуста!');
    }
}

function showCart() {
    //вывод корзины
    if (!isEmpty(cart)) {
        $('.card__cart-block').html('Корзина пуста!');
    }
    else {
        $.getJSON('item.json', function (data) {
            let goods = data;
            let out = '';
            let fullCost = 0;
            for (let id in cart) {
                let cost = goods[id].cost;
                let count = cart[id];
                let summ = cost * count;
                fullCost += summ;
                out += '<div class="card__cart">';
                out += '<div class="imgAndDesc">';
                out +=`<img src = "${goods[id].image}" class="card__cart__img">`;
                out += '<div class="card__cart-desc">';
                out += `<h2 class="card__cart__title">${goods[id].name}</h2>`;
                out += `<span class="card__cart__article">Код товара: ${id}</span>`;
                out += `<p class="card__cart__text">${goods[id].description}</p>`;
                out += '</div>';
                out += '</div>';
                out += '<div class="card__cart__right">';
                out += `<button class="del-item" data-id="${id}">X</button>`;
                out += `<span class="card__cart_price">${summ}₽</span>`;
                out += `<span class="card__cart__article">${goods[id].cost} x ${count}</span>`;
                out += '</div>';
                out += '</div>';
            }
            out += '<div class="fullCost">';
            out += '<span class="fullCost__title">Общая стоимость:  </span>';
            out += `<span class="fullCost__cost">${fullCost}₽</span>`;
            out += '</div>';
            $('.card__cart-block').html(out);
            $('.del-item').on('click', delItem);
        });
    }
}

// удаление из корзины
function delItem() {
    let id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}

function saveCart() {
    //сохраняю корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
    localStorage.setItem('count', JSON.stringify(count));
}

function isEmpty(object) {
    //проверка корзины на пустоту
    for (let key in object)
        if (object.hasOwnProperty(key)) return true;
    return false;
}


$(document).ready(function () {
    loadCart();
});

