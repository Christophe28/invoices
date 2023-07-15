export const dynamicalClass = (check:boolean, specificClass:string ,otherClasse:string):string => {
  const checker = check ? specificClass : ""
  return `${otherClasse} ${checker}`
}