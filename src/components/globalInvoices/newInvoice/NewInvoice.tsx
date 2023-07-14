import React from 'react';

import { NewInvoiceProps } from '../../../type/newInvoice';

import { darkmode } from '../../../functions/classe/darkmode';

import ItemList from './ItemList';
import { useSelector } from 'react-redux';
import { Roostate } from '../../../redux';

const NewInvoice:React.FC<NewInvoiceProps> = ({ className }) => {
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);
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
            <input type="date" className={darkmode(isDarkmode, "")} name="invoiceDate" id="invoiceDate" placeholder={"La date du jour"} disabled />
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
        
        <ItemList id="coucou" />

        <button className="defaultButton addNewItem" onClick={(e) => {e.preventDefault()}}>+ Add New Item</button>

        <section>
          <button className="defaultButton discard" onClick={(e) => e.preventDefault()}>Discard</button>
          <div className="form__endButtons">
            <button className="defaultButton saveAsDraft" onClick={(e) => e.preventDefault()}>Save as Draft</button>
            <input className="defaultButton submit" type="submit" value="Save & Send" onClick={(e) => {e.preventDefault(); console.log("coucou")}}/>
          </div>
        </section>
      </form>
    </div>
  );
};

export default NewInvoice;

// const [formData, setFormData] = useState({
//   firstName: '',
//   lastName: '',
//   email: ''
// });

// const handleChange = (e) => {
//   setFormData({
//     ...formData,
//     [e.target.name]: e.target.value
//   });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // Utilise les valeurs récupérées dans formData
//   console.log(formData);
// };