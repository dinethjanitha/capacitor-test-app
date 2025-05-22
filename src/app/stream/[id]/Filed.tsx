import React from "react";
import Image from "next/image";
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  weight: "400", // Zen Dots only has one weight
  subsets: ["latin"],
  display: "swap",
});


const Filed = () => {
  return (
    <div className=" bg-[#211f1e]/42  rounded-2xl border-1 border-[#ffffff]/42">
      <div className=" w-full flex flex-row justify-center rounded-b-2xl ">
        <h2 style={{
            background: "linear-gradient(180deg, #F05922 0%, #FF4202 100%)",
          }} className={`p-3 px-10 rounded-b-2xl ${zenDots.className}`}>Filed</h2>
      </div>

      <div className=" flex flex-row justify-center p-5">
        <div className="relative py-2 bg-green-400 w-fit">
          <div className="lg:w-[500px] lg:h-[300px]">
            <Image
              src="/footballground.png"
              className="object-cover w-full h-full"
              width={200}
              height={200}
              alt="okay"
            />
          </div>
        <div className=" absolute left-20 top-10 h-[10px] w-[10px] bg-red-700 rounded-4xl"></div>
        <div className=" absolute left-20 top-20 h-[10px] w-[10px] bg-red-700 rounded-4xl"></div>
        <div className=" absolute left-30 top-50 h-[10px] w-[10px] bg-red-700 rounded-4xl"></div>
        <div className=" absolute left-50 top-25 h-[10px] w-[10px] bg-red-700 rounded-4xl"></div>
        <div className=" absolute left-40 top-10 h-[10px] w-[10px] bg-red-700 rounded-4xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Filed;
