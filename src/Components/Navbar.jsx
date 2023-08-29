import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faCog } from '@fortawesome/fontawesome-free-solid';

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='flex items-center w-full px-10 py-6 shadow-md bg-blue-50'>
      <div className='font-semibold text-4xl text-blue-800'>Logo</div>
      <div className='ml-auto relative'>
        <div
          className='flex items-center rounded-full shadow-md bg-blue-100 px-6 py-2 cursor-pointer'
          onClick={toggleDropdown}
        >
          <div className='font-semibold text-gray-800'>Umang Singh</div>
          <div className='ml-2'>
            <FontAwesomeIcon icon={faUser} size='2xl' />
          </div>
        </div>
        {isDropdownOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg'>
            <ul className='py-2'>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                <FontAwesomeIcon icon={faCog} className='mr-2' />
                Settings
              </li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                <FontAwesomeIcon icon={faSignOutAlt} className='mr-2' />
                Log Out
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
