import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import "./App.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex: "1000"}}>
            <TooltipComponent content='Settings' position="Top">
              <button>
                 <FiSetting />
              </button>
            </TooltipComponent>

          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App


// Class Link = https://www.youtube.com/watch?v=jx5hdo50a2M&t=481s