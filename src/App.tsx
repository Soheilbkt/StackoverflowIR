import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BoxTilteleRight from './components/pages/BoxTilteleRight'
import { Route, Routes, useRoutes } from 'react-router-dom'
import { route } from './router/router'
import CategorySelectBox from './components/CategorySelectBox'
import SuggestBox from './components/SuggestBox'
import FeedbackBar from './components/FeedbackBar'

function App() {
 let Routes = useRoutes(route)
  return (
    <>
    
   
   <div className='flex w-full justify-evenly'>
   {Routes}
    <aside className='flex h-[53vh] flex-col justify-around'>
    <BoxTilteleRight/>
    <CategorySelectBox/>
    <SuggestBox/>
      </aside>   
      <main className='w-[50%] m-2'>
          <FeedbackBar/>
        </main> 

   </div>
    </>
  )
}

export default App
