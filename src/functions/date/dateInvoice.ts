import DateObject from "react-date-object";

export const dateInvoice = (date:string, format:string):string => {
  return new DateObject({date:date, format:format}).format();
}