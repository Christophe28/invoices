// Checks each element of the form and if they are all completed saves the data.
// Type
import { BillFrom, BillTo, Item } from '../../type/typeInvoices';
// Reducers
import { pushToBillsFrom, pushToBillsTo, pushToItemList, removeBillFromForm, removeBillToFrom, removeItemsForm, updateBillsFrom, updateBillsTo, updateItemsList, } from "../../redux";
// Functions
import { checkObject, checkItems } from "./controlEmpy";
import { reduxSetter } from "./reduxSetter";
import { controlAnimForm } from "./controlAnimForm";

export const greenLigther = (dispatch:any, billFromForm:BillFrom, billsToForm:BillTo, totalItem:any) => {   

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
  const allAreaIsEmpty = [
    checkObject<BillFrom>(billFromForm), 
    checkObject<BillTo>(billsToForm), 
    checkItems<Item>(totalItem.items)
  ];
  const greenLigth = allAreaIsEmpty.every(e => e === true);

  if(greenLigth) { 
    if(location.pathname === "/invoices") {
      reduxSetter(dispatch, pushToBillsFrom, billFromForm);
      reduxSetter(dispatch, pushToBillsTo, billsToForm);
      reduxSetter(dispatch, pushToItemList, totalItem);
    } else {
      reduxSetter(dispatch, updateBillsFrom, billFromForm);
      reduxSetter(dispatch, updateBillsTo, billsToForm);
      reduxSetter(dispatch, updateItemsList, totalItem)
    }
    reduxSetter(dispatch, removeBillFromForm, invoiceFromForm);
    reduxSetter(dispatch, removeBillToFrom, billToForm);
    reduxSetter(dispatch, removeItemsForm, "");
    controlAnimForm(dispatch);
  }
}