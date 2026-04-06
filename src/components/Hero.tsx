import { motion } from 'motion/react';
import { ArrowRight, Wrench, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-purple/20 -skew-x-12 transform translate-x-1/4 z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-6">
            PASIÓN POR LAS <br />
            <span className="text-brand-accent">DOS RUEDAS</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg">
            Mecánica especializada, repuestos originales y las mejores bicicletas en el corazón de Congreso. Tu bici merece el mejor trato.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#tienda"
              className="bg-brand-accent hover:bg-brand-accent/80 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105"
            >
              Ver Tienda <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#turnos"
              className="border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold transition-all"
            >
              Agendar Turno
            </a>
          </div>

          <div className="mt-12 flex gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-purple rounded-lg">
                <Wrench className="text-brand-accent w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">Taller Pro</p>
                <p className="text-xs text-gray-500">Mecánica certificada</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-purple rounded-lg">
                <ShieldCheck className="text-brand-accent w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">Garantía</p>
                <p className="text-xs text-gray-500">En todos los arreglos</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-brand-accent/20 blur-3xl rounded-full" />
          <img
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1000"
            alt="Bicicleta Urbana"
            className="relative z-10 rounded-3xl shadow-2xl border border-white/10"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
