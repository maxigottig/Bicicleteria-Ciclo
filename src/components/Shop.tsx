import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Plus, Minus, X, Trash2 } from 'lucide-react';
import { Product, CartItem } from '@/src/types';
import { cn } from '@/src/lib/utils';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'MTB Carbon Pro 29',
    price: 1250000,
    category: 'bicicletas',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=500',
    description: 'Cuadro de carbono, transmisión Shimano XT 1x12.'
  },
  {
    id: '2',
    name: 'Urbana Classic Mint',
    price: 450000,
    category: 'bicicletas',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=500',
    description: 'Estilo vintage con componentes modernos.'
  },
  {
    id: '3',
    name: 'Casco Aero Stealth',
    price: 85000,
    category: 'cascos',
    image: 'https://images.unsplash.com/photo-1557161181-b59097c6075d?auto=format&fit=crop&q=80&w=500',
    description: 'Máxima aerodinámica y protección MIPS.'
  },
  {
    id: '4',
    name: 'Kit Luces LED USB',
    price: 25000,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1507133359940-47f0da109e47?auto=format&fit=crop&q=80&w=500',
    description: 'Alta visibilidad, recargables por USB.'
  },
  {
    id: '5',
    name: 'Candado U-Lock Krypton',
    price: 65000,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1583327171620-ca3068837dd7?auto=format&fit=crop&q=80&w=500',
    description: 'Acero endurecido, máxima seguridad urbana.'
  },
  {
    id: '6',
    name: 'Inflador de Pie Pro',
    price: 42000,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1593133030294-057492bb6bd4?auto=format&fit=crop&q=80&w=500',
    description: 'Manómetro de precisión, doble válvula.'
  }
];

interface ShopProps {
  onAddToCart: (product: Product) => void;
  cartItems: CartItem[];
  isCartOpen: boolean;
  onCloseCart: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveFromCart: (id: string) => void;
}

export default function Shop({ 
  onAddToCart, 
  cartItems, 
  isCartOpen, 
  onCloseCart, 
  onUpdateQuantity, 
  onRemoveFromCart 
}: ShopProps) {
  const [filter, setFilter] = useState<string>('todos');

  const filteredProducts = filter === 'todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section id="tienda" className="py-24 bg-brand-purple/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black tracking-tighter mb-4"
          >
            EQUIPATE CON <span className="text-brand-accent">LO MEJOR</span>
          </motion.h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {['todos', 'bicicletas', 'cascos', 'accesorios'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                  filter === cat 
                    ? "bg-brand-accent border-brand-accent text-white" 
                    : "border-white/10 hover:border-brand-accent/50 text-gray-400"
                )}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-brand-dark/50 border border-white/5 rounded-[2rem] overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <button
                      onClick={() => onAddToCart(product)}
                      className="w-full bg-brand-accent text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    >
                      <Plus className="w-5 h-5" /> Agregar al Carrito
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">{product.name}</h4>
                    <span className="text-brand-accent font-black">${product.price.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseCart}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-brand-purple z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h3 className="text-2xl font-black flex items-center gap-2">
                  <ShoppingBag className="text-brand-accent" /> TU CARRITO
                </h3>
                <button onClick={onCloseCart} className="p-2 hover:bg-white/10 rounded-full">
                  <X />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="w-16 h-16 text-white/10 mx-auto mb-4" />
                    <p className="text-gray-400">Tu carrito está vacío</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-bold">{item.name}</h4>
                          <button onClick={() => onRemoveFromCart(item.id)} className="text-red-400 hover:text-red-300">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-brand-accent font-bold text-sm mb-2">${item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 bg-white/10 rounded-md hover:bg-white/20"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-bold text-sm">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 bg-white/10 rounded-md hover:bg-white/20"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 border-t border-white/10 bg-brand-dark/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400">Total</span>
                  <span className="text-3xl font-black text-brand-accent">${cartTotal.toLocaleString()}</span>
                </div>
                <button
                  disabled={cartItems.length === 0}
                  className="w-full bg-brand-accent hover:bg-brand-accent/80 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-bold text-lg transition-all"
                >
                  Finalizar Compra
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
