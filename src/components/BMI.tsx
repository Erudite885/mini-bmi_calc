import React, { useState } from 'react'

const BMI: React.FC = () => {
    const [unit, setUnit] = useState<'metric'|'imperial'>('metric')
    const [height, setHeight] = useState<number>(0)
    const [weight, setWeight] = useState<number>(0)

    const calculateBMI = () => {
        if (unit === 'metric') {
            return (weight / ((height / 100) * (height / 100))).toFixed(2)
        } else {
            return ((weight / (height * height)) * 703).toFixed(2)
        }
    }

    const classifyWeight = (bmi: number) => {
        if (bmi < 16) {
            return 'severely underweight'
        } else if (bmi >= 16 && bmi < 16.9) {
            return 'underweight'
        } else if (bmi >= 17 && bmi < 18.4) {
            return 'mildly underweight'
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'normal weight'
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'overweight'
        } else if (bmi >= 30 && bmi < 34.9) {
            return 'obesity class 1 (Moderate)'
        } else if (bmi >= 35 && bmi < 39.9) {
            return 'obesity class 2 (Severe)'
        } else if (bmi > 40)  {
            return 'obesity class 3 (very Severe or morbidly obese)'
        } else {
            return 'No Classification available. '
        }
    }

  return (
      <div className='flex flex-col py-6 px-4 mx-6 bg-gradient-to-br from-lime-100 to-lime-300 rounded-3xl max-w-[320px] '>
          <p className='py-4 font-bold text-lg'>Enter your details below</p>
         
          <div className='flex gap-3 font-semibold'>
              <label className='mx-4 ' htmlFor="metric">
                  <input className='' type="radio" name="unit" id="metric" value='metric' checked={unit === 'metric'} onChange={() => setUnit('metric')} /> Metric
              </label>
              <label htmlFor="imperial">
                  <input className='' type="radio" name="unit" id="imperial" value='imperial' checked={unit === 'imperial'} onChange={() => setUnit('imperial')} /> Imperial
              </label>
          </div>

          
              <div className='flex gap-3 flex-col py-4 font-extralight '>
                  <div className='flex flex-col relative'>
                    <label htmlFor="" className='text-sm'>Height</label>
                    <input className='p-2 rounded-md' type="number" value={height} onChange={(e) => setHeight(+e.target.value)} />
                    <span className='absolute font-bold right-3 top-7' >({unit === 'metric' ? 'cm' : 'inches' })</span>
                 </div>
                 <div className='flex flex-col relative'>
                    <label htmlFor="" className='text-sm'>Weight</label>
                    <input className='p-2 rounded-md' type="number" value={weight} onChange={(e) => setWeight(+e.target.value)} />
                    <span className='absolute font-bold right-3 top-7'>({unit === 'metric' ? 'kg' : 'lbs' })</span>
                 </div>
          </div>
         
          <div className='bg-lime-800 text-white rounded-e-3xl py-8 px-4 mt-6'>
             {weight && height ? <p>your BMI is...</p> : <p></p> }
              {weight && height ? <p className='text-3xl font-bold'>{calculateBMI()}</p> : <p>BMI not available, please insert weight and height.</p> }
              {weight && height ? <p>You are <span className='underline'>{classifyWeight(parseFloat(calculateBMI()))}</span></p> : <p></p> }
              
         </div>
              
        
    </div>
  )
}

export default BMI