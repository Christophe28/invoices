// React / redux
import { useSelector, useDispatch } from "react-redux";

// My Redux
import { Roostate, pushToBillsFrom, pushToBillsTo, pushToItemList } from "../../../redux";

//Components
import SideBarIcone from "./SideBarIcone";
import Form from "./form/Form";

//Functions
import { dynamicalClass } from "../../../functions/classe/dynamicalClass";
import { controlAnimForm } from "../../../functions/form/controlAnimForm";
import { reduxSetter } from "../../../functions/form/reduxSetter";

//Img
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
  // Data
  const billsFrom = useSelector((state:Roostate) => state.billsFrom);
  const billsTo = useSelector((state:Roostate) => state.billsTo);
  const items = useSelector((state:Roostate) => state.itemsList);

  const dispatch = useDispatch();
  const totalCost = itemsForm.reduce((accumulator, curr) => accumulator + (curr.price * curr.quantity), 0);
  const totalItem = {id: billFromForm.id ,items:[...itemsForm], total: totalCost}

  const bodyItem = {
    id: `${billFromForm.id}-${itemsForm.length}`,
    itemName: "",
    quantity: 0,
    price: 0,
    totalPrice: 0
  }
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
          clickNewItem={(e) => {
            e.preventDefault();
            dispatch({
              type: "itemsForm/addItemForm",
              payload: bodyItem
            });

          }}
          clickDiscard={(e) => {
            controlAnimForm(e, dispatch);
          }}
          clickSave={(e) => {
            controlAnimForm(e, dispatch);
            reduxSetter(dispatch, pushToBillsFrom, billFromForm);
            reduxSetter(dispatch, pushToBillsTo, billsToForm);
            reduxSetter(dispatch, pushToItemList, totalItem);
          }}
          clickSubmit={(e) => {
            controlAnimForm(e, dispatch)
          }}
          totalItems={totalItem}
        />
    </div>
  );
};

export default SideBar;