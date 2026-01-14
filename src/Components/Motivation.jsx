<<<<<<< HEAD
import { useState } from "react";
import "../styles/Motivation.css";

function Motivation() {
  const stories = [
    "💪 Every small step counts. Keep moving forward!",
    "🌸 Strength isn’t about never falling, it’s about rising every time.",
    "🔥 Your courage is bigger than your fears. Believe in yourself!",
    "✨ Challenges are gifts to show you how strong you really are.",
    "💖 Even the strongest women have soft moments. It’s okay."
  ];

  const [story, setStory] = useState(stories[Math.floor(Math.random() * stories.length)]);

  const handleNewStory = () => {
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    setStory(randomStory);
  };

  return (
    <div className="motivation-card">
      <h2>Daily Motivation</h2>
      <p>{story}</p>
      <button onClick={handleNewStory}>Show Another Story</button>
    </div>
  );
}

export default Motivation;
=======

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
>>>>>>> c36cd5fb71840b7eade208761a9323688c0f8686
