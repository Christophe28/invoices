export type NewInvoiceProps = {
  className:string
  clickNewItem:(event:React.MouseEvent) => void
  clickDiscard:(event:React.MouseEvent) => void
  clickSave:(event:React.MouseEvent) => void
  clickSubmit:(event:React.MouseEvent) =>  void
  totalItems:any
}