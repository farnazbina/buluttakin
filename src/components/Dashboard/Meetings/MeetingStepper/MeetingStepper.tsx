import React, { useState } from "react";
import GetEmail from "./GetEmail";
import Courses from "./Courses";
import PreviewMeeting from "./PreviewMeeting";
import { Button } from "@headlessui/react";

interface Step {
  step: number;
  title: string;
  subTitle: string;
}

const MeetingStepper = () => {
  const [step, setStep] = useState<number>(1);
  const [steps, setSteps] = useState<Step[]>([
    {
      step: 1,
      title: "Email",
      subTitle: "Set Date",
    },
    {
      step: 2,
      title: "Course",
      subTitle: "Select Course",
    },
    {
      step: 3,
      title: "Preview",
      subTitle: "Preview Detail",
    },
  ]);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="stepper flex flex- px-4 h-full">
      <div className="basis-1/3 border-r border-blue-300 border-dashed pl-8 pt-16 h-full">
        {steps.map((item, index) => {
          return (
            <div key={item.step}>
              <div className="flex items-center">
                <div
                  className={`flex items-center justify-center rounded-lg w-10 h-10 mr-5 ${
                    item.step === step ? "bg-blue-500" : "bg-blue-100"
                  }`}
                >
                  <span
                    className={`text-lg leading-6 ${
                      item.step === step ? "text-white" : "text-blue-500"
                    }`}
                  >
                    {item.step}
                  </span>
                </div>
                <div>
                  <span
                    className={`leading-5 block ${
                      item.step === step ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span className="text-gray-500 text-xs leading-5">
                    {item.subTitle}
                  </span>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="divider w-1 h-10 border-r border-blue-500 border-dashed pl-5 my-1"></div>
              )}
            </div>
          );
        })}
      </div>
      <div className="basis-2/3 px-12 h-full relative">
        <div>
          <div>
            {(() => {
              switch (step) {
                case 1:
                  return <GetEmail />;
                case 2:
                  return <Courses />;
                case 3:
                  return <PreviewMeeting />;
                default:
                  return null;
              }
            })()}
          </div>
        </div>
        <div
          className={`actions flex items-center px-12 absolute bottom-0 right-0 w-full ${
            step > 1 ? "justify-between" : "justify-end"
          }`}
        >
          {step > 1 && (
            <Button
             className="inline-flex items-center justify-center border border-solid border-brand-700 rounded-lg bg-white p-3 font-bold text-brand-700 w-[93px]"
             onClick={handlePrevStep}
             >
              Back
            </Button>
          )}
          <Button
            className="inline-flex items-center justify-center rounded-lg bg-brand-700 p-3 font-bold text-white w-[93px]"
            onClick={handleNextStep}
          >
            {step === 3 ? 'Complete' : 'Continue'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingStepper;
