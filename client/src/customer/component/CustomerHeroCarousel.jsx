import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import data from "../../../data/CustomerCarouselData.json";

const CustomerCarousel = () => {
  const items = data.CustomerCarouselData.map((item) => {
    return (
      <img
        className="cursor-pointer"
        // onClick={() => navigate()}
        src={item.image}
        alt="image"
        role="presentation"
      />
    );
  });
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
};

export default CustomerCarousel;
