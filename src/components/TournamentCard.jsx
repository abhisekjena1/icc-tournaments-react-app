import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedCard from './AnimatedCard'
export default function TournamentCard({t}){
  return (
    <AnimatedCard className="card block hover:shadow-xl transition-shadow">
      <Link to={`/tournament/${t.id}`} className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">{t.name}</div>
          <div className="text-slate-500">{t.year} · {t.host}</div>
        </div>
        <div className="badge">{t.champion} 🏆</div>
      </Link>
    </AnimatedCard>
  )
}
