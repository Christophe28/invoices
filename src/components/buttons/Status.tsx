import { dynamicalClass } from "../../functions/classe/dynamicalClass";
import { useSelector } from "react-redux";
import { Roostate } from "../../redux";

const Status:React.FC<any> = ({ paid }) => {
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);
  return (
    <p id="invoice__lastElem--lessWidth" className={dynamicalClass(isDarkmode, "darkmode", `lol invoice__paid--center fwbold fs12 text${paid}`)}>
      <span className={dynamicalClass(isDarkmode, "darkmode", `invoice__point circle${paid}`)}>
      </span>
    {paid}
  </p> 
  );
};

export default Status;