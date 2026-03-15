import { motion } from 'framer-motion';
import { CheckCircle, Droplets, Sparkles, Leaf } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Features = () => {
  const { t } = useLanguage();

  const icons = [
    <CheckCircle className="text-pandan-green" size={24} />,
    <Droplets className="text-pandan-green" size={24} />,
    <Sparkles className="text-pandan-green" size={24} />,
    <Leaf className="text-pandan-green" size={24} />,
  ];

  return (
    <section className="bg-coconut-cream px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-palm-sugar lg:text-5xl mb-4">
            {t.features.title}
          </h2>
          <p className="text-slate-600">
            {t.features.description}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col gap-4 rounded-xl bg-white p-8 shadow-sm border border-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-pandan-green">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-palm-sugar">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
