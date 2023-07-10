import { Routes, Route } from "react-router-dom";
import Invoices from "./components/globalInvoices/Invoices";
import { Provider, useSelector } from "react-redux";
import { Roostate, myStore } from "./redux";

import Wrapper from "./components/viewWrapper/Wrapper";
import SideBar from "./components/viewWrapper/sideBar/SideBar";
import InvoiceDetails from "./components/invoiceDetails/InvoiceDetails";

function App() {
  const rootInvoiceDetals = useSelector((state:Roostate) => state.rooter);

  return (
    <>
      <Wrapper>
        <SideBar />
        <Routes>
          <Route path="/" element={<Invoices />} />
          <Route path={`invoiceDetals/${rootInvoiceDetals}`} element={<InvoiceDetails />} />
        </Routes>
      </Wrapper>
    </>
  )
}

export default App
