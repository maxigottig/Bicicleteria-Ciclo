import { motion } from 'motion/react';
import { Wrench, Settings, Zap, Shield, Clock, MapPin } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: "Service Completo",
    description: "Desarme íntegro, limpieza, lubricación y ajuste de todos los componentes.",
    price: "Desde $25.000"
  },
  {
    icon: Settings,
    title: "Regulación de Cambios",
    description: "Ajuste preciso de descarriladores para un paso de marchas suave y silencioso.",
    price: "Desde $8.000"
  },
  {
    icon: Zap,
    title: "Centrado de Ruedas",
    description: "Eliminación de saltos y descentrados para una rodada perfecta.",
    price: "Desde $12.000"
  },
  {
    icon: Shield,
    title: "Frenos Hidráulicos",
    description: "Purga y cambio de pastillas para una frenada potente y segura.",
    price: "Desde $15.000"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-brand-accent font-bold tracking-widest uppercase mb-2">Nuestro Taller</h2>
            <h3 className="text-5xl font-black tracking-tighter">MECÁNICA DE PRECISIÓN</h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="text-gray-400 max-w-md text-right"
          >
            Utilizamos herramientas de alta gama y repuestos originales para asegurar que tu bicicleta rinda al máximo nivel.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-brand-purple/30 border border-white/5 hover:border-brand-accent/50 transition-all group"
            >
              <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all">
                <service.icon className="w-7 h-7 text-brand-accent group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-gray-400 text-sm mb-6">{service.description}</p>
              <p className="text-brand-accent font-bold">{service.price}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-brand-purple to-brand-dark border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/5 rounded-full">
              <Clock className="w-8 h-8 text-brand-accent" />
            </div>
            <div>
              <h4 className="text-2xl font-bold">¿Necesitás un arreglo rápido?</h4>
              <p className="text-gray-400">Hacemos reparaciones menores en el acto.</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/5 rounded-full">
              <MapPin className="w-8 h-8 text-brand-accent" />
            </div>
            <div>
              <h4 className="text-2xl font-bold">Estamos en Congreso</h4>
              <p className="text-gray-400">Cerca de la plaza, fácil acceso.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
