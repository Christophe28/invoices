import { configureStore, createSlice } from "@reduxjs/toolkit";
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
      streetAddress: "rue de la coupe",
      city: "Mons",
      postCode: "7000",
      country: "Belgium"
    },
    {
      id: "0002AA",
      streetAddress: "rue bibou",
      city: "Mons",
      postCode: "2222",
      country: "Belgium"
    },
    {
      id: "0003AA",
      streetAddress: "rue de la feuille",
      city: "Mons",
      postCode: "3333",
      country: "Belgium"
    },
    {
      id: "0004AA",
      streetAddress: "rue de la feuille",
      city: "Mons",
      postCode: "3333",
      country: "Belgium"
    },
    {
      id: "0005AA",
      streetAddress: "rue de la feuille",
      city: "Mons",
      postCode: "3333",
      country: "Belgium"
    },
    {
      id: "0006AA",
      streetAddress: "rue de la feuille",
      city: "Mons",
      postCode: "3333",
      country: "Belgium"
    },
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
      invoiceDate: "Due 19 Aug 2023",
      paymentTerms: "net 30 days",
      paid: "Paid"
    },
    {    
      id: "0001AA",
      clientName: "Narutobi",
      clientMail: "Narutobi@gmail.com",
      streetAddress: "rue de la feuille",
      city: "Konoha",
      postCode: "5000",
      country: "China",
      invoiceDate: "Due 19 Aug 2023",
      paymentTerms: "net 30 days",
      paid: "Pending"
    },
    {
      id: "0002AA",
      clientName: "Sarutobi",
      clientMail: "Sarutobi@gmail.com",
      streetAddress: "rue de la feuille",
      city: "Konoha",
      postCode: "5000",
      country: "China",
      invoiceDate: "Due 19 Aug 2023",
      paymentTerms: "net 30 days",
      paid: "Draft"
    },
    {
      id: "0003AA",
      clientName: "Sakura",
      clientMail: "Sakura@gmail.com",
      streetAddress: "Rue de la feuille",
      city: "Konoha",
      postCode: "5000",
      country: "China",
      invoiceDate: "Due 19 Aug 2023",
      paymentTerms: "net 30 days",
      paid: "Paid"
    },
    {
      id: "0004AA",
      clientName: "Ligth yagami",
      clientMail: "ligth@gmail.com",
      streetAddress: "jingu dori 12",
      city: "Shibuya",
      postCode: "796-0024",
      country: "Japan",
      invoiceDate: "Due 19 Aug 2023",
      paymentTerms: "net 30 days",
      paid: "Paid"
    },
    {
      id: "0005AA",
      clientName: "Gabimaru",
      clientMail: "gabimaru@gmail.com",
      streetAddress: "???",
      city: "???",
      postCode: "???",
      country: "???",
      invoiceDate: "Due 19 Aug 2023",
      paymentTerms: "net 30 days",
      paid: "Paid"
    },
    {
      id: "0006AA",
      clientName: "Wu Lio Qui",
      clientMail: "wulioqui@gmail.com",
      streetAddress: "35 North Wireless Road",
      city: "Bangkok",
      postCode: "1030",
      country: "Thaïland",
      invoiceDate: "Due 19 Aug 2023",
      paymentTerms: "net 30 days",
      paid: "Paid"
    },
  ],
  reducers: {
    consoleBillsTo: (state, action) => {
      const stateClone = JSON.parse(JSON.stringify(state));
      console.log(stateClone);
    }
  }
});

const itemsList = createSlice({
  name: "itemsList",
  initialState: [
    {
      id: "0000AA",
      itemName: "Konoha headband",
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
    },
    {
      id: "0002AA",
      itemName: "Wood",
      quantity: 100,
      price: 500,
      totalPrice: 100 * 500
    },
    {
      id: "0003AA",
      itemName: "Flowers kit",
      quantity: 10,
      price: 20,
      totalPrice: 10 * 20
    },
    {
      id: "0004AA",
      itemName: "Pencil",
      quantity: 1000,
      price: 1,
      totalPrice: 1000 * 1
    },
    {
      id: "0005AA",
      itemName: "Taho bottle",
      quantity: 1,
      price: 10000000,
      totalPrice: 1 * 10000000
    },
    {
      id: "0006AA",
      itemName: "Scissors",
      quantity: 4,
      price: 14,
      totalPrice: 4 * 14
    },
  ],
  reducers: {
    consoleItemsList: (state, action) => {
      const stateClone = JSON.parse(JSON.stringify(state));
      console.log(stateClone);
    }
  }
})

// Update options to filter
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

// Check darkmode and return it
const isDarkmode = createSlice({
  name: "isDarkmode",
  initialState: false,
  reducers: {
    changeMode: (state, action) => { return action.payload }
  }
})

const filterInvoice = createSlice({
  name: "filterInvoice",
  initialState: "all",
  reducers: {
    setFilterInvoice: (state, action) => { return action.payload }
  }
})

// Rooter
const rooter = createSlice({
  name: "rooter",
  initialState: "",
  reducers: {
    changeRoot: (state, action) => { return action.payload }
  }
})

export const {consoleBillsFrom} = billsFrom.actions;
export const {consoleBillsTo} = billsTo.actions;
export const {consoleItemsList} = itemsList.actions;
export const {handleOptionChange} = selectedOption.actions;
export const {changeMode} = isDarkmode.actions;
export const {changeRoot} = rooter.actions;
export const {setFilterInvoice} = filterInvoice.actions;

export const myStore = configureStore({
  reducer: {
    billsFrom: billsFrom.reducer,
    billsTo: billsTo.reducer,
    itemsList: itemsList.reducer,
    selectedOption: selectedOption.reducer,
    isDarkmode: isDarkmode.reducer,
    filterInvoice: filterInvoice.reducer,
    rooter: rooter.reducer
  }
});

export type Roostate = ReturnType<typeof myStore.getState>