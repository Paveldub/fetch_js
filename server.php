<?php
    header('Content-type: text/html; charset=utf-8');
        if(isset($_POST['name']) && isset($_POST['age'])) {
           echo 'Данные получены. Имя: '.$_POST['name']. 'Возраст: '.$_POST['age'];
        } else {
            echo 'Данные не получены';
        }
?>