"use Client";
import React from "react";
import Link from "next/link";

const Category = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-600">
      <div className="sm:p-4 p-2  text-gray-600 dark:text-gray-300 whitespace-nowrap">
        <h3 className="text-gray-600 font-bold">Delivered to You</h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-4  sm:px-4 py-4 text-sm border-b text-gray-600 dark:text-gray-300">
          <Link href="/wearables">
            <div className="relative w-42 sm:w-48 md:w-48 h-24 md:h-32">
              <img
                className="rounded-2xl w-full h-full"
                src="https://i.pinimg.com/236x/6d/de/94/6dde943f01f50e35ff93aaf12547229d.jpg"
                alt="wearables"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-2xl">
                <span className="text-white text-sm md:text-lg  font-bold">
                  Wearables
                </span>
              </div>
            </div>
          </Link>
          <Link href="/foods">
            <div className="relative w-42 sm:w-48 md:w-48 h-24 md:h-32 ">
              <img
                className="rounded-2xl w-full h-full"
                src="https://i.pinimg.com/236x/98/b5/5b/98b55b61b77fb05cfe91063d39436f40.jpg"
                alt="foods"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-2xl">
                <span className="text-white text-sm md:text-lg  font-bold">
                  Foods
                </span>
              </div>
            </div>
          </Link>
          <Link href="/furnitures">
            <div className="relative w-42 sm:w-48 md:w-48 h-24 md:h-32">
              <img
                className="rounded-2xl w-full h-full"
                src="https://i.pinimg.com/236x/8a/15/1d/8a151db466b3ce12b7aac2710dce129c.jpg"
                alt="furnitures"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-2xl">
                <span className="text-white text-sm md:text-lg  font-bold">
                  Furnitures
                </span>
              </div>
            </div>
          </Link>
          <Link href="/electronics">
            <div className="relative w-42 sm:w-48 md:w-48 h-24 md:h-32 ">
              <img
                className="rounded-2xl w-full h-full"
                src="https://i.pinimg.com/236x/fd/56/fe/fd56fe106a889d7842bd4e519a95d5c8.jpg"
                alt="electronics and accessories"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-2xl">
                <span
                  className="text-white text-sm md:text-lg font-bold leading-none px-2 flex flex-col items-center "
                  style={{ lineHeight: "1" }}
                >
                  Electronics
                  <div className="flex justify-center w-full text-xs md:text-sm">
                    And
                  </div>
                  Accessories
                </span>
              </div>
            </div>
          </Link>
          <Link href="/computers">
            <div className="relative w-42 sm:w-48 md:w-48 h-24 md:h-32">
              <img
                className="rounded-2xl w-full h-full"
                src="https://i.pinimg.com/236x/8a/15/1d/8a151db466b3ce12b7aac2710dce129c.jpg"
                alt="computers and accessories"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-2xl">
                <span
                  className="text-white text-sm md:text-lg font-bold leading-none px-2 flex flex-col items-center "
                  style={{ lineHeight: "1" }}
                >
                  Computers
                  <div className="flex justify-center w-full text-xs md:text-sm">
                    And
                  </div>
                  Accessories
                </span>
              </div>
            </div>
          </Link>
          <Link href="/mobiles">
            <div className="relative w-42 sm:w-48 md:w-48 h-24 md:h-32">
              <img
                className="rounded-2xl w-full h-full"
                src="https://i.pinimg.com/236x/42/c1/48/42c148573145d8aa1a8efa523420bc5e.jpg"
                alt="mobiles and accessories"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-2xl ">
                <span
                  className="text-white text-sm md:text-lg font-bold leading-none px-2 flex flex-col items-center "
                  style={{ lineHeight: "1" }}
                >
                  Mobiles
                  <div className="flex justify-center w-full text-xs md:text-sm">
                    And
                  </div>
                  Accessories
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="sm:p-4 p-2 text-gray-600 whitespace-nowrap dark:text-gray-300 ">
        <h3 className="text-gray-600 font-bold">Bookings & Appointments</h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-4  sm:px-4 py-4 text-sm border-b text-gray-600 dark:text-gray-300">
          <Link href="/services">
            <div className="relative w-42 sm:w-48 md:w-48 h-24 md:h-32 ">
              <img
                className="rounded-2xl w-full h-full"
                src="https://i.pinimg.com/236x/c3/c7/35/c3c735c3d76c5ab378c5d4f80b8ca632.jpg"
                alt="services"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-2xl">
                <span className="text-white text-sm md:text-lg  font-bold">
                  Services
                </span>
              </div>
            </div>
          </Link>
          <Link href="/holidays">
            <div className="relative w-42 sm:w-48 md:w-48 h-24 md:h-32">
              <img
                className="rounded-2xl w-full h-full"
                src="https://i.pinimg.com/236x/54/f4/ac/54f4ac395ff4538b6a7988773e843b6b.jpg"
                alt="holidays"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-2xl">
                <span className="text-white text-sm md:text-lg  font-bold">
                  Holidays
                </span>
              </div>
            </div>
          </Link>
          <Link href="/appointments">
            <div className="relative w-42 sm:w-48 md:w-48 h-24 md:h-32">
              <img
                className="rounded-2xl w-full h-full"
                src="https://i.pinimg.com/236x/2d/e1/41/2de1411d344ab9569d4acfa0d7735da6.jpg"
                alt="appointments"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-2xl">
                <span className="text-white text-sm md:text-lg  font-bold">
                  Appointments
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
