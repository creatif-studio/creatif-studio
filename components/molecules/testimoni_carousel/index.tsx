import { useState } from "react";
import userIcon from "@/assets/images/Ellipse 1.png";
import Image from "next/image";
import { Back, Next } from "@/assets/icons";

const testimoniData = [
  {
    id: 1,
    name: "Vicky Hardia",
    company: "Sinar Jaya",
    description: "Testimoni pertama dari John Doe.",
    image: userIcon,
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Sinar Jaya",
    description: "Testimoni kedua dari Jane Smith.",
    image: userIcon,
  },
  {
    id: 3,
    name: "Jane Canany",
    company: "Sinar Jaya",
    description: "Testimoni kedua dari Jane Smith.",
    image: userIcon,
  },
  {
    id: 4,
    name: "Albert",
    company: "Sinar Jaya",
    description: "Testimoni kedua dari Jane Smith.",
    image: userIcon,
  },
  {
    id: 5,
    name: "Viktor",
    company: "Sinar Jaya",
    description: "Testimoni kedua dari Jane Smith.",
    image: userIcon,
  },
  {
    id: 6,
    name: "Miss Nina",
    company: "Sinar Jaya",
    description: "Testimoni kedua dari Jane Smith.",
    image: userIcon,
  },
  {
    id: 7,
    name: "Stephen",
    company: "Sinar Jaya",
    description: "Testimoni kedua dari Jane Smith.",
    image: userIcon,
  },
  // Tambahkan lebih banyak data testimoni di sini...
];
const testimoniData2 = [
  {
    id: 1,
    name: "Vicky Hardia",
    company: "Sinar Jaya",
    description: "Testimoni pertama dari John Doe.",
    image: userIcon,
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Sinar Jaya",
    description: "Testimoni kedua dari Jane Smith.",
    image: userIcon,
  },
  {
    id: 3,
    name: "Jane Canany",
    company: "Sinar Jaya",
    description: "Testimoni kedua dari Jane Smith.",
    image: userIcon,
  },
];

const CarouselTestimoni = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimoniData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimoniData.length - 1 : prevIndex - 1
    );
  };
  //   <Image src={testimoni.image} alt={testimoni.name} />
  return (
    <div className="w-full mx-auto p-4">
      <div className="w-full flex justify-between">
        <button
          onClick={handlePrev}
          className="px-4 py-4 bg-white border border-[#0D0E13] rounded-full"
        >
          <Back />
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-4 bg-[#0D0E13] text-white rounded-full"
        >
          <Next />
        </button>
      </div>
      <div className="hidden carousel carousel-center w-full md:flex items-center justify-between mt-10">
        {testimoniData.map((testimoni, index) => (
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

      <div className="md:hidden carousel carousel-center w-full flex items-center justify-between mt-10">
        {testimoniData2.map((testimoni, index) => (
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
        <p className="text-lg font-semibold">
          {testimoniData[activeIndex].name}
        </p>
        <p className="text-gray-600">{testimoniData[activeIndex].company}</p>
      </div>
    </div>
  );
};

export default CarouselTestimoni;
