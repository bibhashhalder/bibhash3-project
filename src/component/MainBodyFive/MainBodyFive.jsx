import image from "../../../public/image/bd3.png";

import "./MainBodyFive.scss";
export default function MainBodyFive() {
  return (
    <div className="mainBodyFive">
      <div className="article">
        <div className="articleContainer">
          <img className="image" src={image} alt="logo" />
          <p className="pragraph">
            Lorem ipsum dolor sit amet consectetur. Mi malesuada non phasellus
            feugiat amet justo pellentesque mus. Volutpat velit in fames massa
            lorem fermentum nulla sem.
          </p>
        </div>
        <div className="articleContainer1">
          <h1 className="headingOne">
            Get in <span className="span">touch</span>
          </h1>
          <form className="form">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="name"
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="email"
            />
            <textarea
              className="input"
              name="massage"
              id=""
              cols="30"
              rows="10"
              placeholder="Massage"
            ></textarea>
            <button id="input" className="input" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
