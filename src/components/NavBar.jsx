import { Link } from "react-router-dom";
import logoMedio from "../images/logoMedio.png";
import { AlignJustify } from "lucide-react";

function NavBar() {
  return (
    <div className="tw:flex tw:justify-between tw:items-center ">
      <Link to="/">
        <img src={logoMedio}></img>
      </Link>

      <a>
        <AlignJustify color="#adb0be" size={48} />
      </a>
    </div>
  );
}
export default NavBar;
