import "./Button.css";

const Button = (props) => {
  return (
    <>
      <button
        type={props.type}
        className={`button ${props.className}`}
        onClick={props.onClick}
        id={props.id}
        style={props.style}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
