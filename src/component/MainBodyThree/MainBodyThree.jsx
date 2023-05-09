import image from "../../../public/image/how.png";
import image1 from "../../../public/image/bd1.png";
import "./MainBodyThree.scss";

export default function MainBodyThree() {
  return (
    <div className="mainBodyThree">
      <div className="article">
        <div className="articleContainer">
          <img className="image" src={image} alt="how" />
        </div>
        <div className="articleContainer1">
          <div className="article2">
            <img className="image1" src={image1} alt="" />
          </div>
          <div className="articl3">
            <h1 className="headingOne">How we work?</h1>
            <p className="pragraph">
              How? How could it be that Serhat could rise this far without being
              caught? More content will follow included in the price, as we
              journey further down the story.
            </p>
            <button className="button">learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
