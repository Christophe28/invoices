import React from "react";
import { ItemListProps } from "../../../../type/itemListProps";
import trash from "../../../../assets/logo/form/Combined Shape.svg";

const ItemList:React.FC<ItemListProps> = ({ id, onClick }) => {

  return (
    <section className="itemList">
      <input type="text" name="itemName" id="itemName" className="itemList__itemName" />
      <input type="text" name="quantity" id="quantity" className="itemList__quantity"/>
      <input type="text" name="price" id="price" className="itemList__price"/>
      <span className="itemList__total">18.00</span>
      <img src={trash} alt="trash" onClick={onClick}/>
    </section>
  );
};

export default ItemList;