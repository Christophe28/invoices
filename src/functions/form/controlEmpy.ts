export function checkObject<T>(obj:T):boolean {
  for (const key in obj) {
    if (obj[key] === '') {
      return false;
    }
  }
  return true;
}

export function checkItems<ItemControler>(item:ItemControler[]):boolean {
  const controler = [];
  if(item.length === 0) {controler.push(false)}
  for(let i = 0; i < item.length; i++) {
    for(const key in item[i]) {
      if(item[i][key] === "" || item[i][key] === 0) {
        controler.push(false);
      }
      else {
        controler.push(true);
      }

    }
  }
  const finalControl = controler.every(e => e === true);
  return finalControl;
}
