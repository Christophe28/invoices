import { dynamicalClass } from "../../functions/classe/dynamicalClass";
import { formatNumber } from "../../functions/invoices/formatNumber";
import { InvoiceProps } from "../../type/invoice";
import Status from "../buttons/Status";

const Invoice:React.FC<InvoiceProps> = ({id, isDarkmode, invoiceDate, clientName, totalPrice, paid, logoFilter}) => {
  return (
    <div className={dynamicalClass(isDarkmode, "darkmode", "containerInvoices__invoice")}>
      <p className="fwbold"><span className="fs12 lessOpacity">#</span>{id}</p>
      <p className="lessOpacity">{invoiceDate}</p>
      <p className="lessOpacity">{clientName}</p>
      <p id="lessWidth--endText" className="invoice__price fwbold">${formatNumber(totalPrice)}</p> 
      <Status paid={paid} />
      <img className="invoice__arrow" src={logoFilter} alt="Flèche directionnelle" />
    </div>
  );
};

export default Invoice;