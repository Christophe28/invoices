import { darkmode } from "../../functions/classe/darkmode";
import { useSelector } from "react-redux";
import { Roostate } from "../../redux";

const Status:React.FC<any> = ({ paid }) => {
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);
  return (
    <p id="invoice__lastElem--lessWidth" className={darkmode(isDarkmode, `lol invoice__paid--center fwbold fs12 text${paid}`)}>
      <span className={darkmode(isDarkmode, `invoice__point circle${paid}`)}>
      </span>
    {paid}
  </p> 
  );
};

export default Status;