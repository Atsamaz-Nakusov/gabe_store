import "./footer.css";
import Image from "next/image";
const Footer = () => {
  return (
    <footer>
      <div className="companyInfo">
        <div className="logoFooter">
          <Image src="/Logo.svg" width={118} height={47} alt="Logo" />
        </div>
        <div className="footerText">
          <ul className="footerUlText">
            <li className="footerLiText">
              <a href="#" className="syllkaText">
                лидеры
              </a>
            </li>
            <li className="footerLiText">
              <a href="#" className="syllkaText">
                подборки
              </a>
            </li>
            <li className="footerLiText">
              <a href="#" className="syllkaText">
                контакты
              </a>
            </li>
            <li className="footerLiText">
              <a href="#" className="syllkaText">
                о компании
              </a>
            </li>
            <li className="footerLiText">
              <a href="#" className="syllkaText">
                новинки
              </a>
            </li>
            <li className="footerLiText">
              <a href="#" className="syllkaText">
                скидки
              </a>
            </li>
            <li className="footerLiText">
              <a href="#" className="syllkaText">
                блог
              </a>
            </li>
            <li className="footerLiText">
              <a href="#" className="syllkaText">
                поддержка
              </a>
            </li>
            <li className="footerLiText">
              <a href="#" className="syllkaText">
                предзаказы
              </a>
            </li>
            <li className="footerLiText">
              <a href="#" className="syllkaText">
                подарочные карты
              </a>
            </li>
          </ul>
        </div>
        <div className="footerSocialNetwork">
          <ul className="socialNetworkUl">
            <li className="socialNetworkLi">
              <a href="#" className="syllkaSocialNetwork">
                <Image src="/vk.svg" width={32} height={32} alt="vk" />
              </a>
            </li>
            <li className="socialNetworkLi">
              <a href="#" className="syllkaSocialNetwork">
                <Image src="/fb.svg" width={32} height={32} alt="fb" />
              </a>
            </li>
            <li className="socialNetworkLi">
              <a href="#" className="syllkaSocialNetwork">
                <Image src="/tg.svg" width={32} height={32} alt="tg" />
              </a>
            </li>
            <li className="socialNetworkLi">
              <a href="#" className="syllkaSocialNetwork">
                <Image
                  src="/twitter.svg"
                  width={32}
                  height={32}
                  alt="twitter"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerSetting">
        <div className="garantBlok">
          <div className="garantBlokWapper">
            <Image src="/gabestore.svg" width={48} height={49} alt="Logo" />
            <p className="gabestoreText">
              Все продаваемые ключи закупаются у официальных дистрибьюторов и
              издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza.
            </p>
          </div>
        </div>
        <div className="setting">
          <div className="language">
            <button className="languageText">RU</button>
            <button className="languageText">ENG</button>
          </div>
          <div className="currency">
            <p className="currencyText">ВАЛЮТА</p>
          </div>
          <div />
        </div>
        <div className="copyright">
          <p className="copyrightText">&copy; 2023 Gabestore</p>
          <a className="privacyPolicy" href="#">
            Политика конфиденциальности
          </a>
        </div>
        <div className="paymentSystem">
          <a className="paymentSystemIcon">
            <Image src="/visa.svg" width={49} height={24} alt="visa" />
          </a>
          <a className="paymentSystemIcon">
            <Image src="/Group.svg" width={49} height={14} alt="Group" />
          </a>
          <a className="paymentSystemIcon">
            <Image src="/Group1.svg" width={31} height={20} alt="Group1" />
          </a>
          <a className="paymentSystemIcon">
            <Image src="/yandex.svg" width={18} height={24} alt="yandex" />
          </a>
          <a className="paymentSystemIcon">
            <Image src="/qiwi.svg" width={65} height={24} alt="qiwi" />
          </a>
          <a className="paymentSystemIcon">
            <Image src="/webmoney.svg" width={24} height={24} alt="webmoney" />
          </a>
        </div>
        <div className="development">
          <p className="developmentText">
            Разработка сайта: ADN Digital Studio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
