import "./Product.scss";
import { FaSortAmountDown } from "react-icons/fa";
import { RxLockClosed } from "react-icons/rx";
export default function Product(product) {
  console.log(product);
  const { video, description } = product;
  return (
    <>
      <div className="product">
        <div className="productElement">
          <div>
            <video src={video} width="165px" height="100%" controls></video>
            <p>{description}</p>
            <div className="iconContainer">
              <div className="iconFirst">
                <FaSortAmountDown className="icons" style={{ fonts: "20px" }} />
                <span>Feb 2019</span>
              </div>
              <div>
                <RxLockClosed className="icon" />
                <span>2 mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
