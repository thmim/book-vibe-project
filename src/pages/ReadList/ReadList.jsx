import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilities/addToDb';
import SingleBook from '../../components/SingleBook/SingleBook';
const ReadList = () => {
    const [readList,setReadList]=useState([]);
    const data=useLoaderData();
    console.log(data);
    useEffect(()=>{
        const storedBookData=getStoredBook();
        const convertedBooksData = storedBookData.map(id=>parseInt(id))
        const myReadList = data.filter(book=>convertedBooksData.includes(book.bookId))
        setReadList(myReadList);
    },[])
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>Read Whistle</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content {readList.length}</h2>
      {
        readList.map(b=><SingleBook key={b.bookId} oneBook={b}></SingleBook>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default ReadList;