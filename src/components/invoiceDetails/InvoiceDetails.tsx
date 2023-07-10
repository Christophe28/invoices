import { useSelector } from "react-redux";
import { Roostate } from "../../redux";

const InvoiceDetails = () => {
  const billsFrom = useSelector((state:Roostate) => state.billsFrom);
  const billsTo = useSelector((state:Roostate) => state.billsTo);
  const itemsList = useSelector((state:Roostate) => state.itemsList);
  const root = useSelector((state:Roostate) => state.rooter);

  const filterBillsFrom = billsFrom.filter(e => e.id === root);
  const filterBillsTo = billsTo.filter(e => e.id === root);
  const filterItemsList = itemsList.filter(e => e.id === root);  
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
    paymentTerms
  } = fCbillsTo[0];
  //ItemsList
  const {itemName, quantity, price, totalPrice} = fCitemsList[0];

  return (
    <div className="test">
      <h1>Invoice detail</h1>
      <p>Sur cette page il y'aura tout ça</p>
      <h2>BillsFrom</h2>
      <p>id:{id}</p>
      <p>streetAdress:{streetAddress}</p>
      <p>city:{city}</p>
      <p>postCode:{postCode}</p>
      <p>country:{country}</p>

      <h2>BillsTo</h2>
      <p>invoiceDate:{invoiceDate}</p>
      <p>paymentTerms:{paymentTerms}</p>
      <p>nameCliant:{clientName}</p>
      <p>streetAddressClient:{streetAddressClient}</p>
      <p>cityClient:{cityClient}</p>
      <p>postCodeClient:{postCodeClient}</p>
      <p>countryClient:{countryClient}</p>
      <p>clientMail:{clientMail}</p>

      <h2>itemsList</h2>
      <p>itemName:{itemName}</p>
      <p>quantity:{quantity}</p>
      <p>price:{price}</p>
      <p>totalPrice:{totalPrice}</p>
    </div>
  );
};

export default InvoiceDetails;