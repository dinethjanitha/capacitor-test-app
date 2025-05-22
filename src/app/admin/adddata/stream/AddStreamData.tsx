"use client";
import ErrorMessage from "@/app/Components/ErrorMessage";
import LoadingMessage from "@/app/Components/LoadingMessage";
import SuccessMessage from "@/app/Components/SuccessMessage";
import axios from "axios";
import React, { useState } from "react";
import Image from "next/image";


interface Stream {
  VideoLink: string;
  title: string;
  description: string;
  category: string;
  status: string;
  date: Date;
}

const AddStreamData = () => {
  const [streamData, setStreamData] = useState<Stream>({
    VideoLink: "",
    title: "",
    description: "",
    category: "",
    status: "",
    date: new Date(),
  });

  const [thumbnail, SetThumbnail] = useState<File | null>(null);
  const [advertisementOne, SetAdvertisementOne] = useState<File | null>(null);
  const [advertisementTwo, SetAdvertisementTwo] = useState<File | null>(null);
  const [thumbnailPreview, SetThumbnailPreview] = useState<string | null>(null);
  const [advertisementOnePreview, SetAdvertisementOnePreview] = useState<string | null>(null);
  const [advertisementTwoPreview, SetAdvertisementTwoPreview] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [errorName, setErrorNames] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [id , setId] = useState<string>("")

  const handleInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setStreamData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true);


    const requiredData = ["VideoLink", "title", "description", "category", "status"];
    for (const field of requiredData) {
      if (streamData[field as keyof Stream] === "") {
        setError(true);
        setErrorNames(`${field[0].toUpperCase()}${field.substring(1)} is required`);
        setLoading(false);
        return;
      }
    }

    if (!thumbnail) {
      setError(true);
      setErrorNames("Thumbnail is required!");
      setLoading(false);
      return;
    }

    try {
    
      const fromDataToSend = new FormData();
      fromDataToSend.append("VideoLink", streamData.VideoLink);
      fromDataToSend.append("category", streamData.category);
      fromDataToSend.append("description", streamData.description);
      fromDataToSend.append("status", streamData.status);
      fromDataToSend.append("title", streamData.title);
      fromDataToSend.append("date", streamData.date.toISOString());
      fromDataToSend.append("thumbnail", thumbnail); // Fixed key name
      if (advertisementOne) {
        fromDataToSend.append("advertisementOne", advertisementOne);
      }
      if (advertisementTwo) {
        fromDataToSend.append("advertisementTwo", advertisementTwo);
      }


      for (const pair of fromDataToSend.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }


      const response = await axios.post("http://localhost:3005/api/v1/stream", fromDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data.data.data._id);
      setId(response.data.data.data._id);

      setSuccess(true);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(error.response.data.message);
        setErrorNames(error.response.data.message || "Request failed. Please contact the developer!");
      } else {
        console.error(error);
        setErrorNames("An unexpected error occurred. Please contact the developer!");
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[900px]">
        <h2 className="text-3xl">Add Stream Data</h2>
        <div className="m-3">
        {error && <ErrorMessage mzg={`${errorName}`} />}
        {success && <SuccessMessage mzg={`Stream Adding Successful!!!`} id={id} />}
        {loading && <LoadingMessage mzg="Stream Data is Adding..." />}
        
        </div>
        <form action="#" className="grid grid-cols-3 gap-5 mt-3">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Thumbnail Photo</legend>
            <input
              type="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files && e.target.files[0]) {
                  SetThumbnail(e.target.files[0]);
                  SetThumbnailPreview(URL.createObjectURL(e.target.files[0]))
                }
              }}
              name="thumbnail"
              accept="image/*"
              className="file-input"
            />

            {
              thumbnailPreview && (
                <Image src={thumbnailPreview} width={200} height={200} alt="thumbnailPreview"></Image>
              )
            } 
            
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Advertisement 1 Photo</legend>
            <input
              type="file"
              name="advertisementOne"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files && e.target.files[0]) {
                  SetAdvertisementOne(e.target.files[0]);
                  SetAdvertisementOnePreview(URL.createObjectURL(e.target.files[0]))
                }
              }}
              accept="image/*"
              className="file-input"
            />

            {
              advertisementOnePreview && (
                <Image src={advertisementOnePreview} width={200} height={200} alt="advertisementOnePreview"></Image>
              )
            } 
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Advertisement 2 Photo</legend>
            <input
              type="file"
              name="advertisementTwo"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files && e.target.files[0]) {
                  SetAdvertisementTwo(e.target.files[0]);
                  SetAdvertisementTwoPreview(URL.createObjectURL(e.target.files[0]))
                }
              }}
              accept="image/*"
              className="file-input"
            />

            {
              advertisementTwoPreview && (
                <Image src={advertisementTwoPreview} width={200} height={200} alt="advertisementTwoPreview"></Image>
              )
            } 
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Video Link</legend>
            <input
              type="text"
              onChange={handleInputs}
              name="VideoLink"
              className="input w-full"
              placeholder="Type here"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Title</legend>
            <input
              type="text"
              onChange={handleInputs}
              name="title"
              className="input w-full"
              placeholder="Type here"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Description</legend>
            <textarea
              onChange={handleInputs}
              name="description"
              className="input w-full"
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Category</legend>
            <input
              type="text"
              onChange={handleInputs}
              name="category"
              className="input w-full"
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Status</legend>
            <select
              defaultValue=""
              onChange={handleInputs}
              name="status"
              className="select"
            >
              <option disabled value="">
                Pick a status
              </option>
              <option value="Old">Old</option>
              <option value="Live">Live</option>
              <option value="Features">Features</option>
            </select>
          </fieldset>

          <button className="btn btn-primary mt-3 col-span-3" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStreamData;