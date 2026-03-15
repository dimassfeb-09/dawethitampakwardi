import { Coffee } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark text-slate-400 py-16 px-6 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col gap-6 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background-dark">
                <Coffee size={24} />
              </div>
              <h2 className="text-xl font-extrabold tracking-tight text-white">
                Dawet Hitam Pak Wardi
              </h2>
            </div>
            <p className="max-w-xs">
              {t.footer.description}
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">{t.footer.quickLinks}</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a className="hover:text-primary transition-colors" href="#menu">{t.header.menu}</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#pesan">{t.header.catering}</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#lokasi">{t.header.location}</a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href={`https://wa.me/6285781755517?text=${encodeURIComponent(
                    language === 'id'
                      ? "Halo Pak Wardi, saya mau pesan dawet."
                      : "Hello Pak Wardi, I would like to order dawet."
                  )}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Order via WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">{t.footer.information}</h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-300">
              <li>{t.location.hours}</li>
              <li>{t.location.address}</li>
              <li>0857-8175-5517</li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://maps.app.goo.gl/FV9xpbPxWQNz1QA6A"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t.location.cta}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Dawet Hitam Pak Wardi. {t.footer.rights}</p>
          <p>{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
};
