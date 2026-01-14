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
