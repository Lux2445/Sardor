import { useState, useRef, useEffect } from "react";
import Mans from "../../../assets//img/png/mans.png";
import Womans from "../../../assets/img/png/womans.png";
import Kids from "../../../assets/img/png/kids.png";
import Clothers from "../../../assets/img/png/clothes.png";
import Acsesuars from "../../../assets/img/png/acsesuars.png";
import Boy from "../../../assets/img/png/Boy.png";
import "./thirdSection.css";

const PAGE_WIDTH = 150;

const ThirdSection = () => {
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const calculateMaxOffset = () => {
    if (wrapperRef.current && carouselRef.current) {
      const wrapperWidth = wrapperRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      const calculatedMaxOffset = -(wrapperWidth - visibleWidth);
      setMaxOffset(calculatedMaxOffset);

      setOffset((currentOffset) =>
        Math.max(Math.min(currentOffset, 0), calculatedMaxOffset)
      );
    }
  };

  useEffect(() => {
    calculateMaxOffset();
    window.addEventListener("resize", calculateMaxOffset);
    return () => {
      window.removeEventListener("resize", calculateMaxOffset);
    };
  }, []);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => Math.min(currentOffset + PAGE_WIDTH, 0));
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) =>
      Math.max(currentOffset - PAGE_WIDTH, maxOffset));
  };

  return (
    <div className="third-section">
      <div className="third-section-part-img">
        <img src={Boy} alt="" className="third-section-part-image" />
      </div>
      <div className="third-section-part-carusel">
        <div className="part-title">
          <h1>Категории товаров</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec dui nunc mattis. Enim blandit volutpat
            maecenas volutpat blandit aliquam etiam.
          </p>
        </div>
        <div className="slider">
            <button className="arrow" onClick={handleLeftArrowClick}>
                &lt;
            </button>
            <div className="part-carusel" ref={carouselRef}>
            <div
                className="part-carusel-wrapper"
                ref={wrapperRef}
                style={{ transform: `translateX(${offset}px)` }}
            >
                <div className="part-carusel-item item1">
                <div className="item-card">
                    <div className="item-card-img">
                    <img src={Mans} alt="" className="img1" />
                    </div>
                    <div className="item-card-text">
                    <h1>Мужская одежда</h1>
                    </div>
                </div>
                <div className="item-card">
                    <div className="item-card-img">
                    <img src={Womans} alt="" className="img2" />
                    </div>
                    <div className="item-card-text">
                    <h1>Женская одежда</h1>
                    </div>
                </div>
                </div>
                <div className="part-carusel-item item2">
                <div className="item-card">
                    <div className="item-card-img">
                    <img src={Kids} alt="" className="img3" />
                    </div>
                    <div className="item-card-text">
                    <h1>Детям</h1>
                    </div>
                </div>
                <div className="item-card">
                    <div className="item-card-img">
                    <img src={Clothers} alt="" className="img4" />
                    </div>
                    <div className="item-card-text">
                    <h1>Обувь</h1>
                    </div>
                </div>
                </div>
                <div className="part-carusel-item item3">
                <div className="item-card">
                    <div className="item-card-img">
                    <img src={Acsesuars} alt="" className="img5" />
                    </div>
                    <div className="item-card-text">
                    <h1>Аксессуары</h1>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <button className="arrow" onClick={handleRightArrowClick}>
                &gt;
            </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
