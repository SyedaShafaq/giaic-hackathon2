 "use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCartStore } from "../Store/cart";
import { FaTrash } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

type FormValues = {
  firstName: string;
  lastName: string;
  company?: string;
  country: string;
  address: string;
  city: string;
  province: string;
  zip: string;
  phone: string;
  email: string;
  additionalInfo?: string;
  paymentMethod: string;
};

export default function CheckoutPage() {
  const { cart, removeFromCart } = useCartStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [selectedPayment, setSelectedPayment] = useState("bank_transfer");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!cart.length) {
      Swal.fire("Error", "Your cart is empty!", "error");
      return;
    }

    const orderData = {
      _type: "order",
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      city: data.city,
      zip: data.zip,
      province: data.province,
      country: data.country,
      phone: data.phone,
      email: data.email,
      additionalInfo: data.additionalInfo,
      paymentMethod: data.paymentMethod,
      items: cart.map((item) => ({
        _type: "reference",
        ref: item.id,
      })),
      totalPrice: total,
      status: "draft",
      date: new Date().toISOString(),
      paymentStatus: "pending",
    };

    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await client.create(orderData);
          localStorage.removeItem("appliedDiscount");
          Swal.fire("Success!", "Your order has been successfully processed!", "success");
        } catch (error) {
          console.error("Error creating order:", error);
          Swal.fire("Error", "Something went wrong. Please try again.", "error");
        }
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Billing Details */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">Billing Details</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">First Name</label>
              <input {...register("firstName", { required: "Required" })} className="input w-full p-3 border rounded-lg" />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Last Name</label>
              <input {...register("lastName", { required: "Required" })} className="input w-full p-3 border rounded-lg" />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">Company Name (Optional)</label>
              <input {...register("company")} className="input w-full p-3 border rounded-lg" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">Country / Region</label>
              <select {...register("country", { required: "Required" })} className="input w-full p-3 border rounded-lg">
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">Street Address</label>
              <input {...register("address", { required: "Required" })} className="input w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">City</label>
              <input {...register("city", { required: "Required" })} className="input w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Province</label>
              <input {...register("province", { required: "Required" })} className="input w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">ZIP Code</label>
              <input {...register("zip", { required: "Required" })} className="input w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone</label>
              <input {...register("phone", { required: "Required" })} className="input w-full p-3 border rounded-lg" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input type="email" {...register("email", { required: "Required" })} className="input w-full p-3 border rounded-lg" />
            </div>
          </form>
        </div>

        {/* Cart Summary & Payment */}
        <div className="bg-gray-100 shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">Your Order</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-4">
                <div className="flex gap-4">
                  <img src={item.productImage} alt={item.title} className="w-16 h-16 rounded-md" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">Rs. {item.price.toLocaleString()}</p>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                    <FaTrash />
                  </button>
              </li>
            ))}
          </ul>
          <p className="text-gray-900 font-semibold mt-4">Subtotal: Rs. {total.toLocaleString()}</p>
          <h3 className="text-xl font-semibold mt-6">Payment Method</h3>
          <div className="mt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" value="bank_transfer" checked={selectedPayment === "bank_transfer"} 
                     onChange={() => setSelectedPayment("bank_transfer")} />
              <span>Direct Bank Transfer</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer mt-2">
              <input type="radio" name="payment" value="cash" checked={selectedPayment === "cash"} 
                     onChange={() => setSelectedPayment("cash")} />
              <span>Cash on Delivery</span>
            </label>

          <button onClick={handleSubmit(onSubmit)} className="bg-primary text-lg font-semibold w-full mt-2 text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-200">
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
