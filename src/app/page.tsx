import Image from "next/image";
import Promo from "./components/promo/promo";
import Other from "./components/other/other";
import Game from "./components/game/game";
import Choice from "./components/choice/choice";
import Blog from "./components/blog/blog";

export default function Home() {
  return (
    <main>
      <Promo />
      <Other />
      <Game />
      <Choice />
      <Blog />
    </main>
  );
}
