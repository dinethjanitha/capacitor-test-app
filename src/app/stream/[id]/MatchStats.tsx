import React from 'react'
import { Zen_Dots } from "next/font/google";
import { Anta } from 'next/font/google';

const anta = Anta({ weight : "400"})

const zenDots = Zen_Dots({
  weight: "400", // Zen Dots only has one weight
  subsets: ["latin"],
  display: "swap",
});



const MatchStats = () => {
  return (
    <div className={`relative rounded-4xl flex border-1 border-[#ffffff]/42 flex-col justify-center bg-[linear-gradient(100.59deg,#211F1E_5.52%,#323232_46.75%,#211F1E_87.19%)] ${zenDots.className}`}>
        <div
          className="flex flex-row justify-center "
        
        >
          <h3 className="p-3 rounded-b-lg"  style={{
            background: "linear-gradient(180deg, #F05922 0%, #FF4202 100%)",
          }}>MATCH STATS</h3>
        </div>

        <div className={` flex flex-col p-10 px-20 gap-6 ${anta.className}`}>
            <div className=" flex flex-row justify-between ">
                <p>ATTACKS</p>
                <p>0</p>
            </div>
            <div className=" flex flex-row justify-between ">
                <p>ATTACKS</p>
                <p>0</p>
            </div>
            <div className=" flex flex-row justify-between ">
                <p>ATTACKS</p>
                <p>0</p>
            </div>
            <div className=" flex flex-row justify-between ">
                <p>ATTACKS</p>
                <p>0</p>
            </div>
            <div className=" flex flex-row justify-between ">
                <p>ATTACKS</p>
                <p>0</p>
            </div>
        </div>
      </div>
  )
}

export default MatchStats