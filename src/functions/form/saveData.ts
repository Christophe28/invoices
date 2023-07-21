// Type
import { BillFrom, BillTo, Item } from '../../type/typeInvoices';
// Reducers
import { pushToBillsFrom, pushToBillsTo, pushToItemList, removeBillFromForm, removeBillToFrom, removeItemsForm } from "../../redux";
// Functions
import { checkObject, checkItems } from "./controlEmpy";
import { reduxSetter } from "./reduxSetter";
import { controlAnimForm } from "./controlAnimForm";

export const greenLigther = (dispatch:any, billFromForm:BillFrom, billsToForm:BillTo, totalItem:any) => {          
  const allAreaIsEmpty = [
    checkObject<BillFrom>(billFromForm), 
    checkObject<BillTo>(billsToForm), 
    checkItems<Item>(totalItem.items)
  ];
  const greenLigth = allAreaIsEmpty.every(e => e === true);

  if(greenLigth) { 
    reduxSetter(dispatch, pushToBillsFrom, billFromForm);
    reduxSetter(dispatch, pushToBillsTo, billsToForm);
    reduxSetter(dispatch, pushToItemList, totalItem);
    reduxSetter(dispatch, removeBillFromForm, "");
    reduxSetter(dispatch, removeBillToFrom, "");
    reduxSetter(dispatch, removeItemsForm, "");
    controlAnimForm(dispatch);
  }
  console.log("greenligther ok ==>", greenLigth)
}