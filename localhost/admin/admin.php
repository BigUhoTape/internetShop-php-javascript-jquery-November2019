<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<div class="items-out"></div>
<h2>Товар</h2>
<p>  Имя: <input type="text" id="itemName"></p>
<p>  Цена: <input type="text" id="itemCost"></p>
<p>  Описание: <textarea  id="itemDesc"></textarea></p>
<p>  Изображение: <input type="text"  id="itemImg"></p>
<input type="hidden" id="itemId">

<button class="addToDB">Обновить</button>
<button class="deleteFromDB">Удалить товар</button>

<script src="js/jQuery.js"></script>
<script src="js/admin.js"></script>
</body>
</html>
