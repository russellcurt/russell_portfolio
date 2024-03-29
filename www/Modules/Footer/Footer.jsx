import "./Footer.css";

import resume from "../About/Assets/Resume - Russell Villasenor.pdf";

export default function Footer() {
  return (
    <>
      <footer id="footer-section">
        <div className="group-nav">
          <a href="mailto:madebyrssl@gmail.com">Email</a> /{" "}
          <a
            href="https://www.linkedin.com/in/russell-villasenor"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          /{" "}
          <a href={resume} target="_blank">
            Resume
          </a>{" "}
          /{" "}
          <a href="https://read.cv/rssllcrt" target="_blank">
            Read.cv
          </a>{" "}
        </div>
        <div>© 2024 Russell Villaseñor</div>
        <div>Last Updated: March 28, 2024 ■ 09:24:00pm</div>
      </footer>
    </>
  );
}
