<?php
header('Content-Type: application/json');

$email = $_POST['Email'];
$password = $_POST['Password'];

function runAPI($url, $post_data, $HEADER, $method)
{

    $curlRequest = curl_init();

    curl_setopt($curlRequest, CURLOPT_HTTPHEADER, $HEADER);
    curl_setopt($curlRequest, CURLOPT_URL, $url);

    if ($method == 'post' || $method == 'POST') {
        curl_setopt($curlRequest, CURLOPT_POST, 1);
    }

    if($post_data){
        curl_setopt($curlRequest, CURLOPT_POSTFIELDS, $post_data);
    }

    curl_setopt($curlRequest, CURLOPT_RETURNTRANSFER, 0);
    curl_setopt($curlRequest, CURLOPT_CONNECTTIMEOUT, 5);
    $data = curl_exec($curlRequest);
    curl_close($curlRequest);
    $result = json_encode($data);

    return json_encode($result);
}


$url = "http://easytrades.herokuapp.com/login";
$post_data ='Email='.$email.'&Password='.$password;

$HEADER = array(
    'Content-Type: application/x-www-form-urlencoded'
);


runAPI($url,$post_data,$HEADER,'POST');





