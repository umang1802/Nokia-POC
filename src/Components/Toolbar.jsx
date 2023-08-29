import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faColumns, faBug, faFile } from '@fortawesome/free-solid-svg-icons';
import SubOption from './ToolbarOption';

const Toolbar = () => {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    if (activeOption === option) {
      setActiveOption(null);
    } else {
      setActiveOption(option);
    }
  };

  const toolbarOptions = [
    { icon: faHome, label: 'Home', subOptions: [] },
    {
      icon: faColumns,
      label: 'Layout',
      subOptions: ['Layout 1', 'Layout 2', 'Layout 3'],
    },
    {
      icon: faFile,
      label: 'Module',
      subOptions: ['Module 1', 'Module 2', 'Module 3'],
    },
    {
      icon: faBug,
      label: 'Debug',
      subOptions: ['Debug 1', 'Debug 2', 'Debug 3'],
    },
  ];

  return (
    <div className="flex bg-gray-100 py-2 px-4">
      {toolbarOptions.map((option, index) => (
        <div key={index} className="relative mr-4">
          <button
            className={`p-2 rounded ${
              activeOption === option.label ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => handleOptionClick(option.label)}
          >
            <FontAwesomeIcon icon={option.icon} />
          </button>
          {activeOption === option.label && (
            <SubOption subOptions={option.subOptions} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Toolbar;
