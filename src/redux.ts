import { configureStore, createSlice } from "@reduxjs/toolkit";
import { BillFrom, BillTo, ItemList, CompleteInvoice } from "./type/typeInvoices";


const invoice = createSlice({
  name: "invoice",
  initialState: [],
  reducers: {

  }
})

const todoSlice = createSlice({
  name: "todo",
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
      const task = state.find(t => t.id === action.payload);
      console.log(task);
    },
    deleteTask: (state, action) => {
      state = state.filter(t => t.id !== action.payload);
      return state
    }
  }
})

export const {addTask, toggleTask, deleteTask } = todoSlice.actions;

export const myStore = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  }
})

export type Roostate = ReturnType<typeof myStore.getState>