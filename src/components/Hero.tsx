import { motion } from 'framer-motion';
import { BadgeCheck, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="px-6 lg:px-20 py-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex flex-col gap-8"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-pandan-green/10 px-4 py-1 text-pandan-green font-bold text-xs uppercase tracking-wider">
              <BadgeCheck size={14} />
              {t.hero.badge}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-palm-sugar tracking-tight">
              {t.hero.title} <span className="text-primary">{t.hero.titlePrimary}</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6285781755517?text=Halo%20Pak%20Wardi%2C%20saya%20mau%20pesan%20dawet."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-background-dark shadow-xl shadow-primary/30 transition-all hover:shadow-primary/40"
              >
                <div className="flex items-center gap-3">
                  <Send size={20} />
                  <span>{t.hero.ctaWhatsApp}</span>
                </div>
              </a>
              <a
                href="#menu"
                className="flex items-center justify-center gap-3 rounded-xl border-2 border-palm-sugar/20 px-8 py-4 text-lg font-bold text-palm-sugar hover:bg-palm-sugar/5 transition-all"
              >
                {t.hero.ctaMenu}
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-4 rounded-xl bg-primary/20 blur-3xl opacity-50" />
            <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden rounded-xl shadow-2xl bg-slate-200">
              <img
                src="/assets/hero-header.png"
                alt="Dawet Hitam Pak Wardi Bekasi - Segarnya Dawet Tradisional Asli Bekasi"
                className="h-full w-full object-cover"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
