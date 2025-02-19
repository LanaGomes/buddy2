import logoMedio from "../images/logoMedio.png";
import { AlignJustify } from "lucide-react";

function NavBar() {
  return (
    <div className="tw:flex tw:justify-between tw:items-center ">
      <a>
        <img src={logoMedio}></img>
      </a>
      <a>
        <AlignJustify color="#adb0be" size={48} />
      </a>
    </div>
  );
}
export default NavBar;
