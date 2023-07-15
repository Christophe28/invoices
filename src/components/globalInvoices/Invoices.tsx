// React / Redux
import { useSelector, useDispatch } from 'react-redux';
import { Roostate } from '../../redux';
import { NavLink } from 'react-router-dom';

// Functions
import { dynamicalClass } from '../../functions/classe/dynamicalClass';
import { filters, filtersByFilters } from '../../functions/array/filters';

// Type
import { BillTo, ItemList } from '../../type/typeInvoices';

// Components
import Filter from '../filter/Filter';
import Invoice from './Invoice';

// Img
import logoFilter from "../../assets/logo/filter/arrow.svg";
import imgEmptyInvoice from "../../assets/logo/globalInvoices/empty_invoice.svg";
import imgEmptyInvoiceDarkmode from "../../assets/logo/globalInvoices/empty_invoice_darkmode.svg";

const Invoices = () => {
  const billsFrom = useSelector((state:Roostate) => state.billsFrom);
  const billsTo = useSelector((state:Roostate) => state.billsTo);
  const itemsList = useSelector((state:Roostate) => state.itemsList);
  const filterInvoice = useSelector((state:Roostate) => state.filterInvoice);
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);
  const isOpenForm = useSelector((state:Roostate) => state.isOpenForm);

  const dispatch = useDispatch();

  const billsToFilterByPayment = filters<BillTo>(billsTo, "paid", filterInvoice);
  const itemsToFilterByPayment = filtersByFilters<ItemList, BillTo>(itemsList, billsToFilterByPayment);
  const invoices = filterInvoice === "all" ? billsTo : billsToFilterByPayment;
  const items = filterInvoice === "all" ? itemsList : itemsToFilterByPayment;

  return (
    <div className={`${dynamicalClass(isDarkmode, "darkmode", "containerInvoices")} ${isOpenForm ? "desactive" : ""}`}>
        <div className="containerInvoices__page">
          <div className="containerInvoices__header">
            <div>
              <h1>Invoices</h1>
              <p>There are {billsFrom.length} total invoices</p>
            </div>
            <div className="containerInvoices__containerButtons">
              <Filter />
              <button className="defaultButton" onClick={() => {
                dispatch({
                  type: "isOpenForm/moveForm",
                  payload: true
                });
              }}><span>+</span> New invoice</button>
            </div>
          </div>
          <section className={dynamicalClass(isDarkmode, "darkmode", "containerInvoices__invoices")}>
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
                        totalPrice={items[index].totalPrice}
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