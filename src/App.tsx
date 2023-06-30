import { Routes, Route } from "react-router-dom";
import Invoices from "./components/globalInvoices/Invoices";
import { Provider } from "react-redux";
import { myStore } from "./redux";

import Wrapper from "./components/viewWrapper/Wrapper";
import SideBar from "./components/viewWrapper/sideBar/SideBar";

function App() {
  return (
    <Provider store={myStore}>
      <>
        <Wrapper>
          <SideBar />
          <Routes>
            <Route path="/" element={<Invoices />} />
          </Routes>
        </Wrapper>
      </>
    </Provider>
  )
}

export default App
