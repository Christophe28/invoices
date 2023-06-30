import SideBarIcone from "./SideBarIcone";

import iconPacman from "../../../assets/logo/sideBar/pacman.svg";
import iconMoon from "../../../assets/logo/sideBar/moon.svg";
import iconPp from "../../../assets/logo/sideBar/pp.svg";

const SideBar = () => {
  return (
    <div className="sideBar">
      <SideBarIcone 
        img={iconPacman}
        classNameContainer="sideBar__icone--translate sideBar__iconePacman"
        alt="pacman de couleur blanche tourné à -90 degré sur fond mauve"
      />
      <section className="sideBar__containerBottom">
        <SideBarIcone
          classNameContainer="sideBar__icone--translate sideBar__iconeMoon"
          classNameImg="sideBar__containerBottom__img"
          img={iconMoon}
          alt="Lune grise"
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