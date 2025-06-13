import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import { Link } from "react-router-dom";
import MyWork_Data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Last Work</h1>
        </div>

        <div className="mywork-container">
        {MyWork_Data.map((work, index) => (
          <Link key={index} to={work.url}>
            <img src={work.w_img} alt={work.w_name} className="cursor-pointer hover:opacity-80 transition" />
          </Link>
        ))}
      </div>
       
    </div>
  )
}

export default MyWork