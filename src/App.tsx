import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Roostate } from "./redux";
import { useEffect } from "react";

import { dynamicalClass } from "./functions/classe/dynamicalClass";

import Wrapper from "./components/viewWrapper/Wrapper";
import SideBar from "./components/viewWrapper/sideBar/SideBar";
import Invoices from "./components/globalInvoices/Invoices";
import InvoiceDetails from "./components/invoiceDetails/InvoiceDetails";

function App() {
  const rootInvoiceDetals = useSelector((state:Roostate) => state.rooter);
  const isOpenForm = useSelector((state:Roostate) => state.isOpenForm);
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);
  const location = useLocation();
  const dispatch = useDispatch();
   
  // Navigation with url
  useEffect(() => {
    if(location.pathname.split("/").length > 2) {
      dispatch({
        type: "rooter/changeRoot",
        payload: location.pathname.split("/")[2]
      });
    }
  }, [location, dispatch]);

  return (
    <>
      <Wrapper>
        <div className={`${dynamicalClass(isOpenForm, "flooter", "")} ${dynamicalClass(isDarkmode, "darkmode", "")}`}></div>
        <SideBar />      
        <Routes>
          <Route path="/" element={<Invoices />} />
          <Route path={`invoiceDetails/${rootInvoiceDetals}`} element={<InvoiceDetails />} />
          {/* <Route path="*" element={<Invoices />} /> */}
        </Routes>
      </Wrapper>
    </>
  )
}

export default App
