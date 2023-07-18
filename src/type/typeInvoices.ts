export type BillFrom = {
  id:string
  streetAddress:string
  city:string
  postCode:string
  country:string
  [key:string | number]:string | number
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
  [key:string | number]:string | number
}

export type Item = {
  id:string
  itemName:string
  quantity:number
  price:number
  totalPrice:number
  [key:string | number]:string | number
}

export type ItemsList = {
  id:string
  items:Item[]
  total:number
}

export type CompleteInvoice = [
  {
    id:number
    billFrom:BillFrom
    billTo:BillTo
    itemList:ItemsList
  }
]