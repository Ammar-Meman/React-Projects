import React from 'react'

const ColorBox = ({colors}) => {
  console.log(colors);
  return (
    <div className='m-auto w-[300px] h-[300px] [redrounded-2xl font-extrabold content-center mt-6 border-2' style={{
      backgroundColor:colors
    }}>ColorBox</div>
  )
}

export default ColorBox