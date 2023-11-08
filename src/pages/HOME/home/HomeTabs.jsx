import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const HomeTabs = () => {

   const [jobData, setJobData] = useState()

//    useEffect(() => {
//     fetch(`http://localhost:5000/jobs/${category}`)
//     .then(res => res.json())
//     .catch(error => {
//         console.log(error)
//     })
//   }, []);

    return (
        <Tabs className="mt-10">
    <TabList>
      <Tab>Web Development</Tab>
      <Tab>Digital Marketing</Tab>
      <Tab>Graphics Design</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    );
};

export default HomeTabs;