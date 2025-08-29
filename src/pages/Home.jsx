import React from 'react'
import Title from '../components/Title'
import data from '../data/index.json'
import { Link } from 'react-router-dom'
export default function Home(){
  const totals = { worldCup: data.worldCup.length, championsTrophy: data.championsTrophy.length, t20: data.t20WorldCup.length }
  return (
    <div>
      <Title subtitle="Historic finals, award winners and match summaries across ICC tournaments">Welcome to ICC Tournaments Explorer</Title>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="card text-center">
          <div className="text-3xl font-bold">{totals.worldCup}</div>
          <div className="text-slate-500">ODI World Cups</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold">{totals.championsTrophy}</div>
          <div className="text-slate-500">Champions Trophy</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold">{totals.t20}</div>
          <div className="text-slate-500">T20 World Cups</div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Link to="/tournaments/world-cup" className="card hover:shadow-xl p-6">
          <div className="text-xl font-semibold">Browse ODI World Cups</div>
          <div className="text-slate-500 mt-1">From 1975 to present</div>
        </Link>
        <Link to="/tournaments/t20-world-cup" className="card hover:shadow-xl p-6">
          <div className="text-xl font-semibold">Browse T20 World Cups</div>
          <div className="text-slate-500 mt-1">From 2007 to present</div>
        </Link>
      </div>
    </div>
  )
}
