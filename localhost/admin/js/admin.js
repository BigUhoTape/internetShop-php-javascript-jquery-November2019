function init() {
    $.post(
        "core.php",
        {
            "action" : "init"
        },
        showItems
    );
}

function showItems(data) {
    data = jQuery.parseJSON(data);
    console.log(data);
    let out = '<select>';
    out += '<option data-id="0">Новый товар</option>';
    for (let id in data){
        out += `<option data-id="${id}">${data[id].name}</option>`;
    }
    out += '</select>';
    $('.items-out').html(out);
    $('.items-out select').on('change', selectItem );
}

function selectItem() {
    let id = $('.items-out select option:selected').attr('data-id');
    console.log(id);
    $.post(
      "core.php",
        {
            "action" : "selectOneItem",
            "itemId" : id
        },
        function (data) {
            data = jQuery.parseJSON(data);
            $('#itemName').val(data.name);
            $('#itemCost').val(data.cost);
            $('#itemDesc').val(data.description);
            $('#itemImg').val(data.image);
            $('#itemId').val(data.id);
        }
    );
}

function saveToDB () {
    let id = $('#itemId').val();
    if (id != "") {
        $.post(
            "core.php",
            {
                "action" : "updateItems",
                "id" : id,
                "itemName" : $('#itemName').val(),
                "itemCost" : $('#itemCost').val(),
                "itemDesc" : $('#itemDesc').val(),
                "itemImg" : $('#itemImg').val()
            },
            function (data) {
                if (data == 1) {
                    alert('Запись обновлена');
                    init();
                }
                else {
                    console.log(data);
                }
            }
        );
    }
    else {
        $.post(
            "core.php",
            {
                "action" : "newItems",
                "id" : 0,
                "itemName" : $('#itemName').val(),
                "itemCost" : $('#itemCost').val(),
                "itemDesc" : $('#itemDesc').val(),
                "itemImg" : $('#itemImg').val()
            },
            function (data) {
                if (data == 1) {
                    alert('Запись добавлена');
                    init();
                }
                else {
                    console.log(data);
                }
            }
        );
    }
}

function deleteFromDB() {
    let id = $('#itemId').val();
    if (id != "") {
        $.post(
            "core.php",
            {
                "action" : "deleteItems",
                "id" : id,
                "itemName" : $('#itemName').val(),
                "itemCost" : $('#itemCost').val(),
                "itemDesc" : $('#itemDesc').val(),
                "itemImg" : $('#itemImg').val()
            },
            function (data) {
                if (data == 1)
                {
                    alert('Запись удалена');
                    init();
                }
                else {
                    console.log(data);
                }
            }
        );
    }
}


$(document).ready(function () {
    init();
    $('.deleteFromDB').on('click', deleteFromDB);
    $('.addToDB').on('click', saveToDB);
});