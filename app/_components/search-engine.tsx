"use client";

import React, { useState } from "react";
import { products } from "./data";
import Link from "next/link";
import Header from "./header";

export default function SearchEngine() {
  const [searchTerm, setSearchTerm] = useState("");

  const results = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h1 className="text-5xl font-bold mt-10 flex justify-center italic">Search For Your Sneakers</h1>

      <div className="grid grid-cols-4 gap-7 p-20">
        {results.length > 0 ? (
          results.map((item) => (
            <Link href={`/product/${item.id}`} key={item.id} className="block">
              <div className="relative hover:scale-105 transition-all mb-4 rounded-2xl bg-gray-200 shadow-md">
                <img
                  className="w-full h-80 rounded-t-2xl object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="m-4 pb-5">
                  <h4 className="text-2xl font-bold">{item.name}</h4>
                  <p className="text-orange-600 font-bold">Rp {item.price.toLocaleString("id-ID")}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-4 text-center py-20">
            <p className="text-2xl text-gray-500 font-medium">Data tidak ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}