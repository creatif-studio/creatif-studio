import {
  Challenge,
  CustomerCaseStudy,
  Navbar,
  ReadyGetStarted,
  Resources,
  Solution,
  UseCaseHero,
  WhiteboardVideo,
} from "components/organisms";

import Divider from 'components/atoms/Divider'
import Footer from 'components/organisms/ProductsTerraform/Footer'
import NavBottom from 'components/organisms/ProductsTerraform/NavBottom'

const UseCasePage = () => {
  return (
    <div>
      <Navbar />
      <UseCaseHero />
      <Challenge />
      <Solution />
      <CustomerCaseStudy />
      <Resources />
      <ReadyGetStarted />
      <WhiteboardVideo />
      <Divider />
      <NavBottom />
      <Divider />
      <Footer />
    </div>
  );
};

export default UseCasePage;
