import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Menu = () => {
  const { t, language } = useLanguage();

  const menuItems = [
    {
      title: t.menu.items.original.title,
      description: t.menu.items.original.description,
      image: '/assets/dawet-hitam.png',
      link: `https://wa.me/6285781755517?text=${encodeURIComponent(
        language === 'id' 
          ? "Halo Pak Wardi, saya mau pesan Dawet Hitam Original." 
          : "Hello Pak Wardi, I would like to order Original Black Dawet."
      )}`
    },
    {
      title: t.menu.items.cendol.title,
      description: t.menu.items.cendol.description,
      image: '/assets/cendol.png',
      link: `https://wa.me/6285781755517?text=${encodeURIComponent(
        language === 'id' 
          ? "Halo Pak Wardi, saya mau pesan Cendol Dawet Hijau." 
          : "Hello Pak Wardi, I would like to order Green Dawet Cendol."
      )}`
    },
  ];

  return (
    <section id="menu" className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-palm-sugar">{t.menu.title}</h2>
            <p className="text-slate-600 mt-2">{t.menu.description}</p>
          </div>
          <div className="flex gap-2">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-bold text-pandan-green">{t.menu.dineIn}</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-bold text-pandan-green">{t.menu.takeAway}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex flex-col overflow-hidden rounded-xl bg-white border border-slate-100 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={`${item.title} - Dawet Hitam Pak Wardi Bekasi`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-palm-sugar mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 mb-6">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-background-light py-3 text-sm font-bold text-palm-sugar border border-palm-sugar/10 hover:bg-primary hover:text-background-dark transition-colors"
                >
                  {t.menu.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
