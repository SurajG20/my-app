import React from 'react';

const Tab = ({ label, isActive, onClick, onClose }) => {
  return (
    <div
      className={`flex justify-between items-center gap-x-4 py-2 px-4 rounded-t-lg shadow-md cursor-pointer transition-colors duration-200 ${
        isActive ? 'bg-white text-primary' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
      }`}
      onClick={onClick}
    >
      <span className="font-medium truncate max-w-[150px]">{label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="ml-2 text-gray-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-full p-1"
        aria-label="Close tab"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default Tab;
