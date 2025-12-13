import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-white selection:text-black">
      <Helmet>
        <title>Kalkidan Getachew | Mid Full Stack Engineer</title>
        <meta
          name="description"
          content="I design and build practical software systems that solve real-world problems. My focus is on crafting reliable full-stack and mobile applications, understanding systems under the hood, and delivering solutions that are maintainable, scalable, and user-centered."
        />
        <meta
          name="keywords"
          content="React Native, Raffle System, Admin Dashboard, Express Api, Telegram Bot, Python, Face Recognition, DeepFace, Flutter, Firebase, E-Commerce, Graduation Project, Android, Kotlin, Java, Education App, React / Next.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, Django, Git, Gemini API"
        />
        <meta name="author" content="Kalkidan Getachew" />
        <link rel="canonical" href="https://kalchaos.vercel.app/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kalchaos.vercel.app/" />
        <meta
          property="og:title"
          content="Kalkidan Getachew | Mid Full Stack Engineer"
        />
        <meta
          property="og:description"
          content="I design and build practical software systems that solve real-world problems. My focus is on crafting reliable full-stack and mobile applications, understanding systems under the hood, and delivering solutions that are maintainable, scalable, and user-centered."
        />
        <meta
          property="og:image"
          content="https://kalchaos.vercel.app/og-image.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kalchaos.vercel.app/" />
        <meta
          property="twitter:title"
          content="Kalkidan Getachew | Mid Full Stack Engineer"
        />
        <meta
          property="twitter:description"
          content="I design and build practical software systems that solve real-world problems. My focus is on crafting reliable full-stack and mobile applications, understanding systems under the hood, and delivering solutions that are maintainable, scalable, and user-centered."
        />
        <meta
          property="twitter:image"
          content="https://kalchaos.vercel.app/og-image.png"
        />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <Analytics />
    </div>
  );
};

export default App;
