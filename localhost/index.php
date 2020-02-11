<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Интренет-магазин</title>
  <!-- <script src="https://kit.fontawesome.com/dde264833b.js" crossorigin="anonymous"></script> -->
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <header>
    <div class="top-bar">
      <div class="container">
        <div class="top-bar-row">


          <?php if($_COOKIE['user'] == ''): ?>
          <div class="login">
            <div class="login__icon"><i class="fa fa-user-o" aria-hidden="true"></i>
            </div>
            <a href="#" class="login__btn" id="sign_in">Войти</a>
            <div class="login__icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>
            <a href="#" class="login__btn" id="sign_up">Регистрация</a>
          </div>
          <?php else: ?>
          <div class="login" style="color:#ffffff;">
            <h2 class="login__title">Привет, <span class="login__span"><?=$_COOKIE['user']?>. </span></h2>
            <a href="config/exit.php" class="login__close" style="color:#000000;">Выход</a>
          </div>
          <?php endif;?>

          <div class="form-block">

            <form action="config/reg.php" class="form" method="post">
              <a href="#" class="form__close" id="form_close">&times;</a>
              <div class="logo">
                <p class="logo__text">регистарция</p>
              </div>
              <input type="text" class="form__input field"  name="firstname" placeholder="Ваше имя" required>
              <input type="email" class="form__input field" name="email" placeholder="Email" required>
              <input type="password" class="form__input field" name="pass" placeholder="Пароль" required>
              <button type="submit" class="form__btn">Регистрация</button>
            </form>

          </div>

          <div class="form-block form-block-auth">

            <form action="config/auth.php" class="form" method="post">
              <a href="#" class="form__close" id="form_close">&times;</a>
              <div class="logo">
                <p class="logo__text">авторизация</p>
              </div>
              <input type="email" class="form__input" name="email" placeholder="Email">
              <input type="password" class="form__input" name="pass" placeholder="Пароль">
              <button type="submit" class="form__btn">Войти</button>
            </form>

          </div>

            <div class="navigation-block">
                <div class="basket">
                    <div class="basket__icon"><i class="fa fa-heart" aria-hidden="true"></i>
                    <a href="cart.php" class="basket__name">Корзина
                        <span class="basket__name_count" id="basket__value">0</span>
                    </a>
                </div>
            </div>

        </div>
      </div>
    </div>
    <div class="navigation">
      <div class="container">
        <div class="main">


          <div class="card-block">
<!---->
<!--            <div class="card">-->
<!--              <img src="img/card/galaxy10.png" alt="Изображение телефона" class="card__img">-->
<!--              <div class="card-desc">-->
<!--                <h2 class="card__title" name="name">Galaxy S10</h2>-->
<!--                <span class="card__article">Код товара: 1</span>-->
<!--                <p class="card__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, molestiae sequi!-->
<!--                  Architecto ipsam aliquam vitae harum qui, nisi obcaecati.</p>-->
<!--              </div>-->
<!--              <div class="card-cost">-->
<!--                <span class="card__price" name="price">78500₽</span>-->
<!--                <a href="config/card.php" class="card__btn">В корзину</a>-->
<!--              </div>-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>

  </header>



  <script src="js/jQuery.js"></script>
  <script src="js/main.js"></script>
</body>

</html>