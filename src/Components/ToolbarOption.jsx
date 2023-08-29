import React from 'react';

const SubOption = ({ subOptions }) => {
  return (
    <ul className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48">
      {subOptions.map((subOption, index) => (
        <li
          key={index}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {subOption}
        </li>
      ))}
    </ul>
  );
};

export default SubOption;
