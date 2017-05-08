<?php
header('Content-Type: text/json');

$email = $_POST['Email'];
$password = $_POST['Password'];
$username = $_POST['UserName'];

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


$url = "http://easytrades.herokuapp.com/employee/nuwans/location";
$post_data = null;

$HEADER = array(
    'Content-Type: text/json',
    'Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YzkxYzAwN2Q5Y2U4NDZhY2NmM2UwMCIsImlhdCI6MTQ5MTU2MTQwOX0.G7uNpclCYriji71qMzrT2b64s7LBN3eFtQIMTIK19RM'
);


runAPI($url,$post_data,$HEADER,'GET');





