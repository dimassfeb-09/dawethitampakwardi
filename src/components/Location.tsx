import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Map } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Location = () => {
  const { t } = useLanguage();

  return (
    <section id="lokasi" className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl font-bold text-palm-sugar">
              {t.location.title}
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <MapPin className="text-primary shrink-0" size={24} />
                <div>
                  <p className="font-bold">{t.location.addressTitle}</p>
                  <p className="text-slate-600">
                    {t.location.address}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-primary shrink-0" size={24} />
                <div>
                  <p className="font-bold">{t.location.hoursTitle}</p>
                  <p className="text-slate-600">
                    {t.location.hours}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-primary shrink-0" size={24} />
                <div>
                  <p className="font-bold">{t.location.contactTitle}</p>
                  <p className="text-slate-600">0857-8175-5517</p>
                </div>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/R3UW9uwd6FvH8Dti7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-background-dark shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
            >
              <Map size={18} />
              <span>{t.location.cta}</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] w-full rounded-xl bg-slate-100 border-2 border-slate-100 overflow-hidden shadow-inner"
          >
            <iframe
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=-6.234087741910953,107.02917732184005&z=17&output=embed"
              title="Lokasi Dawet Hitam Pak Wardi"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
