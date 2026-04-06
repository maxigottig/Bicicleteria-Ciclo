import { motion } from 'motion/react';
import { Bike, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-3xl font-bold tracking-tighter mb-6">
              <Bike className="text-brand-accent w-10 h-10" />
              <span>CICLO<span className="text-brand-accent">CONGRESO</span></span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              Tu taller de confianza en el corazón de Buenos Aires. Pasión, precisión y compromiso con cada ciclista que nos elige.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 rounded-xl hover:bg-brand-accent hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#inicio" className="hover:text-brand-accent transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-accent transition-colors">Servicios</a></li>
              <li><a href="#tienda" className="hover:text-brand-accent transition-colors">Tienda</a></li>
              <li><a href="#turnos" className="hover:text-brand-accent transition-colors">Turnos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-accent" />
                <span>Av. Rivadavia 1800, Congreso, CABA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-accent" />
                <span>+54 11 4567-8901</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-accent" />
                <span>hola@ciclocongreso.com.ar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Ciclo Congreso. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
