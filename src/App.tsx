import { useState, useCallback } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import { Hero } from "./components/Hero/Hero";
import { Work } from "./components/Work/Work";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Resume } from "./components/Resume/Resume";
import Iridescence from "./components/Iridescence/Iridescence";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  const finishLoading = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onFinish={finishLoading} />}
      <Iridescence
        transparent
        color={[0.35, 0.45, 0.55]}
        speed={1.0}
        amplitude={0.1}
      />
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s" }}>
        <Navbar />
        <Hero />
        <Work />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Resume />
      </div>
    </>
  );
}

export default App;
