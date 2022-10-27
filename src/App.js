import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Home2 from "./components/home2/Home2";
import Mission from "./components/mission/Mission";
import Footer from "./components/footer/Footer";
import Subscribe from "./components/subscribe/Subscribe";
import Team from "./components/team/Team";
import OurValues from "./components/ourValues/OurValues";
import MeetBaraka from "./components/meetBaraka/MeetBaraka";
import IslamicFinance from "./components/islamicFinance/IslamicFinance";
import ShariyaCommittee from "./components/shariyaCommittee/ShariyaCommittee";
import WhyBaraka from "./components/whyBaraka/WhyBaraka";
import PlateformsComparison from "./components/plateformsComparison/PlateformsComparison";
import Ecosystem from "./components/ecosystem/Ecosystem";
import BarakaExchange from "./components/barakaExchange/BarakaExchange";
import Services from "./components/services/Services";
import Investment from "./components/investment/Investment";
import Lunchpad from "./components/lunchpad/Lunchpad";
import Roadmap from "./components/roadmap/Roadmap";
import Tokenomics from "./components/tokenomics/Tokenomics";
import Funds from "./components/funds/Funds";
import Specification from "./components/specification/Specification";
import Distribution from "./components/distribution/Distribution";
import SadaqaFund from "./components/sadaqaFund/SadaqaFund";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Home2 />
      <Mission />
      <OurValues />
      <MeetBaraka />
      <IslamicFinance />
      <ShariyaCommittee />
      <WhyBaraka />
      <PlateformsComparison />
      <Ecosystem />
      <BarakaExchange />
      <Services />
      <Investment />
      <Lunchpad />
      <Roadmap />
      <Tokenomics />
      <Funds />
      <Specification />
      <Distribution />
      <SadaqaFund />
      <Team />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
