import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import TournamentHub from './pages/TournamentHub'
import TournamentDetail from './pages/TournamentDetail'
import MatchDetail from './pages/MatchDetail'
import { Trophy } from 'lucide-react'
export default function App(){
  return (
    <div className="min-h-screen">
      <header className="header">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link to="/" className="flex items-center gap-3">
            <Trophy className="w-7 h-7 text-iccGold"/>
            <div>
              <div className="font-bold text-iccBlue">ICC Tournaments Explorer</div>
              <div className="text-xs text-slate-500">Historic finals, winners, awards & match details</div>
            </div>
          </Link>
          <nav className="flex gap-2">
            <NavLink to="/" className={({isActive})=> isActive ? 'px-3 py-2 rounded-md bg-iccBlue text-white' : 'px-3 py-2 rounded-md hover:bg-slate-100'}>Home</NavLink>
            <NavLink to="/tournaments/world-cup" className="px-3 py-2 rounded-md hover:bg-slate-100">ICC World Cup</NavLink>
            <NavLink to="/tournaments/champions-trophy" className="px-3 py-2 rounded-md hover:bg-slate-100">Champions Trophy</NavLink>
            <NavLink to="/tournaments/t20-world-cup" className="px-3 py-2 rounded-md hover:bg-slate-100">T20 World Cup</NavLink>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-4 md:p-6">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tournaments/:category" element={<TournamentHub/>}/>
          <Route path="/tournament/:id" element={<TournamentDetail/>}/>
          <Route path="/match/:id" element={<MatchDetail/>}/>
        </Routes>
      </main>
      <footer className="border-t py-6 text-center text-sm text-slate-500">
  Made By Abhisek Jena
</footer>
    </div>
  )
}
