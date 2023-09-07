import { useEffect, useState } from "react";
import userIcon from "@/assets/images/Ellipse-user.png";
import Image from "next/image";
import { Back, Next, Quotes } from "@/assets/icons";

const testimoniData = [
  {
    id: 1,
    name: "Vicky Hardia",
    company: "Sinar Jaya",
    description:
      "We are very happy to work with Creatif Studio. Their service was very professional, and they always maintained good communication throughoutthe project. The end result far exceeded our expectations, and we are very satisfied with the quality of their work",
    image: userIcon,
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Sinar Jaya",
    description:
      "Kami sangat senang bekerja sama dengan jsolution. Layanan mereka sangat profesional, dan mereka selalu menjaga komunikasi yang baik sepanjang proyek. Hasil akhirnya jauh melebihi ekspektasi kami, dan kami sangat puas dengan kualitas kerja mereka",
    image: userIcon,
  },
  {
    id: 3,
    name: "Jane Canany",
    company: "Sinar Jaya",
    description:
      "We are very happy to work with Creatif Studio. Their service was very professional, and they always maintained good communication throughoutthe project. The end result far exceeded our expectations, and we are very satisfied with the quality of their work",
    image: userIcon,
  },
  {
    id: 4,
    name: "Albert",
    company: "Sinar Jaya",
    description:
      "Kami sangat senang bekerja sama dengan jsolution. Layanan mereka sangat profesional, dan mereka selalu menjaga komunikasi yang baik sepanjang proyek. Hasil akhirnya jauh melebihi ekspektasi kami, dan kami sangat puas dengan kualitas kerja mereka",
    image: userIcon,
  },
  {
    id: 5,
    name: "Viktor",
    company: "Sinar Jaya",
    description:
      "We are very happy to work with Creatif Studio. Their service was very professional, and they always maintained good communication throughoutthe project. The end result far exceeded our expectations, and we are very satisfied with the quality of their work",
    image: userIcon,
  },
  {
    id: 6,
    name: "Miss Nina",
    company: "Sinar Jaya",
    description:
      "Kami sangat senang bekerja sama dengan jsolution. Layanan mereka sangat profesional, dan mereka selalu menjaga komunikasi yang baik sepanjang proyek. Hasil akhirnya jauh melebihi ekspektasi kami, dan kami sangat puas dengan kualitas kerja mereka",
    image: userIcon,
  },
  {
    id: 7,
    name: "Stephen",
    company: "Sinar Jaya",
    description:
      "We are very happy to work with Creatif Studio. Their service was very professional, and they always maintained good communication throughoutthe project. The end result far exceeded our expectations, and we are very satisfied with the quality of their work",

    image: userIcon,
  },
  // Tambahkan lebih banyak data testimoni di sini...
];
const testimoniData2 = [
  {
    id: 1,
    name: "Vicky Hardia",
    company: "Sinar Jaya",
    description:
      "We are very happy to work with Creatif Studio. Their service was very professional, and they always maintained good communication throughoutthe project. The end result far exceeded our expectations, and we are very satisfied with the quality of their work",

    image: userIcon,
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Sinar Jaya",
    description:
      "Kami sangat senang bekerja sama dengan jsolution. Layanan mereka sangat profesional, dan mereka selalu menjaga komunikasi yang baik sepanjang proyek. Hasil akhirnya jauh melebihi ekspektasi kami, dan kami sangat puas dengan kualitas kerja mereka",

    image: userIcon,
  },
  {
    id: 3,
    name: "Jane Canany",
    company: "Sinar Jaya",
    description:
      "We are very happy to work with Creatif Studio. Their service was very professional, and they always maintained good communication throughoutthe project. The end result far exceeded our expectations, and we are very satisfied with the quality of their work",

    image: userIcon,
  },
];

const CarouselTestimoni = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined || 0,
  });

  const [activeIndex, setActiveIndex] = useState(3);
  const [activeIndex2, setActiveIndex2] = useState(1);

  const adjustedTestimoniData = [...testimoniData];
  const adjustedTestimoniData2 = [...testimoniData2];
  const activeItem = adjustedTestimoniData.splice(activeIndex, 1)[0];
  const activeItem2 = adjustedTestimoniData2.splice(activeIndex2, 1)[0];
  adjustedTestimoniData.splice(
    Math.floor(adjustedTestimoniData.length / 2),
    0,
    activeItem
  );
  adjustedTestimoniData2.splice(
    Math.floor(adjustedTestimoniData.length / 2),
    0,
    activeItem2
  );

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
  };

  const handleNext = () => {
    if (windowSize.width < 600) {
      // setActiveIndex((prevIndex) => (prevIndex + 1) % testimoniData2.length);
      setActiveIndex2((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    } else {
      setActiveIndex(
        // (prevIndex) => (prevIndex + 1) % adjustedTestimoniData.length
        (prevIndex) => (prevIndex === 6 ? 0 : prevIndex + 1)
      );
    }
  };

  const handlePrev = () => {
    if (windowSize.width < 600) {
      // setActiveIndex((prevIndex) =>
      //   prevIndex === 0 ? testimoniData2.length - 1 : prevIndex - 1
      // );
      setActiveIndex2((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    } else {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? 6 : prevIndex - 1));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="w-full p-4 mx-auto overflow-x-hidden">
      <div className="flex flex-col items-center justify-center gap-16 text-center">
        <h1 className="text-4xl font-semibold md:text-[42px]">
          what our clients say
        </h1>
        <div className="relative text-center md:max-w-2xl">
          <div className="absolute hidden lg:block -top-4 -left-20">
            <Quotes />
          </div>
          <p className="hidden md:block">
            {testimoniData[activeIndex]?.description}
          </p>
          <p className="block md:hidden">
            {testimoniData2[activeIndex2]?.description}
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full gap-4 mt-4 md:justify-between">
        <button
          onClick={handlePrev}
          className="group  px-4 py-4 bg-white border border-[#0D0E13] rounded-full hover:bg-[#0D0E13] hover:text-white"
        >
          <Back className="group-hover:stroke-white stroke-black" />
        </button>
        <button
          onClick={handleNext}
          className="group px-4 py-4 bg-white border border-[#0D0E13] rounded-full hover:bg-[#0D0E13] hover:text-white"
        >
          <Next className="group-hover:stroke-white stroke-black" />
        </button>
      </div>
      <div className="items-center justify-between hidden max-w-screen-lg mx-auto mt-10 md:flex ">
        {adjustedTestimoniData?.map((testimoni, index) => {
          const isActive =
            index === Math.floor(adjustedTestimoniData.length / 2);

          const transformValue = isActive ? "scale(1)" : "scale(0.70)";
          const opacity = isActive ? "1" : "0.5";
          const zIndexValue = isActive ? 10 : 0;

          return (
            <div
              key={testimoni.id}
              className={`carousel-item relative transition-transform duration-500`}
              style={{
                minWidth: "80px",
                maxWidth: "80px",
                minHeight: "80px",
                maxHeight: "80px",
                opacity: opacity,
                transform: transformValue,
                zIndex: zIndexValue,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src={testimoni.image} alt={testimoni.name} />
                {/* <p className="p-8 bg-blue-500 rounded-full">{testimoni.name}</p> */}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between w-full mt-10 md:hidden">
        {adjustedTestimoniData2?.map((testimoni, index) => {
          const isActive =
            index === Math.floor(adjustedTestimoniData2.length / 2);

          const transformValue = isActive ? "scale(1)" : "scale(0.70)";
          const opacity = isActive ? "1" : "0.5";
          const zIndexValue = isActive ? 10 : 0;

          return (
            <div
              key={testimoni.id}
              className={`carousel-item relative transition-transform duration-500`}
              style={{
                minWidth: "80px",
                maxWidth: "80px",
                minHeight: "80px",
                maxHeight: "80px",
                opacity: opacity,
                transform: transformValue,
                zIndex: zIndexValue,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src={testimoni.image} alt={testimoni.name} />
                {/* <p className="p-8 bg-blue-500 rounded-full">{testimoni.name}</p> */}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-center">
        <p className="hidden text-lg font-semibold md:block">
          {testimoniData[activeIndex]?.name}
        </p>
        <p className="block text-lg font-semibold md:hidden">
          {testimoniData2[activeIndex2]?.name}
        </p>
        <p className="hidden text-gray-600 md:block">
          {testimoniData[activeIndex]?.company}
        </p>
        <p className="block text-gray-600 md:hidden">
          {testimoniData2[activeIndex2]?.company}
        </p>
      </div>
    </div>
  );
};

export default CarouselTestimoni;
