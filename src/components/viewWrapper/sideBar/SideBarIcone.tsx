import { SideBarIconeProps } from "../../../type/typeSideBar";

const SideBarIcone: React.FC<SideBarIconeProps> = ({ classNameContainer, classNameImg, img, alt }) => {
  return (
    <div className={classNameContainer} >
      <img src={img} className={classNameImg} alt={alt} />
    </div>
  );
};

export default SideBarIcone;