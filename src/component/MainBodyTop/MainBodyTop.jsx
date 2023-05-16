import { useRef, useState } from "react";
import "./MainBodyTop.scss";
import video from "../../../public/videos/bv4.webm";
import { FaPause, FaPlay } from "react-icons/fa";
export default function MainBodyTop() {
  const [playButton, setPlayButton] = useState(false);
  const vidRef = useRef();
  const handleButton = () => {
    if (playButton) {
      vidRef.current.pause();
      setPlayButton(!playButton);
    } else {
      vidRef.current.play();
      setPlayButton(!playButton);
    }
  };

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
              <div className="icon">
                {playButton ? (
                  <FaPause
                    onClick={handleButton}
                    className="icons"
                    style={{ fontSize: "20px" }}
                  />
                ) : (
                  <FaPlay
                    onClick={handleButton}
                    className="icons"
                    style={{ fontSize: "20px" }}
                  />
                )}
              </div>
              <div>
                <span className="span">Watch video</span>
              </div>
            </button>
          </div>
        </div>
        <div className="img">
          <video ref={vidRef} width="400px " height="300px">
            <source src={[video]} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
