import { useState } from 'react'
import Header from './components/Header'
import Ticket from './components/ticket/Ticket'


function App() {

  return (
    
    <div className='px-2 lg:px-0 py-6 h-[100%] w-full m-auto  max-w-[1280px]'>
     
     <div className=''>
     <Header/>
     </div>
     <Ticket/>
      {/* <p className='text-3xl'>ddd</p> */}

    </div>
   
  )
}

export default App
