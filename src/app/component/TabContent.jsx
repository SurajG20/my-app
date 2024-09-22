import React from 'react';
import PropTypes from 'prop-types';
const TabContent = ({ content, className = '' }) => {
  return (
    <div className={`p-6 md:p-8 lg:p-16 border rounded-lg shadow-md bg-white overflow-auto ${className}`}>
      {typeof content === 'string' ? (
        <p className="text-gray-800">{content}</p>
      ) : (
        content
      )}
    </div>
  );
};

TabContent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
};

export default TabContent;
