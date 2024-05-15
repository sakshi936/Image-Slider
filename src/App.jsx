import { useEffect, useState } from 'react'

import './App.css'

function App() {
  

  const imgs= ["https://images.pexels.com/photos/2343170/pexels-photo-2343170.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/1336454/pexels-photo-1336454.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg?auto=compress&cs=tinysrgb&w=600"];

  const [imgIdx, setIdx ] = useState(0);


  const goToRight =()=>{
      setIdx(imgIdx+1)    
  }

  const goToLeft =()=>{
    setIdx(imgIdx-1);
  }

  


  return (
    
    <div className=' w-full bg-gray-700  px-10 py-8 rounded-lg text-center '>

        {/* img div */}
        <div className=' mb-6 bg-pink-300 ' >

        {
          <img src={imgs[imgIdx]}  className=' shadow-lg'/>
        }

        </div>
        
        <div className='flex justify-between'>

          {/* left button*/}
          <button className='bg-blue-300 text-xl text-black hover:bg-blue-600 hover:text-white'
          onClick={goToLeft}
          disabled={imgIdx == 0}
          >
            <span>&lt;</span>Left
          </button>


          <p>
            {imgIdx+1}/{imgs.length}
          </p>

          {/* right  button*/}
          <button 
          className='bg-blue-300 text-xl  text-black hover:bg-blue-600 hover:text-white'
          onClick={goToRight}
          disabled={ imgIdx == imgs.length-1}
          >
           Right <span>&gt;</span>
          </button>
        </div>
    </div>
  )
}

export default App


