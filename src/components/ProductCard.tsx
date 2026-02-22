import { motion } from 'motion/react';
import { ShoppingBag, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div 
      className="group cursor-pointer"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 shimmer-effect">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-rosegold hover:text-white transition-colors">
            <Heart size={18} />
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/80 backdrop-blur-sm">
          <button className="w-full py-3 bg-gray-900 text-white text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-honey hover:text-gray-900 transition-colors">
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="text-center">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 block">
          {product.category}
        </span>
        <h3 className="font-serif text-xl text-gray-900 mb-2 group-hover:text-rosegold transition-colors">
          {product.name}
        </h3>
        <p className="font-sans text-sm font-medium text-gray-600">
          {product.price}
        </p>
      </div>
    </motion.div>
  );
}
