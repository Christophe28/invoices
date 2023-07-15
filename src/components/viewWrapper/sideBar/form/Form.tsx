import React from 'react';
import { useSelector } from 'react-redux';
import { Roostate } from '../../../../redux';

// Type
import { NewInvoiceProps } from '../../../../type/typeNewInvoice';

// Functions
import { dynamicalClass } from '../../../../functions/classe/dynamicalClass';

// Components
import ItemList from './ItemList';

const Form:React.FC<NewInvoiceProps> = ({ className, clickNewItem, clickDiscard, clickSave, clickSubmit }) => {
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);
  const items = useSelector((state:Roostate) => state.itemsForm.itemsForm);
  const billFromForm = useSelector((state:Roostate) => state.billFromForm.BillFromForm);
  // console.log("billFromForm depuis le form ==>", billFromForm);
  return (
    <div className={className}>
      <h1>New invoice</h1>
      <form action="URL_DE_L_ACTION" method="POST">
        <h3>Bill From</h3>
        <label htmlFor="streetAddress">Street Address</label>
        <input type="text" name="streetAddress" id="streetAddress" />   
        <section>
          <label htmlFor="city" className="calibrate">City</label>
          <label htmlFor="postCode" className="calibrate">Post Code</label>
          <label htmlFor="country" className="calibrate">Country</label>
        </section>
        <section>
          <input type="text" name="city" id="city" />
          <input type="text" name="postCode" id="postCode" />
          <input type="text" name="country" id="country" />
        </section>
        
        <h3>Bill To</h3>
        <label htmlFor="clientName">Client Name</label>
        <input type="text" name="clientName" id="clientName" />

        <label htmlFor="clientMail">Client's Email</label>
        <input type="text" name="clientMail" id="clientMail" placeholder="e.g email@gmail.com"/>
        
        <label htmlFor="clientStreetAddress">Street Address</label>
        <input type="text" name="clientStreetAddress" id="clientStreetAddress" />
        
        <section>
          <label htmlFor="clientCity" className="calibrate">City</label>
          <label htmlFor="clientPostCode" className="calibrate">Post Code</label>
          <label htmlFor="clientCountry" className="calibrate">Country</label>
        </section>
        <section>
          <input type="text" name="clientCity" id="clientCity" />
          <input type="text" name="clientPostCode" id="clientPostCode" />
          <input type="text" name="clientCountry" id="clientCountry" />
        </section>
        
        <section>
          <div>
            <label htmlFor="invoiceDate">Invoice Date</label>
            <input type="date" className={dynamicalClass(isDarkmode, "darkmode", "")} name="invoiceDate" id="invoiceDate" placeholder={"La date du jour"} disabled />
          </div>
          <div>
            <label htmlFor="paymentTerms">Payment Terms</label>
            <input type="text" name="paymentTerms" id="paymentTerms" />
          </div>
          {/* Soon option with div for free css */}
          {/* <select name="" id="">disabled
            <option value="">lol</option>
          </select> */}
        </section>
        
        <label htmlFor="projectDescription">Project Description</label>
        <input type="text" name="projectDescription" id="projectDescription" placeholder="e.g-Graphic Design Service"/>
        
        <h3>Item List</h3>
        <section>
          <label className="itemList__name--calibrate">Item Name</label>
          <label className="itemList__quantity--calibrate">Qty.</label>
          <label className="itemList__price--calibrate">Price</label>
          <label className="itemList__total--calibrate">Total</label>
          <div style={{width:"13px"}}></div>
        </section>
        
        {/* Update with dinymic Id and info */}
        {
          items.length > 0 ? (
            items.map((item, index) => (
              <React.Fragment key={`${billFromForm.id}-${index}`}>
                <ItemList 
                  id={`${billFromForm.id}-${items.length}`} 
                  onClick={(e) => console.log(e.target.parentNode)}
                />
              </React.Fragment>
            ))
          ) : ""
        }
    
        <button className="defaultButton addNewItem" onClick={clickNewItem}>+ Add New Item</button>

        <section>
          <button className="defaultButton discard" onClick={clickDiscard}>Discard</button>
          <div className="form__endButtons">
            <button className="defaultButton saveAsDraft" onClick={clickSave}>Save as Draft</button>
            <input className="defaultButton submit" type="submit" value="Save & Send" onClick={clickSubmit}/>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Form;