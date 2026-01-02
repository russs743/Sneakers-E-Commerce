import { create } from 'zustand';

// Tipe data item di dalam keranjang
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: any, qty: number) => void;
  removeItem: (id: number) => void;
}

export const useCart = create<CartStore>((set) => ({
  items: [], // Awalnya keranjang kosong

  addItem: (product, qty) => set((state) => {
    // Cek apakah barang sudah ada di keranjang
    const existingItem = state.items.find((i) => i.id === product.id);
    
    if (existingItem) {
      // Jika ada, tambah jumlahnya saja
      return {
        items: state.items.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + qty } : i
        ),
      };
    }
    // Jika belum ada, masukkan sebagai barang baru
    return { items: [...state.items, { ...product, quantity: qty }] };
  }),

  removeItem: (id) => set((state) => ({
    items: state.items.filter((i) => i.id !== id), // Hapus barang berdasarkan ID
  })),
}));