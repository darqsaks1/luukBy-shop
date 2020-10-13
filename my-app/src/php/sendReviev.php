<?php
header("Content-Type: text/html; charset=utf-8");

if(isset($_POST['data_rew'])) {

//stick start
 
$name= $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone']; 
$delivery = $_POST['delivery']; 
$adress = $_POST['adress'];
$comment = $_POST['comment'];
$order = $_POST['order'];

$email = "vrassrochky.by@gmail.com"; 
$title = "ОТЗЫВ НА КЛАТЧ ЖЕНСКИЙ"; 

$text = "
Информация о покупателе:

 
Имя: ". $_POST['name']."
email: ". $_POST['email']."
phone: ". $_POST['phone']." 
Тип доставки: ". $_POST['delivery']."
Адрес: ". $_POST['adress']."
Комментарий к заказу: ". $_POST['comment']."
Заказ (может быть несколько разных товаров и их количество): ". $_POST['order']."

Время заказа: ".date("Y-m-d H:i:s");

if(mail($email, $title, $text)) {
	header('Location: index.html');
} else {
	echo "Ошибка. Возможно функция mail отключена. Обратитесь к хостинг-провайдеру или возьмите консультацию на сайте, где купили шаблон";
}
} else {
	echo "Ошибка";
}
?>