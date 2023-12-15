import "./promo.css";
import Image from "next/image";

export default function Promo() {
  return (
    <div className="blokPromo">
      <div className="promoLogoContainer">
        <div className="promoLogogradient">
          <Image
            className="promoLogo"
            src="/gradient.svg"
            width={1600}
            height={900}
            alt="Tom Clancys"
          />
        </div>
        <Image
          className="promoLogo"
          src="/promo.jpg"
          width={1600}
          height={900}
          alt="Tom Clancys"
        />
      </div>
      <div className="promoContent">
        <div className="blockPreorder">
          <h6 className="h6Order">ПРЕДЗАКАЗ</h6>
          <h5 className="h5Order">borderlands 3</h5>
          <p>Super Deluxe Edition</p>
          <p>
            Осталось 329 дней, <p>20.03.20</p>
          </p>
          <div>
            <button>В КОРЗИНУ</button>
            <p>3999 $</p>
            <p>-30%</p>
          </div>
        </div>
        <div className="blockSalesHits">
          <h6>хиты продаж</h6>
          <div>
            <div className="listGameMin">
              <button className="textBasket">В КОРЗИНУ</button>
              <Image
                className="imgGame"
                src="/img1.jpg"
                width={214}
                height={272}
                alt="Tom Clancys"
              />
              <h5 className="h5TitleGame">
                Tom Clancys Rainbow Six Siege Super Advanced Collectors
              </h5>
              <div className="blokSale">
                <p className="sale">1200 ₽</p>
                <p className="discount">-30%</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
