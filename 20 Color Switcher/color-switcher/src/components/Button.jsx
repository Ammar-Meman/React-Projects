import React from 'react'

const Button = ({colors , setSelectedColor , children}) => {
  console.log(colors)
  return (
    <button style={{
      backgroundColor:colors
    }} onClick={()=>setSelectedColor(colors)}>{children}</button>
  )
}

export default Button