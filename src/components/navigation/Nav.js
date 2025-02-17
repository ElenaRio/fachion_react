import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import exidIcon from './../../img/icons/delete.svg';
import menuIcon from './../../img/icons/burger.svg';
import { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <div className={styles.menuBtn} onClick={toggleMenu}>
          <img src={menuIcon} alt="menu" />
      </div>
      {menuOpen && (
        <div className={styles.menuOOclose} onClick={closeMenu}></div>
      )}
       <ul
        className={`${styles.headerList} ${
          menuOpen ? styles.menuListOOopen : ''
        }`}
      >
        <li className={styles.menuClose}>
          <button className={styles.menuCloseBtn} onClick={closeMenu}>
            <img src={exidIcon} alt="close" />
          </button>
        </li>
        <li className={styles.list}>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.list} ${styles.linkActive}` : styles.list
            }
          >
            HOME
          </NavLink>
        </li>
        <li className={styles.list}>
          <NavLink
            to="/catalogue"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.list} ${styles.linkActive}` : styles.list
            }
          >
            CATALOGUE
          </NavLink>
        </li>
        <li className={styles.list}>
          <NavLink
            to="/blog"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.list} ${styles.linkActive}` : styles.list
            }
          >
            BLOG
          </NavLink>
        </li>
        <li className={styles.list}>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.list} ${styles.linkActive}` : styles.list
            }
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink to="/basket" onClick={closeMenu} className={styles.headerNavBtn} >
            CART
          </NavLink>
        </li>
      </ul>
    </>
  );
}
export default Nav;
