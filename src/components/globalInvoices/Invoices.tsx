import { useDispatch, useSelector } from 'react-redux';
import { Roostate } from '../../redux';
// import { searchBill } from '../../functions/invoices/searchBill';

import Filter from '../filter/Filter';

import logoFilter from "../../assets/logo/filter/arrow.svg";

function formatNumber(number:number) {
  const integerPart = Math.floor(number);
  const decimalPart = (number % 1) !== 0 ? (number % 1).toFixed(2) : '';
  const numberString = integerPart.toString();
  const formattedNumber = [];

  if (integerPart.toString().length <= 4) {
    return number;
  }
  for (let i = 0; i < numberString.length; i++) {
    if (i > 0 && (numberString.length - i) % 3 === 0) {
      formattedNumber.push(' ');
    }
    formattedNumber.push(numberString[i]);
  }

  return formattedNumber.join('') + decimalPart;
}

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
                  <p className="fwbold"><span className="fs12 lessOpacity">#</span>{elem.id}</p>
                  <p className="lessOpacity">{billsTo[index].invoiceDate}</p>
                  <p className="lessOpacity">{billsTo[index].clientName}</p>
                  <p id="lessWidth--endText" className="invoice__price fwbold">${formatNumber(itemsList[index].totalPrice)}</p> 
                  <p id="invoice__lastElem--lessWidth" className={`invoice__paid--center fwbold fs12 text${billsTo[index].paid}`}>
                    <span className={`invoice__point circle${billsTo[index].paid}`}>
                    </span>
                    {billsTo[index].paid}
                  </p> 
                  <img className="invoice__arrow" src={logoFilter} alt="Flèche directionnelle" />
                </div>
              ))
            }
          </section>
        </div>
    </div>
  );
};

export default Invoices;