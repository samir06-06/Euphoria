import React from 'react'

const Button = ({ text,btnClass='text-violet-800'}) => {
  return (
    <button className={`rounded-xl lg:text-sm md:text-lg border-3 px-4 py-2 ${btnClass}`}>{text}</button>
  )
}

export default Button