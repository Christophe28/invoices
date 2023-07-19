import React from "react";
import { ItemListProps } from "../../../../type/itemListProps";
import { formatNumber } from '../../../../functions/invoices/formatNumber';
import trash from "../../../../assets/logo/form/Combined Shape.svg";

const ItemList:React.FC<ItemListProps> = ({ price, quantity, onChangeName, onChangeQuantity, onChangePrice, onClick }) => {
  return (
    <section className="itemList">
      <input type="text" name="itemName" id="itemName" className="itemList__itemName" onChange={onChangeName}/>
      <input type="text" name="quantity" id="quantity" className="itemList__quantity" onChange={onChangeQuantity}/>
      <input type="text" name="price" id="price" className="itemList__price" onChange={onChangePrice}/>
      <span className="itemList__total">${formatNumber(price * quantity)}</span>
      <img src={trash} alt="trash" onClick={onClick}/>
    </section>
  );
};

export default ItemList;