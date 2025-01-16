import { useNavigate } from "react-router-dom";
import Logo from "../../../public/Logo_Sardor_white.png";
import Search from "../../../public/Search.svg";
import MagnifyingGlass from "../../../public/MagnifyingGlass.svg";
import Basket from "../../../public/Basket.svg";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate(`/main`);
  };

  const goToClothes = () => {
    navigate(`/clothes`);
  };

  const goToSertificate = () => {
    navigate(`/sertificate`);
  };

  const goToAcsesuares = () => {
    navigate(`/acsesuares`);
  };

  const goToProlife = () => {
    navigate(`/profile`);
  };

  const goToDishes = () => {
    navigate(`/dishes`);
  };

  const goToOffice = () => {
    navigate(`/office`);
  };



  const goToBasket = () => {
    navigate(`/basket`);
  };
  return (
    <>
      <div className="header">
        <div className="header-container">
          <div className="logo-container">
            <img className="logo" src={Logo} onClick={goToMain} />
          </div>
          <div className="navigation">
            <h1 className="nav-item" onClick={goToClothes}>
              {" "}
              Одежда{" "}
            </h1>
            <h1 className="nav-item" onClick={goToSertificate}>
              {" "}
              Путевки
            </h1>
            <h1 className="nav-item" onClick={goToAcsesuares}>
              {" "}
              Аксессуары
            </h1>
            <h1 className="nav-item" onClick={goToOffice}>
              {" "}
              Канцелярия{" "}
            </h1>
            <h1 className="nav-item" onClick={goToDishes}>
              Посуда
            </h1>
          </div>
          <div className="icons">
            <img className="icon" src={Search} />
            <img className="icon" src={MagnifyingGlass} onClick={goToProlife} />
            <img className="icon" src={Basket} onClick={goToBasket} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
