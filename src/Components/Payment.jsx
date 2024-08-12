import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const PaymentForm = () => {
  const location = useLocation();
  const { userInfo } = location.state || {};
    const [paymentMethod, setPaymentMethod] = useState('creditCard');

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
      };
    

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Payment</h2>
        {userInfo && (
          <div className="mb-4">
            <p className="text-gray-700">Name: {userInfo.firstName} {userInfo.lastName}</p>
            <p className="text-gray-700">Email: {userInfo.email}</p>
            <p className="text-gray-700">Address: {userInfo.address}
            <br />
            {userInfo.zipCode} {userInfo.province}</p>
          </div>
        )}
        <form>
        <div className="mb-4">
          <label className="block text-gray-700">Payment Method</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === 'creditCard'}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              Credit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              PayPal
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="bankTransfer"
                checked={paymentMethod === 'bankTransfer'}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              Bank Transfer
            </label>
          </div>
        </div>

        {paymentMethod === 'creditCard' && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Card Number</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Expiration Date</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">CVV</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </>
        )}

        {paymentMethod === 'paypal' && (
          <div className="mb-4">
            <label className="block text-gray-700">PayPal Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        )}

        {paymentMethod === 'bankTransfer' && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Bank Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Account Number</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Routing Number</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </>
        )}

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Pay
        </button>
         


        </form>
      </div>
    </div>
  );
};

export default PaymentForm;