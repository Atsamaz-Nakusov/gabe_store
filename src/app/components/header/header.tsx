import "./header.css";
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div>
          <Image src="/Logo.svg" width={118} height={47} alt="Logo" />
        </div>
        <div className="searchGame">
          <button type="button" className="buttonGame">
            каталог игр
          </button>
          <form action="" className="searchForm">
            <input type="text" className="searchGameInput" />
            <button className="imgChoice">
              <Image src="/Vector.svg" width={20} height={20} alt="vector" />
            </button>
          </form>
        </div>
        <div className="headerIcon">
          <button className="buttonEnter">войти</button>
          <Image src="/wishlist.svg" width={32} height={32} alt="like" />
          <Image
            src="/shopping_cart.svg"
            width={32}
            height={31}
            alt="shopping cart"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
