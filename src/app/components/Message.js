// Modal.js

import React, { useState } from "react";
import { MdOutlineArrowCircleRight, MdOutlineClose } from "react-icons/md";
import CartItems from "./CartItems";
import { FaCoins } from "react-icons/fa";
import CalendarItems from "./CalendarItems";

const Message = ({ isChat }) => {
  if (!isChat) return null;

  return (
    <div
      className={`fixed md:left-8 -left-4 top-12 sm:top-8 inset-0 z-10 overflow-y-auto  w-full flex`}
    >
      <div
        className={`px-2 md:px-4  bg-white dark:bg-gray-800 rounded-md shadow-xl ransition transform ease-out duration-100 scale-90 `}
      >
        <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg max-w-lg w-96">
          <div class="p-4 border-b bg-gray-200 dark:bg-gray-700  rounded-t-lg flex justify-between items-center">
            <p class="text-lg font-semibold text-black dark:text-gray-200 ">
              Admin Bot
            </p>
            <button
              id="close-chat"
              class="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
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
            </button>
          </div>
          <div id="chatbox" class="p-4 h-[30rem] overflow-y-auto">
            <div class="mb-2 text-right">
              <p class="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                hello
              </p>
            </div>
            <div class="mb-2">
              <p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
            <div class="mb-2 text-right">
              <p class="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                this example of chat
              </p>
            </div>
            <div class="mb-2">
              <p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
            <div class="mb-2 text-right">
              <p class="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                design with tailwind
              </p>
            </div>
            <div class="mb-2">
              <p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
                This is a response from the chatbot.
              </p>
            </div>
          </div>
          <div class="p-4 border-t flex gap-2">
            <input
              id="user-input"
              type="text"
              placeholder="Type a message"
              class="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              id="send-button"
              class="dark:bg-gray-200 bg-gray-400 dark:text-black text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
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
