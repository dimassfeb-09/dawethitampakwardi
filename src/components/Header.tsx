import { useState, useEffect } from "react";
import { Menu as MenuIcon, X, Coffee, Send, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (isMobileMenuOpen) {
        setIsVisible(true);
      } else if (currentScrollY <= 24 || delta < -6) {
        setIsVisible(true);
      } else if (delta > 6 && currentScrollY > 120) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: t.header.menu, href: "#menu" },
    { name: t.header.location, href: "#lokasi" },
    { name: t.header.catering, href: "#pesan" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-transform duration-300"
      style={{ transform: isVisible ? "translateY(0)" : "translateY(-120%)" }}
    >
      <div className="px-3 pt-3 sm:px-4 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-primary/20 bg-background-light/90 px-3 py-3 shadow-xl shadow-slate-900/10 backdrop-blur-md sm:px-5 lg:px-8">
          <div className="relative flex items-center justify-between gap-3">
            {/* Logo */}
            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-palm-sugar text-primary sm:h-10 sm:w-10">
                <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="truncate text-base font-extrabold tracking-tight text-palm-sugar sm:text-xl">
                Pak Wardi
              </h2>
            </div>

            {/* Desktop Navigation */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-primary/10 hover:text-pandan-green sm:text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="ml-2 flex items-center gap-2">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1.5 text-[10px] sm:text-xs font-bold text-pandan-green transition-all hover:bg-primary/10"
                aria-label="Switch Language"
              >
                <Languages className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="uppercase">{language}</span>
              </button>

              <a
                href="https://wa.me/6285781755517?text=Halo%20Pak%20Wardi%2C%20saya%20mau%20pesan%20dawet."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2 text-xs font-bold text-background-dark shadow-lg shadow-primary/20 transition-transform hover:scale-105 min-[430px]:gap-2 min-[430px]:px-4 min-[430px]:text-sm lg:px-5 lg:py-2.5"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="min-[430px]:hidden">
                  {t.header.orderNow.split(" ")[0]}
                </span>
                <span className="hidden min-[430px]:inline">
                  {t.header.orderNow}
                </span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-palm-sugar/20 text-palm-sugar transition-colors hover:bg-palm-sugar/10 md:hidden"
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="mt-3 flex flex-col gap-2 pb-2 md:hidden">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full rounded-full px-3 py-1.5 text-center text-xs font-semibold text-slate-700 transition-colors hover:bg-primary/10 hover:text-pandan-green"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
