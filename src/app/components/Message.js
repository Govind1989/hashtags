// Modal.js

import React, { useState } from "react";

import { cardData } from "../../data";

const Message = ({ isChat, onClose, slug }) => {
  const shopName = cardData.find((item) => item.vendorSlug === slug).vendor;
  if (!isChat) return null;

  return (
    <div
      className={`fixed md:left-8 mx-auto top-14 sm:top-8 inset-0 z-10 overflow-y-auto  w-full flex`}
    >
      <div
        className={`px-2 md:px-4  bg-white dark:bg-gray-800 rounded-md shadow-xl ransition transform ease-out duration-100 scale-90 `}
      >
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg max-w-lg md:w-96 w-88 ">
          <div className="p-4 border-b bg-gray-200 dark:bg-gray-700  rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold text-black dark:text-gray-200 ">
              {shopName}
            </p>
            {/* <button
              id="close-chat"
              className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button> */}
          </div>
          <div id="chatbox" className="p-4 h-[30rem] overflow-y-auto">
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                hello
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                this example of chat
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
            <div className="mb-2 text-right">
              <p className="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                design with tailwind
              </p>
            </div>
            <div className="mb-2">
              <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
          </div>
          <div className="p-4 border-t flex gap-2">
            <input
              id="user-input"
              type="text"
              placeholder="Type a message"
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              id="send-button"
              className="dark:bg-gray-200 bg-gray-400 dark:text-black text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
