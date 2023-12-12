import Image from "next/image";
import Choice from "./components/choice/choice";
import Blog from "./components/blog/blog";

export default function Home() {
  return (
    <main>
      <Choice />
      <Blog />
    </main>
  );
}
