<?php
/**
 * UCS Flooring - Lead Mailer (SMTP)
 * ---------------------------------------------------------------
 * Upload this file (and the /PHPMailer folder) to your hosting's
 * public_html (or wherever index.html lives). The React forms
 * POST JSON to /mail.php and this script delivers the lead via
 * SMTP to BOTH inbox addresses.
 *
 * SETUP (one-time, on the server):
 * 1) Download PHPMailer 6.x:  https://github.com/PHPMailer/PHPMailer/releases
 *    Extract the `src` folder and rename it to `PHPMailer`, place
 *    next to this file so the structure is:
 *      public_html/mail.php
 *      public_html/PHPMailer/PHPMailer.php
 *      public_html/PHPMailer/SMTP.php
 *      public_html/PHPMailer/Exception.php
 *
 * 2) Fill in the SMTP_* constants below with your real credentials.
 *    - For Gmail: create an App Password (requires 2FA) at
 *      https://myaccount.google.com/apppasswords  (NOT your normal pw)
 *    - For cPanel/Hostinger/GoDaddy: use the mailbox + password you
 *      created in cPanel Email Accounts. Host is usually
 *      mail.yourdomain.com, port 465 (SSL) or 587 (TLS).
 * ---------------------------------------------------------------
 */

// ====== CONFIGURE THESE ======================================
define('SMTP_HOST', 'smtp.gmail.com');           // e.g. smtp.gmail.com OR mail.yourdomain.com
define('SMTP_PORT', 465);                         // 465 (SSL) or 587 (TLS)
define('SMTP_SECURE', 'ssl');                     // 'ssl' for 465, 'tls' for 587
define('SMTP_USER', 'your_sending_mailbox@gmail.com');  // SMTP login
define('SMTP_PASS', 'your_app_password_here');          // SMTP password / App Password
define('SMTP_FROM_EMAIL', 'your_sending_mailbox@gmail.com'); // From: address
define('SMTP_FROM_NAME',  'UCS Flooring Website');

// Recipients - leads go to BOTH
$RECIPIENTS = [
    'ultimatechennailtd@gmail.com' => 'Ultimate Construction Solution',
    'allmyleads7@gmail.com'        => 'Lead Inbox',
];

// Allowed origins (CORS) - keep your live domain(s) here
$ALLOWED_ORIGINS = [
    'https://floor-conversion-forge.lovable.app',
    'https://id-preview--c1d87684-35d4-4c57-8c27-5733dce9184f.lovable.app',
    // add your custom domain here e.g. 'https://ucsflooring.com'
];
// =============================================================

// ---- CORS ---------------------------------------------------
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $ALLOWED_ORIGINS, true)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: *"); // relax if you prefer; tighten in production
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// ---- Parse input (JSON or form-encoded) --------------------
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) { $data = $_POST; }

// ---- Validate ----------------------------------------------
function clean($v, $max = 500) {
    $v = is_string($v) ? trim($v) : '';
    $v = strip_tags($v);
    return mb_substr($v, 0, $max);
}

$name    = clean($data['name']    ?? '', 80);
$company = clean($data['company'] ?? '', 100);
$city    = clean($data['city']    ?? '', 60);
$phone   = clean($data['phone']   ?? '', 20);
$service = clean($data['service'] ?? '', 50);
$area    = clean($data['area']    ?? '', 20);
$message = clean($data['message'] ?? '', 1000);
$source  = clean($data['source']  ?? 'Website', 60);

if ($name === '' || $phone === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Name and phone are required']);
    exit;
}
if (!preg_match('/^[0-9+\-\s()]{10,15}$/', $phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid phone number']);
    exit;
}

// ---- Compose email -----------------------------------------
$subject = "🔔 New Flooring Lead - {$name} ({$service})";

$rowsHtml = '';
$fields = [
    'Name'     => $name,
    'Phone'    => $phone,
    'Service'  => $service,
    'Company'  => $company,
    'City'     => $city,
    'Area (sq.ft)' => $area,
    'Message'  => $message,
    'Source'   => $source,
    'Submitted At' => date('d M Y, h:i A'),
    'IP'       => $_SERVER['REMOTE_ADDR'] ?? '-',
];
foreach ($fields as $k => $v) {
    if ($v === '' || $v === null) continue;
    $rowsHtml .= '<tr>'
      . '<td style="padding:8px 12px;background:#f4f6fb;font-weight:600;color:#0a2540;border-bottom:1px solid #e6eaf2;width:160px">' . htmlspecialchars($k) . '</td>'
      . '<td style="padding:8px 12px;color:#1f2937;border-bottom:1px solid #e6eaf2">' . nl2br(htmlspecialchars($v)) . '</td>'
      . '</tr>';
}

$bodyHtml = '<div style="font-family:Arial,Helvetica,sans-serif;background:#f1f4f9;padding:24px">'
  . '<div style="max-width:620px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 14px rgba(10,37,64,.08)">'
  . '<div style="background:linear-gradient(135deg,#0a2540,#1e40af);padding:20px 24px;color:#fff">'
  . '<div style="font-size:12px;letter-spacing:2px;opacity:.85">UCS FLOORING</div>'
  . '<h2 style="margin:6px 0 0;font-size:20px">New Lead Received</h2>'
  . '</div>'
  . '<table cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;font-size:14px">' . $rowsHtml . '</table>'
  . '<div style="padding:16px 24px;background:#fafbfd;color:#6b7280;font-size:12px">'
  . 'Call back within 30 minutes for best conversion. — UCS Website'
  . '</div></div></div>';

$bodyText = "New UCS Flooring Lead\n\n";
foreach ($fields as $k => $v) {
    if ($v === '' || $v === null) continue;
    $bodyText .= "$k: $v\n";
}

// ---- Send via PHPMailer (SMTP) -----------------------------
require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = SMTP_SECURE === 'tls'
        ? PHPMailer::ENCRYPTION_STARTTLS
        : PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = (int) SMTP_PORT;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
    foreach ($RECIPIENTS as $email => $label) {
        $mail->addAddress($email, $label);
    }
    // Reply-To = the lead, so you can reply directly from inbox if email provided
    if (!empty($data['email']) && filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $mail->addReplyTo($data['email'], $name);
    }

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $bodyHtml;
    $mail->AltBody = $bodyText;

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    error_log('mail.php SMTP error: ' . $mail->ErrorInfo);
    echo json_encode(['success' => false, 'error' => 'Mail could not be sent. Please call us directly.']);
}
