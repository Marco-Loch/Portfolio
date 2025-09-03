<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->name) || empty($data->email) || empty($data->message)) {
        http_response_code(400);
        echo json_encode(["message" => "Incomplete data."]);
        exit;
    }

    $to = "mail@marco-loch.de";
    $subject = "Kontaktanfrage von " . htmlspecialchars($data->name);
    $body = "Name: " . htmlspecialchars($data->name) . "\n";
    $body .= "Email: " . htmlspecialchars($data->email) . "\n\n";
    $body .= "Nachricht:\n" . htmlspecialchars($data->message);

    $headers = "From: webserver@deine-domain.de" . "\r\n" .
               "Reply-To: " . htmlspecialchars($data->email);

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Email sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to send email."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed."]);
}
?>
