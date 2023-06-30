import { useDispatch, useSelector } from 'react-redux';
import { Roostate, consoleBillsTo } from '../../redux';
import { searchBill } from '../../functions/invoices/searchBill';

const Invoices = () => {
  const billsFrom = useSelector((state:Roostate) => state.billsFrom);
  const billsTo = useSelector((state:Roostate) => state.billsTo);
  const itemsList = useSelector((state:Roostate) => state.itemsList);

  console.log(billsFrom[0]["id"])
  
  // const dispatch = useDispatch();
  
  // searchBill<BillFrom[]>(billsFrom, "0000AA");
  // searchBill<BillTo[]>(billsTo, "0000AA");
  // searchBill<ItemList[]>(itemsList, "0000AA");

  // Sur la page invoices j'obsèrve une sorte de navbar sur le coté de gauche de haut en bas avec une icone en haut et une pp en bas.
  // Il y'a un titre (Invoices) ainsi qu'un texte qui annonce combien il reste de facture
  // Il y'a un texte (filter by status) ainsi qu'une flèche. Ce qui laisse suggérer une possibilité de recherche
  // Il y'a un bouton avec un "+" dedans ainsi que du texte qui annonce "New invoice"
  // Il y'a les factures récapitulées avec leurs id, la date, le nom, le total et si c'est payé ou pas.

  // IL faudra plusieurs composants ==>
  // 1. Composant de la navbar qui sera viewWrapper pour le composant edit invoice & new invoice
  // 2. Composant edit invoice & new invoice
  // 3. Composant boutton filtered by status
  // 4. Composant boutton new Invoice
  // 5. Composant récap facture

  // Dans un premier temps on attaque le composant récap facture
  return (
    <div className="containerInvoices">
        <div className="containerInvoices__page">
          <div className="containerInvoices__header">
            <div>
              <h1>Invoices</h1>
              <p>There are {billsFrom.length} total invoices</p>
            </div>
            <div>
              <p>Button filtered by status</p>
              <p>Button new invoices</p>
            </div>
          </div>
          <section>
            {
              billsFrom.map((elem, index) => (
                <div key={elem.id}>
                  {elem.id} {billsTo[index].invoiceDate} {billsTo[index].clientName} ${itemsList[index].totalPrice}
                </div>
              ))
            }
          </section>
        </div>
    </div>
  );
};

export default Invoices;