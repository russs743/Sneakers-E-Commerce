"use client";
import React, { useState } from "react";
import { useCart } from "./_store/usecart"; 
import { useRouter } from "next/navigation";

export default function Counter({ item }: { item: any }) {
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const addItem = useCart((state) => state.addItem); 

  const handleAddToCart = () => {
    addItem(item, qty);
    alert(`${item.name} successfully added to cart!`);
  };

  const handleDirectCheckout = () => {
    // Logika: Tambahkan ke keranjang dulu, lalu langsung ke halaman checkout
    addItem(item, qty); 
    router.push("/checkout"); 
  };

  return (
    <div className="mt-6">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => setQty(Math.max(1, qty - 1))} 
          className="bg-gray-200 px-4 py-2 rounded-xl text-xl font-bold"
        >
          -
        </button>
        <span className="text-2xl font-bold">{qty}</span>
        <button 
          onClick={() => setQty(qty + 1)} 
          className="bg-gray-200 px-4 py-2 rounded-xl text-xl font-bold"
        >
          +
        </button>
      </div>
      
      <div className="flex gap-5">
        <button 
          onClick={handleAddToCart} 
          className="bg-orange-500 p-5 rounded-2xl text-white font-bold hover:scale-105 transition-all shadow-lg"
        >
          Add to Cart
        </button>
        <button onClick={handleDirectCheckout} className="bg-green-500 p-5 rounded-2xl text-white font-bold hover:scale-105 transition-all shadow-lg">
          Checkout Now
        </button>
      </div>
    </div>
  );
}