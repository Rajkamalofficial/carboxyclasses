"use client"
import React from 'react';
import Tab12th from '@/components/tabs/Tab12th';
import Tab11th from '@/components/tabs/Tab11th';
import Tab10th from '@/components/tabs/Tab10th';
import Tab9th from '@/components/tabs/Tab9th';
import Tab from '@/components/tabs/Tab';


const Classtabs = () => {
  const [activeTab, setActiveTab] = React.useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
    <div className="tabs" >
      <Tab
        label="Class 12th"
        id={1}
        isActive={activeTab === 1}
        onClick={handleTabClick}
        className={`tab ${activeTab === 1 ? 'active' : ''}`}
      />
      
      <Tab
        label="Class 11th"
        id={2}
        isActive={activeTab === 2}
        onClick={handleTabClick}
        className={`tab ${activeTab === 1 ? 'active' : ''}`}
      />
      <Tab
        label="Class 10th"
        id={3}
        isActive={activeTab === 3}
        onClick={handleTabClick}
        className={`tab ${activeTab === 1 ? 'active' : ''}`}
      />
      <Tab
        label="Class 9th"
        id={4}
        isActive={activeTab === 4}
        onClick={handleTabClick}
        className={`tab ${activeTab === 1 ? 'active' : ''}`}
      />
    </div>
    <div className='content-container'>

      {activeTab === 1 && <Tab12th />}
      {activeTab === 2 && <Tab11th />}
      {activeTab === 3 && <Tab10th />}
      {activeTab === 4 && <Tab9th />}
    </div>
    
    </>
  );
};

export default Classtabs;