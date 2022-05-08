import Banner from "../components/banner/Banner";
import BannerSM from "../components/bannerSM/BannerSM";
import BannerSmall from "../components/bannerSmall/BannerSmall";
import Feature from "../components/feature/Feature";
import Hero from "../components/hero/Hero";
import ItemList from "../components/itemList/ItemList";
import SliderList from "../components/slider/SliderList";

function HomePage() {
  return (
    <>
      <Hero />
      <Feature />
      <ItemList />
      <Banner />
      <SliderList />
      <BannerSM />
      <BannerSmall />
    </>
  );
}

export default HomePage;
