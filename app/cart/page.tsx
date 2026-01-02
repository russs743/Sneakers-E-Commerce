"use client";
import { useCart } from "../_components/_store/usecart";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, removeItem } = useCart();
  const router = useRouter();

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main className="mx-20 px-20 my-10 py-10 bg-gray-100 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 italic">Shopping Cart</h1>
      <Link
        href="/"
        className="p-4 bg-black text-amber-50 rounded-2xl hover:bg-gray-800 transition-colors shadow-2xl">
        Back
      </Link>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl shadow-sm my-10">
          <span className="text-6xl">🛒</span>
          <h2 className="text-2xl font-semibold mt-4">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8 text-lg">Find Your Sneakers</p>
          <Link href="/" className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10 my-10">
          <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 uppercase text-sm tracking-wider">
                  <th className="pb-4 font-medium">Product</th>
                  <th className="pb-4 font-medium text-center">Amount</th>
                  <th className="pb-4 font-medium text-right">Total</th>
                  <th className="pb-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="py-6 flex items-center gap-4">
                      <img src={item.image} className="w-24 h-24 object-cover rounded-2xl bg-gray-100" alt={item.name} />
                      <div>
                        <p className="font-bold text-lg">{item.name}</p>
                        <p className="text-sm font-semibold mt-1 text-orange-600">Rp {item.price.toLocaleString("id-ID")}</p>
                      </div>
                    </td>
                    <td className="py-6 text-center">
                      <span className="font-bold text-lg">{item.quantity} pairs</span>
                    </td>
                    <td className="py-6 text-right font-bold text-lg text-orange-600">
                      Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                    </td>
                    <td className="py-6 text-right">
                      <button onClick={() => removeItem(item.id)} className="ml-5 text-sm font-medium hover:scale-115 transition-all bg-gray-100 rounded-xl hover:shadow-orange-200">
                        <img className="m-2"
                          src="/Img/delete.png" 
                          alt="Delete" 
                          width="20" 
                        />                               
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full lg:w-96">
            <div className="bg-white p-8 rounded-3xl shadow-sm sticky top-32">
              <h2 className="text-xl font-bold mb-6">Shopping Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Total Price ({items.length} Items)</span>
                  <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Shipping Cost</span>
                  <span className="text-green-600 font-bold uppercase text-xs bg-green-50 px-2 py-1 rounded-lg">Free</span>
                </div>
              </div>
              <hr className="border-gray-100 mb-6" />
              <div className="flex justify-between items-end mb-8">
                <span className="font-medium">Total Bill</span>
                <span className="text-2xl font-bold text-orange-600">Rp {totalPrice.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-center">
              <button 
                onClick={() => router.push('/checkout')}
                className="w-55 h-10 mt-10 my-1 bg-black text-white py-5 text-[13px] rounded-2xl flex items-center justify-center font-bold hover:scale-[1.02] transition-all shadow-xl shadow-black/10 mb-3"
              >
                Buy Now
              </button>
              </div>
            </div>
          </div>

        </div>
      )}
    </main>
  );
}