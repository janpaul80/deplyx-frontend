import Hero from './(sections)/hero/Hero';
import Features from './(sections)/features/Features';
import Pricing from './(sections)/pricing/Pricing';
import Footer from './(sections)/footer/Footer';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white font-inter">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
