import "../../../styles/layout.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="b3-navigation">
        <button className="b3-button-square"></button>
        <ul className="b3-nav-menu">
          <li className="b3-nav-menu-link hover-gradient-bottom link-hover-highlight">
            <NavLink to="">Home</NavLink>
          </li>
          <li className="b3-nav-menu-link hover-gradient-bottom link-hover-highlight">
            <NavLink to="portfolio">Portfolio</NavLink>
          </li>
          <li className="b3-nav-menu-link hover-gradient-bottom link-hover-highlight">
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
        <button className="b3-button-square">
          <i className="fa fa-bar b3-font-size-4l"></i>
        </button>
      </nav>
    </>
  );
}
