import checkLogo from "../../assets/logo/filter/check.svg";
import { CheckboxProps } from '../../type/checkbox';

const Checkbox:React.FC<CheckboxProps> = ({ classWrapper, check, onChange, label, classLogo, onClickLabel }) => {
  return (
    <div className="container-checkbox">
      <section className={classWrapper}>
        <input 
          type="checkbox" 
          checked={check}
          className="container-checkbox__checkbox" 
          onChange={onChange}
        />
        <img src={checkLogo} 
          alt="check" 
          className={classLogo}
        />
      </section>
      <label onClick={onClickLabel}>{label}</label>
    </div>
  );
};

export default Checkbox;