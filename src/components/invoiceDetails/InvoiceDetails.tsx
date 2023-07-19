import { useSelector, useDispatch } from "react-redux";
import { Roostate } from "../../redux";
import { NavLink } from "react-router-dom";

// Functions
import { filters } from '../../functions/array/filters';
import { dynamicalClass } from "../../functions/classe/dynamicalClass";
import { formatNumber } from "../../functions/invoices/formatNumber";

// Components
import Status from "../buttons/Status";

// Img
import arrow from "../../assets/logo/filter/arrow.svg";
import DetailItems from "./DetailItems";

const InvoiceDetails = () => {
  const dispatch = useDispatch();
  const billsFrom = useSelector((state:Roostate) => state.billsFrom);
  const billsTo = useSelector((state:Roostate) => state.billsTo);
  const itemsList = useSelector((state:Roostate) => state.itemsList);
  const root = useSelector((state:Roostate) => state.rooter);
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);
  const isOpenForm = useSelector((state:Roostate) => state.isOpenForm);

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
  const {totalPrice} = fCitemsList[0].items[0];
  console.log(filterItemsList[0].items);
  const items = filterItemsList[0].items;

  return (
    // "invoiceDetails"
    <div className={dynamicalClass(isOpenForm, "desactive", "invoiceDetails")}>
      <div className="invoiceDetails__navlink">
        <NavLink to="/">
          <div className={dynamicalClass(isDarkmode, "darkmode", "invoiceDetails__goBack fwbold")}>
            <img src={arrow} alt="Arrow" className="invoiceDetails__arrow" />
            Go back
            <div></div>
          </div>
        </NavLink>
      </div>
      
      <section className={dynamicalClass(isDarkmode, "darkmode", "invoiceDetails__header")}>
        <div className="invoiceDetails__header__containerStatus">
          <p className={dynamicalClass(isDarkmode, "darkmode", "invoiceDetails__header__status")}>Status</p>
          <Status paid={paid}/>
        </div>
        <div className="invoiceDetails__header__containerButtons">
          <button 
            className={dynamicalClass(isDarkmode, "darkmode", "defaultButton edit")}
            onClick={() => {
              dispatch({
                type: "isOpenForm/moveForm",
                payload: true
              });
            }}
          >Edit</button>
          <button className="defaultButton delete">Delete</button>
          <button className="defaultButton markAsPaid">Mark as Paid</button>
        </div>
      </section>

      <section className={dynamicalClass(isDarkmode, "darkmode", "invoiceDetails__body")}>
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
        <div className={dynamicalClass(isDarkmode, "darkmode", "invoiceDetails__body__bottom")}>
          <section className="body__bottom__itemsLabel">
            <div>
              <p id="txtStart" className="lessOpacity fs12">Item Name</p>
            </div>
            <div>
              <p className="lessOpacity fs12 qtyWidth">QTY.</p>
              <p id="txtEnd" className="lessOpacity fs12 priceWidth">Price</p>
              <p id="txtEnd" className="lessOpacity fs12 totalWidth">Total</p>
            </div>
          </section>
          {
            items.map((item, index) => (
              <div key={`${item.itemName}-${index}`} className="body__bottom__items">
                <DetailItems 
                  name={item.itemName}
                  quantity={formatNumber(item.quantity)}
                  price={formatNumber(item.price)}
                  totalPrice={formatNumber(item.totalPrice)}
                />
              </div>
            ))
          }
        </div>
        <section className={dynamicalClass(isDarkmode, "darkmode", "amountDue")}>
            <p>Amount due</p>
            <p id="txtEnd">${formatNumber(totalPrice)}</p>
        </section>
      </section>
    </div>
  );
};

export default InvoiceDetails;