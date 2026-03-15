import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Menu } from './components/Menu';
import { Pesanan } from './components/Pesanan';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <SEO />
      <Header />
      <main className="flex-1 pt-24 sm:pt-28 lg:pt-32">
        <Hero />
        <Features />
        <Menu />
        <Pesanan />
        <WhyChooseUs />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
