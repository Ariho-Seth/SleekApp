import { useEffect } from "react";

const MobileMenu=({menuOPen, setMenuOpen})=>{

   

    return(
        <div className={`fixed w-full left-0 top-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col 
                        justify-center items-center transition-all duration-300 ease-in-out
                        ${menuOPen 
                            ? " opacity-100 h-screen pointer-events-auto " 
                            :" h-0 opacity-0 pointer-events-none "}`}>
                                {String(menuOPen)}

                        <button 
                            onClick={()=> setMenuOpen(false)} 
                            className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
                                    &times;
                        </button>

        </div>
    )
}
export default MobileMenu;