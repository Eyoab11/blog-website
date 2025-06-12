import React, { useState } from 'react'
import Header from './components/header'
import NavBar from './components/navbar'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <NavBar darkMode={darkMode} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App