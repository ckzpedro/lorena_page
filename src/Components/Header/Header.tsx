import { NavLink } from "react-router";

import styles from "./Header.module.css"

const Header = () => {
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SOBRE MIM", path: "/sobre" },
    { name: "PLANOS", path: "/planos" },
  ];

  return (
    <header
      className={styles.container}
    >
      {/* Logo */}
      <div className={styles.logo}>
        <img
          src="/headerLogoNew.png"
          alt="Logo"
          className={styles.logo_image}
        />
      </div>

      {/* Navegação */}
      <nav className={styles.nav_container }>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `text-xs md:text-xl hover:underline ${
                isActive ? "font-bold" : "font-normal"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;