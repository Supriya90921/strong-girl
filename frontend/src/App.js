import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Herosection";
import PeriodTracker from "./Components/PeriodTracker";
import Features from "./Components/Features";
import DailyTracker from "./Components/DailyTracker";
import Motivation from "./Components/Motivation";
import Footer from "./Components/Footer";

import Login from "./Pages/Login";
import Registration from "./Pages/Registration";

function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <PeriodTracker />
      <DailyTracker />
      <Motivation />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;