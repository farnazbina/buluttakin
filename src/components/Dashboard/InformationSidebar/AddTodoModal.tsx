import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Input,
} from "@headlessui/react";
import { useState } from "react";
import MultiSelectBox from "../../MultiSelectBox";
import { ClocksIcon } from "../../../assets/icons/index";

interface MyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  addTodo: (newTodo: Todo) => void;
}

interface Todo {
  id: number; // or string if you prefer
  title: string;
  icon: JSX.Element; // or a specific icon type
  date: string;
}

export const BUSINESS_MODEL_OPTIONS = [
  {
    value: "Matin abbasi",
    label: "Matin abbasi",
    id: "0234",
    img: "../assets/images/Frame.png",
  },
  {
    value: "Matin ghadri",
    label: "Matin ghadri",
    id: "0874",
    img: "../assets/images/Frame.png",
  },
  {
    value: "Matin kazemi",
    label: "Matin kazemi",
    id: "0987",
    img: "../assets/images/Frame.png",
  },
  {
    value: "Matin hasani",
    label: "Matin hasani",
    id: "0877",
    img: "../assets/images/Frame.png",
  },
  {
    value: "Matin mohammadi",
    label: "Matin mohammadi",
    id: "0845",
    img: "../assets/images/Frame.png",
  },
  {
    value: "Matin alipour",
    label: "Matin alipour",
    id: "0457",
    img: "../assets/images/Frame.png",
  },
];

const MyDialog: React.FC<MyDialogProps> = ({ isOpen, onClose, addTodo }) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim()) {
      const newTodo: Todo = {
        id: Math.random(),
        title,
        icon: <ClocksIcon />,
        date: new Date().toLocaleString(),
      };
      addTodo(newTodo);
      setTitle("");
      onClose();
    }
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      transition
      className="relative z-10 focus:outline-none"
      onClose={onClose}
    >
      <DialogBackdrop className="fixed inset-0 bg-[#19191966] duration-300 ease-in-out" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-[700px] h-4/5 rounded bg-white p-6 backdrop-blur-2xl duration-300 ease-in-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="text-2xl font-semibold text-brand-700 text-center"
            >
              Add to do
            </DialogTitle>
            <form onSubmit={handleSubmit}>
              <div>
                <Field className="w-full mb-8">
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="write a title"
                    className="mt-3 w-full block rounded border border-solid border-gray-600 bg-white/5 py-3 px-4 text-gray-900 placeholder-gray-900 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  />
                </Field>
                <MultiSelectBox options={BUSINESS_MODEL_OPTIONS} required />
              </div>
              <div className="mt-4 flex justify-end fixed bottom-4 right-6">
                <Button
                  className="inline-flex items-center gap-2 rounded bg-brand-100 py-3 px-5 text-sm/6 font-semibold text-brand-700 shadow-inner shadow-white/10 "
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  className="inline-flex ml-4 items-center gap-2 rounded bg-brand-700 py-3 px-5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 "
                  type="submit"
                >
                  Accept
                </Button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default MyDialog;
