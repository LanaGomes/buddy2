import logoMedio from "../images/logoMedio.png";
import menuIcon from "../images/menuIcon.png";

function NavBar() {
  return (
    <div className="tw:flex tw:justify-between tw:items-center ">
      <a>
        <img src={logoMedio}></img>
      </a>
      <a>
        <img src={menuIcon}></img>
      </a>
    </div>
  );
}
export default NavBar;
