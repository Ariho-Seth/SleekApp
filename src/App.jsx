import './index.css'
import './App.css'
import LoadingScreen from './componets/LoadingScreen'
import { useEffect, useState } from 'react'
import { Navbar } from './componets/Navbar';
import MobileMenu from './componets/Mobilemenu';



function App() {
  const[isLoaded, setIsLoaded]= useState(false);
  const[menuOPen, setMenuOpen]= useState(false);


  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)} />}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
      
      <Navbar menuOPen={menuOPen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOPen={menuOPen} setMenuOpen={setMenuOpen} />
      
    </div>
     
    </>
  )
}

export default App
