import { Link } from "react-router-dom";

const CustomButton = ({ to, text, variant = "primary" }) => {
  return (
    <>
      <Link to={to} className={`btn btn-${variant} btn-lg rounded-0`}>
        {text}
      </Link>
    </>
  );
};

export default CustomButton;
