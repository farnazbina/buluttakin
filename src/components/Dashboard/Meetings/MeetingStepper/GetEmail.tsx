import React, { useState } from "react";
import { Field, Input, Label, Radio, RadioGroup } from "@headlessui/react";
import { DoubleMessageIcon, RadioCircle } from "../../../../assets/icons";

interface Date {
  id: number;
  date: string;
  time: string;
}

const GetEmail = () => {
  const [dates, setDate] = useState<Date[]>([
    {
      id: 1,
      date: "Sunday",
      time: "1402/12/07 - 08:00",
    },
    {
      id: 2,
      date: "Monday",
      time: "1402/12/07 - 09:00",
    },
    {
      id: 3,
      date: "Tuesday",
      time: "1402/12/07 - 10:00",
    },
  ]);
  const [selected, setSelected] = useState(dates[0]);

  return (
    <div>
      <Field>
        <Label className="leading-6 font-medium text-gray-900">
          Email <span className="text-error-500">* </span>
        </Label>
        <Input className="mt-3 block w-full mb-6 rounded-lg border-none bg-gray-100 h-11 py-1.5 px-3 text-gray-900 focus:outline-blue-300 focus:bg-white data-[focus]:outline-1 data-[focus]:-outline-offset-1 data-[focus]:outline-blue-300" />
      </Field>
      <span className="leading-6 font-medium text-gray-900 block mb-4">
        Date <span className="text-error-500">* </span>
      </span>
      <RadioGroup
        value={selected}
        onChange={setSelected}
        aria-label="Server size"
        className="space-y-4"
      >
        {dates.map((item) => (
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
                    {item.time}
                  </span>
                  <span className="text-gray-400 leading-3 text-xs">
                    {item.date}
                  </span>
                </div>
              </div>
              <RadioCircle inner={item.id === selected.id ? 'white' : '#EAECF0'} outer={item.id === selected.id ? '#2E90FA' : '#EAECF0'} />
            </div>
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
};

export default GetEmail;
