import "./CSWindow.css";

export default function CSDWindowTitles(props) {
  return (
    <>
      <div className="content-title-bar">
        <span className="content-step-number">{props.stepNumber}/</span>
        {props.stepName}
      </div>
    </>
  );
}
