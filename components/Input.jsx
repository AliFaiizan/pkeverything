import React, { useMemo } from 'react';

const Input = ({ type, options, title, placeholder, handleClick }) => {
  const inputstyles = useMemo(() => 'dark:bg-w-black-1 bg-w-grey-1 border border-color rounded-lg w-full outline-none font-poppins dark:text-white text-w-grey-2 text-base mt-4 px-4 py-3', []);
  return (
    <div className="mt-10 w-full ">
      <p className="font-poppins text-color font-semibold text-xl">{title}</p>
      {type === 'number' ? (
        <div className={`${inputstyles} flexBetween flex-row`}>
          <input
            type={type}
            className="flex w-full dark:bg-w-black-1 bg-w-grey-1 outline-none "
            placeholder={placeholder}
            onChange={handleClick}
          />
        </div>
      ) : type === 'textarea' ? (
        <div className="flex flex-row">
          <textarea
            rows={10}
            className={`${inputstyles}`}
            placeholder={placeholder}
            onChange={handleClick}
          />
        </div>
      ) : options ? (
        <input
          className={inputstyles}
          type={type}
          placeholder={placeholder}
          onChange={handleClick}
        />
      ) : (
        <input
          className={inputstyles}
          type={type}
          placeholder={placeholder}
          onChange={handleClick}
        />
      )}
    </div>
  );
};

export default Input;
