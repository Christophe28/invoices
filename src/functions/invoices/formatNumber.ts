export function formatNumber(number:number) {
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