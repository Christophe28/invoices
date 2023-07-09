export type SideBarIconeProps = {
  classNameContainer?:string
  classNameImg?:string
  img:string
  alt:string
  onClick?:() => {type:string, payload:boolean}
}