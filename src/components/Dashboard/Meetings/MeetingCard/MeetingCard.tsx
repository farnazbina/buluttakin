import React from "react";

const MeetingCard = (props: any) => {
  return (
    <div className="bg-white rounded-lg px-4 py-2 mb-2 w-full h-[56px] flex flex-row items-center shadow-md shadow-transparent transition-all duration-300 ease-in-out border border-solid border-white hover:border-brand-700 hover:shadow-brand-200">
      <div className="basis-1/4">
        <img
          src={require("../../../../assets/images/Frame.png")}
          alt={props.item.owner}
        />
      </div>
      <div className="basis-2/4">
        <span>{props.item.owner}</span>
      </div>
      <div className="basis-3/4">
        <span>{props.item.subject}</span>
      </div>
      <div className="basis-2/4">
        <span>{props.item.date}</span>
      </div>
    </div>
  );
};

export default MeetingCard;
