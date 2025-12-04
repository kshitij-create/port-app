import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import ProjectsPage from "./pages/ProjectsPage";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  useEffect(() => {
    const scriptId = "relevanceai-chat-bubble";
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.defer = true;
    script.src = "https://app.relevanceai.com/embed/chat-bubble.js";
    script.setAttribute(
      "data-relevanceai-share-id",
      "d7b62b/e5082f0b-7a59-4e8f-8671-2c54baa12a17/07940c82-90a9-4d4d-a68b-e378d044aca3"
    );
    script.setAttribute(
      "data-share-styles",
      "bubble_position=bottom_right&hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23ff9061&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
    );

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
