import React from "react";
import { ThemeProvider } from "./Context/ThemeContext";
import Navbar from "./components/Sections/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import SkillSection from "./components/Sections/SkillSection";
import AboutSection from "./components/Sections/AboutSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import Footer from "./components/Sections/Footer";
const App= () => {
  return(
    <ThemeProvider>  
       <div >
      <Navbar />
      <HeroSection />
      <SkillSection/>
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </div>
</ThemeProvider>
  )
}

export default App

