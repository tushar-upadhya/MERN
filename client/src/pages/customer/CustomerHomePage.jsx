import { mensKurta } from "../../../data/Men/menKurta";

import {
  CommonHeading,
  HeroCarousel,
  HomeSectionCarousel,
} from "../../component";

const CustomerHomePage = () => {
  return (
    <div>
      <HeroCarousel />

      <div className="space-y-10 py-20 px-5 lg:px-10 flex flex-col justify-center">
        <CommonHeading text="Men's Kurta" />
        <HomeSectionCarousel data={mensKurta} />

        <CommonHeading text="Men's Shoes" />
        <HomeSectionCarousel data={mensKurta} />

        <CommonHeading text="Men's Shirts" />
        <HomeSectionCarousel data={mensKurta} />

        <CommonHeading text="Saree" />
        <HomeSectionCarousel data={mensKurta} />

        <CommonHeading text="Woman's Dress" />
        <HomeSectionCarousel data={mensKurta} />
      </div>
    </div>
  );
};

export default CustomerHomePage;
