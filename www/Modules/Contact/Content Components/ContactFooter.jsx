import "../Contact.css";

import resume from "../../About/Assets/Resume - Russell Villasenor.pdf";

import { useState } from "react";

export default function ContactFooter() {
  const [copyText, setCopyText] = useState(false);
  // state handling for onclick copy function
  const handleCopyButton = () => {
    setCopyText(true);
  };
  // state handling to reset on mouseout
  const handleCopyButtonClear = () => {
    setCopyText(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("madebyrssl@gmail.com");
  };

  return (
    <section className="contact-footer-stylings">
      <div className="cf-header">
        Please contact for more information or with project enquiries.
      </div>

      <div className="cf-block">
        <div className="cf-copy-section">
          <div className="cf-email">
            Email ■&nbsp;
            <a href="mailto:madebyrssl@gmail.com" className="cf-email-link">
              madebyrssl@gmail.com
            </a>
          </div>
          <div
            className="cf-copy-btn"
            onClick={() => {
              copyEmail();
              handleCopyButton();
            }}
            onMouseOut={handleCopyButtonClear}
          >
            {copyText ? "❐ Copied" : "❐ Copy"}
          </div>
        </div>

        <div className="cf-linkedin">
          LinkedIn ■&nbsp;
          <a
            href="https://www.linkedin.com/in/russell-villasenor/"
            className=""
            target="_blank"
          >
            russell-villasenor
          </a>
        </div>

        <div className="cf-resume">
          <a href={resume} className="" target="_blank">
            Resume
          </a>
        </div>

        <div className="cf-read-cv">
          Read.cv ■&nbsp;
          <a href="https://read.cv/rssllcrt" className="" target="_blank">
            rssllcrt
          </a>
        </div>

        <div className="cf-github">
          GitHub ■&nbsp;
          <a href="https://github.com/russellcurt" className="" target="_blank">
            russellcurt
          </a>
        </div>

        <div className="cf-behance">
          Behance ■&nbsp;
          <a
            href="https://www.behance.net/russellvillasenor"
            className=""
            target="_blank"
          >
            russellvillasenor
          </a>
        </div>
      </div>

      <div className="cf-smaller-fonts cf-message">
        This website is custom built using the React JavaScript library and
        hosted on Netlify. View the repository on{" "}
        <a
          href="https://github.com/russellcurt/russell_portfolio"
          target="_blank"
        >
          GitHub
        </a>
        . <br />
        The typefaces used are Arial and Playfair Display. <br />
        My site is always a work in progress, just like me. Last Updated: March
        28, 2024 ■ 09:24:00pm
      </div>
      <div className="cf-smaller-fonts cf-copyright">
        <div className="cf-copyright-filler">
          Email / Linkedin / Resume / Read.cv / Behance
        </div>
        <div>© 2024 Russell Villaseñor</div>
        <div className="cf-copyright-filler">
          Last Updated: March 28, 2024 ■ 09:24:00pm
        </div>
      </div>
    </section>
  );
}
