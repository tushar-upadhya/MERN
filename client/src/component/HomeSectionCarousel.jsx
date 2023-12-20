import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import HomeSectionCard from "./HomeSectionCard";

const HomeSectionCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselInstance, setCarouselInstance] = useState(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const handlePrev = () => carouselInstance.slidePrev();
  const handleNext = () => carouselInstance.slideNext();

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} key={item.id} />);

  const onSlideChanged = (e) => {
    setActiveIndex(e.item);
  };

  return (
    <>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={onSlideChanged}
          activeIndex={activeIndex}
          dotsDisabled={true}
          buttonsDisabled={true}
          slideToIndex={activeIndex}
          ref={(el) => setCarouselInstance(el)}
        />

        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              color: "white",
              bgcolor: "white",
            }}
            aria-label="next"
            onClick={handleNext}
            className="z-50"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              color: "white",
              bgcolor: "white",
            }}
            aria-label="next"
            onClick={handlePrev}
            className="z-50"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </>
  );
};

export default HomeSectionCarousel;
