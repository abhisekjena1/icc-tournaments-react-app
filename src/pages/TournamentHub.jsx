import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/index.json'
import TournamentCard from '../components/TournamentCard'
import Title from '../components/Title'
const mapping = {
  'world-cup': { key: 'worldCup', title: 'ICC Cricket World Cup' },
  'champions-trophy': { key: 'championsTrophy', title: 'ICC Champions Trophy' },
  't20-world-cup': { key: 't20WorldCup', title: "ICC Men's T20 World Cup" }
}
export default function TournamentHub(){
  const { category } = useParams()
  const meta = mapping[category]
  const [q, setQ] = useState('')
  const items = useMemo(()=>{
    let arr = data[meta.key] || []
    if(q) arr = arr.filter(t=>String(t.year).includes(q)||t.host.toLowerCase().includes(q.toLowerCase()))
    return arr.sort((a,b)=> a.year-b.year)
  }, [category, q])
  return (
    <div>
      <Title subtitle={`Browse ${meta.title} editions by year. Click to view finals and match details.`}>{meta.title}</Title>
      <div className="mb-4"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by year or host..." className="w-full md:w-96 border rounded-xl px-3 py-2"/></div>
      <div className="grid md:grid-cols-2 gap-4">{items.map(t=> <TournamentCard key={t.id} t={t}/>)}</div>
    </div>
  )
}
