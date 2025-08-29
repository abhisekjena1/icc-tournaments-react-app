import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data/index.json'
import Title from '../components/Title'
export default function TournamentDetail(){
  const { id } = useParams()
  const all = [...data.worldCup, ...data.championsTrophy, ...data.t20WorldCup]
  const t = all.find(x=> x.id === id)
  if(!t) return <div>Not found</div>
  return (
    <div className="space-y-4">
      <Title subtitle={`${t.year} · Host: ${t.host}`}>{t.name} — {t.year}</Title>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card"><div className="font-semibold mb-2">Champion</div><div>{t.champion}</div></div>
        <div className="card"><div className="font-semibold mb-2">Runner-up</div><div>{t.runnerUp}</div></div>
        <div className="card"><div className="font-semibold mb-2">Player of Series</div><div>{t.playerOfSeries||'—'}</div></div>
      </div>
      <div className="card">
        <div className="font-semibold mb-2">Final Match</div>
        <div className="text-sm text-slate-600">{t.final.date} · {t.final.venue}</div>
        <div className="mb-2">{t.final.summary}</div>
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          <div className="card"><div className="font-semibold">Winner</div><div>{t.final.winner}</div></div>
          <div className="card"><div className="font-semibold">Man of the Match</div><div>{t.final.manOfTheMatch||'—'}</div></div>
        </div>
        <Link to={`/match/${t.final.id}`} className="link">View full match details →</Link>
      </div>
      {t.matches && t.matches.length>0 && (
        <div className="card">
          <div className="font-semibold mb-2">Selected Matches</div>
          <ul className="list-disc pl-6 space-y-1">{t.matches.map(m=> <li key={m.id}><Link to={`/match/${m.id}`} className="link">{m.title}</Link> — <span className="text-sm text-slate-500">{m.date}, {m.venue}</span></li>)}</ul>
        </div>
      )}
    </div>
  )
}
