import React, { useState } from 'react';

const DropdownNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/cv">CV</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownNavigation;