import Link from "next/link";
import { products } from "../../_components/data";
import SizePicker from "../../_components/size-picker";
import Counter from "../../_components/counter";

export default async function DetailProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const productId = resolvedParams.id;
  const item = products.find((p) => p.id === parseInt(productId));

  if (!item) {
    return (
      <div className="p-20 text-center">
        <p className="text-2xl mb-5">Product Not Found...</p>
        <Link href="/" className="bg-black text-white p-3 rounded-xl">
          Back
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.brand === item.brand && p.id !== item.id)
    .slice(0, 4);

  return (
    <main className="mx-20 px-20 my-10 py-10 bg-gray-100 rounded-3xl shadow-xl pt-24">
      <Link
        href="/"
        className="p-4 bg-black text-amber-50 rounded-2xl hover:bg-gray-800 transition-colors">
        Back
      </Link>

      <section className="flex gap-12 mt-16 mb-20">
        <div className="flex-1">
          <img
            className="w-full rounded-3xl shadow-2xl object-cover aspect-square"
            src={item.image}
            alt={item.name}
          />
        </div>

        <div className="flex-1 text-[20px]">
          <h1 className="font-bold text-[45px] leading-tight mb-2">
            {item.name}
          </h1>
          <p className="text-gray-600 mb-4 text-2xl font-medium">
            {item.brand}
          </p>

          <p className="text-orange-600 font-bold text-3xl mb-6">
            Rp {item.price.toLocaleString("id-ID")}
          </p>

          <hr className="border-gray-400 mb-6" />

          <SizePicker />

          <div className="my-10 bg-white p-6 rounded-2xl">
            <h3 className="font-bold mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
          <Counter item={item} />
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mt-20 border-t border-gray-400 pt-10">
          <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-widest">
            Other {item.brand} Shoes
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                href={`/product/${rel.id}`}
                key={rel.id}
                className="group bg-white p-4 rounded-3xl hover:shadow-2xl transition-all border border-transparent hover:border-black"
              >
                <img
                  src={rel.image}
                  className="rounded-2xl mb-4 aspect-square object-cover group-hover:scale-95 transition-all"
                />
                <h4 className="font-bold text-lg">{rel.name}</h4>
                <p className="text-orange-600 font-bold">
                  Rp {rel.price.toLocaleString("id-ID")}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
