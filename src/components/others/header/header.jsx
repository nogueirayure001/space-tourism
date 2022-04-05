import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/shared/logo.svg";
import openMenuIcon from "../../../assets/shared/icon-hamburger.svg";
import closeMenuIcon from "../../../assets/shared/icon-close.svg";
import List from "../list/list";
import Button from "../button/button";
import "./header.scss";

const Header = ({ activePage }) => {
  const [isMenuOpen, setMenuVisibility] = useState(false);

  const logoStyle = { backgroundImage: `url(${logo})` };
  const openMenuStyle = { backgroundImage: `url(${openMenuIcon})` };
  const closeMenuStyle = { backgroundImage: `url(${closeMenuIcon})` };
  const menuClassName = `menu ${isMenuOpen ? "open" : ""}`;

  const links = [
    { id: "00", title: "Home", path: "/" },
    { id: "01", title: "Destination", path: "/destination" },
    { id: "02", title: "Crew", path: "/crew" },
    { id: "03", title: "Technology", path: "/technology" },
  ];

  const listItems = links.map((link) => {
    return (
      <Link
        className={`link ${link.title === activePage ? "active" : ""}`}
        to={link.path}
      >
        <span className='link-number'>{link.id}</span> {link.title}
      </Link>
    );
  });

  const handleClick = () => {
    setMenuVisibility(!isMenuOpen);
  };

  return (
    <header className='header'>
      <Link to='/' className='logo' style={logoStyle}>
        Homepage
      </Link>

      <nav className='navigation'>
        <Button
          extraClass='open-menu-btn'
          style={openMenuStyle}
          handleClick={handleClick}
          title='open menu'
        />

        <section className={menuClassName}>
          <List listItems={listItems} extraClass='menu-list' />

          <Button
            extraClass='close-menu-btn'
            style={closeMenuStyle}
            handleClick={handleClick}
            title='close menu'
          />
        </section>
      </nav>
    </header>
  );
};

export default Header;
