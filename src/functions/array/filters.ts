type Value = string | number | boolean
type CompareTable = {
  id:string
}
export function filters<T>(array:T[], key:string, value:Value) {
  return array.filter((e:any | string) => e[key] === value);
}

export function filtersByFilters<T, U extends CompareTable>(array:T[], compareTable:U[]) {
  const arrayFilter = array.filter((e:any) => {
    for(const elem of compareTable) {
      if(e.id === elem.id) {return true}
    }
  })
  return arrayFilter;
}