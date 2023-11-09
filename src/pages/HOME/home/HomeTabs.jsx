import {  useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Web from './Web';
import { AuthContext } from '../../Shared/provider/AuthProvider';

const HomeTabs = () => {

  // const jobs = useLoaderData()
  // console.log(jobs)
  // const {user}= useContext(AuthContext)
  const url = `https://sabilas-web-school.vercel.app/jobs/jobs`
  const [jobs, setJobs]=useState([])
  const [selectedTabs, setSelectedTabs]= useState()

  const handleChange = () =>{
    setSelectedTabs()
  } 
 
  useEffect(()=>{
  fetch(url)
  .then(response => response.json())
       .then(data => setJobs(data))
       .catch(error => console.error('Error fetching data', error));
  },[])
    return (
        <div>
            <Tabs value={jobs} onChange={handleChange} className="mt-10">
    <TabList>
      <Link ><Tab >Web Development</Tab></Link>
      <Tab>Digital Marketing</Tab>
      <Tab>Graphics Design</Tab>
    </TabList>

    <TabPanel>
      <h2></h2>
    </TabPanel>
    <TabPanel>
      <h2></h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

  
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
   {
        jobs.map(job => <Web key={job._id} job={job}></Web>)
    }
   </div>
  
        </div>
    );
};

export default HomeTabs;