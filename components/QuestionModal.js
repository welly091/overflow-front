import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import Image from "next/image";
import Link from 'next/link';
// import id from '../pages/question/[id]'
import QuestionForm from "./Form";



const QuestionModal = ({create}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex md:flex-col justify-center items-center mt-10 ">
      <div className="flex gap-5 ">
        <button
          className="bg-red-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add your question here <AiFillFire className="text-xl" />
        </button>
      </div>
      {showModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          <h2 className="text-base mt-1 mx-1 text-gray-400 font-semibold text-center">


          <div>
          <QuestionForm className='mx-auto' create={create} close={setShowModal} />
          </div>


          </h2>
          <button
            className="my-1 w-auto px-8 h-10 bg-red-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
            onClick={() => setShowModal(false)}
          >
           close
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionModal;

