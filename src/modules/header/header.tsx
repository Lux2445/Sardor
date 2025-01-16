import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../public/Logo_Sardor_white.png";
import Search from "../../../public/Search.svg";
import MagnifyingGlass from "../../../public/MagnifyingGlass.svg";
import Basket from "../../../public/Basket.svg";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Ссылка на меню
  const burgerRef = useRef<HTMLDivElement | null>(null); // Ссылка на бургер

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goTo = (path: string) => {
    navigate(path);
    setMenuOpen(false); // Закрываем меню после перехода
  };

  // Закрытие меню при клике вне меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        burgerRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img className="logo" src={Logo} onClick={() => goTo("/main")} />
        </div>
        <div className={`navigation ${menuOpen ? "open" : ""}`}>
          <h1 className="nav-item" onClick={() => goTo("/clothes")}>Одежда</h1>
          <h1 className="nav-item" onClick={() => goTo("/sertificate")}>Путевки</h1>
          <h1 className="nav-item" onClick={() => goTo("/acsesuares")}>Аксессуары</h1>
          <h1 className="nav-item" onClick={() => goTo("/office")}>Канцелярия</h1>
          <h1 className="nav-item" onClick={() => goTo("/dishes")}>Посуда</h1>
        </div>
        <div className="icons">
          <img className="icon" src={Search} />
          <img className="icon" src={MagnifyingGlass} onClick={() => goTo("/profile")} />
          <img className="icon" src={Basket} onClick={() => goTo("/basket")} />
          <div className="burger" ref={burgerRef} onClick={toggleMenu}>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div ref={menuRef} className={`burger-menu ${menuOpen ? "open" : ""}`}>
          <h1 className="nav-item" onClick={() => goTo("/clothes")}>Одежда</h1>
          <h1 className="nav-item" onClick={() => goTo("/sertificate")}>Путевки</h1>
          <h1 className="nav-item" onClick={() => goTo("/acsesuares")}>Аксессуары</h1>
          <h1 className="nav-item" onClick={() => goTo("/office")}>Канцелярия</h1>
          <h1 className="nav-item" onClick={() => goTo("/dishes")}>Посуда</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
