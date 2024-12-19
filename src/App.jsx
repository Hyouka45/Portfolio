import { useEffect } from "react";
import SocialLink from './Components/SocialLink.jsx';
import NavBar from './Components/Navbar';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Experience from './Components/Expeience.jsx';
import Contact from './Components/Contact.jsx';
import Loader from './Components/Loader';
import gsap from 'gsap';

function App() {
  useEffect(() => {
    // Run GSAP animations after the window loads
    window.onload = () => {
      let tl = gsap.timeline();
      tl.to(".box", {
        scale: 0,
        y: 60,
        rotate: 400,
        duration: 1,
        repeat: 1,
        yoyo: true,
        delay: 0.3,
        stagger: {
          amount: 1.5,
          from: "center",
        },
      });
      tl.to(".container", {
        rotate: "-405deg",
        scale: 0,
        duration: 1,
      });
      tl.to(".wapper", {
        opacity: 0,
        duration: 0.5, // Smoothly fade out the loader
        onComplete: () => {
          // After animation finishes, hide the loader
          const loaderWrapper = document.querySelector(".loader-wrapper");
          if (loaderWrapper) {
            loaderWrapper.style.display = "none"; // Hide loader
          }
        },
      });
    };
  }, []);

  return (
    <>
      <div className="loader-wrapper">
        <Loader />
      </div>
      <div className="app-wrapper">
        <NavBar />
        <Home />
        <SocialLink />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default App;