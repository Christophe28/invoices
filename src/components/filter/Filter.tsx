import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Roostate, handleOptionChange } from "../../redux";

import { Option } from "../../type/typeOption";

import arrow from "../../assets/logo/filter/arrow.svg";

const options:Option[] = [
  {id: 1, label: "Draft"},
  {id: 2, label: "Pending"},
  {id: 3, label: "Paid"}
]

const Filter = () => {
  const selectedOption = useSelector((state:Roostate) => state.selectedOption)
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const dispatch = useDispatch();

  return (
    <div className="filter">
      <div onClick={() => setIsDisplay(!isDisplay)} className="filter__filteredByStatus fs16 fwbold">
        Filtered by status 
        <img src={arrow} alt="Flèche directionnelle" className={`filter__filteredByStatus__img ${isDisplay ? "rotateDown" : "rotateUp"}`}/>
      </div>
      <div className={isDisplay ? "filter__containerOption display" : "filter__containerOption displayNone"}>
        {
          options.map(option => (
            <div className="filter__customCheckbox">
              <input
                className="filter__option"
                type="checkbox"
                checked={selectedOption === option.id}
                onChange={() => dispatch({
                  type: "selectedOption/handleOptionChange",
                  payload: option.id
                })}
              />
              <label key={option.id} className="fwbold">
                {option.label}
              </label>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Filter;