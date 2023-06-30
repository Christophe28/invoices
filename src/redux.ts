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

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: [
    {
      id: 1,
      text: "text1",
      done: false
    },
    {
      id: 2,
      text: "text2",
      done: true
    }
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: state.length + 1,
        done: false,
        text: action.payload
      }
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      // const task = state.find(t => t.id === action.payload);
      // console.log(task);
      const index:number = action.payload;
      const stateClone = JSON.parse(JSON.stringify(state));
      console.log(stateClone[index])
    },
    deleteTask: (state, action) => {
      state = state.filter(t => t.id !== action.payload);
      return state
    }
  }
})

export const {addTask, toggleTask, deleteTask } = todoSlice.actions;
export const {consoleBillsFrom} = billsFrom.actions;
export const {consoleBillsTo} = billsTo.actions;
export const {consoleItemsList} = itemsList.actions;

export const myStore = configureStore({
  reducer: {
    todoSlice: todoSlice.reducer,
    billsFrom: billsFrom.reducer,
    billsTo: billsTo.reducer,
    itemsList: itemsList.reducer
  }
})

export type Roostate = ReturnType<typeof myStore.getState>