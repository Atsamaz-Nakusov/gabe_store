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
      <div>
        <div className="garantBlok">
          <Image src="/gabestore.svg" width={48} height={49} alt="Logo" />
          <p className="gabestoreText">
            Все продаваемые ключи закупаются у официальных дистрибьюторов и
            издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
