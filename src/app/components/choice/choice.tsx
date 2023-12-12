import "./choice.css";
import Image from "next/image";

export default function Сhoice() {
  return (
    <div className="choice">
      <h2 className="titleChoice">Наш выбор</h2>
      <div className="bigBlock">
        <div className="minBlock">
          <h4 className="titleGame">
            The Elder Scrolls: Skyrim Legendary Edition
          </h4>
          <p className="price">1200 ₽</p>
        </div>
        <div className="minBlock">
          <h4 className="titleGame">playerunknown s battlegrounds</h4>
          <p className="price">1200 ₽</p>
        </div>
        <div className="minBlock">
          <h4 className="titleGame">grand theft auto V</h4>
          <p className="price">1200 ₽</p>
        </div>
        <div className="minBlock">
          <h4 className="titleGame">dark souls remastered</h4>
          <p className="price">1200 ₽</p>
        </div>
      </div>
    </div>
  );
}
