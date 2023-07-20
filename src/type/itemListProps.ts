export type ItemListProps = { 
  itemName:string
  price:number 
  quantity:number
  onChangeName:(e:any) => void
  onChangeQuantity:(e:any) => void
  onChangePrice:(e:any) => void
  onClick:(e:any) => void
}