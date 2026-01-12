
import { useEffect, useState } from "react";
import "./Motivation.css";

function Motivation() {
  const stories = [
    "💪 She started with fear, but discipline made her unstoppable.",
    "🌸 Even on hard days, she chose to show up for herself.",
    "🔥 Strength is not loud. Sometimes it’s silent consistency.",
    "✨ She didn’t wait for motivation. She built habits.",
    "💖 Strong girls don’t quit — they pause, heal, and rise again."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === stories.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="motivation-card">
      <h2>Strong Girl Stories</h2>
      <p>{stories[index]}</p>
    </div>
  );
}

export default Motivation;
