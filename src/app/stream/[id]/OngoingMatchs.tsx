"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  weight: "400", // Zen Dots only has one weight
  subsets: ["latin"],
  display: "swap",
});
interface StreamData {
  _id: string;
  thumbnail: string;
  VideoLink: string;
  title: string;
  description: string;
  category: string;
  status: string;
  date: string;
  advertisementOne: string;
  advertisementTwo: string;
}



const OngoingMatchs = () => {
  const [ongoingMatchs, setOngoingMatchs] = useState<StreamData[]>([]);

  const fetchOngoingMatchs = async () => {
    try {
      const response = await axios.get(
        "https://addstream-production.up.railway.app/api/v1/stream/ongoing"
      );
      console.log(response.data.data.streams);
      setOngoingMatchs(response.data.data.streams);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Ongoing");
  console.log(ongoingMatchs);

  useEffect(() => {
    fetchOngoingMatchs();
  }, []);

  return (
    <div className=" flex flex-col gap-3 p-1">
      <h3
        className={`text-4xl font- font-bold mb-4 text-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4202] via-white to-[#FF4202] via-[50.48%]  ${zenDots.className}`}
      >
        ON. GOING
      </h3>
      {ongoingMatchs.map((item) => (
        <div key={item._id} className=" relative rounded-2xl border-1 ">
          <div>
            <Image
              src={`http://localhost:3005/${item.thumbnail}`}
              alt="Video"
              width={200}
              height={200}
              className="w-full h-[250px] rounded-t-2xl"
            ></Image>
          </div>
          <div className=" flex items-center w-full h-fit bg-[#211F1E] rounded-b-2xl">
            <h4 className="p-3">{item.title }</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OngoingMatchs;
