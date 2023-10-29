import "./NavWindow.css";

export default function NavTop({ activeStep, onToggleStep }) {
  return (
    <>
      <div className="top-nav">
        <span
          className={`top-nav-btn ${activeStep.overview ? "active" : ""}`}
          onClick={() => onToggleStep("overview")}
          style={
            activeStep.overview
              ? { backgroundColor: "#282828", color: "#f3f2ed" }
              : { backgroundColor: "#f3f2ed", color: "#282828" }
          }
        >
          00/
          <span className="bold">Overview</span>
        </span>
        <span
          className={`top-nav-btn ${activeStep.empathize ? "active" : ""}`}
          onClick={() => onToggleStep("empathize")}
          style={
            activeStep.empathize
              ? { backgroundColor: "#282828", color: "#f3f2ed" }
              : { backgroundColor: "#f3f2ed", color: "#282828" }
          }
        >
          01/
          <span className="bold">Empathize</span>
        </span>
        <span
          className={`top-nav-btn ${activeStep.define ? "active" : ""}`}
          onClick={() => onToggleStep("define")}
          style={
            activeStep.define
              ? { backgroundColor: "#282828", color: "#f3f2ed" }
              : { backgroundColor: "#f3f2ed", color: "#282828" }
          }
        >
          02/
          <span className="bold">Define</span>
        </span>
        <span
          className={`top-nav-btn ${activeStep.ideate ? "active" : ""}`}
          onClick={() => onToggleStep("ideate")}
          style={
            activeStep.ideate
              ? { backgroundColor: "#282828", color: "#f3f2ed" }
              : { backgroundColor: "#f3f2ed", color: "#282828" }
          }
        >
          03/
          <span className="bold">Ideate</span>
        </span>
        <span
          className={`top-nav-btn ${activeStep.create ? "active" : ""}`}
          onClick={() => onToggleStep("create")}
          style={
            activeStep.create
              ? { backgroundColor: "#282828", color: "#f3f2ed" }
              : { backgroundColor: "#f3f2ed", color: "#282828" }
          }
        >
          04/
          <span className="bold">Create</span>
        </span>
      </div>
    </>
  );
}
