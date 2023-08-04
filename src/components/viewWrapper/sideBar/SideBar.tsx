// 1.React / redux
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// 2.My Redux
import { Roostate, addItemForm, setPaid } from "../../../redux";
import { setBillFromForm, setBillToFrom, setItemsForm } from "../../../redux";

// 3.Components
import SideBarIcone from "./SideBarIcone";
import Form from "./form/Form";

// 4.Functions
import { dynamicalClass } from "../../../functions/classe/dynamicalClass";
import { controlAnimForm } from "../../../functions/form/controlAnimForm";
import { greenLigther } from "../../../functions/form/saveData";
import { uniqueId } from "../../../functions/form/uniqueId";
import { reduxSetter } from "../../../functions/form/reduxSetter";

// 5.Img
import iconPacman from "../../../assets/logo/sideBar/pacman.svg";
import iconMoon from "../../../assets/logo/sideBar/moon.svg";
import iconSun from "../../../assets/logo/sideBar/sun.svg";
import iconPp from "../../../assets/logo/sideBar/pp.svg";


const SideBar = () => {
  // Controllers
  const isDarkmode = useSelector((state: Roostate) => state.isDarkmode);
  const isOpenForm = useSelector((state:Roostate) => state.isOpenForm);
  const firstLoadPage = useSelector((state:Roostate) => state.firstLoadPage);
  // Form
  const billFromForm = useSelector((state:Roostate) => state.billFromForm.billFromForm);
  const billsToForm = useSelector((state:Roostate) => state.billToFrom.billToForm);
  const itemsForm = useSelector((state:Roostate) => state.itemsForm.itemsForm);

  const [sendData, setSendData] = useState(false);

  const dispatch = useDispatch();
  const totalCost = itemsForm.reduce((accumulator, curr) => accumulator + (curr.price * curr.quantity), 0);
  const totalItem = {id: billFromForm.id ,items:[...itemsForm], total: totalCost}

  const bodyItem = {
    id: `${billFromForm.id}-${uniqueId()}`,
    itemName: "",
    quantity: 0,
    price: 0,
    totalPrice: 0
  }

  
  useEffect(() => {
    if(!sendData) {return}
    if(sendData) {
      greenLigther(dispatch, billFromForm, billsToForm, totalItem); 
      setSendData(false);
      console.log("on fait l'action");
    }
  }, [sendData])

  return (
    <div className={dynamicalClass(isDarkmode, "darkmode", "sideBar")}>
      <SideBarIcone 
        img={iconPacman}
        classNameContainer="sideBar__icone--translate sideBar__iconePacman"
        alt="pacman de couleur blanche tourné à -90 degré sur fond mauve"
      />
      <section className="sideBar__containerBottom">
        <SideBarIcone
          classNameContainer="sideBar__icone--translate sideBar__iconeDarkMode"
          classNameImg="sideBar__containerBottom__img"
          img={isDarkmode ? iconSun : iconMoon}
          alt={isDarkmode ? "Sun" : "Moon"}
          onClick={() => dispatch({
            type: "isDarkmode/changeMode",
            payload: !isDarkmode
          })}
        />
        <SideBarIcone
          classNameContainer="sideBar__icone--translate"
          classNameImg="sideBar__containerBottom__img"
          img={iconPp}
          alt="photo de profil"
        />
      </section>
      <Form
          className={`${dynamicalClass(isDarkmode, "darkmode", "newInvoice")} ${dynamicalClass(isOpenForm, "moveTo", firstLoadPage ? "" : "leaveTo")}`}
          clickNewItem={() => reduxSetter(dispatch, addItemForm, bodyItem) }
          clickDiscard={() => controlAnimForm(dispatch) }
          clickSave={() => {reduxSetter(dispatch, setPaid, "Draft"); setSendData(true)}}
          clickSubmit={() => {reduxSetter(dispatch, setPaid, "Pending"); setSendData(true)}}
        />
    </div>
  );
};

export default SideBar;