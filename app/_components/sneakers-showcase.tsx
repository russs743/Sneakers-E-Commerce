"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "../_components/data";
import Link from "next/link";

// Registrasi Plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SneakerShowcase() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi Judul
      gsap.from(".showcase-title", {
        scrollTrigger: {
          trigger: ".showcase-title",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      // Animasi Kartu Sneakers (Staggered)
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        rotation: 5,
        stagger: 0.2, // Jeda antar sepatu 0.2 detik
        duration: 1.2,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup saat pindah halaman
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="showcase-title text-5xl font-black uppercase tracking-tighter italic">
            Featured Collections
          </h2>
          <p className="showcase-title text-gray-500 mt-4">Elevate your style with our premium picks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((item, index) => (
            <Link 
              href={`/product/${item.id}`} 
              key={item.id}
            //   ref={(el) => (cardsRef.current[index] = el)} // Simpan ref tiap kartu
              className="group block"
            >
              <div className="relative bg-gray-50 rounded-[40px] p-8 duration-500 group-hover:bg-orange-50 overflow-hidden">
                {/* Badge Brand */}
                <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                  {item.brand}
                </span>
                
                {/* Gambar Sneakers dengan Efek Hover GSAP Ready */}
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full object-cover rounded-2xl mt-4 aspect-square object-contain transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500"
                />

                <div className="mt-6">
                  <h3 className="text-2xl font-bold leading-tight">{item.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-xl font-black text-orange-600">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}