import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Plans from "./components/Plans";
import SignupForm from "./components/SignupForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <WhyChooseUs />
        <div className="section-divider" />
        <Plans />
        <div className="section-divider" />
        <SignupForm />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
