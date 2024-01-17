import React from 'react'
import { MoonIcon, SunIcon } from '../Icons1'
import useThemeSwitcher from '../hooks/useThemeSwitcher';

const Toggle = () => {
  const [mode,setMode]= useThemeSwitcher();

//   return (
//     <div className="mt-[-20px] ml-[10px]">
//       {/* <input className="" type="checkbox" id="light_toggler" />
//       <label className="label" htmlFor="light_toggler">
//         <SunIcon />
//         <MoonIcon />
//       </label> */}

//       {/* </input> */}
//       <input className="toggleInput" type="checkbox" id="light_toggler" />
//       <label className="toggleLabel" htmlFor="light_toggler">
//         {/* <div
//           // style="transform-origin: 50% 50% 0px; left: 6px;"
//           // className="NightModeToggle__Switch-sc-1ti313y-2 ebpAiN"
//         > */}
//         <SunIcon />
//         <MoonIcon />
//         {/* </div> */}
//       </label>
//       <button
//         onClick={() => setMode(mode === "light" ? "dark" : "light")}
//         className={`ml-3 flex items-center justify-center rounded-full p-1 ${
//           mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
//         }`}
//       >
//         {mode === "dark" ? (
//           <span className="fill-dark">
//             <SunIcon />
//           </span>
//         ) : (
//           <span className="fill-dark">
//             <MoonIcon />
//           </span>
//         )}
//       </button>
//     </div>
//   );
// }

// export default Toggle


// import React from 'react'
// import { MoonIcon, SunIcon } from '../Icons1'
// import useThemeSwitcher from '../hooks/useThemeSwitcher';

// const Toggle = () => {
//   const [mode,setMode]= useThemeSwitcher();

  return (
    <div>
      <button
        className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        // className={`ml-3 flex items-center justify-center rounded-full p-1 ${
        //   mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
        // }`}
      >
        {mode === "dark" ? (
          <div
            id="switch-toggle"
            className="w-12 h-12 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white"
          >
            <span className="fill-dark">
              <MoonIcon />
            </span>
          </div>
        ) : (
          <div
            id="switch-toggle"
            className="w-12 h-12 relative rounded-full transition duration-500 transform translate-x-full bg-gray-700 p-1 text-white"
          >
            <span className="fill-dark">
              <SunIcon />
            </span>
          </div>
        )}
        {/* </div> */}
      </button>
    </div>
  );
}

export default Toggle