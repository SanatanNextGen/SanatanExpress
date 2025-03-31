// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import About from '@/components/About';
import ContactUs from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Sanatan Express Logistics - Integrated Logistics Solutions</title>
        <meta name="description" content="Sanatan Express Logistics provides comprehensive logistics solutions including road, air, rail, and sea transportation along with warehousing services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
      <Services />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}