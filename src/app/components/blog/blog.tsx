import "./blog.css";
import Image from "next/image";
export default function Blog() {
  return (
    <div className="blog">
      <h2 className="titleBlog">СВЕЖЕЕ В БЛОГЕ</h2>
      <div className="mainСell">
        <div className="secondaryCell">
          <div className="imgNewsBlok">
            <Image
              className="imgNews"
              src="/image1.jpg"
              width={376}
              height={224}
              alt="Logo"
            />
          </div>
          <div className="InfoBlog">
            <a className="overviewButton" href="#">
              ОБЗОР
            </a>
            <p className="time">10.12.2023</p>
          </div>
          <h3 className="news">
            Какая студия может экранизировать Borderlands?
          </h3>
          <span className="blokComents">
            <p className="coment">И что с этим делать ?</p>
            <div className="blokViews">
              <Image src="/views.svg" width={21} height={17} alt="views" />
              <p className="views">1500</p>
              <Image
                src="/comments.svg"
                width={21}
                height={17}
                alt="comments"
              />
              <p className="views">1500</p>
            </div>
          </span>
        </div>
        <div className="secondaryCell">
          <div className="imgNewsBlok">
            <Image
              className="imgNews"
              src="/image2.jpg"
              width={376}
              height={224}
              alt="Logo"
            />
          </div>
          <div className="InfoBlog">
            <a className="overviewButton" href="#">
              ОБЗОР
            </a>
            <p className="time">10.12.2023</p>
          </div>
          <h3 className="news">
            Какая студия может экранизировать Borderlands?
          </h3>
          <span className="blokComents">
            <p className="coment">И что с этим делать ?</p>
            <div className="blokViews">
              <Image src="/views.svg" width={21} height={17} alt="views" />
              <p className="views">1500</p>
              <Image
                src="/comments.svg"
                width={21}
                height={17}
                alt="comments"
              />
              <p className="views">1500</p>
            </div>
          </span>
        </div>
        <div className="secondaryCell">
          <div className="imgNewsBlok">
            <Image
              className="imgNews"
              src="/image3.jpg"
              width={376}
              height={224}
              alt="Logo"
            />
          </div>
          <div className="InfoBlog">
            <a className="overviewButton" href="#">
              ОБЗОР
            </a>
            <p className="time">10.12.2023</p>
          </div>
          <h3 className="news">
            Какая студия может экранизировать Borderlands?
          </h3>
          <span className="blokComents">
            <p className="coment">И что с этим делать ?</p>
            <div className="blokViews">
              <Image src="/views.svg" width={21} height={17} alt="views" />
              <p className="views">1500</p>
              <Image
                src="/comments.svg"
                width={21}
                height={17}
                alt="comments"
              />
              <p className="views">1500</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
