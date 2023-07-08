import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Roostate, handleOptionChange } from "../../redux";

import { Option } from "../../type/typeOption";

import arrow from "../../assets/logo/filter/arrow.svg";
import Checkbox from "../buttons/Checkbox";

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
            <section key={option.id}>
              <div>
                <Checkbox
                  classWrapper={selectedOption === option.id ? "checkBg" : "uncheckBg"}
                  check={selectedOption === option.id} 
                  label={option.label}
                  onChange={() => dispatch({
                    type: "selectedOption/handleOptionChange",
                    payload: option.id
                  })}
                  classLogo={selectedOption === option.id ? "checked" : "unchecked"}
                  onClickLabel={() => dispatch({
                    type: "selectedOption/handleOptionChange",
                    payload: option.id
                  })}
                />
              </div>
            </section>
          ))
        }
      </div>
    </div>
  );
};

export default Filter;