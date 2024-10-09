import React from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
} from "@headlessui/react";
import MeetingStepper from '../MeetingStepper/MeetingStepper';

interface MyDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const NewMeetingModal: React.FC<MyDialogProps> = ({ isOpen, onClose }) => {

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
                className="w-[990px] h-4/5 rounded bg-white p-6 backdrop-blur-2xl duration-300 ease-in-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <MeetingStepper />
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      );
}

export default NewMeetingModal