// let cart = {}; // массив корзина
//
// Появление формы авторизации и регистрации
//
// function loadItem() {
//   // загрузка товаров на страницу
//   $.getJSON('item.json', function (data) {
//     //console.log(data);
//     // console.log(data.cost);
//     let out = '';
//     for (let key in data){
//       out += '<div class="card">';
//       out +=  `<img src="${data[key].image}" alt="Изображение телефона" class="card__img">`;
//       out += '<div class="card-desc">';
//       out += `<h2 class="card__title" name="name">${data[key].name}</h2>`;
//       out += `<span class="card__article">Артикул ${key}</span>`;
//       out += `<p class="card__text">${data[key].description}</p>`;
//       out += '</div>';
//       out += '<div class="card-cost">';
//       out += `<span class="card__price" name="price">${data[key].cost}₽</span>`;
//       out += `<a data-art="'${key}" class="card__btn">В корзину</a>`;
//       out += '</div>';
//       out += '</div>';
//     }
//     $('.card-block').html(out);
//     $('a.card__btn').on('click', addToCart);
//   })
// }
//
// function addToCart() {
//   //добавление в корзину
//   let articul = $(this).attr('data-art');
//   if (cart[articul] == undefined){
//     cart[articul] = 1;
//   }
//   else {
//     cart[articul]++;
//   }
//   localStorage.setItem('cart', JSON.stringify(cart));
//   console.log(cart);
// }
//
// function checkCart() {
//   // проверка наличия товара в localstorage
//   if (localStorage.getItem('cart')){
//     cart = JSON.parse(localStorage.getItem('cart'));
//   }
// }

let cart = {}; // корзина
let count = 0;
let basketVal = document.querySelector('#basket__value');
let countBasket = 0;



function init() {
  //вычитуем файл goods.json
  $.getJSON("item.json", goodsOut);
}

function goodsOut(data) {
  // вывод на страницу
  console.log(data);
  var out='';
  for (let key in data) {
    out += '<div class="card">';
    out +=  `<img src="${data[key].image}" alt="Изображение телефона" class="card__img">`;
    out += '<div class="card-desc">';
    out += `<h2 class="card__title" name="name">${data[key].name}</h2>`;
    out += `<span class="card__article">Артикул ${key}</span>`;
    out += `<p class="card__text">${data[key].description}</p>`;
    out += '</div>';
    out += '<div class="card-cost">';
    out += `<span class="card__price" name="price">${data[key].cost}₽</span>`;
    out += `<a data-art="${key}" class="card__btn">В корзину</a>`;
    out += '</div>';
    out += '</div>';
  }
  $('.card-block').html(out);
  $('a.card__btn').on('click', addToCart);
}

function addToCart() {
  //добавляем товар в корзину
  let id = $(this).attr('data-art');
  // console.log(id);
  if (cart[id]==undefined) {
    cart[id] = 1; //если в корзине нет товара - делаем равным 1
    count++;
    countBasket ++;
    basketVal.textContent = countBasket;
  }
  else {
    cart[id]++; //если такой товар есть - увеличиваю на единицу
    count++;
    countBasket++;
    basketVal.textContent = countBasket;
  }
  saveCart();
}

function saveCart() {
  //сохраняю корзину в localStorage
  localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
  localStorage.setItem('count', JSON.stringify(count));
  localStorage.setItem('countBasket', JSON.stringify(countBasket));

}



function loadCart() {
  //проверяю есть ли в localStorage запись cart
  if (localStorage.getItem('cart')) {
    // если есть - расширфровываю и записываю в переменную cart
    cart = JSON.parse(localStorage.getItem('cart'));
    count = JSON.parse(localStorage.getItem('count'));
    countBasket = JSON.parse(localStorage.getItem('countBasket'));
    basketVal.textContent = countBasket;
  }
}



$(document).ready(function () {
  init();
  loadCart();


  $('#sign_up').on('click', () => {
    $('.form-block').toggleClass('form-block_active');
    $('.form-block-auth').removeClass('form-block-auth_active');
  });
  $('#sign_in').on('click', () => {
    $('.form-block-auth').toggleClass('form-block-auth_active');
    $('.form-block').removeClass('form-block_active');
  });

  // Закрытие открытой формы
  $('.form__close').on('click', () => {
    $('.form-block').removeClass('form-block_active');
  });
  $('.form__close').on('click', () => {
    $('.form-block-auth').removeClass('form-block-auth_active');
  });
});



