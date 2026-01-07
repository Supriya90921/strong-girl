// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import empoweringImage from "../assets/strong-girl.png";

const HeroSection = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        color: "rgb(23 156 159)",
        minHeight: "75vh",
        marginLeft: "50px",
      }}
    >
      {/* Left Side */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ flex: "1 1 400px", maxWidth: "700px" }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          <Typewriter
            options={{
              strings: [
                "Are You a PCOS Girl?",
                "Nah..I am a Strong Girl🌸",
                
              ],
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 40,
            }}
          />
        </h1>

        <p style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
          Strong Girl is your platform for tips, lifestyle guidance, and
          community support to manage PCOS and feel your best.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: "30px",
            padding: "15px 40px",
            fontSize: "1rem",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#ff4d6d",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Join the Community
        </motion.button>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{ flex: "1 1 300px", textAlign: "center" }}
      >
        <motion.img
          src={empoweringImage}
          alt="Empowering PCOS Girl"
          style={{ maxWidth: "100%", borderRadius: "20px" }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
