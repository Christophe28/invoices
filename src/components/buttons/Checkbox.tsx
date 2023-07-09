// React / Redux
import { useSelector } from 'react-redux';

// Type
import { CheckboxProps } from '../../type/checkbox';

// Functions
import { darkmode } from '../../functions/classe/darkmode';

// Logo
import checkLogo from "../../assets/logo/filter/check.svg";
import { Roostate } from '../../redux';

const Checkbox:React.FC<CheckboxProps> = ({ classWrapper, check, onChange, label, classLogo, onClickLabel }) => {
  const isDarkmode = useSelector((state: Roostate) => state.isDarkmode);

  return (
    <div className={darkmode(isDarkmode, "container-checkbox")}>
      <section className={classWrapper}>
        <input 
          type="checkbox" 
          checked={check}
          className={darkmode(isDarkmode, "container-checkbox__checkbox" )}
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