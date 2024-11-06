// QRCodePage.jsx
import React from 'react';
import QRCode from 'qrcode.react'; // Make sure you have this library installed

const QRCodePage = ({ hallId }) => {
  const qrValue = `http://yourpaymentlink.com/hall/${hallId}`; // Replace with your payment link

  return (
    <div className="qr-code-page">
      <h2>Scan to Complete Payment</h2>
      <QRCode value={qrValue} className="qr-code" />
      <p>Scan this QR code to complete your booking.</p>
    </div>
  );
};

export default QRCodePage;
