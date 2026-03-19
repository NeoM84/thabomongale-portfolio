import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SpeakingTopics from './components/SpeakingTopics';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SpeakingTopics />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
