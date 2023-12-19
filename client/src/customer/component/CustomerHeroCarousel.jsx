import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { data } from "../../../data/data.json";

const CustomerCarousel = () => {
  const items = data.map((item, index) => (
    <img
      key={index} // Adding a unique key for each image
      className="cursor-pointer"
      src={item.imageUrl}
      alt={`image-${index}`} // Using index for unique alt text
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

export default CustomerCarousel;
