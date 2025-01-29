import Link from "next/link";
import React from "react";


 function Footer() {
  return (
    <footer className="bg-white text-black border-t relative top-[185px] border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Address */}
          <div>
            <h2 className="text-lg font-bold">Funiro.</h2>
            <p className="mt-2 text-gray-500">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-900 uppercase tracking-wider text-sm font-semibold">
              Links
            </h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-black">Home</Link></li>
              <li><Link href="/shop" className="text-gray-600 hover:text-black">Shop</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-black">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-gray-900 uppercase tracking-wider text-sm font-semibold">
              Help
            </h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/payment-options" className="text-gray-600 hover:text-black">Payment Options</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-black">Returns</Link></li>
              <li><Link href="/privacy-policies" className="text-gray-600 hover:text-black">Privacy Policies</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-900 uppercase tracking-wider text-sm font-semibold">
              Newsletter
            </h3>
            <div className="mt-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
              />
              <button className="mt-3 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4 text-center">
          <p className="text-gray-500">© 2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer