import { useState } from "react";
import "../styles/CheckInForm.css";  

function CheckInForm({ onAddEntry }) {
  const [skill, setSkill] = useState("");
  const [time, setTime] = useState("");
  const [mood, setMood] = useState("😊");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!skill || !time) {
      alert("Please fill all required fields");
      return;
    }

    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      skill,
      time,
      mood,
      note,
    };

    onAddEntry(entry);

    setSkill("");
    setTime("");
    setMood("😊");
    setNote("");
  };

  return (
    <form className="checkin-form" onSubmit={handleSubmit}>
      <h2>Daily Check-In</h2>

      <input
        type="text"
        placeholder="Skill practiced (React, JS...)"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <input
        type="number"
        placeholder="Time spent (minutes)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option>😊</option>
        <option>😐</option>
        <option>😔</option>
        <option>🔥</option>
      </select>

      <textarea
        placeholder="What did you learn today?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button type="submit">Add Entry</button>
    </form>
  );
}

export default CheckInForm;
