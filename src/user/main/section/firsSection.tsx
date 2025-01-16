import FirstPhoto from "../../../assets/img/png/image1.png";
import SecondPhoto from "../../../assets/img/png/image2.png";
import ThirdPhoto from "../../../assets/img/png/image3.png";
import Tshurt from '../../../assets/img/png/футболка.png'
import Cup from '../../../assets/img/png/cup.png'
import Brelok from '../../../assets/img/png/brelok.png'
import Sertificate from '../../../assets/img/png/ыукешашсфеу.png'
import Pen from '../../../assets/img/png/зут.png'
import './firstSecrion.css'
import { useNavigate } from 'react-router-dom';

const FirstSection = () => {
    const navigate = useNavigate()
    const goToCatalog = () => navigate(`/catalog`)
  return (
   <>
      <div className="container">
        <div className="photo-grid">
          <div className="photo-block lime">
            <img src={FirstPhoto} alt="Мужчина" className="photo" />
          </div>
          <div className="photo-block yellow">
            <img src={SecondPhoto} alt="Женщина" className="photo" />
          </div>
          <div className="photo-block orange">
            <img src={ThirdPhoto} alt="Ребенок" className="photo" />
          </div>
        </div>
        <div className="overlay">
          <div className="overlay-content">
            <h1 className="title">Spring mood</h1>
            <p className="subtitle">-20% на новую коллекцию.</p>
            <button className="catalog-button" onClick={goToCatalog}>
              В КАТАЛОГ →
            </button>
          </div>
        </div>
      </div>
        <div className="contain">
          <div className="card">
            <img src={Tshurt} alt="Футболки" className="card-image" />
            <p className="card-name">Одежда</p>
          </div>
          <div className="card">
            <img src={Sertificate} alt="Худи" className="card-image" />
            <p className="card-name">Путевки</p>
          </div>
          <div className="card">
            <img src={Brelok} alt="Свитшоты" className="card-image" />
            <p className="card-name">Аксессуары</p>
          </div>
          <div className="card">
            <img src={Pen} alt="Лонгсливы" className="card-image" />
            <p className="card-name">Канц. товары </p>
          </div>
          <div className="card">
            <img src={Cup} alt="Рубашки" className="card-image" />
            <p className="card-name">Посуда</p>
          </div>
        </div>
   </>
  );
};

export default FirstSection;
