import "../App.css";

const Button = ({ title, className, onClick, children }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {title} {children}
      </button>
    </>
  );
};

export default Button;
