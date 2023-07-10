import { darkmode } from "../../functions/classe/darkmode";
import { InvoiceProps } from "../../type/invoice";

// move the function
function formatNumber(number:number) {
  const integerPart = Math.floor(number);
  const decimalPart = (number % 1) !== 0 ? (number % 1).toFixed(2) : '';
  const numberString = integerPart.toString();
  const formattedNumber = [];
  
  if (integerPart.toString().length <= 4) {
    return number;
  }
  for (let i = 0; i < numberString.length; i++) {
    if (i > 0 && (numberString.length - i) % 3 === 0) {
      formattedNumber.push(' ');
    }
    formattedNumber.push(numberString[i]);
  }

  return formattedNumber.join('') + decimalPart;
}

const Invoice:React.FC<InvoiceProps> = ({id, isDarkmode, invoiceDate, clientName, totalPrice, paid, logoFilter}) => {
  return (
    <div key={id} className={darkmode(isDarkmode, "containerInvoices__invoice")}>
      <p className="fwbold"><span className="fs12 lessOpacity">#</span>{id}</p>
      <p className="lessOpacity">{invoiceDate}</p>
      <p className="lessOpacity">{clientName}</p>
      <p id="lessWidth--endText" className="invoice__price fwbold">${formatNumber(totalPrice)}</p> 
      <p id="invoice__lastElem--lessWidth" className={darkmode(isDarkmode, `invoice__paid--center fwbold fs12 text${paid}`)}>
        <span className={darkmode(isDarkmode, `invoice__point circle${paid}`)}>
        </span>
        {paid}
      </p> 
      <img className="invoice__arrow" src={logoFilter} alt="Flèche directionnelle" />
    </div>
  );
};

export default Invoice;