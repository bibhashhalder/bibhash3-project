import "./MainBodyTop.scss";
import { FaPlay } from "react-icons/fa";
export default function MainBodyTop() {
  return (
    <div className="mainbodytop">
      <nav className="navbar">
        <div className="logo">
          <img
            className="image_logo"
            src="../../../public/image/bd3.png"
            alt=""
          />
        </div>
        <ul>
          <li>
            <a className="link" href="">
              login
            </a>
          </li>
          <li>
            <a className="link" href="">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
      <div className="articleContainer">
        <div className="article1">
          <div className="article">
            <h5 className="heading5">
              My name is <span>Oliver von Banhner</span>
            </h5>
            <h1>
              This is my story about <span>Dr.Serhat</span>
            </h1>
            <button className="button">
              <div>
                <FaPlay className="icons" style={{ fontSize: "20px" }} />
              </div>
              <div>
                <span className="span">Watch video</span>
              </div>
            </button>
          </div>
        </div>
        <div className="img">
          <img className="image" src="../../../public/image/bd0.png" alt="" />
        </div>
      </div>
    </div>
  );
}
