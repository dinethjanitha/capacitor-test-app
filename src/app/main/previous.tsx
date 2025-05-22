'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Previous.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import Link from 'next/link';



interface Match {
  _id: string;
  matchName: string;
  startDate: string;
  endDate: string;
  status: "previous" | "upcoming";
  streamId: string;
  teamOneImage: string;
  teamOneMembers: Array<{
    name: string;
    role: string;
    isCaptain: boolean;
    age: number;
    _id: string;
  }>;
  teamOneScore: string;
  teamTwoImage: string;
  teamTwoMembers: Array<{
    name: string;
    role: string;
    isCaptain: boolean;
    age: number;
    _id: string;
  }>;
  teamTwoScore: string;
  teamOneName: string;
  teamTwoName: string;
}


const Previous: React.FC = () => {

  const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
  console.log(IMAGE_BASE_URL?.toString());

    const [previousMatches, setPreviousMatches] = useState<Match[] | null>(null);

  const fetchUpCommingStreams = async () => {
    try {
      const response = await axios.get(
        'https://addstream-production.up.railway.app/api/v1/match'
      );
      
     setPreviousMatches(
      response.data.data.matches.filter((match: Match) => match.status === "previous")
    );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUpCommingStreams();
  }, []);


  return (
    <div className={styles['previous-container']}>
      <div className={styles['previous-section']}>
        <h1>PREVIOUS GAMES</h1>
      </div>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className={styles.vsSwiper}
      >
        {!previousMatches || previousMatches.length === 0 ? (
          <SwiperSlide>
            <div className="flex justify-center items-center h-[300px] text-white">
              No upcoming matches found.
            </div>
          </SwiperSlide>
        ) : (
          previousMatches.map((match) => (
            <SwiperSlide key={match._id} className='mt-4'>
              <Link href={"score"}>
              <div className="relative bg-[#181818] rounded-3xl  overflow-hidden h-[300px] w-full max-w-5xl mx-auto">
                <div
                  className={`${styles.leftTriangle} absolute top-0 left-0 w-1/2 h-full z-0`}
                />
                <div
                  className={`${styles.rightTriangle} absolute top-0 right-0 w-1/2 h-full z-0`}
                />

                <div className="relative z-10 flex flex-col h-full items-center justify-center text-white ">
                  <h2 className="text-3xl font-bold h-[50px] flex items-center">
                    {match.matchName || 'Super League 2025'}
                  </h2>
                  <div className="flex justify-between items-center w-full px-10">
                    
                    <div className="flex flex-col items-center mt-5">
                      {/* <p>{`${IMAGE_BASE_URL}${match.teamOneImage}`}</p> */}
                      <Image
                        src={`${IMAGE_BASE_URL}${match.teamOneImage}`}
                        alt="UOM Logo"
                        width={90}
                        height={90}
                      />
                      <span className="mt-3 text-lg font-semibold">UOM</span>
                    </div>
                    <div className="text-8xl font-bold mt-5">VS</div>
                    <div className="flex flex-col items-center mt-5">
                      <Image
                        src={`${IMAGE_BASE_URL}${match.teamTwoImage}`}
                        alt="UOC Logo"
                        width={90}
                        height={90}
                      />
                      <span className="mt-3 text-lg font-semibold">UOC</span>
                    </div>
                  </div>
                  {/* Date & Time */}
                  <div className="mb-6 text-center space-y-1 h-[50px] flex flex-col items-center">
                    <p className="text-xl">{new Date(match.startDate).toLocaleDateString()}</p>
                    <p className="text-xl">{new Date(match.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                  </div>
                </div>
              </div></Link>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default Previous;
