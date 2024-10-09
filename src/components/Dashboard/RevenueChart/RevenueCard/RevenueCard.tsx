import React from "react";

const RevenueCard = (props: any) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md shadow-transparent mt-6 relative w-full transition-all duration-300 ease-in-out border border-solid border-white hover:border-brand-700 hover:shadow-brand-200">
      <span className="text-gray-900 font-bold text-lg">
        {props.item.title}
      </span>
      <h1 className="text-gray-900 font-bold text-[32px] mt-4">
        {props.item.amount}
      </h1>
      <span className={`text-lg font-bold rounded-full py-1 px-2 absolute top-[62px] right-[25px] ${props.item.percentage > 0 ? 'bg-success-100 text-success-700' : 'bg-error-100 text-error-500'}`}>
        {props.item.percentage} %
      </span>
    </div>
  );
};

export default RevenueCard;
