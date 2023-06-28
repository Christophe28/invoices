// Config state invoices typescript
// Form invoices

export type BillFrom = {
  id:string
  streetAdress:string
  city:string
  postCode:string
  country:string
}

export type BillTo = {
  id:string
  clientName:string
  clientMail:string
  streetAdress:string
  city:string
  postCode:string
  country:string
  invoices:Date
  paymentTerms:string
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
    billForm:BillFrom
    billTo:BillTo
    itemList:ItemList
  }
]