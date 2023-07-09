import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Roostate } from "../../redux";

import { darkmode } from "../../functions/classe/darkmode";

interface WrapperProps { children:ReactNode }

const Wrapper:React.FC<WrapperProps> = ({children}) => {
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);

  return (
    <div className={darkmode(isDarkmode, "wrapper")}>
      {children}
    </div>
  );
};

export default Wrapper;