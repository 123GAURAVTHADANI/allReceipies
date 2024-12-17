import TextFieldComponent from "../TextField/TextFieldComponent";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Header() {
  return (
    <div className="container flex">
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
      <nav></nav>
    </div>
  );
}

export default Header;
