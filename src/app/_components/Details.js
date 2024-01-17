import React from 'react'
import AnimatedNumber from './AnimatedNumber';


const Details = () => {
  return (
    <div className="flex flex-col mdd:flex-row items-end mdd:items-center justify-between  gap-y-16 mdd:gap-x-8 ">
      <div className=" rounded-lg flex flex-col items-end mdd:items-center">
        <span className="font-bold text-end inline-block">
          <AnimatedNumber value={4} />
          th
        </span>
        <h5 className="text-sm ml-2 md:ml-0">Software Student</h5>
      </div>
      <div className=" rounded-lg flex flex-col items-end mdd:items-center">
        <span className="font-bold text-end inline-block">
          <AnimatedNumber value={12} />+
        </span>
        <h5 className="text-sm ml-2 md:ml-0">months of internship</h5>
      </div>

      {/* <div className=" rounded-lg flex flex-col items-end mdd:items-center">
        <span className=" font-bold text-end inline-block">
          <AnimatedNumber value={16} />+
        </span>
        <h5 className="text-sm ml-2 md:ml-0">Personal Projects</h5>
      </div> */}
      <div className=" rounded-lg flex flex-col items-end mdd:items-center">
        <span className=" font-bold text-end inline-block">
          <AnimatedNumber value={50} />+
        </span>
        <h5 className="text-sm ml-2 md:ml-0">Projects </h5>
      </div>
    </div>
  );
}

export default Details