import React, { useState, useCallback } from 'react';
import QrReader from 'react-qr-scanner';

const ScanQRCode = () => {
    const [result, setResult] = useState('No result');
    const [delay] = useState(100);
    const handleScan = useCallback((data) => {
      if (data && data.text) {
        setResult(data.text); // Extract the text from the data object
      }
    }, []);

    const handleError = useCallback((err) => {
      console.error(err);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
          <QrReader
            delay={delay}
            style={{ height: 240, width: '100%' }}
            onError={handleError}
            onScan={handleScan}
          />
          <p className="mt-4 text-lg font-semibold text-gray-700 text-center">
            {result}
          </p>
        </div>
      </div>
    );
};

export default ScanQRCode;
