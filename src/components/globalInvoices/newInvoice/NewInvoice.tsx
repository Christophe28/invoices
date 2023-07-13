import React from 'react';
import { NewInvoiceProps } from '../../../type/newInvoice';

const NewInvoice:React.FC<NewInvoiceProps> = ({ className }) => {
  return (
    <div className={className}>
      <form action="">
        ________________________bill form_________________________
        streetAdress:<input type="text" />
        <section>
          city: <input type="text" />
          postCode: <input type="text" />
          country: <input type="text" />
        </section>
        _________________________bill to___________________________
        clientName: <input type="text" />
        client'smail: <input type="text" />
        streetAdress: <input type="text" />
        <section>
          city: <input type="text" />
          postCode: <input type="text" />
          country: <input type="text" />
        </section>
        <section>
          invoice date: <input type="text" />
          payment therm: <input type="text" />
        </section>
        projet description: <input type="text" />

        _________________________item list_______________________
        <section>
          <p>itemName</p>
          <input type="text" />
          <input type="text" />
        </section>
        <section>
          <p>Qty.</p>
          <input type="text" />
          <input type="text" />
        </section>
      </form>
    </div>
  );
};

export default NewInvoice;