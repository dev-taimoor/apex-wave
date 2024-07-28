import { Fragment } from "react";
import Brand from "../components/Brands/Brand";
import BrandBanner from "../components/BrandBanner/BrandBanner";
import Wrapper from "../components/wrapper/Wrapper";
import BudgetFind from "../components/BudgetFind/BudgetFind";
// import Section from "../components/Section";
// import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  // const newArrivalData = products.filter(
  //   (item) => item.category === "mobile" || item.category === "wireless"
  // );
  // const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Brand />
      <BrandBanner />
      <BudgetFind />
      {/* <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      /> */}
    </Fragment>
  );
};

export default Home;
