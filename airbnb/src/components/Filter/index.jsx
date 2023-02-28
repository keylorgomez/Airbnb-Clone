import React, { useState } from 'react'
import {links} from '../../assets/image-links'
import './style.css'


function Filter() {
    const [selectedFilter,setSelectedFilter]=useState()
  return (
    <div className='filterDiv'>
      {links.map((item,i)=>(
        <div key={i} className={`linksBox ${i==selectedFilter && "selectedBox" }`} onClick={()=>{
            console.log("selecting key ",i);
            setSelectedFilter(i)}}>
            <img src={item.imgSrc} className='linksImg'/>
            <p className={`linksLabel ${i==selectedFilter && "selectedLabel" }`}>{item.label}</p>
        </div>
        ))}
    </div>
  )
}

export default Filter;
