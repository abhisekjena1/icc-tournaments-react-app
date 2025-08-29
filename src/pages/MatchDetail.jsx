import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data/index.json'
import Title from '../components/Title'
function findMatch(id){
  const all = [ ...data.worldCup, ...data.championsTrophy, ...data.t20WorldCup ]
  for(const t of all){
    if(t.final.id === id) return { t, m: t.final }
    const m = (t.matches||[]).find(x=> x.id===id)
    if(m) return { t, m }
  }
  return {}
}
export default function MatchDetail(){
  const { id } = useParams()
  const { t, m } = findMatch(id)
  if(!m) return <div>Not found</div>
  return (
    <div className="space-y-4">
      <Title subtitle={`${m.date} · ${m.venue}`}>{m.title}</Title>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card"><div className="font-semibold">Man of the Match</div><div>{m.manOfTheMatch||'—'}</div></div>
        <div className="card"><div className="font-semibold">Winner</div><div>{m.winner}</div></div>
        <div className="card"><div className="font-semibold">Margin</div><div>{m.margin||'—'}</div></div>
      </div>
      <div className="card"><div className="font-semibold mb-2">Scoreboard</div><pre className="text-sm">{m.scoreboard||'Score details not available'}</pre></div>
      <div className="card"><div className="font-semibold mb-2">Summary</div><div>{m.summary}</div></div>
      <Link to={`/tournament/${t.id}`} className="link">← Back to {t.name} {t.year}</Link>
    </div>
  )
}
