"use client";

import { useState } from "react";
import { useCartStore } from "../Store/cart";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();
  const { cart, totalPrice } = useCartStore();
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    street: "",
    city: "",
    province: "",
    zip: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("bank");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = () => {
    console.log("Order placed:", { billingDetails, paymentMethod, cart });
    router.push("/order-success");
  };

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="firstName" placeholder="First Name" className="input" onChange={handleInputChange} />
          <input type="text" name="lastName" placeholder="Last Name" className="input" onChange={handleInputChange} />
        </div>
        <input type="text" name="company" placeholder="Company Name (Optional)" className="input mt-4" onChange={handleInputChange} />
        <select name="country" className="input mt-4" onChange={handleInputChange}>
          <option value="">Select Country</option>
          <option value="Sri Lanka">Sri Lanka</option>
        </select>
        <input type="text" name="street" placeholder="Street Address" className="input mt-4" onChange={handleInputChange} />
        <input type="text" name="city" placeholder="Town / City" className="input mt-4" onChange={handleInputChange} />
        <input type="text" name="zip" placeholder="ZIP Code" className="input mt-4" onChange={handleInputChange} />
        <input type="text" name="phone" placeholder="Phone" className="input mt-4" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email Address" className="input mt-4" onChange={handleInputChange} />
        <textarea name="additionalInfo" placeholder="Additional Information" className="input mt-4" onChange={handleInputChange}></textarea>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <span>{item.title} × {item.quantity}</span>
              <span>Rs. {item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total:</span>
            <span>Rs. {totalPrice().toFixed(2)}</span>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mt-6">Payment Method</h2>
        <div className="mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" value="bank" checked={paymentMethod === "bank"} onChange={() => setPaymentMethod("bank")} />
            <span>Direct Bank Transfer</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" value="cod" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
            <span>Cash On Delivery</span>
          </label>
        </div>
        
        <button onClick={handleOrderSubmit} className="mt-6 w-full bg-black text-white py-2 rounded-lg">Place Order</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
   
        

      
   
