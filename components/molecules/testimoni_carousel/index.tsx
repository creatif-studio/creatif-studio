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

  const [activeIndex, setActiveIndex] = useState(0);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
  };

  const handleNext = () => {
    if (windowSize.width < 600) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimoniData2.length);
    } else {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimoniData.length);
    }
  };

  const handlePrev = () => {
    if (windowSize.width < 600) {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? testimoniData2.length - 1 : prevIndex - 1
      );
    } else {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? testimoniData.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Tambahkan event listener saat komponen di-mount
      window.addEventListener("resize", handleResize);

      // Panggil handleResize untuk menginisialisasi ukuran jendela
      handleResize();

      // Hapus event listener saat komponen di-unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="w-full mx-auto p-4">
      <div className="text-center flex flex-col justify-center items-center gap-16">
        <h1 className="text-4xl font-semibold md:text-[42px]">
          what our clients say
        </h1>
        <div className="relative text-center md:max-w-2xl">
          <div className="hidden md:block absolute -top-4 -left-20">
            <Quotes />
          </div>
          <p className="hidden md:block">
            {testimoniData[activeIndex]?.description}
          </p>
          <p className="block md:hidden">
            {testimoniData2[activeIndex]?.description}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center gap-4 mt-4 md:justify-between">
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
      <div className="hidden w-full md:flex items-center justify-between mt-10">
        {testimoniData?.map((testimoni, index) => (
          <div
            key={testimoni.id}
            className={`carousel-item relative transform ${
              index === activeIndex ? "scale-100" : "scale-75 opacity-50"
            } transition-transform duration-500 ${
              index === activeIndex ? "z-10" : "z-0"
            }`}
            style={{
              minWidth: "80px",
              maxWidth: "80px",
              minHeight: "80px",
              maxHeight: "80px",
              marginRight: "16px",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={testimoni.image}
                alt={testimoni.name}
                width={120}
                height={120}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden w-full flex items-center justify-between mt-10">
        {testimoniData2?.map((testimoni, index) => (
          <div
            key={testimoni.id}
            className={`carousel-item relative transform ${
              index === activeIndex ? "scale-100" : "scale-75 opacity-50"
            } transition-transform duration-500 ${
              index === activeIndex ? "z-10" : "z-0"
            }`}
            style={{
              minWidth: "80px",
              maxWidth: "80px",
              minHeight: "80px",
              maxHeight: "80px",
              marginRight: "16px",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src={testimoni.image} alt={testimoni.name} />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <p className="hidden md:block text-lg font-semibold">
          {testimoniData[activeIndex]?.name}
        </p>
        <p className="block md:hidden text-lg font-semibold">
          {testimoniData2[activeIndex]?.name}
        </p>
        <p className="hidden md:block text-gray-600">
          {testimoniData[activeIndex]?.company}
        </p>
        <p className="block md:hidden text-gray-600">
          {testimoniData2[activeIndex]?.company}
        </p>
      </div>
    </div>
  );
};

export default CarouselTestimoni;
