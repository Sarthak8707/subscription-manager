import React from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';

const Home = () => {
    const userID = window.localStorage.userID;
    const [subs, setSubs] = useState([]);

    useEffect(() => {
        const fetchSubs = async () => {
            const response = await axios.get(`http://localhost:3001/subscriptions/${userID}`);
            console.log(response.data);
            setSubs(response.data);
        }
        fetchSubs();
    }, [])

  return (
    <div>
        <h2>
        Hello, User!
        </h2>
        <br/>
        <h2>
            Here are your Subscriptions:
        </h2>
        <br />
        {subs.map((sub, idx) => (
            <div>
               {idx+1} {" "} {sub.name}
            </div>
        ))}

       {/* // <NewSub /> */}

         
    </div>
  )
}

export default Home

