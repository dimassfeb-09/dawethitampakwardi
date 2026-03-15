import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseUs = () => {
  const { t } = useLanguage();

  const icons = [
    <Clock size={32} />,
    <ShieldCheck size={32} />,
    <Zap size={32} />,
  ];

  return (
    <section className="bg-palm-sugar text-white px-6 lg:px-20 py-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="mx-auto max-w-7xl relative">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            {t.whyChooseUs.title}
          </h2>
          <div className="h-1.5 w-24 bg-primary rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {t.whyChooseUs.items.map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 text-primary">
                {icons[index]}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
