import "./promo.css";
import Image from "next/image";

export default function Promo() {
  return (
    <div className="blokPromo">
      <div className="promoContent">
        <div className="blockPreorderBig">
          <div className="slaider2">
            <div>
              <Image
                className="upArrow"
                src="/up-arrow.svg"
                width={32}
                height={32}
                alt="arrow"
              />
            </div>
            <div className="stripe">
              {/* <Image
                className="pole"
                src="/row.svg"
                width={1}
                height={195}
                alt="arrow"
              /> */}
            </div>
            <div>
              <Image
                className="botArrow"
                src="/up-arrow.svg"
                width={32}
                height={32}
                alt="arrow"
              />
            </div>
          </div>
          <div className="blockPreorder">
            <h6 className="h6Order">ПРЕДЗАКАЗ</h6>
            <h5 className="h5Order">borderlands 3</h5>
            <p className="pOrder">Super Deluxe Edition</p>
            <p className="dataP">
              Осталось 329 дней, <p className="dataPNum">20.03.20</p>
            </p>
            <div className="blockPraice">
              <button className="blockPraiceButton">В КОРЗИНУ</button>
              <p className="blockPraiceP">3999 $</p>
              <p className="blockPraiceSale">-30%</p>
            </div>
          </div>
        </div>
        <div className="blockSalesHits">
          <h6 className="blockSalesHitsTitle">хиты продаж</h6>
          <div className="blockCardsBig">
            <div className="blockCardsMin">
              {/* <button className="textBasket">В КОРЗИНУ</button> */}
              <Image
                className="imgCards"
                src="/Group332.jpg"
                width={164}
                height={204}
                alt="Tom Clancys"
              />
              <h5 className="h5TitleGame">
                Grand Theft Auto V: Premium Online Edition + Megalodon Shark
              </h5>
              <div className="blokSale">
                <p className="sale">1200 ₽</p>
                <p className="discount">-30%</p>
              </div>
            </div>
            <div className="blockCardsMin">
              {/* <button className="textBasket">В КОРЗИНУ</button> */}
              <Image
                className="imgCards"
                src="/Group333.jpg"
                width={164}
                height={204}
                alt="Tom Clancys"
              />
              <h5 className="h5TitleGame">
                Grand Theft Auto V: Premium Online Edition + Megalodon Shark
              </h5>
              <div className="blokSale">
                <p className="sale">1200 ₽</p>
                <p className="discount">-30%</p>
              </div>
            </div>
            <div className="blockCardsMin">
              {/* <button className="textBasket">В КОРЗИНУ</button> */}
              <Image
                className="imgCards"
                src="/img2.3.jpg"
                width={164}
                height={204}
                alt="Tom Clancys"
              />
              <h5 className="h5TitleGame">
                Grand Theft Auto V: Premium Online Edition + Megalodon Shark
              </h5>
              <div className="blokSale">
                <p className="sale">1200 ₽</p>
                <p className="discount">-30%</p>
              </div>
            </div>
          </div>
          <div className="slaider">
            <div>
              <Image
                className="upArrow"
                src="/up-arrow.svg"
                width={32}
                height={32}
                alt="arrow"
              />
            </div>
            <div className="stripe">
              {/* <Image
                className="pole"
                src="/row.svg"
                width={1}
                height={195}
                alt="arrow"
              /> */}
            </div>
            <div>
              <Image
                className="botArrow"
                src="/up-arrow.svg"
                width={32}
                height={32}
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
