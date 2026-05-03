import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Herosection";
import PeriodTracker from "./Components/PeriodTracker";
import Features from "./Components/Features";
import DailyTracker from "./Components/DailyTracker";
import Motivation from "./Components/Motivation";
import Footer from "./Components/Footer";

function Home() {
  return (
    <>
     
      
      
    
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
       <HeroSection />
       <Features />
       <PeriodTracker />
      <DailyTracker />
      <Motivation />
      
         <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;