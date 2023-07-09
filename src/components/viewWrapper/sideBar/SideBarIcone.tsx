import { SideBarIconeProps } from "../../../type/typeSideBar";

const SideBarIcone: React.FC<SideBarIconeProps> = ({ classNameContainer, classNameImg, img, alt, onClick}) => {
  return (
    <div className={classNameContainer} >
      <img src={img} className={classNameImg} alt={alt} onClick={onClick}/>
    </div>
  );
};

export default SideBarIcone;