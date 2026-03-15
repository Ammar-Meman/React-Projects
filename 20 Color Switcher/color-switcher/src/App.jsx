import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import ColorBox from './components/ColorBox'
import './App.css'

function App() {

  const [selectedColor,setSelectedColor] = useState('transparent');
  
  let colors = ['red','pink','blue','orange','tomato','navy','green'];

  return (
    <div>
      <h1 className='mb-5 flex gap-4'>Color Switcher</h1>

      <div className='flex gap-4'>

        {colors.map((items)=>(
          <Button key={items} colors={items} setSelectedColor={setSelectedColor}>
            {items}
          </Button>
        ))
      }
      </div>


      <ColorBox colors={selectedColor} />

    </div>

  )
}

export default App
