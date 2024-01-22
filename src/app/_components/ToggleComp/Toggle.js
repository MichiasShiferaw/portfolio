import React from 'react'
import { MoonIcon, SunIcon } from '../Icons1'
import useThemeSwitcher from '../hooks/useThemeSwitcher';

const Toggle = () => {
  const [mode,setMode]= useThemeSwitcher();
  
  const fillColor =
    mode === "dark"
      ? "bg-gray-700 translate-x-full"
      : "bg-lightNaples -translate-x-2";

  return (

            
    <div>
      <button
        className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
      >
        <div
          id="switch-toggle"
          className={`w-12 h-12 relative rounded-full transition duration-500 transform p-1 text-white ${fillColor}`}
        >
          <span className="fill-dark">
            {mode === "dark" ? <SunIcon />: <MoonIcon /> }
          </span>
        </div>
      </button>
    </div>

  );
}

export default Toggle