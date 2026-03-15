import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-24 bg-background-light lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-palm-sugar">
            {t.testimonials.title}
          </h2>
          <div className="flex justify-center mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-primary fill-primary" size={24} />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <p className="text-slate-600 italic leading-relaxed mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-bold text-palm-sugar">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
