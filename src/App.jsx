import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { SIDEBAR_DATA } from './static/SIDEBAR_DATA'
import { useLocation } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'


function App() {

  const { pathname } = useLocation()

  return (
    <div className={pathname === '/login' ? 'app login_page' : 'app'}>
      {pathname !== '/login' && <div className='sidebar'> <Sidebar /> </div>}
      <div className="routes_wrapper">
        {pathname !== '/login' ? <div className="navbar"> <Navbar /> </div> : null}
        <Routes>
          {SIDEBAR_DATA.map((i) => (
            <Route
              key={i.id}
              path={i.route}
              element={i.component}
            />
          ))}
        </Routes>
      </div>
    </div>
  )
}

export default App