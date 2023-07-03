import { ButtonProps } from "../../type/typeButton";

const Button:React.FC<ButtonProps> = ({ className, text, onClick}) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;