export const searchBill = <T extends Array<any>>(array: T, key:string) => { 
  const findBillsFrom = array.find(elem => elem.id === key);
  return findBillsFrom;
};