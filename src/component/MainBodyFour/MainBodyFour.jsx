import image from "../../../public/image/bd2.png";
import image1 from "../../../public/image/why.png";
import "./MainBodyFour.scss";
export default function MainBodyFour() {
  return (
    <div className="mainCoutainerFour">
      <div className="article">
        <div className="articleContainer">
          <div className="imageContainer">
            <img className="image" src={image} alt="" />
          </div>
          <div className="text">
            <h1 className="headingOne">why quaerere veritatem?</h1>
            <p className="pragraph">
              Do you have a documentary brewing and need a place to publish it?
              At QV we are always in pursuit of new and exciting stories, so if
              you have an unpublished documentary contact us and let us see if
              we can work together.
            </p>
            <button className="button">contact us</button>
          </div>
        </div>
        <div className="articleContainer1">
          <img className="image1" src={image1} alt="" />
        </div>
      </div>
    </div>
  );
}
