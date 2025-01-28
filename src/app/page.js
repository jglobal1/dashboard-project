"use client"


import Header from '../components/Header';
import ShoeGrid from '../components/ShoeGrid';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <Hero />
      <main>
        <ShoeGrid />
        <About />
      </main>
      <Footer />
    </div>
  );
}
