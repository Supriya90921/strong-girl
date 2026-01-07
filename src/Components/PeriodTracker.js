import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "../styles/periodTracker.css";

const PeriodTracker = () => {
  const [periodDates, setPeriodDates] = useState([]);

  const onDateClick = (date) => {
    const dateString = date.toDateString();

    setPeriodDates((prev) =>
      prev.includes(dateString)
        ? prev.filter((d) => d !== dateString)
        : [...prev, dateString]
    );
  };

  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", color: "#2d98b9ff" }}>
        🩸 Period Tracker
      </h2>

      <p style={{ maxWidth: "600px", margin: "10px auto", color: "#555" }}>
        Track your monthly cycle by selecting your period days.
        This helps you understand your body better 💗
      </p>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <Calendar
          onClickDay={onDateClick}
          tileClassName={({ date }) =>
            periodDates.includes(date.toDateString())
              ? "period-day"
              : null
          }
        />
      </div>
    </section>
  );
};

export default PeriodTracker;
