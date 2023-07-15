import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Roostate } from "../../redux";

import { dynamicalClass } from "../../functions/classe/dynamicalClass";

interface WrapperProps { children:ReactNode }

const Wrapper:React.FC<WrapperProps> = ({children}) => {
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);

  return (
    <div className={dynamicalClass(isDarkmode, "darkmode", "wrapper")}>
      {children}
    </div>
  );
};

export default Wrapper;