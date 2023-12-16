const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-l shadow-lg overflow-hidden w-[15rem] mx-3 ">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://rukminim1.flixcart.com/image/612/612/l08gsy80/shoe/n/a/n/9-assg1015-9-abros-l-grey-maroon-original-imagc2m9zbzmtybx.jpeg?q=70"
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">SHOES</h3>
        <p className="mt-2 text-sm text-gray-500">Men Shoes</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
