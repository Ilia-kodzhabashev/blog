import React from "react";
import Link from '../link'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation';
import logo from "../../images/logo.png";
const Header = () => {
  const links = getNavigation();
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} />
      {links.map((navElement) => {
        return (
          <Link key={navElement.title} href={navElement.link} title={navElement.title} type="header" />
        );
      })}
    </header>
  );
};
export default Header;