import React from "react";
import CSLinkButton from "../../Case Studies/Content Components/CSLinkButton";

export default function Panel(props) {
  const {
    active,
    togglePanel,
    topVal,
    projectNumber,
    projectName,
    renderValue,
  } = props;

  return (
    <>
      <div className="acc-page-general-stylings">
        <div onClick={togglePanel} className={`acc-buttons ${topVal}`}>
          <div className="acc-left-containers">
            <div className="acc-recreation-number">{projectNumber}</div>
            <div className="acc-recreation-name">{projectName}</div>
          </div>
          {!active ? (
            <div className="acc-toggle-sign">&#9660;</div>
          ) : (
            <div className="acc-toggle-sign">&#9650;</div>
          )}
        </div>
      </div>
      {active && (
        <div
          className="focus-body"
          style={{ borderBottom: active ? "1px solid #282828" : "" }}
        >
          <div className="focus-body-container">
            <div className="focus-body-header">
              <div className="focus-body-text">
              <span> All content taken from my 2022 design journal.</span>
              <span>
                (2 Month Design Journal and Personal Portfolio MAY - JUNE 2022)
              </span>
              </div>
            </div>
            <div className="focus-btn-spacing">
              <CSLinkButton buttonText="View Full Journal" />
            </div>
            {renderValue}
          </div>
        </div>
      )}
    </>
  );
}
