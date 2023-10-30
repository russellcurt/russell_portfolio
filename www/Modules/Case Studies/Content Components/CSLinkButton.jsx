import "./NavWindow.css";

export default function CSLinkButton(props) {
  return (
    <>
      <a href={props.linkOut} className="cs-btn" target="_blank">
        {props.buttonText}
        <span className="cs-btn-arrow"></span>
      </a>
    </>
  );
}
