// React / redux
import { useSelector, useDispatch } from "react-redux";

//State
import { Roostate } from "../../../redux";

//Components
import SideBarIcone from "./SideBarIcone";

//Functions
import { darkmode } from "../../../functions/classe/darkmode";

//Img
import iconPacman from "../../../assets/logo/sideBar/pacman.svg";
import iconMoon from "../../../assets/logo/sideBar/moon.svg";
import iconPp from "../../../assets/logo/sideBar/pp.svg";


const SideBar = () => {
  const isDarkmode = useSelector((state: Roostate) => state.isDarkmode);
  const dispatch = useDispatch();
  return (
    <div className={darkmode(isDarkmode, "sideBar")}>
      <SideBarIcone 
        img={iconPacman}
        classNameContainer="sideBar__icone--translate sideBar__iconePacman"
        alt="pacman de couleur blanche tourné à -90 degré sur fond mauve"
      />
      <section className="sideBar__containerBottom">
        <SideBarIcone
          classNameContainer="sideBar__icone--translate sideBar__iconeDarkMode"
          classNameImg="sideBar__containerBottom__img"
          img={iconMoon}
          alt="Lune grise"
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
    </div>
  );
};

export default SideBar;