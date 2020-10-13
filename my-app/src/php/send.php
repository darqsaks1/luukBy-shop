<?php
header("Content-Type: text/html; charset=utf-8");

if(isset($_POST['phone'])) {

//stick start
$orderData['phone'] = $_POST['phone'];
$orderData['name'] = $_POST['name'];
$orderData['razmer'] = $_POST['razmer'];
$orderData['comment'] = "";

$id = $orderData['razmer'];

$vardata;
$price;


if($id == ''){
    $vardata = 11093;
    $orderData['comment'] = "Уточнить размер одеяла";
    $price = 59;
}
elseif($id == 'Одеяло полуторное') {
    $vardata = 11094;
    $price = 59;
}
elseif($id == 'Одеяло двуспальное') {
    $vardata = 11095;
    $price = 69;
}
elseif($id == 'Одеяло евро') {
    $vardata = 11096;
    $price = 79;
}

$orderData['products'][0] = [
    'offer_id' => $vardata,
    'price' => $price, 
    'quantity' => 1,
];

$orderData['products'][1] = [
    'offer_id' => 11097,
    'price' => 0, 
    'quantity' => 1,
];

$message = [
    "api_token" => "iH1MeRuJTmN3rwSfWLgByuIEmAxIqqnV6M2q3Nih3DwFEGNQXitrRLffrWvg", //Настройки->Интеграции->Api Ключ
    'order' => $orderData,
];

$curl = curl_init();
$messageQuery = http_build_query($message);
$curlUrl = 'https://stickcrm.by/api/orders';
curl_setopt($curl, CURLOPT_URL, $curlUrl);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $messageQuery);
$resultJson = curl_exec($curl);
//stick end
	
$email = "vrassrochky.by@gmail.com"; #Email, на него придут письма
$title = "Бамбуковое одеяло + 2 подушки в подарок"; #Заголовок письма

$text = "
Информация о покупателе:

Имя: ".$_POST['name']."
Телефон: ".$_POST['phone']."
Время заказа: ".date("Y-m-d H:i:s");

if(mail($email, $title, $text)) {
	header('Location: good.html');
} else {
	echo "Ошибка. Возможно функция mail отключена. Обратитесь к хостинг-провайдеру или возьмите консультацию на сайте, где купили шаблон";
}
} else {
	echo "Ошибка";
}
?>