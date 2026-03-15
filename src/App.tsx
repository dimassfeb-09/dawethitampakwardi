import { Suspense, lazy } from 'react';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';

// Lazy load below-the-fold components
const Menu = lazy(() => import('./components/Menu').then(module => ({ default: module.Menu })));
const Pesanan = lazy(() => import('./components/Pesanan').then(module => ({ default: module.Pesanan })));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs').then(module => ({ default: module.WhyChooseUs })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const Location = lazy(() => import('./components/Location').then(module => ({ default: module.Location })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <SEO />
      <Header />
      <main className="flex-1 pt-24 sm:pt-28 lg:pt-32">
        <Hero />
        <Features />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
          <Menu />
          <Pesanan />
          <WhyChooseUs />
          <Testimonials />
          <Location />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
