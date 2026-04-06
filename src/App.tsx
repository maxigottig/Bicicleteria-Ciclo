import { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Shop from './components/Shop';
import Booking from './components/Booking';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Product, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.8
      }
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: { duration: 0.5 }
    })
  };

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      <main>
        <AnimatedSection direction={-1}>
          <Hero />
        </AnimatedSection>

        <AnimatedSection direction={1}>
          <Services />
        </AnimatedSection>

        <AnimatedSection direction={-1}>
          <Shop 
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
            isCartOpen={isCartOpen}
            onCloseCart={() => setIsCartOpen(false)}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveFromCart={handleRemoveFromCart}
          />
        </AnimatedSection>

        <AnimatedSection direction={1}>
          <Booking />
        </AnimatedSection>
      </main>

      <Footer />
      
      <Chatbot />
      <ScrollToTop />
    </div>
  );
}

function AnimatedSection({ children, direction }: { children: React.ReactNode; direction: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction * 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
