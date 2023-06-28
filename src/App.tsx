import { Routes, Route } from "react-router-dom";
import Invoices from "./components/invoices/Invoices";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Invoices />} />
      </Routes>
    </>
  )
}

export default App
