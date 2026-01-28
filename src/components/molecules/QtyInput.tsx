import React, { useState } from 'react';

interface QtyInputProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  className?: string;
  placeholder?: string;
}

const QtyInput: React.FC<QtyInputProps> = ({
  value = 1,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  onChange,
  className = '',
  placeholder = '1',
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleIncrement = () => {
    const newValue = Math.min(currentValue + step, max);
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(currentValue - step, min);
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || min;
    const clampedValue = Math.max(min, Math.min(newValue, max));
    setCurrentValue(clampedValue);
    onChange?.(clampedValue);
  };

  return (
    <div
      className={`flex flex-row justify-end self-end w-[50%]${className ? ` ${className}` : ''}`}
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={disabled || currentValue <= min}
        className="flex items-center border border-gray-300 bg-white p-3 lg:max-xl:px-2 w-10 h-10 justify-center border-r-0 rounded-tl rounded-bl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          width="12"
          height="3"
          viewBox="0 0 12 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.583 2.16667H1.41634C0.947591 2.16667 0.583008 1.80208 0.583008 1.33333C0.583008 0.890625 0.947591 0.5 1.41634 0.5H10.583C11.0257 0.5 11.4163 0.890625 11.4163 1.33333C11.4163 1.80208 11.0257 2.16667 10.583 2.16667Z"
            fill="#1C58EE"
          />
        </svg>
      </button>

      <input
        type="number"
        value={currentValue}
        onChange={handleInputChange}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        placeholder={placeholder}
        className="h-10 min-w-[40px] border border-gray-300 bg-white py-3 px-2 text-center placeholder-black disabled:opacity-50 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
      />

      <button
        type="button"
        onClick={handleIncrement}
        disabled={disabled || currentValue >= max}
        className="flex justify-center border border-gray-300 bg-white p-3 lg:max-xl:px-2 w-10 h-10 rounded-tr rounded-br border-l-0 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4163 6.33332C11.4163 6.80207 11.0257 7.1927 10.583 7.1927H6.83301V10.9427C6.83301 11.3854 6.44238 11.75 5.99967 11.75C5.53092 11.75 5.16634 11.3854 5.16634 10.9427V7.1927H1.41634C0.947591 7.1927 0.583008 6.80207 0.583008 6.33332C0.583008 5.89061 0.947591 5.52603 1.41634 5.52603H5.16634V1.77603C5.16634 1.30728 5.53092 0.916656 5.99967 0.916656C6.44238 0.916656 6.83301 1.30728 6.83301 1.77603V5.52603H10.583C11.0257 5.49999 11.4163 5.89061 11.4163 6.33332Z"
            fill="#1C58EE"
          />
        </svg>
      </button>
    </div>
  );
};

export default QtyInput;
