
export const controlAnimForm = (event:React.MouseEvent, dispatch:any) => {
  event.preventDefault();
  dispatch({
    type: "isOpenForm/moveForm",
    payload: false
  });
  dispatch({
    type: "firstLoadPage/setFirstLoadPage",
    payload: false
  })
  setTimeout(() => {
    dispatch({
      type:"firstLoadPage/setFirstLoadPage",
      payload: true
    })
  }, 1000)
}