import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { AiFillHome } from "react-icons/ai";
import { IoCalendarNumber } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";


const Sidebar = () => {

  const { dToken } = useContext(DoctorContext)
  const { aToken } = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-white border-r'>
      {aToken && <ul className='text-black mt-5'>

        <NavLink to={'/admin-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-fadeprimary hover:text-white ${isActive ? 'bg-fadeprimary text-white border-r-4 border-primary' : ''}`}>
          <AiFillHome className='cursor-pointer text-3xl' />
          <p className='hidden md:block'>Dashboard</p>
        </NavLink>
        <NavLink to={'/all-appointments'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-fadeprimary hover:text-white ${isActive ? 'bg-fadeprimary text-white border-r-4 border-primary' : ''}`}>
          <IoCalendarNumber className="cursor-pointer text-3xl" />
          <p className='hidden md:block'>Appointments</p>
        </NavLink>
        <NavLink to={'/add-doctor'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-fadeprimary hover:text-white ${isActive ? 'bg-fadeprimary text-white border-r-4 border-primary' : ''}`}>
          <FaPlusSquare className="cursor-pointer text-3xl" />
          <p className='hidden md:block'>Add Doctor</p>
        </NavLink>
        <NavLink to={'/doctor-list'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-fadeprimary hover:text-white ${isActive ? 'bg-fadeprimary text-white border-r-4 border-primary' : ''}`}>
          <BsFillPeopleFill className="cursor-pointer text-3xl" />
          <p className='hidden md:block'>Doctors List</p>
        </NavLink>
      </ul>}

      {dToken && <ul className='text-black mt-5'>
        <NavLink to={'/doctor-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-fadeprimary hover:text-white ${isActive ? 'bg-fadeprimary text-white border-r-4 border-primary' : ''}`}>
          <AiFillHome className="text-3xl" />
          <p className='hidden md:block'>Dashboard</p>
        </NavLink>
        <NavLink to={'/doctor-appointments'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-fadeprimary hover:text-white ${isActive ? 'bg-fadeprimary text-white border-r-4 border-primary' : ''}`}>
          <IoCalendarNumber className="text-3xl" />
          <p className='hidden md:block'>Appointments</p>
        </NavLink>
        <NavLink to={'/doctor-profile'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-fadeprimary hover:text-white ${isActive ? 'bg-fadeprimary text-white border-r-4 border-primary' : ''}`}>
          <BsPersonCircle className="text-3xl" />
          <p className='hidden md:block'>Profile</p>
        </NavLink>
      </ul>}
    </div>
  )
}

export default Sidebar