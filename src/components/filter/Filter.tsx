// React / Redux
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Roostate } from "../../redux";

// Type
import { Option } from "../../type/typeOption";

// Functions
import { dynamicalClass } from "../../functions/classe/dynamicalClass";

// Components
import Checkbox from "../buttons/Checkbox";

// Img
import arrow from "../../assets/logo/filter/arrow.svg";

const options:Option[] = [
  {id: 1, label: "Draft"},
  {id: 2, label: "Pending"},
  {id: 3, label: "Paid"}
]

const Filter = () => {
  const selectedOption = useSelector((state:Roostate) => state.selectedOption);
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if(selectedOption != null) {
      dispatch({
        type: "filterInvoice/setFilterInvoice",
        payload: options[selectedOption - 1].label
      })
    }
    if(selectedOption === null) {
      dispatch({
        type: "filterInvoice/setFilterInvoice",
        payload: "all"
      })
    }
  }, [selectedOption, dispatch])

  return (
    <div className="filter">
      <div onClick={() => setIsDisplay(!isDisplay)} className="filter__filteredByStatus fs16 fwbold">
        Filtered by status 
        <img src={arrow} alt="Flèche directionnelle" className={`filter__filteredByStatus__img ${isDisplay ? "rotateDown" : "rotateUp"}`}/>
      </div>
      <div className={dynamicalClass(isDarkmode, "darkmode", isDisplay ? "filter__containerOption display" : "filter__containerOption displayNone")}>
        {
          options.map(option => (
            <section key={option.id}>
              <div>
                <Checkbox
                  classWrapper={dynamicalClass(isDarkmode, "darkmode", selectedOption === option.id ? "checkBg" : "uncheckBg")}
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