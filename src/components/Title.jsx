import React from 'react'
export default function Title({children, subtitle}){
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-extrabold text-iccBlue">{children}</h1>
      {subtitle && <p className="text-slate-500 mt-1">{subtitle}</p>}
    </div>
  )
}
