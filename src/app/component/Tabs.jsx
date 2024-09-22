'use client';
import React, { useState, useCallback } from 'react';
import Tab from './Tab';
import TabContent from './TabContent';
import Form from './Form';

const Tabs = () => {
  const [tabs, setTabs] = useState([{ id: 1, label: 'Tab 1', formData: {} }]);
  const [activeTab, setActiveTab] = useState(0);

  const addTab = useCallback(() => {
    const newTabId = tabs.length + 1;
    setTabs(prevTabs => [...prevTabs, { id: newTabId, label: `Tab ${newTabId}`, formData: {} }]);
    setActiveTab(tabs.length);
  }, [tabs.length]);

  const updateFormData = useCallback((index, newData) => {
    setTabs(prevTabs => prevTabs.map((tab, i) => 
      i === index ? { ...tab, formData: { ...tab.formData, ...newData } } : tab
    ));
  }, []);

  const closeTab = useCallback((index) => {
    setTabs(prevTabs => {
      const newTabs = prevTabs.filter((_, i) => i !== index);
      if (index === activeTab && newTabs.length > 0) {
        setActiveTab(index === 0 ? 0 : index - 1);
      } else if (newTabs.length === 0) {
        setActiveTab(null);
      } else if (index < activeTab) {
        setActiveTab(prevActiveTab => prevActiveTab - 1);
      }
      return newTabs;
    });
  }, [activeTab]);

  const handleTabClick = useCallback((index) => {
    setActiveTab(index);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-start space-x-2 mb-6 overflow-x-auto">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            label={tab.label}
            isActive={index === activeTab}
            onClick={() => handleTabClick(index)}
            onClose={() => closeTab(index)}
          />
        ))}
        <button 
          onClick={addTab} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
        >
          + New Tab
        </button>
      </div>
      {activeTab !== null && tabs[activeTab] && (
        <TabContent content={
          <Form 
            key={tabs[activeTab].id}
            formData={tabs[activeTab].formData}
            onChange={(newData) => updateFormData(activeTab, newData)}
          />
        } />
      )}
    </div>
  );
};

export default Tabs;
