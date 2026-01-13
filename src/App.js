// App.js
import HeroSection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import PeriodTracker from "./Components/PeriodTracker";
import DailyTracker from "./Components/DailyTracker";
import Features from "./Components/Features";
import Motivation from "./Components/Motivation";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";




function App() {
  return (
    <>
      <Navbar />
     
    
      <HeroSection/>
      
      <PeriodTracker/>

        <Features />
    <DailyTracker/>
    <Motivation />
    <Footer />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </>
  );
}

export default App;
