import { HomeSectionCarousel } from "../component";
import CustomerCarousel from "../component/CustomerHeroCarousel";

const HomePage = () => {
  return (
    <div>
      <CustomerCarousel />

      <div className="space-y-10 py-20 px-5 lg:px-10 flex flex-col justify-center">
        <HomeSectionCarousel />
        <HomeSectionCarousel />
      </div>
    </div>
  );
};

export default HomePage;
