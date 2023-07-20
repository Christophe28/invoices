import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Roostate, setPaymentTerms } from '../../../../redux';

// Functions
import { dynamicalClass } from '../../../../functions/classe/dynamicalClass';
import { reduxSetter } from '../../../../functions/form/reduxSetter';

// Img
import arrow from '../../../../assets/logo/filter/arrow.svg';

const Select = () => {
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);
  const options = [
    { value: "net 1 day", label: "net 1 day" },
    { value: "net 10 day", label: "net 10 day" },
    { value: "net 20 day", label: "net 20 day" },
    { value: "net 30 day", label: "net 30 day" },
  ];
  // État pour gérer la valeur sélectionnée
  const [selectedValue, setSelectedValue] = useState('Payment Therms');
  const [openOptions, setOpenOptions] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="select" id="select">
      <div 
        id="select__select"
        className={dynamicalClass(isDarkmode, "darkmode", "")}
        onClick={() => { setOpenOptions(!openOptions) }}
      >
        {selectedValue}
        <img src={arrow} alt="arrow" />
      </div>

      <div id="select__containerOptions">
        {options.map((option, index) => (
          <div 
            id="select__option"
            key={option.value} 
            style={{top: `${openOptions ? (index * 50) + 20 : 0}px`}}
            className={dynamicalClass(isDarkmode, "darkmode", openOptions ? "select__option--open" : "select__option--close")}
            onClick={() => {
              setSelectedValue(option.value);
              setOpenOptions(false);
              reduxSetter(dispatch, setPaymentTerms, option.value);
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;