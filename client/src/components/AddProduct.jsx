import React, { useState } from 'react';
import QrCode from './QRCode';
import axios from 'axios';

export default function App() {
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [options, setOptions] = useState({});
  const [url, setUrl] = useState('');

  function generateQRCode() {
    if (productCode) {
      setOptions({
        ecLevel: 'M',
        enableCORS: false,
        size: 250,
        quietZone: 10,
        bgColor: "#FFFFFF",
        fgColor: "black",
        logoImage: "https://webisora.com/wp-content/uploads/2017/09/WebisoraLogo_B.png",
        logoWidth: 180,
        logoHeight: 40,
        logoOpacity: 1,
        qrStyle: "squares"
      });
      setUrl(productCode);
      document.getElementById("qrcode-container").style.display = "block";
    } else {
      alert("Please enter a valid Product Code");
    }
  }

  async function handleSubmit() {
    try {
      const response = await axios.post('https://example.com/api/products', {
        productName,
        productCode
      });
      console.log('Product added successfully:', response.data);
      alert('Product submitted successfully!');
    } catch (error) {
      console.error('Error submitting product:', error);
      alert('Failed to submit product.');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">QR Code Generator</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter Product Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="productCode" className="block text-sm font-medium text-gray-700">Product Code</label>
            <input
              type="text"
              id="productCode"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              placeholder="Enter Product Code"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="button"
            onClick={generateQRCode}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Generate QR Code
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit
          </button>
        </div>
        <div id="qrcode-container" className="mt-6" style={{ display: 'none' }}>
          <hr className="my-4" />
          {url && <QrCode url={url} options={options} />}
        </div>
      </div>
    </div>
  );
}
