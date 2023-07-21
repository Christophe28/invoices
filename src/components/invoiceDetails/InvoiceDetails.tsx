import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Roostate, addItemForm, removeBillFrom, removeBillTo, removeItemList, setBillFromForm, setBillToFrom, setItemsForm, updatePaid } from "../../redux";

// Functions
import { filters } from '../../functions/array/filters';
import { dynamicalClass } from "../../functions/classe/dynamicalClass";
import { formatNumber } from "../../functions/invoices/formatNumber";
import { reduxSetter } from "../../functions/form/reduxSetter";

// Components
import Status from "../buttons/Status";

// Img
import arrow from "../../assets/logo/filter/arrow.svg";
import DetailItems from "./DetailItems";
import imgEmptyInvoiceDarkmode from "../../assets/logo/globalInvoices/empty_invoice_darkmode.svg";
import imgEmptyInvoice from "../../assets/logo/globalInvoices/empty_invoice.svg";

const InvoiceDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const billsFrom = useSelector((state:Roostate) => state.billsFrom);
  const billsTo = useSelector((state:Roostate) => state.billsTo);
  const itemsList = useSelector((state:Roostate) => state.itemsList);
  const root = useSelector((state:Roostate) => state.rooter);
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);
  const isOpenForm = useSelector((state:Roostate) => state.isOpenForm);
  // Pour vérifier
  const billsFromForm = useSelector((state:Roostate) => state.billFromForm.billFromForm);
  const itemsListForm = useSelector((state:Roostate) => state.itemsForm.itemsForm);
  const billsToForm = useSelector((state:Roostate) => state.billToFrom.billToForm);
  const filterBillsFrom = filters(billsFrom, "id", root);
  const filterBillsTo = filters(billsTo, "id", root);
  const filterItemsList = filters(itemsList, "id", root);

  // Model
  const billToForm = {
    id: "",
    clientName: "",
    clientMail: "",
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
    invoiceDate: "",
    paymentTerms: "",
    paid: ""
  }
  const invoiceFromForm = {
    id: "",
    streetAddress: "",
    city: "",
    postCode: "",
    country: ""
  }

  const completeInvoice = {
    fCbillsFrom: Object.assign({}, filterBillsFrom),
    fCbillsTo: Object.assign({}, filterBillsTo),
    fCitemsList: Object.assign({}, filterItemsList)
  };

  const [invoice, setInvoice] = useState([completeInvoice]);
  const {fCbillsFrom, fCbillsTo, fCitemsList} = completeInvoice;

  
  const removeInvoice = () => {
    reduxSetter(dispatch, removeBillFrom, billsFrom.filter(e => e.id != completeInvoice.fCbillsFrom[0].id))
    reduxSetter(dispatch, removeBillTo, billsTo.filter(e => e.id !== completeInvoice.fCbillsFrom[0].id))
    reduxSetter(dispatch, removeItemList, itemsList.filter(e => e.id !== completeInvoice.fCbillsFrom[0].id))
  }

  useEffect(() => {
    if(invoice.length === 0) {
      removeInvoice()
      setTimeout(() => {
        navigate("/", {replace: true});
      }, 1000);
    }
  }, [invoice])
  // Logique pour les valeurs du formulaire
  useEffect(() => {
    if(isOpenForm) {
      console.log("open form ==>", isOpenForm);
      reduxSetter(dispatch, setBillFromForm, fCbillsFrom[0]);
      reduxSetter(dispatch, setBillToFrom, fCbillsTo[0]); 
      reduxSetter(dispatch, setItemsForm, fCitemsList[0].items);
    }
    if(!isOpenForm) {
      console.log("open form ==>", isOpenForm);
      reduxSetter(dispatch, setBillFromForm, invoiceFromForm);
      reduxSetter(dispatch, setBillToFrom, billToForm);
      reduxSetter(dispatch, setItemsForm, []);
    }
  }, [isOpenForm])

  return (
    // "invoiceDetails"
    <div className={dynamicalClass(isOpenForm, "desactive", "invoiceDetails")}>
      <button style={{position:"absolute", left:"800px", zIndex: "3"}} onClick={() => {
        console.log("=================Formulaire=======================")
        console.log("billFrom ==>", billsFromForm);
        console.log("billTo ==>", billsToForm);
        console.log("items ==>", itemsListForm);
      }}>CLICK</button>
      <div className="invoiceDetails__navlink">
        <NavLink to="/">
          <div className={dynamicalClass(isDarkmode, "darkmode", "invoiceDetails__goBack fwbold")}>
            <img src={arrow} alt="Arrow" className="invoiceDetails__arrow" />
            Go back
            <div></div>
          </div>
        </NavLink>
      </div>
      {
        invoice.length > 0 ? (
          <>
                <section className={dynamicalClass(isDarkmode, "darkmode", "invoiceDetails__header")}>
        <div className="invoiceDetails__header__containerStatus">
          <p className={dynamicalClass(isDarkmode, "darkmode", "invoiceDetails__header__status")}>Status</p>
          <Status paid={fCbillsTo[0].paid}/>
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
          <button className="defaultButton delete" onClick={() => setInvoice([])}>Delete</button>
          <button className="defaultButton markAsPaid" onClick={() => {
            reduxSetter(dispatch, updatePaid, {id:fCbillsFrom[0].id, value:"Paid"})
          }}>Mark as Paid</button>
        </div>
      </section>
      {/* header card  */}
      <section className={dynamicalClass(isDarkmode, "darkmode", "invoiceDetails__body")}>
        <div className="invoiceDetails__body__top">
          <p className="invoiceDetails__body__top__id fwbold fs18"><span>#</span>{fCbillsFrom[0].id}</p>
          <div className="invoiceDetails__billFrom lessOpacity">
            <p>{fCbillsFrom[0].streetAddress}</p>
            <p>{fCbillsFrom[0].city}</p>
            <p>{fCbillsFrom[0].postCode}</p>
            <p>{fCbillsFrom[0].country}</p>
          </div>
        </div>
        {/* body card */}
        <div className="invoiceDetails__body__middle">
          <section className="invoiceDetails__body__dates">
            <p><span className="fs12 lessOpacity">InvoiceDate</span> {fCbillsTo[0].invoiceDate}</p>
            <p><span className="fs12 lessOpacity">Payment due</span> {fCbillsTo[0].paymentTerms}</p>
          </section>
          <section className="invoiceDetails__middle__billTo">
            <p className="fs12 lessOpacity">Billto</p>
            <p className="fs18 fwbold">{fCbillsTo[0].clientName}</p>
            <p className="lessOpacity fs12">{fCbillsTo[0].streetAddress}</p>
            <p className="lessOpacity fs12">{fCbillsTo[0].city}</p>
            <p className="lessOpacity fs12">{fCbillsTo[0].postCode}</p>
            <p className="lessOpacity fs12">{fCbillsTo[0].country}</p>
          </section>
          <section className="invoiceDetails__middle__mailTo">
            <p className="lessOpacity fs12">Sent to</p>
            <p className="fwbold">{fCbillsTo[0].clientMail}</p>
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
            fCitemsList[0].items.map((item, index) => (
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
            <p id="txtEnd">${formatNumber(fCitemsList[0].total)}</p>
        </section>
      </section>
          </>
        ) : (
          <>
            <h1>Pas de Facture vous allez être redirigé</h1>
            <img src={isDarkmode ? imgEmptyInvoiceDarkmode : imgEmptyInvoice} alt="Vous n'avez pas de facture" className="noInvoices"/>
          </>     
        )
      }
    </div>
  );
};

export default InvoiceDetails;