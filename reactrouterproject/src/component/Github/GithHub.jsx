import React, { useState } from 'react'
import { useEffect } from 'react'
const GithHub = () => {
    const[data,setdata]=useState([]);
    useEffect(() => {
     fetch('https://api.github.com/users/Jaysawant5121')
     .then(response=>response.json())
     .then(data=>{
         console.log(data);
         setdata(data)
     })
    }, [])
    
  return (
    <div className='bg-gray-500 text-3xl p-4 text-center m-4 text-orange-400'>
      GitHub followers:{data.followers}<br/>
      GitHub following:{data.following}
      <img src={data.avatar_url} alt="Git picture" width={400}  />
    </div>
  )
}

export default GithHub
