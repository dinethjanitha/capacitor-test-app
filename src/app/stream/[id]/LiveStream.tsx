"use client"
import React, { useEffect, useState } from "react";
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  //   Send,
  Users,
  //   MessageSquare,
} from "lucide-react";

// import MatchStats from "./MatchStats";
import UpComingMatchs from "./UpComingMatchs";
// import Filed from "./Filed";
import Image from "next/image";
import OngoingMatchs from "./OngoingMatchs";
import axios from "axios";
import LoadingEffect from "@/app/Components/LoadingEffect";
import Link from "next/link";

interface Props {
  id: string;
}

interface StreamDataResponse {
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

const LiveStream: React.FC<Props> = ({ id }) => {

  const [stream , setStream] = useState<StreamDataResponse | undefined>(undefined)

  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);



  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateText = (text: string, maxLines: number) => {
    const lines = text.split("\n");
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join("\n") + "...";
    }
    return text;
  };

  const fetchStream = async (id: string) => {

    try {
      const response = await axios.get(`https://addstream-production.up.railway.app/api/v1/stream/${id}`);
      console.log("==============")
      console.log(response.data.data.stream)
      setStream(response.data.data.stream)
      // console.log(data.status);
      // if (data.status == "fail") {
      //   return false;
      // }
      // return data.data.stream;
      // console.log("Rendered!!!!!!")
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching stream:", error);
      setStream(undefined)
      setIsLoading(false);

    }
  };

  useEffect(() => {
    fetchStream(id);
  },[id])
  
  // console.log("Rendered12!!!!!!")
  
  if(isLoading == true){
    return (
      <LoadingEffect/>
    )
  }else{
    return (
      <div className="">{stream != undefined ? (
        <div className="min-h-screen bg-zinc-950 sm:p-5 text-white p-6">
        <div className="mt-25 max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 ">
            <div className=" col-span-12 bg-[#211f1e]/42 p-5 rounded-2xl border-1 border-[#ffffff]/42">
              <div className="col-span-12 gap-2 ">
                <div className=" relative aspect-video w-full lg:h-[500px] bg-zinc-900 rounded-2xl overflow-hidden">
                  <iframe
                    className=" w-full h-full"
                    src={stream.VideoLink.replace("watch?v=", "embed/")}
                    title={stream.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
  
              <div className="lg:col-span-12 mt-5">
                <div className="">
                  <div className="flex lg:flex-row flex-col justify-between">
                    <div className="lg:order-1 order-2">
                      <h1 className="text-2xl font-bold">{stream.title}</h1>
                      <div className="flex items-center gap-4  text-sm">
                        <div className="flex items-center gap-2">
                          <Users size={16} />
                          <span>24.5K viewers</span>
                        </div>
                        <span>•</span>
                        <span>Status: {stream.status.toUpperCase()}</span>
                      </div>
                      {/* <p className="text-gray-400 mt-5" dangerouslySetInnerHTML={{ __html: stream.description.replace(/\n/g, '<br>') }}> */}
                        {/* {stream.description} */}
                      {/* </p> */}
  
                      <p
                        className="text-gray-400 mt-5"
                        dangerouslySetInnerHTML={{
                          __html: isExpanded
                            ? stream.description.replace(/\n/g, "<br>")
                            : truncateText(stream.description, 4).replace(/\n/g, "<br>"),
                        }}
                      ></p>
                      <button
                        className="text-blue-500 mt-2"
                        onClick={toggleReadMore}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>
                    <div className=" flex flex-row gap-5 lg:order-2 order-1 mb-3">
                      <div className=" p-1 bg-[#F05922] h-fit rounded-2xl px-[15px]">
                        <ThumbsUp size={20} />
                      </div>
                      <div className=" p-1 bg-[#F05922] h-fit rounded-2xl px-[15px]">
                        <ThumbsDown size={20} />
                      </div>
                      <div className=" p-1 bg-[#F05922] h-fit rounded-2xl px-[15px]">
                        <Share2 size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className=" mt-5">
            <Image
              src={`https://addstream-production.up.railway.app/${stream.advertisementOne}`}
              alt="Ad1"
              width={250}
              height={200}
              className=" w-fit"
            ></Image>
          </div>
          <div className=" grid grid-cols-12 max-w-7xl mx-auto space-y-6">
            <div className=" lg:col-span-6 col-span-12 mt-5">
              <OngoingMatchs />
            </div>
            <div className="lg:col-span-6 col-span-12">
              <UpComingMatchs />
            </div>
          </div>
  
          <div className="my-3">
            <Image
              src={`https://addstream-production.up.railway.app/${stream.advertisementTwo}`}
              alt="Ad1"
              width={200}
              height={200}
              className="w-full lg:h-[100px]"
            ></Image>
          </div>
      </div>
      ) : (
        <div className="min-h-screen bg-zinc-950 text-white p-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Stream not found</h1>
        <Link href={"/"} className=" link link-primary">Go Back</Link>
      </div>
      )}</div>
    );
  }
  
};

export default LiveStream;
