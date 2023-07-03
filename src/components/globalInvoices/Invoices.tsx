import { useDispatch, useSelector } from 'react-redux';
import { Roostate, consoleBillsTo } from '../../redux';
import { searchBill } from '../../functions/invoices/searchBill';

import Button from '../buttons/Button';
import Filter from '../filter/Filter';

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
          <section>
            {/* {
              billsFrom.map((elem, index) => (
                <div key={elem.id}>
                  {elem.id} {billsTo[index].invoiceDate} {billsTo[index].clientName} ${itemsList[index].totalPrice}
                </div>
              ))
            } */}
          </section>
        </div>
    </div>
  );
};

export default Invoices;