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

      CARTE 
      <section className="invoiceDetails__body">
        ______________________Haut de la carte__________________________
        <div>
          <p>Id:{id}</p>
          <p>StreetAdress:{streetAddress}</p>
        </div>
        ______________________Centre de la carte_______________________
        <div>
          <section>
            <p>InvoiceDate:{invoiceDate}</p>
            <p>Payment due:{paymentTerms}</p>
          </section>
          <section>
            <p>Billto</p>
            <p>{clientName}</p>
            <p>{streetAddressClient}</p>
            <p>{cityClient}</p>
            <p>{postCodeClient}</p>
            <p>{countryClient}</p>
          </section>
          <section>
            <p>Sent to</p>
            <p>{clientMail}</p>
          </section>
        </div>
        ____________________Bas de la carte_____________________________
        <div>
          <section>
            <p>Item Name</p>
            <p>{itemName}</p>
          </section>
          <section>
            <p>QTY.</p>
            <p>{quantity}</p>
          </section>
          <section>
            <p>Price</p>
            <p>{price}</p>
          </section>
          <section>
            <p>total</p>
            <p>{totalPrice}</p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default InvoiceDetails;