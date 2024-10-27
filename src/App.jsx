import Header from "./Components/Header";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import { Features } from "./Components/Features";
import { Benefits } from "./Components/Benefits";
import { Reviews } from "./Components/Reviews";
import { Faq } from "./Components/Faq";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <main className="flex flex-col items-center justify-evenly gap-24">
      <Header />
      <div className="flex flex-col items-center justify-evenly gap-32">
        <HeroSection />
        <Features />
        <Benefits />
        <div className="w-full">
          <Reviews />
        </div>
        <Faq />
        <Footer />
      </div>
    </main>
  );
}

export default App;
