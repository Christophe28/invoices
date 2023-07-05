import { useDispatch, useSelector } from 'react-redux';
import { Roostate } from '../../redux';
// import { searchBill } from '../../functions/invoices/searchBill';

import Filter from '../filter/Filter';

import logoFilter from "../../assets/logo/filter/arrow.svg";

const Invoices = () => {
  const billsFrom = useSelector((state:Roostate) => state.billsFrom);
  const billsTo = useSelector((state:Roostate) => state.billsTo);
  const itemsList = useSelector((state:Roostate) => state.itemsList);

  return (
    <div className="containerInvoices">
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
          <section className="containerInvoices__invoices">
            {
              billsFrom.map((elem, index) => (
                <div key={elem.id} className="containerInvoices__invoice">
                  <p className="invoice__firstElem">#{elem.id}</p>
                  <p>{billsTo[index].invoiceDate}</p>
                  <p>{billsTo[index].clientName}</p>
                  <p>${itemsList[index].totalPrice}</p> 
                  <p>{billsTo[index].paid}</p> 
                  <img className="invoice__lastElem" src={logoFilter} alt="Flèche directionnelle" />
                </div>
              ))
            }
          </section>
        </div>
    </div>
  );
};

export default Invoices;