// React / Redux
import { useSelector, useDispatch } from 'react-redux';
import { Roostate } from '../../redux';
import { NavLink } from 'react-router-dom';

// Functions
import { darkmode } from '../../functions/classe/darkmode';
import { filters, filtersByFilters } from '../../functions/array/filters';

// Type
import { BillTo, ItemList } from '../../type/typeInvoices';

// Components
import Filter from '../filter/Filter';
import Invoice from './Invoice';
import NewInvoice from './newInvoice/NewInvoice';

// Img
import logoFilter from "../../assets/logo/filter/arrow.svg";
import imgEmptyInvoice from "../../assets/logo/globalInvoices/empty_invoice.svg";
import imgEmptyInvoiceDarkmode from "../../assets/logo/globalInvoices/empty_invoice_darkmode.svg";
import { useState } from 'react';

const Invoices = () => {
  const billsFrom = useSelector((state:Roostate) => state.billsFrom);
  const billsTo = useSelector((state:Roostate) => state.billsTo);
  const itemsList = useSelector((state:Roostate) => state.itemsList);
  const filterInvoice = useSelector((state:Roostate) => state.filterInvoice);
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);

  const dispatch = useDispatch();

  const billsToFilterByPayment = filters<BillTo>(billsTo, "paid", filterInvoice);
  const itemsToFilterByPayment = filtersByFilters<ItemList, BillTo>(itemsList, billsToFilterByPayment);
  const invoices = filterInvoice === "all" ? billsTo : billsToFilterByPayment;
  const items = filterInvoice === "all" ? itemsList : itemsToFilterByPayment;

  const [test, setTest] = useState("newInvoice");

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
              <button className="defaultButton" onClick={() => {
                if(test === "newInvoice" || test === "newInvoice leaveTo") {
                  setTest(`newInvoice moveTo`);
                }
                if(test === "newInvoice moveTo") {
                  setTest(`newInvoice leaveTo`)
                }
              }}><span>+</span> New invoice</button>
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
        <NewInvoice
          className={darkmode(isDarkmode, test)}
        />
    </div>
  );
};

export default Invoices;