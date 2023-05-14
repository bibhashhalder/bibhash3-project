import Header from "../component/Header/Header";
import MainBodyTop from "../component/MainBodyTop/MainBodyTop";
import MainBodyTwo from "../component/MainBodyTwo/MainBodyTwo";
import MainBodyThree from "../component/MainBodyThree/MainBodyThree";
import MainBodyFour from "../component/MainBodyFour/MainBodyFour";
import MainBodyFive from "../component/MainBodyFive/MainBodyFive";
import Footer from "../component/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <MainBodyTop />
      <MainBodyTwo />
      <MainBodyThree />
      <MainBodyFour />
      <MainBodyFive />
      <Footer />
    </div>
  );
}
