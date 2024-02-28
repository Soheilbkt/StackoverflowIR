import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BoxTilteleRight from './components/pages/BoxTilteleRight'
import { Route, Routes, useRoutes } from 'react-router-dom'
import { route } from './router/router'

function App() {
 let Routes = useRoutes(route)
  return (
    <>
    
   
   <div className='flex w-full justify-around'>
   {Routes}
    <aside>
    <BoxTilteleRight/>
      </aside>    
    <h1>2</h1>
   </div>
    </>
  )
}

export default App
