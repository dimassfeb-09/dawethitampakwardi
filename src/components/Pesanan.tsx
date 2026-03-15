import { motion } from 'framer-motion';
import { PartyPopper, Users, Cake, Heart, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Pesanan = () => {
  const { t, language } = useLanguage();

  const icons = [
    <PartyPopper className="text-pandan-green" size={24} />,
    <Users className="text-pandan-green" size={24} />,
    <Cake className="text-pandan-green" size={24} />,
    <Heart className="text-pandan-green" size={24} />,
  ];

  return (
    <section id="pesan" className="px-6 py-24 bg-coconut-cream/60 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-5xl font-bold text-palm-sugar mb-4">
            {t.catering.title}
          </h2>
          <p className="text-slate-600">
            {t.catering.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.catering.items.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="rounded-xl bg-white p-6 border border-primary/10 shadow-sm flex flex-col gap-4"
            >
              <div className="h-12 w-12 rounded-full bg-primary/15 text-pandan-green flex items-center justify-center">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-palm-sugar">{event.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={`https://wa.me/6285781755517?text=${encodeURIComponent(
              language === 'id'
                ? "Halo Pak Wardi, saya ingin pesan dawet untuk acara."
                : "Hello Pak Wardi, I would like to order dawet for an event."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-background-dark shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
          >
            <PhoneCall size={18} />
            <span>{t.catering.cta}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
