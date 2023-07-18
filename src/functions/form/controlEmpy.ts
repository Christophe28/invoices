export function checkObject<T>(obj:T):boolean {
  for (const key in obj) {
    if (obj[key] === '') {
      return false;
    }
  }
  return true;
}

export function checkArray<T>(arr:T[]):boolean {
  const value = arr.every(e => e !== "");
  return value;
}
