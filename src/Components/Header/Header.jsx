import TextFieldComponent from "../TextField/TextFieldComponent";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Header() {
  return (
    <div className="container flex flex-direction">
      <header className="flex header w-100">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkyf_r0fjCy9YMfNNux0dgsfMJb0JGS4FduA&s"
          alt="logo"
        />
        <form>
          <TextFieldComponent />
        </form>

        <div>
          <span className="flex">
            <AccountCircleIcon />
            <a href="#login">LogIn</a>
          </span>
        </div>
      </header>
      <nav>
        <ul className="flex nav w-100">
          <li>
            <b>Dinner</b>
          </li>
          <li>
            <b>Meals</b>
          </li>
          <li>
            <b>Ingredients</b>
          </li>
          <li>
            <b>Cuisines</b>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
