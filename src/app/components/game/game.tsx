import "./game.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="blokGame">
      <div className="listButtonGame">
        <button className="buttonGameCategor">новинки</button>
        <button className="buttonGameCategor">лидеры продаж</button>
        <button className="buttonGameCategor">последние поступления</button>
        <button className="buttonGameCategor">предзаказы</button>
      </div>
      <div className="listGame">
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
        <div className="listGameMin">
          <button className="textBasket">В КОРЗИНУ</button>
          <Image
            className="imgGame"
            src="/pitpeople.jpg"
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
        <div className="listGameMin">
          <button className="textBasket">В КОРЗИНУ</button>
          <Image
            className="imgGame"
            src="/battegrounds.jpg"
            width={214}
            height={272}
            alt="battegrounds"
          />
          <h5 className="h5TitleGame">
            Tom Clancys Rainbow Six Siege Super Advanced Collectors
          </h5>
          <div className="blokSale">
            <p className="sale">1200 ₽</p>
            <p className="discount">-30%</p>
          </div>
        </div>
        <div className="listGameMin">
          <button className="textBasket">В КОРЗИНУ</button>
          <Image
            className="imgGame"
            src="/img2.jpg"
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
        <div className="listGameMin">
          <button className="textBasket">В КОРЗИНУ</button>
          <Image
            className="imgGame"
            src="/img3.jpg"
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
        <div className="listGameMin">
          <button className="textBasket">В КОРЗИНУ</button>
          <Image
            className="imgGame"
            src="/img4.jpg"
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
        <div className="listGameMin">
          <button className="textBasket">В КОРЗИНУ</button>
          <Image
            className="imgGame"
            src="/img5.jpg"
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
        <div className="listGameMin">
          <button className="textBasket">В КОРЗИНУ</button>
          <Image
            className="imgGame"
            src="/img6.jpg"
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
        <div className="listGameMin">
          <button className="textBasket">В КОРЗИНУ</button>
          <Image
            className="imgGame"
            src="/battegrounds.jpg"
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
        <div className="listGameMin">
          <button className="textBasket">В КОРЗИНУ</button>
          <Image
            className="imgGame"
            src="/img8.jpg"
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
    </div>
  );
}
