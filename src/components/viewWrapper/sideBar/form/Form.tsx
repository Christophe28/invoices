// 1.React / Redux
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// 2.My Redux
// 2.A type
import { NewInvoiceProps } from '../../../../type/typeNewInvoice';
// 2.B set BillFromForm
import { Roostate, setCountry, setItemNameForm, setPostCode, setCity } from '../../../../redux';
// 2.C setClientForm
import { 
  setClientName, 
  setClientAddress, 
  setClientMail, 
  setClientPostCode, 
  setClientCity, 
  setClientCountry,  
  setInvoiceDate 
} from '../../../../redux';
// 2.D set Items Form
import { setPriceForm, setQuantityForm, setStreetAddress, setTotalPriceForm, delItemForm } from '../../../../redux';

// Functions
import { dynamicalClass } from '../../../../functions/classe/dynamicalClass';
import { reduxSetter } from '../../../../functions/form/reduxSetter';

// Components
import ItemList from './ItemList';
import Select from './Select';

const Form:React.FC<NewInvoiceProps> = ({ className, clickNewItem, clickDiscard, clickSave, clickSubmit }) => {
  const isDarkmode = useSelector((state:Roostate) => state.isDarkmode);
  const items = useSelector((state:Roostate) => state.itemsForm.itemsForm);
  const billFromForm = useSelector((state:Roostate) => state.billFromForm.billFromForm);
  const billToFrom = useSelector((state:Roostate) => state.billToFrom.billToForm);
  const itemsForm = useSelector((state:Roostate) => state.itemsForm.itemsForm);

  const {streetAddress, city, postCode, country} = billFromForm;
  const {clientName, clientMail, streetAddress:clientAddress, city:clientCity, country:clientCountry, postCode:clientPostCode} = billToFrom;
  const dispatch = useDispatch();

  return (
    <div className={className}>
      <h1>New invoice</h1>
      <form action="URL_DE_L_ACTION" method="POST" onSubmit={(e) => e.preventDefault()}>
        <h3>Bill From</h3>
        <label htmlFor="streetAddress">Street Address</label>
        <input type="text" name="streetAddress" id="streetAddress" value={streetAddress} onChange={(e) => reduxSetter(dispatch, setStreetAddress, e.target.value)}/>   
        <section>
          <label htmlFor="city" className="calibrate">City</label>
          <label htmlFor="postCode" className="calibrate">Post Code</label>
          <label htmlFor="country" className="calibrate">Country</label>
        </section>
        <section>
          <input type="text" name="city" id="city" value={city} onChange={(e) => { dispatch(setCity(e.target.value)) }}/>
          <input type="text" name="postCode" id="postCode" value={postCode} onChange={(e) => reduxSetter(dispatch, setPostCode, e.target.value)}/>
          <input type="text" name="country" id="country" value={country} onChange={(e) => reduxSetter(dispatch, setCountry, e.target.value)}/>
        </section>
        
        <h3>Bill To</h3>
        <label htmlFor="clientName">Client Name</label>
        <input type="text" name="clientName" id="clientName" value={clientName} onChange={(e) => {reduxSetter(dispatch, setClientName ,e.target.value)}}/>

        <label htmlFor="clientMail">Client's Email</label>
        <input type="text" name="clientMail" id="clientMail" placeholder="e.g email@gmail.com" value={clientMail} onChange={(e) => {reduxSetter(dispatch, setClientMail, e.target.value)}}/>
        
        <label htmlFor="clientStreetAddress">Street Address</label>
        <input type="text" name="clientStreetAddress" id="clientStreetAddress" value={clientAddress} onChange={(e) => {reduxSetter(dispatch, setClientAddress, e.target.value)}}/>
        
        <section>
          <label htmlFor="clientCity" className="calibrate">City</label>
          <label htmlFor="clientPostCode" className="calibrate">Post Code</label>
          <label htmlFor="clientCountry" className="calibrate">Country</label>
        </section>
        <section>
          <input type="text" name="clientCity" id="clientCity" value={clientCity} onChange={(e) => {reduxSetter(dispatch, setClientCity, e.target.value)}}/>
          <input type="text" name="clientPostCode" id="clientPostCode" value={clientPostCode} onChange={(e) => {reduxSetter(dispatch, setClientPostCode, e.target.value)}}/>
          <input type="text" name="clientCountry" id="clientCountry" value={clientCountry} onChange={(e) => {reduxSetter(dispatch, setClientCountry, e.target.value)}}/>
        </section>
        
        <section>
          <div>
            <label htmlFor="invoiceDate">Invoice Date</label>
            <input type="date" className={dynamicalClass(isDarkmode, "darkmode", "")} name="invoiceDate" id="invoiceDate" placeholder={"La date du jour"} onChange={(e) => {reduxSetter(dispatch, setInvoiceDate, e.target.value)}}/>
          </div>
          <div>
            <label>Payment Terms</label>
            <Select />
          </div>
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
        {
          items.length > 0 ? (
            items.map((item, index) => {
              return (
                <React.Fragment key={`${billFromForm.id}-${index}`}>
                  <ItemList 
                    itemName={item.itemName}
                    price={item.price}
                    quantity={item.quantity}
                    onClick={() => reduxSetter(dispatch, delItemForm, itemsForm[index].id) }
                    onChangeName={(e) => reduxSetter(dispatch, setItemNameForm , {index: index, data: e.target.value})}
                    onChangeQuantity={(e) => reduxSetter(dispatch, setQuantityForm , {index: index, data: e.target.value})}
                    onChangePrice={(e) => {
                      reduxSetter(dispatch, setPriceForm , {index: index, data: e.target.value});
                      reduxSetter(dispatch, setTotalPriceForm, {index: index, data: itemsForm[index].quantity * e.target.value})
                    }}
                  />
                </React.Fragment>
              )
            })
          ) : ""
        }
        <button className="defaultButton addNewItem" onClick={clickNewItem}>+ Add New Item</button>
        <section>
          <button className="defaultButton discard" onClick={clickDiscard}>Discard</button>
          <div className="form__endButtons">
            <button className="defaultButton saveAsDraft" onClick={clickSave}>Save as Draft</button>
            <button type='submit' className='defaultButton submit' onClick={clickSubmit}>Save & Send</button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Form;