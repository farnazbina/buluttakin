import React, { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { DoubleMessageIcon, RadioCircle } from "../../../../assets/icons";

interface Date {
  id: number;
  title: string;
  name: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Date[]>([
    {
      id: 1,
      title: "Financial",
      name: "Ehsan Ebrahimi",
    },
    {
      id: 2,
      title: "Accounting",
      name: "Sajjad Tahami",
    },
    {
      id: 3,
      title: "Accounting Tax",
      name: "Mehrdad Moradpour",
    },
  ]);
  const [selected, setSelected] = useState(courses[0]);
  return (
    <div>
      <span className="leading-6 font-medium text-gray-900 block mb-4">
        Course <span className="text-error-500">* </span>
      </span>
      <RadioGroup
        value={selected}
        onChange={setSelected}
        aria-label="Server size"
        className="space-y-4"
      >
        {courses.map((item) => (
          <Radio
            key={item.id}
            value={item}
            className="group relative flex cursor-pointer transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex w-full items-center">
                <div className="icon-box py-3 px-[10px] mr-4 bg-brand-700 rounded-lg p-2">
                  <DoubleMessageIcon />
                </div>
                <div>
                  <span className="text-gray-900 font-bold leading-5 block">
                    {item.title}
                  </span>
                  <span className="text-gray-400 leading-3 text-xs">
                    {item.name}
                  </span>
                </div>
              </div>
              <RadioCircle
                inner={item.id === selected.id ? "white" : "#EAECF0"}
                outer={item.id === selected.id ? "#2E90FA" : "#EAECF0"}
              />
            </div>
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Courses;
