import React, { useEffect, useState } from 'react'
import './home.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Library } from '../library/library'
import { Feed } from '../feed/feed'
import { Favorites } from '../Favorites/favorites'
import { Trending } from '../trending/trending'
import { Player } from '../player/player'
import { Sidebar } from '../../components/Sidebar/sidebar'
import { Login } from '../auth/login'
import { setClientToken } from '../../spotify'

export const Home = () => {
  const [token, setToken] = useState('')
  const hash = window.location.hash
  useEffect(() => {
    const _token = hash.split('&')[0].split('=')[1]
    setToken(_token)
    setClientToken(_token)
  }, [])
  return !token ?(
    <Login/>
  ): (
    <Router>
      <div className='body'>
        <Sidebar />
        <Routes>
            <Route path='/' element={<Library/>}></Route>
            <Route path='/feed' element={<Feed/>}></Route>
            <Route path='/favorite' element={<Favorites/>}></Route>
            <Route path='/trending' element={<Trending/>}></Route>
            <Route path='/player' element={<Player/>}></Route>
        </Routes>
        </div>
    </Router>
  )
}
