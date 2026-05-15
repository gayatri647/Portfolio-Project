import "./About.css";
import aboutImg from "./Assets/about-avatar.png";
import { useTheme } from "./ThemeContext.jsx";

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75-.75V9a.75.75 0 011.5 0v2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function About() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="about" aria-labelledby="about-heading">
      <nav className="navbar" aria-label="Primary">
        <h1 className="logo">Portfolio.</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li className="active">About</li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button type="button" className="hire-btn">
            Hire Me
          </button>
        </div>
      </nav>

      <div className="about-main">
        <div className="about-card">
          <div className="about-media">
            <div className="about-media-frame">
              <img
                src={aboutImg}
                alt="Stylized portrait of a professional woman in a pink blazer, gesturing toward the About section"
                className="about-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="about-content">
            <h2 id="about-heading" className="about-heading">
              About Me
            </h2>
            <p className="about-lead">
              I am a frontend developer who crafts fast, accessible interfaces with React and modern CSS. I care
              about clear information hierarchy, responsive layouts, and polish in the details—motion, spacing,
              and performance—so products feel intentional on every screen. I collaborate closely on design systems
              and component APIs, and I continuously refine my workflow with testing, linting, and thoughtful code
              review.
            </p>
            <button type="button" className="about-cta">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
