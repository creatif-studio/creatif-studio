import Image from "next/image";
import React from "react";
import userIcon from "@/assets/images/Ellipse 1.png";

const TestimoniSection = () => {
  return (
    <section className="flex flex-col items-center gap-13 px-6 py-13 lg:px-30">
      <div className="text-center flex flex-col gap-13">
        <h1 className="text-4xl font-semibold md:text-[42px]">
          what our clients say
        </h1>
        <p className="text-center">
          Kami sangat senang bekerja sama dengan jsolution. Layanan mereka
          sangat profesional, dan mereka selalu menjaga komunikasi yang baik
          sepanjang proyek. Hasil akhirnya jauh melebihi ekspektasi kami, dan
          kami sangat puas dengan kualitas kerja mereka
        </p>
      </div>
      <div className="w-screen-md flex items-end justify-between md:w-full overflow-x-hidden">
        <div className="flex flex-col items-center gap-4 opacity-50">
          <Image width={80} height={80} src={userIcon} alt="user" />
          <div className="text-center">
            <p className="text-base font-semibold">Vicky Hardia</p>
            {/* <p>Sinarjaya</p> */}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 opacity-50">
          <Image width={80} height={80} src={userIcon} alt="user" />
          <div className="text-center">
            <p className="text-base font-semibold">Vicky Hardia</p>
            {/* <p>Sinarjaya</p> */}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 opacity-50">
          <Image width={80} height={80} src={userIcon} alt="user" />
          <div className="text-center">
            <p className="text-base font-semibold">Vicky Hardia</p>
            {/* <p>Sinarjaya</p> */}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={userIcon} alt="user" />
          <div className="text-center">
            <p className="text-xl font-semibold">Vicky Hardia</p>
            <p>Sinarjaya</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 opacity-50">
          <Image width={80} height={80} src={userIcon} alt="user" />
          <div className="text-center">
            <p className="text-base font-semibold">Vicky Hardia</p>
            {/* <p>Sinarjaya</p> */}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 opacity-50">
          <Image width={80} height={80} src={userIcon} alt="user" />
          <div className="text-center">
            <p className="text-base font-semibold">Vicky Hardia</p>
            {/* <p>Sinarjaya</p> */}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 opacity-50">
          <Image width={80} height={80} src={userIcon} alt="user" />
          <div className="text-center">
            <p className="text-base font-semibold">Vicky Hardia</p>
            {/* <p>Sinarjaya</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;
