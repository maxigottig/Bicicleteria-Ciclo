import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="turnos" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="text-brand-accent font-bold tracking-widest uppercase mb-2">Turnero Online</h2>
          <h3 className="text-6xl font-black tracking-tighter mb-6">AGENDÁ TU <br />CONSULTA</h3>
          <p className="text-gray-400 text-lg mb-8">
            Evitá esperas. Reservá un espacio para que nuestros mecánicos revisen tu bici en el momento. Diagnóstico gratuito en Congreso.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-purple rounded-xl">
                <CheckCircle2 className="text-brand-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Atención Personalizada</h4>
                <p className="text-gray-500">Un mecánico dedicado solo a tu bicicleta.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-purple rounded-xl">
                <CheckCircle2 className="text-brand-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Presupuesto en el Acto</h4>
                <p className="text-gray-500">Sin vueltas, te decimos qué necesita y cuánto sale.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="bg-brand-purple/20 border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-xl"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-3xl font-bold mb-2">¡Turno Reservado!</h4>
              <p className="text-gray-400">Te enviamos un mail con la confirmación.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                    <User className="w-4 h-4" /> Nombre Completo
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Juan Pérez"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="juan@ejemplo.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Fecha
                  </label>
                  <input
                    required
                    type="date"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Horario
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-all">
                    <option value="09:00">09:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="18:00">06:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Motivo de Consulta
                </label>
                <textarea
                  placeholder="Contanos qué le pasa a tu bici..."
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-accent hover:bg-brand-accent/80 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand-accent/20"
              >
                Confirmar Reserva
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
