import "./promo.css";
import Image from "next/image";

export default function Promo() {
  return (
    <div className="blokPromo">
      {/* <Image
        className="sdssd"
        src="/gradient.svg"
        width={1600}
        height={900}
        alt="Tom Clancys"
      /> */}
      <Image
        className="promoLogo"
        src="/promo.jpg"
        width={1600}
        height={900}
        alt="Tom Clancys"
      />
      <div>sds</div>
    </div>
  );
}
