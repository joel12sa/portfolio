import { useState, useCallback } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import { Hero } from "./components/Hero/Hero";
import { Work } from "./components/Work/Work";
import { Skills } from "./components/Skills/Skills";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Resume } from "./components/Resume/Resume";
import Galaxy from "./components/Galaxy/Galaxy";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  const finishLoading = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onFinish={finishLoading} />}
      <Galaxy
        transparent
        hueShift={200}
        saturation={0.6}
        glowIntensity={0.4}
        density={1.2}
        starSpeed={0.4}
        mouseRepulsion
        mouseInteraction
        twinkleIntensity={0.5}
        rotationSpeed={0.08}
      />
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}>
        <Navbar />
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
        <Resume />
      </div>
    </>
  );
}

export default App;
