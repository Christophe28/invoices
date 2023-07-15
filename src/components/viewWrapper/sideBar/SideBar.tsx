// React / redux
import { useSelector, useDispatch } from "react-redux";

//State
import { Roostate } from "../../../redux";

//Components
import SideBarIcone from "./SideBarIcone";
import Form from "./form/Form";

//Functions
import { dynamicalClass } from "../../../functions/classe/dynamicalClass";
import { controlAnimForm } from "../../../functions/form/controlAnimForm";
//Img
import iconPacman from "../../../assets/logo/sideBar/pacman.svg";
import iconMoon from "../../../assets/logo/sideBar/moon.svg";
import iconSun from "../../../assets/logo/sideBar/sun.svg";
import iconPp from "../../../assets/logo/sideBar/pp.svg";


const SideBar = () => {
  const isDarkmode = useSelector((state: Roostate) => state.isDarkmode);
  
  const isOpenForm = useSelector((state:Roostate) => state.isOpenForm);
  const firstLoadPage = useSelector((state:Roostate) => state.firstLoadPage);
  const dispatch = useDispatch();
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
            console.log("coucou");
          }}
          clickDiscard={(e) => {
            controlAnimForm(e, dispatch);
          }}
          clickSave={(e) => {
            controlAnimForm(e, dispatch);
          }}
          clickSubmit={(e) => {
            controlAnimForm(e, dispatch)
          }}
        />
    </div>
  );
};

export default SideBar;