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
  const test = useSelector((state:Roostate) => state.billToFrom.billToForm);
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
  ];
  // État pour gérer la valeur sélectionnée
  const [selectedValue, setSelectedValue] = useState('');
  const [openOptions, setOpenOptions] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="select" id="select">
      <div 
        id="select__select"
        className={dynamicalClass(isDarkmode, "darkmode", "")}
        onClick={() => { setOpenOptions(!openOptions) }}
      >
        Selected Option: {selectedValue}
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
              reduxSetter(dispatch, setPaymentTerms, option.value);
              console.log("billsToFrom ==>", test);
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