import React from 'react'

export default function Questions({text}) {
  return (
    <div className='question'>
      <h3>{text}</h3>
      <div className="box_plus">+</div>
    </div>
  )
}
