import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { data } from "../../data/data.json";

const HeroCarousel = () => {
  const items = data.map((item, index) => (
    <img
      key={index}
      className="cursor-pointer"
      src={item.imageUrl}
      alt={`image-${index}`}
      role="presentation"
    />
  ));

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

export default HeroCarousel;
