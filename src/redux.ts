import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dateInvoice } from "./functions/date/dateInvoice";
import { BillFrom, BillTo, Item, ItemsList } from './type/typeInvoices';

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

interface InitialState {
  billFromForm:BillFrom
  billToForm:BillTo
  itemsForm:Item[]
}

const initialState:InitialState = {
  billFromForm: invoiceFromForm,
  billToForm: billToForm,
  itemsForm: [],
}

// Data
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
    pushToBillsFrom: (state, action) => {state.push(action.payload)},
    removeBillFrom: (state, action) => {
      state = action.payload;
      return state;
    },
    updateBillsFrom: (state:BillFrom[], action) => {
      const updateBill = action.payload;
      const index = state.findIndex(bill => bill.id === updateBill.id);
      if(index !== -1) {
        state[index] = updateBill
      }
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
      invoiceDate: dateInvoice("01 January 2023", "DD MMM YYYY"),
      paymentTerms: dateInvoice("01 April 2023", "DD MMM YYYY"),
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
      invoiceDate: dateInvoice("01 February 2023", "DD MMM YYYY"),
      paymentTerms: dateInvoice("01 May 2023", "DD MMM YYYY"),
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
      invoiceDate: dateInvoice("01 March 2023", "DD MMM YYYY"),
      paymentTerms: dateInvoice("01 June 2023", "DD MMM YYYY"),
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
      invoiceDate: dateInvoice("01 April 2023", "DD MMM YYYY"),
      paymentTerms: dateInvoice("01 July 2023", "DD MMM YYYY"),
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
      invoiceDate: dateInvoice("01 May 2023", "DD MMM YYYY"),
      paymentTerms: dateInvoice("01 August 2023", "DD MMM YYYY"),
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
      invoiceDate: dateInvoice("01 Jun 2023", "DD MMM YYYY"),
      paymentTerms: dateInvoice("01 September 2023", "DD MMM YYYY"),
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
      invoiceDate: dateInvoice("01 July 2023", "DD MMM YYYY"),
      paymentTerms: dateInvoice("01 October 2023", "DD MMM YYYY"),
      paid: "Paid"
    },
  ],
  reducers: {
    pushToBillsTo: (state, action) => { state.push(action.payload) },
    updatePaid: (state, action) => { 
      const {id, value} = action.payload;
      for(const elem of state) {
        if(elem.id === id) {
          elem.paid = value
        }
      }
    },
    removeBillTo: (state, action) => {
      state = action.payload; 
      return state
    },
    updateBillsTo: (state:BillTo[], action) => {
      const updateBill = action.payload;
      const index = state.findIndex(bill => bill.id === updateBill.id);
      if(index !== -1) {
        state[index] = updateBill
      }
    }
  }
});
const itemsList = createSlice({
  name: "newitemList",
  initialState: [
    {
      id: "0000AA",
      items: [
        {
          id: "0000AA-1",
          itemName: "Konoha headband",
          quantity: 10,
          price: 12.99,
          totalPrice: 10 * 12.99
        },
      ],
      total: 1 * 129.9
    },
    {
      id: "0001AA",
      items: [
        {
          id: "0001AA-1",
          itemName: "Ramen",
          quantity: 100,
          price: 5,
          totalPrice: 100 * 5
        },
      ],
      total: 100 * 5
    },
    {
      id: "0002AA",
      items: [
        {
          id: "0002AA-1",
          itemName: "Wood",
          quantity: 100,
          price: 500,
          totalPrice: 100 * 500
        },
      ],
      total: 100 * 500
    },
    {
      id: "0003AA",
      items: [
        {
          id: "0003AA-1",
          itemName: "Flowers kit",
          quantity: 10,
          price: 20,
          totalPrice: 10 * 20
        },
      ],
      total: 10 * 20
    },
    {
      id: "0004AA",
      items: [
        {
          id: "0004AA-1",
          itemName: "Pencil",
          quantity: 1000,
          price: 1,
          totalPrice: 1000 * 1
        }
      ],
      total: 1 * 1000
    },
    {
      id: "0005AA",
      items: [
        {
          id: "0005AA-1",
          itemName: "Taho bottle",
          quantity: 1,
          price: 10000000,
          totalPrice: 1 * 10000000
        },
      ],
      total: 1 * 10000000
    },
    {
      id: "0006AA",
      items: [
        {
          id: "0006AA-1",
          itemName: "Konoha headband",
          quantity: 10,
          price: 12.99,
          totalPrice: 10 * 12.99
        },
      ],
      total: 1 * 129.9
    },
  ],
  reducers: {
    pushToItemList: (state, action) => {state.push(action.payload)},
    removeItemList: (state, action) => {
      state = action.payload;
      return state
    },
    updateItemsList: (state:ItemsList[], action) => {
      const updateBill = action.payload;
      const index = state.findIndex(bill => bill.id === updateBill.id);
      if(index !== -1) {
        state[index] = updateBill
      }
    }
  },
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
const filterInvoice = createSlice({
  name: "filterInvoice",
  initialState: "all",
  reducers: {
    setFilterInvoice: (state, action) => { return action.payload }
  }
})

// Style controler
const isDarkmode = createSlice({
  name: "isDarkmode",
  initialState: true,
  reducers: {
    changeMode: (state, action) => { return action.payload }
  }
});
const disablePage = createSlice({
  name: "disablePage",
  initialState: false,
  reducers: {
    changeActive: (state, action) => { return action.payload }
  }
});
const isOpenForm = createSlice({
  name: "isOpenForm",
  initialState: false,
  reducers: {
    moveForm: (state, action) => { return action.payload }
  }
});
const firstLoadPage = createSlice({
  name: "firstLoadPage",
  initialState: true,
  reducers: {
    setFirstLoadPage: (state, action) => { return action.payload }
  }
});

// Rooter
const rooter = createSlice({
  name: "rooter",
  initialState: "",
  reducers: {changeRoot: (state, action) => { return action.payload }}
})

// Form
const billFromForm = createSlice({
  name: "billFromForm",
  initialState,
  reducers: {
    setBillFromForm: (state, action) => {
      state.billFromForm = action.payload;
    },
    createId: (state, action:PayloadAction<string>) => { state.billFromForm.id = action.payload },
    setStreetAddress: (state, action:PayloadAction<string>) => { state.billFromForm.streetAddress = action.payload },
    setCity: (state, action:PayloadAction<string>) => { state.billFromForm.city = action.payload },
    setPostCode: (state, action:PayloadAction<string>) => { state.billFromForm.postCode = action.payload },
    setCountry: (state, action:PayloadAction<string>) => { state.billFromForm.country = action.payload },
    removeBillFromForm: (state, action) => { state.billFromForm = action.payload}
  }
})
const billToFrom = createSlice({
  name: "billToFrom",
  initialState,
  reducers: {
    setBillToFrom: (state, action) => {
      state.billToForm = action.payload;
    },
    setClientId: (state, action:PayloadAction<string>) => {state.billToForm.id = action.payload},
    setClientName: (state, action:PayloadAction<string>) => {state.billToForm.clientName = action.payload},
    setClientMail: (state, action:PayloadAction<string>) => {state.billToForm.clientMail = action.payload},
    setClientAddress:(state, action:PayloadAction<string>) => { state.billToForm.streetAddress = action.payload},
    setClientCity: (state, action:PayloadAction<string>) => {state.billToForm.city = action.payload},
    setClientPostCode: (state, action:PayloadAction<string>) => {state.billToForm.postCode = action.payload},
    setClientCountry: (state, action:PayloadAction<string>) => {state.billToForm.country = action.payload},
    setInvoiceDate: (state, action:PayloadAction<string>) => {state.billToForm.invoiceDate = action.payload},
    setPaymentTerms: (state, action:PayloadAction<string>) => {state.billToForm.paymentTerms = action.payload},
    setPaid: (state, action:PayloadAction<string>) => {state.billToForm.paid = action.payload},
    removeBillToFrom: (state, action) => {state.billToForm = action.payload}
  }
})
const itemsForm = createSlice({
  name: "itemsForm",
  initialState,
  reducers: {
    setItemsForm: (state, action) => {
      state.itemsForm = action.payload;
    },
    addItemForm: (state, action:PayloadAction<Item>) => {state.itemsForm.push(action.payload)},
    setItemNameForm: (state, action) => {
      const {index, data} = action.payload;
      const items = state.itemsForm;
      items[index].itemName = data;
    },
    setPriceForm: (state, action) => {
      const {index, data} = action.payload;
      const items = state.itemsForm;
      items[index].price = data;
    },
    setQuantityForm: (state, action) => {
      const {index, data} = action.payload;
      const items = state.itemsForm;
      items[index].quantity = data
    },
    setTotalPriceForm: (state, action) => {
      const {index, data} = action.payload;
      const items = state.itemsForm;
      items[index].totalPrice = data;
    },
    delItemForm: (state, action) => { state.itemsForm = state.itemsForm.filter(e => e.id !== action.payload) },
    removeItemsForm: (state, action) => { state.itemsForm = []}
  }
});

// Export reducers
// Data
export const {pushToBillsFrom, removeBillFrom, updateBillsFrom} = billsFrom.actions;
export const {pushToBillsTo, updatePaid, removeBillTo, updateBillsTo} = billsTo.actions;
export const {pushToItemList, removeItemList, updateItemsList} = itemsList.actions;

// Controlers
export const {handleOptionChange} = selectedOption.actions;
export const {changeMode} = isDarkmode.actions;
export const {changeActive} = disablePage.actions;
export const {setFirstLoadPage} = firstLoadPage.actions;
export const {changeRoot} = rooter.actions;
export const {setFilterInvoice} = filterInvoice.actions;

// Form
export const {
  setBillFromForm, 
  createId, 
  setStreetAddress, 
  setCity, 
  setPostCode, 
  setCountry, 
  removeBillFromForm
} = billFromForm.actions;

export const {
  setBillToFrom,
  setClientId, 
  setClientName, 
  setClientMail, 
  setClientAddress, 
  setClientCity, 
  setClientPostCode, 
  setClientCountry, 
  setInvoiceDate, 
  setPaymentTerms, 
  setPaid,
  removeBillToFrom
} = billToFrom.actions;

export const {setItemsForm, addItemForm, setItemNameForm, setPriceForm, setQuantityForm, setTotalPriceForm, delItemForm, removeItemsForm} = itemsForm.actions;

export const myStore = configureStore({
  reducer: {
    // Data
    billsFrom: billsFrom.reducer,
    billsTo: billsTo.reducer,
    itemsList: itemsList.reducer,

    // Controlers
    selectedOption: selectedOption.reducer,
    isDarkmode: isDarkmode.reducer,
    disablePage: disablePage.reducer,
    firstLoadPage: firstLoadPage.reducer,
    isOpenForm: isOpenForm.reducer,
    filterInvoice: filterInvoice.reducer,
    rooter: rooter.reducer,

    // Form
    billFromForm: billFromForm.reducer,
    billToFrom: billToFrom.reducer,
    itemsForm: itemsForm.reducer,
  }
});

export type Roostate = ReturnType<typeof myStore.getState>