import React from 'react'
import Image from '../../assets/img.jpg';
import { FaPlus } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import './Details.css';
import DetailsInformation from './DetailsInformation';
function Details() {
  return (
    <div className='details'>
        <div className='details-header'>
            <div className='details-img'>
                <img src={Image}/>
            </div>
            <div className='details-name'>
                <h2>Rap Master</h2>
                <span>Coronary atherosclerosis - Latest diagnosis</span>
            </div>
            <div className='details-icons'>
                <button className='details-msg'><LuMessagesSquare /></button>
                <button className='details-new'><FaPlus /> Add New</button>
            </div>
        </div>
        <div className='details-nav'>
                <ul className='details-nav-ul'>
                    <li>Patient Info</li>
                    <li>Visits</li>
                    <li>Labs</li>
                    <li>Prescriptions</li>
                </ul>
        </div>
        <DetailsInformation/>
    </div>
  )
}

export default Details