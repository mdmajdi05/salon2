export type Service = {
  id: string;
  name: string;
  desc: string;
  price: string;
  duration: string;
  img: string;
};

export type Product = {
  id: string;
  name: string;
  desc: string;
  price: number;
  img: string;
};

export const services: Service[] = [
  {
    id: "hair",
    name: "Haircut & Styling",
    desc: "Precision cuts, polished blow-dries and styles shaped around you.",
    price: "From ₹499",
    duration: "30–60 min",
    img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "colour",
    name: "Colour & Hair Care",
    desc: "Personalised colour and care rituals for your hair goals.",
    price: "Quote based",
    duration: "60–180 min",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "skin",
    name: "Skin & Facial Care",
    desc: "A refreshing facial experience tailored to your preferences.",
    price: "From ₹999",
    duration: "45–75 min",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "bridal",
    name: "Bridal & Occasion",
    desc: "Event-ready artistry, planned through a personal consultation.",
    price: "Consultation quote",
    duration: "By consultation",
    img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "nails",
    name: "Nails & Manicure",
    desc: "Clean finishes and considered details for hands and nails.",
    price: "From ₹399",
    duration: "30–60 min",
    img: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "groom",
    name: "Men’s Grooming",
    desc: "Modern cuts, beard detailing and uncomplicated maintenance.",
    price: "From ₹299",
    duration: "20–45 min",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  },
];

export const products: Product[] = [
  {
    id: "care-kit",
    name: "Everyday Hair Ritual",
    desc: "Sample hair-care bundle; replace with real inventory.",
    price: 1299,
    img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "serum",
    name: "Silk Finish Serum",
    desc: "Demo listing; product details need owner approval.",
    price: 699,
    img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "skin-kit",
    name: "Daily Skin Essentials",
    desc: "Sample skincare set; confirm ingredients and claims.",
    price: 999,
    img: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "brush",
    name: "Salon Styling Brush",
    desc: "Demo accessory; stock is not connected.",
    price: 349,
    img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=700&q=80",
  },
];
