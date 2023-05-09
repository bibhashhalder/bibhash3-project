import "./MainBodyTwo.scss";
import products from "../Product/Products";
import Product from "../products/Product";
export default function MainBodyTwo() {
  return (
    <div className="mainbodytwo">
      <div className="mainbodycontainer">
        <div className="article">
          <h5 className="heading5">English Version</h5>
          <h1 className="heading1">The Serhat Gumrukcu Conundrum</h1>
        </div>
        <div className="article2">
          <p className="pragraph">
            Follow the dramatic story about the man who cheated his way to the
            top of the pharmaceutical science community with a fake doctorate,
            cured the incurable and ended up with a murder charge, when the card
            house tipped over. Hear the testimonials of one of his investors of
            the NASDAQ registered company and patients as we unveil this net of
            intrigue.
          </p>
        </div>
      </div>
      <div className="product">
        {products.map((product) => (
          <Product
            key={product.id}
            video={product.video}
            description={product.description}
          ></Product>
        ))}
      </div>
    </div>
  );
}
