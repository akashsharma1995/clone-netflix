import React from "react";
import { motion } from "framer-motion";

const Modal = ({ handleModalClose, children }) => {
  return (
    <div
      className="z-20 fixed top-0 left-0 w-full h-full min-h-screen overflow-auto bg-black/40 flex items-center justify-center"
      onClick={() => handleModalClose()}
    >
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, y: 300 }}
        className="m-auto border border-solid border-zinc-400 w-full min-h-[100vh] sm:min-h-fit max-w-[600px] sm:rounded-md relative backdrop-blur-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex justify-end px-5 py-2.5 border-b border-solid border-b-zinc-400">
          <span onClick={() => handleModalClose()} className="text-white cursor-pointer">&#10006;</span>
        </div>
        <div className="text-white p-5 flex gap-3.5">{children}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
