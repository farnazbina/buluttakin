import React, { useState } from "react";
import { Button } from "@headlessui/react";
import MeetingCard from "./MeetingCard/MeetingCard";
import NewMeetingModal from "./NewMeetingModal/NewMeetingModal";

const Meetings = () => {
  const [meetingModal, setMeetingModal] = useState<boolean>(false);
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      owner: "Livia Stanton",
      ownerPhoto: "../../../../assets/images/Frame.png",
      subject: "Meeting scheduled",
      date: "1:24 PM",
    },
    {
      id: 2,
      owner: "Allison Lipshutz",
      ownerPhoto: "../../../../assets/images/Frame (1).png",
      subject: "Update on marketing campaign",
      date: "12:14 PM",
    },
    {
      id: 3,
      owner: "Martin Stanton",
      ownerPhoto: "../../../assets/images/Frame (2).png",
      subject: "Designly 2.0 is about to launch",
      date: "Dec 19 at 8:01 PM",
    },
    {
      id: 4,
      owner: "Alfredo Botosh",
      ownerPhoto: "../../../../assets/images/Frame.png",
      subject: "My friend Julie loves Dapper!",
      date: "Dec 19 at 6:11 PM",
    },
    {
      id: 5,
      owner: "Ann Philips",
      ownerPhoto: "../../../../assets/images/Frame (1).png",
      subject: "My friend Julie loves Dapper!",
      date: "Dec 19 at 6:11 PM",
    },
  ]);

  const handleAddNewMeeting = () => {
    setMeetingModal(true);
  };

  const handleCloseModal = () => {
    setMeetingModal(false);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <span className="text-gray-900 font-bold text-xl">Meeting Time</span>
        <Button
          className="inline-flex items-center gap-2 rounded-lg bg-gray-100 py-1.5 px-3 text-sm/6 font-semibold text-brand-700 border border-brand-700 shadow-inner shadow-white/10"
          onClick={handleAddNewMeeting}
        >
          Add Meeting
        </Button>
      </div>
      <div className="flex flex-wrap mt-3 pb-3 w-full">
        {meetings.map((item) => {
          return <MeetingCard key={item.id} item={item} />;
        })}
      </div>
      <NewMeetingModal isOpen={meetingModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Meetings;
