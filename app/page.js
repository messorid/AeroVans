import Hero from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import WhyChooseUs from "./components/WhyChooseUs";
import CTA from "./components/CTA";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Hero />
       <Services /> 
      <Destinations />
      <WhyChooseUs />
      <CTA />
      <WhatsAppButton /> 
    </main>
  );
}