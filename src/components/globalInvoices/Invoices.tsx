// React / Redux
import { useSelector, useDispatch } from 'react-redux';
import { Roostate } from '../../redux';
import { NavLink } from 'react-router-dom';

// Functions
import { darkmode } from '../../functions/classe/darkmode';
import { filters } from '../../functions/array/filters';

// Type
import { BillTo } from '../../type/typeInvoices';

// Components
import Filter from '../filter/Filter';
// Update logic of component. Need filter
import Invoice from './Invoice';

// Img
import logoFilter from "../../assets/logo/filter/arrow.svg";
import imgEmptyInvoice from "../../assets/logo/globalInvoices/empty_invoice.svg";
import imgEmptyInvoiceDarkmode from "../../assets/logo/globalInvoices/empty_invoice_darkmode.svg";

const Invoices = () => {
  const billsFrom = useSelector((state:Roostate) => state.billsFrom);
  const billsTo = useSelector((state:Roostate) => state.billsTo);
  const itemsList = useSelector((state:Roostate) => state.itemsList);
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);
  const filterInvoice = useSelector((state:Roostate) => state.filterInvoice);

  const dispatch = useDispatch();

  const billsToFilterByPayment = filters<BillTo>(billsTo, "paid", filterInvoice);
  const invoices = filterInvoice === "all" ? billsTo : billsToFilterByPayment;

  return (
    <div className={darkmode(isDarkmode, "containerInvoices")}>
        <div className="containerInvoices__page">
          <div className="containerInvoices__header">
            <div>
              <h1>Invoices</h1>
              <p>There are {billsFrom.length} total invoices</p>
            </div>
            <div className="containerInvoices__containerButtons">
              <Filter />
              <button className="containerInvoices__containerButtons__buttonNewInvoice"><span>+</span> New invoice</button>
            </div>
          </div>
          <section className={darkmode(isDarkmode, "containerInvoices__invoices")}>
            {
              invoices.length > 0 ? (
                invoices.map((elem, index) => {
                  return (
                    <NavLink key={elem.id} to={`./invoiceDetails/${elem.id}`} onClick={() => dispatch({
                      type: "rooter/changeRoot",
                      payload: elem.id 
                    })}>
                      <Invoice
                        id={elem.id}
                        isDarkmode={isDarkmode}
                        invoiceDate={elem.invoiceDate}
                        clientName={elem.clientName}
                        totalPrice={itemsList[index].totalPrice}
                        paid={elem.paid}
                        logoFilter={logoFilter}
                      />
                    </NavLink>
                  )
                })
              ) : (
                <img src={isDarkmode ? imgEmptyInvoiceDarkmode : imgEmptyInvoice} alt="Vous n'avez pas de facture" className="noInvoices"/>
              )
            }
          </section>
        </div>
    </div>
  );
};

export default Invoices;