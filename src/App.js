// App.js
import HeroSection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import PeriodTracker from "./Components/PeriodTracker";
import Features from "./Components/DailyTracker";
import Features from "./Components/Features";


function App() {
  return (
    <>
      <Navbar />
     
    
      <HeroSection/>
      
      <PeriodTracker/>

        <Features />
    <DailyTracker/>
    </>
  );
}

export default App;
