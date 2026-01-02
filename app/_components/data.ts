export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  { 
    id: 1, 
    name: "Nike Air Jordan 1 High OG", 
    brand: "Nike", 
    price: 3200000, 
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=800&auto=format&fit=crop",
    description: "The most iconic sneaker of all time. The Air Jordan 1 High OG brings back the classic 1985 basketball aesthetic with premium leather construction, a heel Air-Sole unit for lightweight cushioning, and a high-top silhouette that provides perfect ankle support."
  },
  { 
    id: 2, 
    name: "Adidas Yeezy Boost 350 V2", 
    brand: "Adidas", 
    price: 4200000, 
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=800&auto=format&fit=crop",
    description: "A revolutionary collaboration with Kanye West. The Yeezy Boost 350 V2 features re-engineered Primeknit throughout the upper for maximum breathability. Equipped with a full-length Boost midsole, it delivers an unparalleled cloud-like walking experience."
  },
  { 
    id: 3, 
    name: "New Balance 2002R Protection Pack", 
    brand: "New Balance", 
    price: 2800000, 
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop",
    description: "A modernized take on the classic 'dad shoe'. The Protection Pack edition features a distressed aesthetic with jagged, unrefined suede overlays. It utilizes N-ergy and ABZORB cushioning technologies for elite performance and everyday style."
  },
  { 
    id: 4, 
    name: "Vans Old Skool Black White", 
    brand: "Vans", 
    price: 850000, 
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop",
    description: "The classic skate shoe that first introduced the iconic side stripe. Built with durable canvas and suede uppers, the Old Skool features padded collars for support and signature rubber waffle outsoles for superior grip."
  },
  { 
    id: 5, 
    name: "Converse Chuck 70 High Top", 
    brand: "Converse", 
    price: 990000, 
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    description: "The Chuck 70 is a tribute to the original 1970s design. It features heavier canvas, higher glossy rubber sidewalls, and extra cushioned insoles for all-day comfort that far exceeds the standard edition."
  },
  { 
    id: 6, 
    name: "Nike Dunk Low Retro Panda", 
    brand: "Nike", 
    price: 1800000, 
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop",
    description: "Designed for the court but adopted by street culture. The Dunk Low 'Panda' features a minimalist black-and-white colorway that complements any outfit. Crafted from high-quality leather with a signature padded tongue."
  },
  { 
    id: 7, 
    name: "Adidas Samba OG White Black", 
    brand: "Adidas", 
    price: 1900000, 
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop",
    description: "Originally created for indoor football training on frozen ground, the Samba is now a fashion icon. It relies on smooth leather with a suede T-toe protection and a classic gum sole for a clean retro look."
  },
  { 
    id: 8, 
    name: "Salomon XT-6 Black", 
    brand: "Salomon", 
    price: 3100000, 
    image: "https://images.unsplash.com/photo-1628253747716-0c4f5c90f75c?q=80&w=800&auto=format&fit=crop",
    description: "The ultimate technical sneaker for long-distance runners in harsh conditions. The XT-6 features a Quicklace system for instant adjustment, Agile Chassis technology for stability, and abrasion-resistant mesh for all-weather durability."
  },
  { 
    id: 9, 
    name: "Asics Gel-Kayano 14 Silver", 
    brand: "Asics", 
    price: 2400000, 
    image: "https://images.unsplash.com/photo-1673411425655-331590494df9?q=80&w=800&auto=format&fit=crop",
    description: "A nod to late 2000s running style. The Gel-Kayano 14 reinterprets the retro runner aesthetic with its metallic mesh and leather overlays. Featuring GEL technology cushioning for premium shock absorption."
  },
  { 
    id: 10, 
    name: "Nike Air Force 1 '07 White", 
    brand: "Nike", 
    price: 1550000, 
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=800&auto=format&fit=crop",
    description: "The legend lives on in the Nike Air Force 1 '07. A modern take on the iconic AF1, it blends classic court style with fresh details. The crisp leather and stitched overlays provide durability and a timeless finish."
  },
  { 
    id: 11, 
    name: "New Balance 550 White Grey", 
    brand: "New Balance", 
    price: 2100000, 
    image: "https://images.unsplash.com/photo-1626379616459-b2ce1d9decbb?q=80&w=800&auto=format&fit=crop",
    description: "The 550 returns to the lineup for the first time since its debut in 1989. This clean, low-top silhouette offers a retro basketball look with its premium leather upper and dependable rubber outsole."
  },
  { 
    id: 12, 
    name: "Adidas Gazelle Indoor Blue", 
    brand: "Adidas", 
    price: 1850000, 
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800&auto=format&fit=crop",
    description: "The Gazelle Indoor takes the DNA of the original and adds a translucent gum rubber outsole. Featuring soft suede uppers and the iconic serrated three stripes, it's a versatile classic for any casual rotation."
  }
];