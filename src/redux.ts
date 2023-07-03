import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
// import { BillFrom, BillTo, ItemList, CompleteInvoice } from "./type/typeInvoices";

const billsFrom = createSlice({
  name: "billsFrom",
  initialState: [
    {
      id: "0000AA",
      streetAddress: "rue de la coupe",
      city: "Mons",
      postCode: "7000",
      country: "Belgium"
    },
    {
      id: "0001AA",
      streetAddress: "rue de la borderie",
      city: "Stambruge",
      postCode: "3255",
      country: "Belgium"
    }
  ],
  reducers: {
    consoleBillsFrom: (state, action) => {
      const stateClone = JSON.parse(JSON.stringify(state));
      console.log(stateClone);
    }
  }
});

const billsTo = createSlice({
  name: "billsTo",
  initialState: [
    {    
      id: "0000AA",
      clientName: "Darksasuke",
      clientMail: "Darksasuke@gmail.com",
      streetAddress: "rue de la feuille",
      city: "Konoha",
      postCode: "5000",
      country: "China",
      invoiceDate: "25/02/2023",
      paymentTerms: "net 30 days"
    },
    {    
      id: "0001AA",
      clientName: "Narutobi",
      clientMail: "Narutobi@gmail.com",
      streetAddress: "rue de la feuille",
      city: "Konoha",
      postCode: "5000",
      country: "China",
      invoiceDate: "23/02/2023",
      paymentTerms: "net 30 days"
    }
  ],
  reducers: {
    consoleBillsTo: (state, action) => {
      const stateClone = JSON.parse(JSON.stringify(state));
      console.log(stateClone);
    }
  }
});

// Example
const itemsList = createSlice({
  name: "itemsList",
  initialState: [
    {
      id: "0000AA",
      itemName: "Bandeau de konoha",
      quantity: 10,
      price: 12.99,
      totalPrice: 10 * 12.99
    },
    {
      id: "0001AA",
      itemName: "Ramen",
      quantity: 100,
      price: 5,
      totalPrice: 100 * 5
    }
  ],
  reducers: {
    consoleItemsList: (state, action) => {
      const stateClone = JSON.parse(JSON.stringify(state));
      console.log(stateClone);
    }
  }
})

const selectedOption = createSlice({
  name: "selectedOption",
  initialState: null,
  reducers: {
    handleOptionChange: (state, action) => {
      if(action.payload != state) {return action.payload}
      if(action.payload === state) {return null}
    }
  }
})

export const {consoleBillsFrom} = billsFrom.actions;
export const {consoleBillsTo} = billsTo.actions;
export const {consoleItemsList} = itemsList.actions;
export const {handleOptionChange} = selectedOption.actions;

export const myStore = configureStore({
  reducer: {
    billsFrom: billsFrom.reducer,
    billsTo: billsTo.reducer,
    itemsList: itemsList.reducer,
    selectedOption: selectedOption.reducer
  }
})

export type Roostate = ReturnType<typeof myStore.getState>