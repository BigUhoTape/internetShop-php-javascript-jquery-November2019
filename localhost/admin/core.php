<?php
$action = $_POST['action'];

require_once 'function.php';

switch ($action) {
    case 'init':
        init();
        break;
    case 'selectOneItem':
        selectOneItem();
        break;
    case 'updateItems':
        updateItems();
        break;
    case 'newItems':
        newItems();
        break;
    case 'deleteItems':
        deleteItems();
        break;
}
