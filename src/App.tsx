import React from 'react'
import BMI from './components/BMI'

const App: React.FC = () => {
  return (
    <div className='flex relative justify-center items-center w-full h-[100vh]'>
      <BMI />
    </div>
  )
}

export default App