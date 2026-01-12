// App.js
import HeroSection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import PeriodTracker from "./Components/PeriodTracker";
import DailyTracker from "./Components/DailyTracker";
import Features from "./Components/Features";
import Motivation from "./Components/Motivation";


function App() {
  return (
    <>
      <Navbar />
     
    
      <HeroSection/>
      
      <PeriodTracker/>

        <Features />
    <DailyTracker/>
    <Motivation />
    </>
  );
}

export default App;
