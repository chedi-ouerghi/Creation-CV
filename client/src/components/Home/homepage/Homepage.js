import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomeCards from '../../common/cv/RoutesCv/HomeCards';
import SideBar from '../../common/sidebar/SideBar';
import '../../layout/main/main.css'
import Aboutus from './aboutus/Aboutus'
import Help from './help/Help'


const Homepage = () => {
  return (
    <div className='maincontent'>

        <div className='rigthcontent'>
        <SideBar/>

        </div>
        <div className='leftcontent'>
          
        <Routes>
        <Route path='/create' element={<HomeCards />} />
        <Route path='/*' element={<Aboutus />} />
          <Route path='/help' element={<Help />} />
        </Routes>
        </div>
    </div>
    )
}

export default Homepage
