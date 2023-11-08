import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Web from './Web';

const HomeTabs = () => {

//   const tabsss = useLoaderData()
  const [selectedTabs, setSelectedTabs]= useState()

  const handleChange = (email) =>{
    setSelectedTabs(email)
  } 

    return (
        <div>
            <Tabs value={selectedTabs} onChange={handleChange} className="mt-10">
    <TabList>
      <Tab >Web Development</Tab>
      <Tab>Digital Marketing</Tab>
      <Tab>Graphics Design</Tab>
    </TabList>

    <TabPanel>
      <h2><Web></Web></h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

  
    {/* {
        tabsss.map(tabb => <Web key={tabb._id} tabb={tabb}></Web>)
    }
   */}
        </div>
    );
};

export default HomeTabs;