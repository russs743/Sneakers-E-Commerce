"use client";
import { useCart } from "../_components/_store/usecart";
import Link from "next/link";

export default function CheckoutPage() {
  const { items } = useCart();

  // Perhitungan Biaya
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingFee = 25000;
  const adminFee = 2000;
  const totalPrice = subtotal + shippingFee + adminFee;

  const handleConfirmPayment = () => {
    alert("Pesanan Anda sedang diproses!");
  };

  return (
    <main className="mx-20 px-20 my-10 py-10  bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 italic">Checkout Detail</h1>
      <Link
        className="p-4 bg-black text-amber-50 rounded-2xl hover:bg-gray-800 transition-colors shadow-2xl"
        href="/cart"
      >
        Back
      </Link>
      <div></div>
      <section className="flex justify-between lg:flex-row gap-10 my-10">
        {/* SISI KIRI: DATA PENGIRIMAN & DETAIL PRODUK */}
        <div className="">
          {/* 1. Alamat Pengiriman */}
          <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold mb-6">Shipping Address</h3>
            <form className="space-y-4 placeholder:text-gray-400 placeholder:text-sm">
              <div className="grid grid-cols-2 gap-4">
                <h4 className="text-gray-7  00 font-bold">Name:</h4>
                <h4 className="text-gray-700 font-bold">Phone Number:</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Recipient's Name" />
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-15">
                <h4 className="text-gray-700 font-bold">Address:</h4>
                <h4 className="text-gray-700 font-bold">Postal Code:</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <textarea className="..." placeholder="Full Address"></textarea>
                <input type="text" placeholder="Postal Code" />
              </div>
              <br />
            </form>
          </div>

          <br />

          {/* 2. Daftar Produk */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-6">Ordered Products</h3>

            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-gray-50 pb-6 last:border-0 last:pb-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-2xl bg-gray-100"
                  />

                  <div className="flex-1 flex justify-between items-start">
                    <div className="w-90">
                      <p className="font-bold text-gray-800 break-word leading-tight mb-1">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {item.quantity} item(s)
                      </p>
                    </div>

                    <p className="font-bold text-orange-600 whitespace-nowrap pl-30">
                      Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <label className="text-sm font-semibold text-gray-400 block mb-2 uppercase tracking-wider">
                Notes for Seller:
              </label>
              <input
                type="text"
                placeholder="(Optional) Example: Please use bubble wrap"
                className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-1 focus:ring-black transition-all"
              />
            </div>
          </div>

          <br />

          {/* 3. Pilihan Pengiriman */}
          <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm ">
            <h3 className="text-xl font-bold mb-6">Shipping Option</h3>
            <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-700 font-medium cursor-pointer outline-none focus:border-black focus:bg-white transition-all">
              <option value="25000">Reguler (2-3 Days) - Rp 25.000</option>
              <option value="45000">Express (1 Day) - Rp 45.000</option>
              <option value="15000">Economy (5-7 Days) - Rp 15.000</option>
            </select>
          </div>
        </div>

        <br />

        {/* SISI KANAN: RINGKASAN PEMBAYARAN */}
        <div className="w-full lg:w-96">
          <div className="bg-white p-8 rounded-3xl shadow-sm sticky top-32">
            <h3 className="text-xl font-bold mb-6">Payment Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-500 font-bold">
                <span>Subtotal Products:</span>
                <span className="text-orange-600">
                  Rp {subtotal.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex justify-between text-gray-500 font-bold">
                <span>Shipping Total:</span>
                <span className="text-orange-600">
                  Rp {shippingFee.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex justify-between text-gray-500 font-bold">
                <span>Platform Fee:</span>
                <span className="text-orange-600">
                  Rp {adminFee.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
            {/* <p>Subtotal Products: Rp {subtotal.toLocaleString("id-ID")}</p>
            <p>Shipping Total: Rp {shippingFee.toLocaleString("id-ID")}</p>
            <p>Platform Fee: Rp {adminFee.toLocaleString("id-ID")}</p> */}

            <hr className="mt-4 mb-2 text-gray-300" />

            <p className="text-xl font-bold mb-2">Select Payment Method:</p>
            <div className="">
              <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-700 font-medium cursor-pointer outline-none focus:border-black focus:bg-white transition-all">
                <option>Bank Transfer (BCA)</option>
                <option>Bank Transfer (Mandiri)</option>
                <option>GoPay / OVO</option>
              </select>
            </div>
            <div className="flex justify-between my-3">
              <span className="font-bold text-lg">Total Amount:</span>
              <span className="text-orange-600 font-bold">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleConfirmPayment}
                className="w-55 h-10 mt-10 my-1 bg-black text-white py-5 text-[13px] rounded-2xl flex items-center justify-center font-bold hover:scale-[1.02] transition-all shadow-xl shadow-black/10 mb-3"
              >
                CONFIRM & PAY NOW
              </button>
            </div>

            <p>
              {/* <small>
                By clicking the button above, you agree to our Terms.
              </small> */}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
