import "../Recreation.css";

import Typography from "./Typography.jsx";
import Akasha from "./Akasha.jsx";
import Photography from "./Photography.jsx";
import Visualizer from "./Visualizer.jsx";
import Panel from "./Panel.jsx";

import { useState } from "react";

export default function Accordion() {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panelKey) => {
    setActivePanel(activePanel === panelKey ? null : panelKey);
  };

  return (
    <>
      <Panel
        key={1}
        projectNumber="01"
        projectName="TYPOGRAPHY"
        topVal="acc-buttons-top"
        renderValue={<Typography />}
        active={activePanel === 1}
        togglePanel={() => togglePanel(1)}
      />
      <Panel
        key={2}
        projectNumber="02"
        projectName="AKASHA RADIO"
        renderValue={<Akasha />}
        active={activePanel === 2}
        togglePanel={() => togglePanel(2)}
      />
      <Panel
        key={3}
        projectNumber="03"
        projectName="VISUALIZER"
        renderValue={<Visualizer />}
        active={activePanel === 3}
        togglePanel={() => togglePanel(3)}
      />
      <Panel
        key={4}
        projectNumber="04"
        projectName="PHOTOGRAPHY"
        renderValue={<Photography />}
        active={activePanel === 4}
        togglePanel={() => togglePanel(4)}
      />
    </>
  );
}
