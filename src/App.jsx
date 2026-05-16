import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Authors from './components/Authors.jsx';
import About from './components/About.jsx';
import ContentPreview from './components/ContentPreview.jsx';
import Statistics from './components/Statistics.jsx';
import Testimonials from './components/Testimonials.jsx';
import Gallery from './components/Gallery.jsx';
import DownloadCTA from './components/DownloadCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-navy-950 text-cream selection:bg-gold-400/40">
      <Navbar />
      <main>
        <Hero />
        <Authors />
        <About />
        <ContentPreview />
        <Statistics />
        <Testimonials />
        <Gallery />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
