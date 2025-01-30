 "use client";

import { useCartStore } from "./cart";
import { Trash } from "lucide-react";
import Image from "next/image";
import Products from "./products";
import Link from "next/link";
 
 

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCartStore();

  return (
    <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/contactmain.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background bg-opacity-30"></div>

      {/* Breadcrumb Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl text-black font-bold">Cart</h1>
        <nav className="mt-2 text-sm font-medium">
          <ul className="flex space-x-2">
            <li>
              <Link href="/" className="text-black hover:underline">
                Home
              </Link>
            </li>
            <li className="text-black font-semibold">&gt;</li>
            <li className="text-black">Shop &gt; Cart</li>
          </ul>
        </nav>
      </div>
    <div className="max-w-5xl mx-auto p-6 ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-neutral-100 p-4 rounded-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Product</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Subtotal</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2 flex items-center gap-2">
                      <Image src={item.productImage} alt={item.title} width={60} height={60} className="rounded" />
                      <span>{item.title}</span>
                    </td>
                    <td className="p-2">$ {item.price.toLocaleString()}</td>
                    <td className="p-2">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        className="w-12 p-1 border rounded text-center"
                        />
                    </td>
                    <td className="p-2"> $ {(item.price * item.quantity).toLocaleString()}</td>
                    <td className="p-2">
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                        <Trash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-neutral-200 rounded-md max-w-md ml-auto">
            <h3 className="text-lg font-semibold">Cart Totals</h3>
            <div className="flex justify-between mt-2">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-gray-700">$ {totalPrice().toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold mt-2 text-lg">
              <span>Total</span>
              <span className="text-yellow-600">$ {totalPrice().toLocaleString()}</span>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
             <Link href="/Routes/Billing">Checkout</Link>  
            </button>
          </div>
        </>
      )}
       <Products/>
    </div>
  </div>
  );
};

export default CartPage;
