import { useState, useContext, useRef } from "react";
import { PageContext } from "../../../contexts/page-context";
import { useHideOnClickOutside } from "../../../custom-hooks/use-hide-on-click-outside";
import { Link } from "react-router-dom";
import logo from "../../../assets/shared/logo.svg";
import openMenuIcon from "../../../assets/shared/icon-hamburger.svg";
import closeMenuIcon from "../../../assets/shared/icon-close.svg";
import List from "../list/list";
import Button from "../button/button";
import "./header.scss";

const Header = () => {
  const menuVisibilityState = useState(false);
  const [isMenuOpen, setMenuVisibility] = menuVisibilityState;
  const menu = useRef(null);
  useHideOnClickOutside(menu, menuVisibilityState, true);

  const page = useContext(PageContext);

  const handleClick = () => {
    setMenuVisibility(!isMenuOpen);
  };

  const logoStyle = { backgroundImage: `url(${logo})` };
  const openMenuStyle = { backgroundImage: `url(${openMenuIcon})` };
  const closeMenuStyle = { backgroundImage: `url(${closeMenuIcon})` };

  const links = [
    { id: "00", title: "Home", path: "/" },
    { id: "01", title: "Destination", path: "/destination" },
    { id: "02", title: "Crew", path: "/crew" },
    { id: "03", title: "Technology", path: "/technology" },
  ];

  const listItems = links.map((link) => {
    return (
      <Link
        className={`link ${link.title === page.name ? "active" : ""}`}
        to={link.path}
      >
        <span className='link-number'>{link.id}</span> {link.title}
      </Link>
    );
  });

  return (
    <header className='header'>
      <Link to='/' className='logo' style={logoStyle}>
        Homepage
      </Link>

      <nav className='navigation' ref={menu}>
        <Button
          extraClass='open-menu-btn'
          style={openMenuStyle}
          handleClick={handleClick}
          title='open menu'
        />

        <section className={`${isMenuOpen ? "open" : ""} menu`}>
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
