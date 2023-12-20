import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./HomeSectionCard";

import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState } from "react";
import { mensKurta } from "../../data/Men/menKurta";

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const left = () => setActiveIndex((current) => current - 1);
  const right = () => setActiveIndex((current) => current + 1);

  const index = (item) => {
    setActiveIndex(item);
  };

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const item = mensKurta.slice(0, 10).map((item) => {
    return <HomeSectionCard product={item} />;
  });

  return (
    <div>
      <div className="relative p-5 ">
        <AliceCarousel
          items={item}
          disableButtonsControls
          responsive={responsive}
          autoPlayInterval={2000}
          // infinite
          disableDotsControls
          onSlideChanged={index}
          activeIndex={activeIndex}
        />

        {activeIndex !== item.length - 5 && (
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
            className="z-50 "
            onClick={right}
          >
            <ChevronLeftIcon
              sx={{
                transform: "rotate(90deg)",
                color: "black",
              }}
            />
          </Button>
        )}

        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
          className="z-50 "
          onClick={left}
        >
          <ChevronLeftIcon
            sx={{
              transform: "rotate(-90deg)",
              color: "black",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
