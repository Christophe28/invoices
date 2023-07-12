// Config state invoices typescript
// Form invoices

export type BillFrom = {
  id:string
  streetAddress:string
  city:string
  postCode:string
  country:string
}

export type BillTo = {
  id:string
  clientName:string
  clientMail:string
  streetAddress:string
  city:string
  postCode:string
  country:string
  invoiceDate:string
  paymentTerms:string
  paid:string
}

export type ItemList = {
  id:string
  itemName:string
  quantity:number
  price:number
  totalPrice:number
}

export type CompleteInvoice = [
  {
    id:number
    billFrom:BillFrom
    billTo:BillTo
    itemList:ItemList
  }
]

type InvoicesState = {
  billFrom:BillFrom
  billTo:BillTo
  itemList:ItemList
}

// const initialInvoice:InvoicesState = {
//   billFrom: {
//     id: "",
//     streetAddress: '',
//     city: '',
//     postCode: '',
//     country: '',
//   },
//   billTo: {
//     id: "",
//     clientName: '',
//     clientMail: '',
//     streetAddress: '',
//     city: '',
//     postCode: '',
//     country: '',
//     invoiceDate: "",
//     paymentTerms: '',
//   },
//   itemList: {
//     id: "",
//     itemName: "",
//     quantity: 1,
//     price: 1,
//     totalPrice: 1
//   },
// }