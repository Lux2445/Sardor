import './footer.css'

const Footer = () => {
    return (
      <>
        <div className="">
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-column">
              <h4>Помощь</h4>
              <ul>
                <li>Мой аккаунт</li>
                <li>Где мой магазин</li>
                <li>Доставка и оплата</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Каталог</h4>
              <ul>
                <li>Одежда</li>
                <li>Путевки</li>
                <li>Аксессуары</li>
                <li>Канцелярские товары</li>
                <li>Посуда</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Компания</h4>
              <ul>
                <li>О нас</li>
                <li>Философия бренда</li>
                <li>Блог</li>
                <li>Контакты</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © Copyright 2022 4:20 Shop. All rights reserved. Условия
              пользования сайтом
            </p>
          </div>
        </footer>
        </div>
      </>
    );
  };
  
  export default Footer;
  