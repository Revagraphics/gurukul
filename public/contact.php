<?php
header('Content-Type: application/json; charset=utf-8');
// Update this to your live production domain
header('Access-Control-Allow-Origin: https://societygurukul.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!is_array($data)) {
    $data = $_POST;
}

// =========================
// CLEAN INPUTS
// =========================
$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$phone = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$classLevel = isset($data['classLevel']) ? trim(strip_tags($data['classLevel'])) : '';
$source = isset($data['source']) ? trim($data['source']) : 'website';

// =========================
// RECEIVER EMAILS (Update these)
// =========================
$recipients = [
    'info@societygurukul.com', // Update to your official email
];

// =========================
// SUBJECT
// =========================
$subject = 'New Admission Inquiry: Society Gurukul';

// =========================
// EMAIL BODY DESIGN
// =========================
$body = "
<html>
<body style='margin:0; padding:20px; background:#f4f4f4; font-family:Arial,sans-serif;'>
    <table width='100%' cellpadding='0' cellspacing='0'>
        <tr>
            <td align='center'>
                <table width='auto' cellpadding='0' cellspacing='0' 
                style='background:#ffffff; border-radius:10px; overflow:hidden; max-width: 600px;'>
                    
                    <!-- HEADER -->
                    <tr>
                        <td style='background:#0B1D33; padding:20px; text-align:center;'>
                            <h2 style='margin:0; color:#C9A227;'>Society Gurukul</h2>
                        </td>
                    </tr>
                    
                    <!-- CONTENT -->
                    <tr>
                        <td style='padding:30px;'>
                            <h3 style='margin-top:0; color:#0B1D33;'>New Student Admission Inquiry</h3>
                            <table width='100%' cellpadding='12' cellspacing='0' style='border-collapse:collapse;'>
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9; width:150px;'><strong>Name</strong></td>
                                    <td style='border:1px solid #ddd;'>{$name}</td>
                                </tr>
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9;'><strong>Phone</strong></td>
                                    <td style='border:1px solid #ddd;'>{$phone}</td>
                                </tr>
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9;'><strong>Class Level</strong></td>
                                    <td style='border:1px solid #ddd;'>{$classLevel}</td>
                                </tr>
                                <tr>
                                    <td style='border:1px solid #ddd; background:#f9f9f9;'><strong>Submitted At</strong></td>
                                    <td style='border:1px solid #ddd;'>" . date('d M Y H:i:s') . "</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- FOOTER -->
                    <tr>
                        <td style='padding:18px; text-align:center; background:#fafafa; color:#777; font-size:13px;'>
                            This email was sent from the Society Gurukul website inquiry form.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
";

// =========================
// HEADERS
// =========================
$headers = [
    "From: Society Gurukul <noreply@societygurukul.com>",
    "Reply-To: noreply@societygurukul.com",
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "X-Mailer: PHP/" . phpversion()
];

// =========================
// SEND MAIL
// =========================
$success = true;
foreach ($recipients as $recipient) {
    if (!mail($recipient, $subject, $body, implode("\r\n", $headers))) {
        $success = false;
    }
}

// =========================
// RESPONSE
// =========================
if ($success) {
    echo json_encode(['success' => true, 'message' => 'Thank you! We will contact you soon.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to send inquiry.']);
}
?>