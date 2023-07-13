import { useSelector } from "react-redux";
import { Roostate } from "../../redux";
import { NavLink } from "react-router-dom";

import { filters } from '../../functions/array/filters';
import { darkmode } from "../../functions/classe/darkmode";

import Status from "../buttons/Status";

import arrow from "../../assets/logo/filter/arrow.svg";

const InvoiceDetails = () => {
  const billsFrom = useSelector((state:Roostate) => state.billsFrom);
  const billsTo = useSelector((state:Roostate) => state.billsTo);
  const itemsList = useSelector((state:Roostate) => state.itemsList);
  const root = useSelector((state:Roostate) => state.rooter);
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);

  const filterBillsFrom = filters(billsFrom, "id", root);
  const filterBillsTo = filters(billsTo, "id", root);
  const filterItemsList = filters(itemsList, "id", root);
  
  const completeInvoice = {
    fCbillsFrom: Object.assign({}, filterBillsFrom),
    fCbillsTo: Object.assign({}, filterBillsTo),
    fCitemsList: Object.assign({}, filterItemsList)
  };
  const {fCbillsFrom, fCbillsTo, fCitemsList} = completeInvoice;
  // BillsFrom
  const {id, streetAddress, city, postCode, country} = fCbillsFrom[0];
  // BillsTo
  const {
    clientName, 
    clientMail, 
    streetAddress:streetAddressClient, 
    city:cityClient, 
    postCode:postCodeClient, 
    country:countryClient, 
    invoiceDate, 
    paymentTerms,
    paid
  } = fCbillsTo[0];
  //ItemsList
  const {itemName, quantity, price, totalPrice} = fCitemsList[0];

  return (
    <div className="invoiceDetails">
      <div className="invoiceDetails__navlink">
        <NavLink to="/">
          <div className={darkmode(isDarkmode, "invoiceDetails__goBack fwbold")}>
            <img src={arrow} alt="Arrow" className="invoiceDetails__arrow" />
            Go back
            <div></div>
          </div>
        </NavLink>
      </div>
      
      <section className={darkmode(isDarkmode, "invoiceDetails__header")}>
        <div className="invoiceDetails__header__containerStatus">
          <p className={darkmode(isDarkmode, "invoiceDetails__header__status")}>Status</p>
          <Status paid={paid}/>
        </div>
        <div className="invoiceDetails__header__containerButtons">
          <button className={darkmode(isDarkmode, "defaultButton edit")}>Edit</button>
          <button className="defaultButton delete">Delete</button>
          <button className="defaultButton markAsPaid">Mark as Paid</button>
        </div>
      </section>

      <section className={darkmode(isDarkmode, "invoiceDetails__body")}>
        {/* header card  */}
        <div className="invoiceDetails__body__top">
          <p className="invoiceDetails__body__top__id fwbold fs18"><span>#</span>{id}</p>
          <div className="invoiceDetails__billFrom lessOpacity">
            <p>{streetAddress}</p>
            <p>{city}</p>
            <p>{postCode}</p>
            <p>{country}</p>
          </div>
        </div>
        
        {/* body card */}
        <div className="invoiceDetails__body__middle">
          <section className="invoiceDetails__body__dates">
            <p><span className="fs12 lessOpacity">InvoiceDate</span> {invoiceDate}</p>
            <p><span className="fs12 lessOpacity">Payment due</span> {paymentTerms}</p>
          </section>
          <section className="invoiceDetails__middle__billTo">
            <p className="fs12 lessOpacity">Billto</p>
            <p className="fs18 fwbold">{clientName}</p>
            <p className="lessOpacity fs12">{streetAddressClient}</p>
            <p className="lessOpacity fs12">{cityClient}</p>
            <p className="lessOpacity fs12">{postCodeClient}</p>
            <p className="lessOpacity fs12">{countryClient}</p>
          </section>
          <section className="invoiceDetails__middle__mailTo">
            <p className="lessOpacity fs12">Sent to</p>
            <p className="fwbold">{clientMail}</p>
          </section>
        </div>
        {/* footer card  */}
        <div className={darkmode(isDarkmode, "invoiceDetails__body__bottom")}>
          <section>
            <p id="txtStart" className="lessOpacity fs12">Item Name</p>
            <p id="txtStart" className="fwbold fs14">{itemName}</p>
          </section>
          <section>
            <p className="lessOpacity fs12">QTY.</p>
            <p className="fwbold fs14">{quantity}</p>
          </section>
          <section>
            <p id="txtEnd" className="lessOpacity fs12">Price</p>
            <p id="txtEnd" className="fwbold fs14">${price}</p>
          </section>
          <section>
            <p id="txtEnd" className="lessOpacity fs12">Total</p>
            <p id="txtEnd" className="fwbold fs14">${totalPrice}</p>
          </section>
        </div>
        <section className={darkmode(isDarkmode, "amountDue")}>
            <p>Amount due</p>
            <p id="txtEnd">${totalPrice}</p>
        </section>
      </section>
    </div>
  );
};

export default InvoiceDetails;