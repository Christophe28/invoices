// React / Redux
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

// My Redux
import { Roostate, createId, setClientId } from '../../redux';

// Functions
import { dynamicalClass } from '../../functions/classe/dynamicalClass';
import { filters, filtersByFilters } from '../../functions/array/filters';
import { uniqueId } from '../../functions/form/uniqueId';
import { reduxSetter } from '../../functions/form/reduxSetter';
// Type
import { BillTo } from '../../type/typeInvoices';

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
  const strongId = useSelector((state:Roostate) => state.billFromForm.billFromForm.id);
  const dispatch = useDispatch();

  const billsToFilterByPayment = filters<BillTo>(billsTo, "paid", filterInvoice);
  const itemsToFilterByPayment = filtersByFilters(itemsList, billsToFilterByPayment);
  const invoices = filterInvoice === "all" ? billsTo : billsToFilterByPayment;
  const items = filterInvoice === "all" ? itemsList : itemsToFilterByPayment;

  useEffect(() => {
    if(isOpenForm === false) {return}
    if(isOpenForm && strongId === "") {
      const id = uniqueId();
      reduxSetter(dispatch, createId, id);
      reduxSetter(dispatch, setClientId, id);
      return;
    }
  }, [isOpenForm])

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
              dispatch({type: "isOpenForm/moveForm",payload: true});
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
                      totalPrice={items[index].total}
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