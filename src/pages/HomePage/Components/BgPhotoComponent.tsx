import { Carousel } from "@material-tailwind/react";
import groupPhoto from "../../../assets/groupPhoto.jpg";
import groupPhoto1 from "../../../assets/groupPhoto1.jpg";
import groupPhoto2 from "../../../assets/groupPhoto2.jpg";

export const BgPhotoComponent = () => {
  return (
    <div id="start" className="relative w-full border-b-4 border-lightYellow">
      {/* Image */}
      <Carousel
        {...({} as any)}
        autoplay={true}
        loop={true}
        navigation={false}
        nextArrow={false}
        prevArrow={false}
      >
        <img
          src={groupPhoto}
          alt="Group photo"
          className="w-full h-full object-contain"
        />
        <img
          src={groupPhoto1}
          alt="Group photo"
          className="w-full h-full object-contain"
        />
        <img
          src={groupPhoto2}
          alt="Group photo"
          className="w-full h-full object-contain"
        />
      </Carousel>
      {/* Overlay */}
      <div className="absolute inset-0 bg-darkBlue bg-opacity-50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide uppercase text-lightBlue">
          Нова Українська Школа
        </h1>
        <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-yellow-400 mt-4 text-lightYellow font-caveat">
          в Дармштадті
        </p>
      </div>
    </div>
  );
};
