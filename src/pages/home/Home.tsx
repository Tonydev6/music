import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Library } from '../library/library'
import { Feed } from '../feed/feed'
import { Favorites } from '../Favorites/favorites'
import { Trending } from '../trending/trending'
import { Player } from '../player/player'

export const Home = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Library/>}></Route>
            <Route path='/feed' element={<Feed/>}></Route>
            <Route path='/favorite' element={<Favorites/>}></Route>
            <Route path='/trending' element={<Trending/>}></Route>
            <Route path='/player' element={<Player/>}></Route>
        </Routes>
    </Router>
  )
}
