"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import SuccessMessage from "@/app/Components/SuccessMessage";
import { useRouter } from "next/navigation";
import LoadingMessage from "@/app/Components/LoadingMessage";

interface TeamMember {
  name: string;
  role: string;
  age?: number;
  isCaptain?: boolean;
}

interface MatchForm {
  matchName: string;
  startDate: string;
  endDate: string;
  createDate: string;
  teamOneName: string;
  teamTwoName: string;
  status: string;
  place: string;
  teamOneScore: string;
  teamTwoScore: string;
  streamId?: string;
  eventId?: string;
  teamOneMembers: TeamMember[];
  teamTwoMembers: TeamMember[];
}

const AddMatchData = () => {
  const router = useRouter();
  const [form, setForm] = useState<MatchForm>({
    matchName: "",
    startDate: "",
    endDate: "",
    createDate: "",
    teamOneName: "",
    teamTwoName: "",
    status: "",
    place: "",
    teamOneScore: "",
    teamTwoScore: "",
    streamId: "",
    eventId: "",
    teamOneMembers: [{ name: "", role: "", age: undefined, isCaptain: false }],
    teamTwoMembers: [{ name: "", role: "", age: undefined, isCaptain: false }],
  });

  const [teamOneImage, setTeamOneImage] = useState<File | null>(null);
  const [teamTwoImage, setTeamTwoImage] = useState<File | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [teamOneImagePreview, setTeamOneImagePreview] = useState<string | null>(
    null
  );
  const [teamTwoImagePreview, setTeamTwoImagePreview] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle team member changes
  const handleTeamMember = (
    team: "teamOneMembers" | "teamTwoMembers",
    idx: number,
    field: keyof TeamMember,
    value: string | boolean | number
  ) => {
    setForm((prev) => {
      const members = [...prev[team]];
      members[idx] = { ...members[idx], [field]: value };
      return { ...prev, [team]: members };
    });
  };

  // Add member
  const addTeamMember = (team: "teamOneMembers" | "teamTwoMembers") => {
    setForm((prev) => ({
      ...prev,
      [team]: [
        ...prev[team],
        { name: "", role: "", age: undefined, isCaptain: false },
      ],
    }));
  };

  // Remove member
  const removeTeamMember = (
    team: "teamOneMembers" | "teamTwoMembers",
    idx: number
  ) => {
    setForm((prev) => {
      const members = [...prev[team]];
      if (members.length > 1) members.splice(idx, 1);
      return { ...prev, [team]: members };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("matchName", form.matchName);
      formData.append("startDate", form.startDate);
      formData.append("endDate", form.endDate);
      // formData.append("createDate", form.createDate);
      formData.append("place", form.place);
      formData.append("teamOneName", form.teamOneName);
      formData.append("teamTwoName", form.teamTwoName);
      formData.append("status", form.status);
      formData.append("teamOneScore", form.teamOneScore);
      formData.append("teamTwoScore", form.teamTwoScore);
      if (form.streamId) formData.append("streamId", form.streamId);
      if (form.eventId) formData.append("eventId", form.eventId);

      if (teamOneImage) formData.append("teamOneImage", teamOneImage);
      if (teamTwoImage) formData.append("teamTwoImage", teamTwoImage);

      formData.append("teamOneMembers", JSON.stringify(form.teamOneMembers));
      formData.append("teamTwoMembers", JSON.stringify(form.teamTwoMembers));

      console.log(teamOneImage)
      console.log(teamTwoImage)

      if(teamOneImage == null){
        return alert("Image one Empty")
      }

      await axios.post("http://localhost:3005/api/v1/match", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess(true);
      setTimeout(() => {
        router.refresh();
      }, 1000);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data?.message);
        setError(err.response?.data?.message || "Failed to add match");
      } else {
        setError("Failed to add match");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center  items-center">
      <form
        className="w-[900px] grid grid-cols-3 gap-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl col-span-3 mt-10">Add Match Data</h2>
        {error && <div className="col-span-3 text-red-500">{error}</div>}
        {success && (
          <div className="col-span-3 text-green-500">
            Match Added Successfully!
          </div>
        )}

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Team One Image</legend>
          <input
            type="file"
            accept="image/*"
            className=" file-input"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setTeamOneImage(e.target.files[0]);
                setTeamOneImagePreview(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          {teamOneImagePreview && (
            <Image
              src={teamOneImagePreview}
              width={100}
              height={100}
              alt="Team One"
            />
          )}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Team Two Image</legend>
          <input
            type="file"
            accept="image/*"
            className="file-input"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setTeamTwoImage(e.target.files[0]);
                setTeamTwoImagePreview(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          {teamTwoImagePreview && (
            <Image
              src={teamTwoImagePreview}
              width={100}
              height={100}
              alt="Team Two"
            />
          )}
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Match Name</legend>
          <input
            type="text"
            name="matchName"
            className="input w-full"
            onChange={handleInput}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Start Date</legend>
          <input
            type="datetime-local"
            name="startDate"
            className="input w-full"
            onChange={handleInput}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">End Date</legend>
          <input
            type="datetime-local"
            name="endDate"
            className="input w-full"
            onChange={handleInput}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Place</legend>
          <input
            type="text"
            name="place"
            className="input w-full"
            onChange={handleInput}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Team One Name</legend>
          <input
            type="text"
            name="teamOneName"
            className="input w-full"
            onChange={handleInput}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Team Two Name</legend>
          <input
            type="text"
            name="teamTwoName"
            className="input w-full"
            onChange={handleInput}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Status</legend>
          <select
            defaultValue="Pick a color"
            onChange={handleInput}
            name="status"
            className="select"
          >
            <option disabled={true}>Pick a color</option>
            <option value={"live"}>Live</option>
            <option value={"upcoming"}>Upcoming</option>
            <option value={"previous"}>Previous</option>
          </select>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Team One Score</legend>
          <input
            type="text"
            name="teamOneScore"
            className="input w-full"
            onChange={handleInput}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Team Two Score</legend>
          <input
            type="text"
            name="teamTwoScore"
            className="input w-full"
            onChange={handleInput}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Stream ID</legend>
          <input
            type="text"
            name="streamId"
            className="input w-full"
            onChange={handleInput}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Event ID</legend>
          <input
            type="text"
            name="eventId"
            className="input w-full"
            onChange={handleInput}
          />
        </fieldset>

        {/* Team One Members */}
        <fieldset className="fieldset col-span-3">
          <legend className="fieldset-legend">Team One Members</legend>
          {form.teamOneMembers.map((member, idx) => (
            <div key={idx} className="flex gap-2 items-center mb-2">
              <input
                type="text"
                placeholder="Name"
                className="input"
                value={member.name}
                onChange={(e) =>
                  handleTeamMember(
                    "teamOneMembers",
                    idx,
                    "name",
                    e.target.value
                  )
                }
              />
              <input
                type="text"
                placeholder="Role"
                className="input"
                value={member.role}
                onChange={(e) =>
                  handleTeamMember(
                    "teamOneMembers",
                    idx,
                    "role",
                    e.target.value
                  )
                }
              />
              <input
                type="number"
                placeholder="Age"
                className="input"
                value={member.age ?? ""}
                onChange={(e) =>
                  handleTeamMember(
                    "teamOneMembers",
                    idx,
                    "age",
                    Number(e.target.value)
                  )
                }
              />
              <label>
                Captain
                <input
                  type="checkbox"
                  checked={member.isCaptain}
                  onChange={(e) =>
                    handleTeamMember(
                      "teamOneMembers",
                      idx,
                      "isCaptain",
                      e.target.checked
                    )
                  }
                />
              </label>
              <button
                type="button"
                onClick={() => removeTeamMember("teamOneMembers", idx)}
                className="btn btn-xs btn-error"
              >
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addTeamMember("teamOneMembers")}
            className="btn btn-xs btn-success mt-2"
          >
            Add Member
          </button>
        </fieldset>

        {/* Team Two Members */}
        <fieldset className="fieldset col-span-3">
          <legend className="fieldset-legend">Team Two Members</legend>
          {form.teamTwoMembers.map((member, idx) => (
            <div key={idx} className="flex gap-2 items-center mb-2">
              <input
                type="text"
                placeholder="Name"
                className="input"
                value={member.name}
                onChange={(e) =>
                  handleTeamMember(
                    "teamTwoMembers",
                    idx,
                    "name",
                    e.target.value
                  )
                }
              />
              <input
                type="text"
                placeholder="Role"
                className="input"
                value={member.role}
                onChange={(e) =>
                  handleTeamMember(
                    "teamTwoMembers",
                    idx,
                    "role",
                    e.target.value
                  )
                }
              />
              <input
                type="number"
                placeholder="Age"
                className="input"
                value={member.age ?? ""}
                onChange={(e) =>
                  handleTeamMember(
                    "teamTwoMembers",
                    idx,
                    "age",
                    Number(e.target.value)
                  )
                }
              />
              <label>
                Captain
                <input
                  type="checkbox"
                  checked={member.isCaptain}
                  onChange={(e) =>
                    handleTeamMember(
                      "teamTwoMembers",
                      idx,
                      "isCaptain",
                      e.target.checked
                    )
                  }
                />
              </label>
              <button
                type="button"
                onClick={() => removeTeamMember("teamTwoMembers", idx)}
                className="btn btn-xs btn-error"
              >
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addTeamMember("teamTwoMembers")}
            className="btn btn-xs btn-success mt-2"
          >
            Add Member
          </button>
        </fieldset>

        {error && <div className="col-span-3 text-red-500">{error}</div>}
        {loading && (
          <div className="col-span-3">
            <LoadingMessage mzg="Match adding..." />
          </div>
        )}
        {success && (
          <div className="col-span-3">
            <SuccessMessage
              id={null}
              mzg="Match Adding successfully! Your page will be refresh within 5 seconds"
            />
          </div>
        )}

        <button className="btn btn-primary mt-3 col-span-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMatchData;
