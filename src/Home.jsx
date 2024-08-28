import { useEffect, useRef } from "react";
import Hero from "./Components/home/Hero";
import Logo from "./Components/home/Logo";
import Mid from "./Components/home/Mid";
import Team from "./Components/home/Team";
import Testimonial from "./Components/home/Testimonial";
import "./App.css";
import Cards from "./Components/Cards";

const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: .5 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div style={{ color: 'white' }}>
      <div ref={(el) => (sectionsRef.current[0] = el)} className="section">
        <Hero />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)} className="section">
        <Mid />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)} className="section">
        <Team />
      </div>
      <div ref={(el) => (sectionsRef.current[3] = el)} className="section">
        <Logo />
      </div>
      <div ref={(el) => (sectionsRef.current[4] = el)} className="section">
        <Cards />
      </div>
      <div ref={(el) => (sectionsRef.current[5] = el)} className="section">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;