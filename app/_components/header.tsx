"use client";

import React from "react";
import Link from "next/link";
// 1. Ambil useCart dari store sesuai struktur foldermu
import { useCart } from "./_store/usecart"; 

interface HeaderProps {
  searchTerm?: string;
  setSearchTerm?: (value: string) => void;
}

export default function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  // 3. Panggil data item dari store
  const items = useCart((state) => state.items);
  const cartCount = items.length; // Variabel ini sekarang sudah terisi

  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-4 flex items-center justify-between bg-black text-white shadow-lg">
      <Link href="/" className="text-2xl font-bold tracking-tighter italic">
        SNEAKERS.CO
      </Link>
      
      {setSearchTerm && (
        <div className="flex-1 flex justify-center px-10">
          <input
            className="w-full max-w-2xl p-0.5 text-xl text-white rounded-xl border-gray-950 bg-transparent outline-0 focus:border-white transition-all"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <div className="flex items-center gap-5">
        <Link href="/cart" className="hover:scale-105 transition-all flex">
        <div className="relative inline-block">
          <strong className="bg-orange-500 absolute text-4xl p-2 left-5 bottom-6 w-1 h-1 rounded-full text-sm ml-1 text-black flex items-center justify-center p-2 min-w-[25px] h-[25px]">({cartCount})</strong>            
          <img
            src="/Img/shopping-cart.png" 
            alt="Keranjang Belanja" 
            width="40" 
          />        
        </div>
          {/* <img
            src="/Img/shopping-cart.png" 
            alt="Keranjang Belanja" 
            width="40" 
          /> */}
          {/* <strong className="bg-orange-500 text-4xl px-2 py-1 rounded-lg text-sm ml-1 text-black">({cartCount})</strong> */}
        </Link>
      </div>
    </nav>
  );
}