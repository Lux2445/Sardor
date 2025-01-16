import FirstPhoto from "../../../assets/img/png/image1.png";
import SecondPhoto from "../../../assets/img/png/image2.png";
import ThirdPhoto from "../../../assets/img/png/image3.png";
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
   </>
  );
};

export default FirstSection;
