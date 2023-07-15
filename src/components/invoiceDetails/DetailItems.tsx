import React from 'react';

import { DetailsItemsProps } from '../../type/detailsItemsProps';

const DetailItems:React.FC<DetailsItemsProps> = ({name, quantity, price, totalPrice}) => {
  return (
    <>
      <div>
        <p id="txtStart" className="fwbold fs14">{name}</p>
      </div>
      <div>
        <p className="fwbold fs14">{quantity}</p>              
        <p id="txtEnd" className="fwbold fs14">${price}</p>               
        <p id="txtEnd" className="fwbold fs14">${totalPrice}</p>
      </div>
    </>
  );
};

export default DetailItems;