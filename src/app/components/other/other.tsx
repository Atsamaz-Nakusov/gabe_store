import "./other.css";
import Image from "next/image";

export default function Other() {
  return (
    <div className="blokOther">
      <div className="blokOtherMin">
        <Image
          className="iconOther"
          src="/Gabestore_icon.svg"
          width={104}
          height={104}
          alt="Tom Clancys"
        />
        <a>
          Cкидки
          <br /> круглый год
        </a>
      </div>
      <div className="blokOtherMin">
        <Image
          className="iconOther"
          src="/Gabestore_icons_support_24.svg"
          width={114}
          height={114}
          alt="Tom Clancys"
        />
        <a>Круглосуточная поддержка</a>
      </div>
      <div className="blokOtherMin">
        <Image
          className="iconOther"
          src="/Gabestore_icons_achievement_system.svg"
          width={116}
          height={116}
          alt="Tom Clancys"
        />
        <a>Система достижений</a>
      </div>
      <div className="blokOtherMin">
        <Image
          className="iconOther"
          src="/Gabestore_icons_active_community.svg"
          width={86}
          height={86}
          alt="Tom Clancys"
        />
        <a>Активное коммьюнити</a>
      </div>
      <div className="blokOtherMin">
        <Image
          className="iconOther"
          src="/Gabestore_icons_charity_events.svg"
          width={92}
          height={92}
          alt="Tom Clancys"
        />
        <a>Благотворительные акции</a>
      </div>
    </div>
  );
}
