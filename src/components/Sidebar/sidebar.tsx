import React, { useEffect, useState } from 'react'
import { Button } from '../button/button'
import { MdSpaceDashboard, } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import apiClient from '../../spotify';



export const Sidebar = () => {
  const [image, setImage] = useState('')

  useEffect(() => {
    apiClient.get("me").then((response) =>{
      setImage(response.data.images[0].url)
    })
  },[])
  return (
    <>
    <div className='sidebar-container'>
      <img src={image} className='profile-img' alt="profile-pic" />
      <div>
        <Button title='Feed' to='/feed' icon={<MdSpaceDashboard/>}/>
        <Button title='Trending' to='/trending' icon={<FaGripfire/>}/>
        <Button title='Player' to='/Player' icon={<FaPlay />}/>
        <Button title='Favorite' to='/favorite' icon={<MdFavorite/>}/>
        <Button title='library' to='/library' icon={<IoLibrary/>}/>
      </div>
    </div>
    </>
  )
}
