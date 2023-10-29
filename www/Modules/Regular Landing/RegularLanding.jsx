import "./RegularLanding.css";

export default function RegularLanding(props) {
  return (
    <>
      <section id="page-landing" className="landing-container">
        <div className="landing-text">{props.text}</div>
      </section>
    </>
  );
}
