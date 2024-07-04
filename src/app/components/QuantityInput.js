import { useState } from "react";

const QuantityInput = ({ count = 0 }) => {
  const [quantity, setQuantity] = useState(count);

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="custom-number-input h-auto w-20 bg-white dark:bg-gray-800">
      <div className="flex flex-row h-6 w-full  rounded-lg relative bg-transparent mt-1">
        <button
          onClick={decrement}
          className="text-gray-400 dark:text-gray-200 hover:text-gray-800 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-xl font-thin dark:text-gray-200">−</span>
        </button>
        <input
          type="number"
          className="mt-1 outline-none focus:outline-none text-center w-full font-semibold text-md dark:bg-gray-800 md:text-base cursor-default flex items-center text-gray-700 dark:text-gray-200"
          name="custom-input-number"
          value={quantity}
          onChange={handleChange}
        ></input>
        <button
          onClick={increment}
          className="text-gray-400 dark:text-gray-200  h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-xl font-thin dark-text-gray-200">+</span>
        </button>
      </div>
    </div>
  );
};

export default QuantityInput;
