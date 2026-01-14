// src/components/Features.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const features = [
  { title: "Diet Tips", desc: "Balanced diet plans to manage PCOS", icon: "🥗" },
  { title: "Exercise", desc: "Home workouts to stay fit & healthy", icon: "🏋️‍♀️" },
  { title: "Mental Health", desc: "Meditation & stress management", icon: "🧘‍♀️" },
  { title: "Community", desc: "Connect with other strong girls", icon: "👭" },
];

const Features = () => {
  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <>
      <h2
        style={{
          padding: "30px 20px",
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#2d98b9",
          fontWeight: "600",
        }}
      >
        Features
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          padding: "50px 20px",
        }}
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            style={{
              position: "relative",
              overflow: "hidden",
              background: "#fff",
              borderRadius: "12px",
              padding: "40px 40px",
              width: "220px",
              height:"220px",
              textAlign: "center",
              transition: "all 0.3s ease",
              border: "1px solid #e0e0e0",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
              cursor: "pointer",
            }}
          >
            {/* Glow effect */}
            {hovered === i && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "absolute",
                  top: mousePos.y - 100,
                  left: mousePos.x - 100,
                  width: 400,
                  height: 400,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(246, 1, 181, 0.73) 0%, transparent 60%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
            )}

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "36px", marginBottom: "15px" }}>{f.icon}</div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "10px", color: "#333" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Features;
