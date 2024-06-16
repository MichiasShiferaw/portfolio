import React from 'react'
import AnimatedNumber from './styling/AnimatedNumber';


const Details = () => {
  return (

      <div className="flex flex-col smm:flex-col sm:flex-col items-start mdd:items-center justify-between  gap-y-16 mdd:gap-x-8 dark:text-lightPeriwinkle ">
        <div className=" rounded-lg flex flex-col items-start mdd:items-center">
          <span className="font-bold text-start inline-block">
            <AnimatedNumber value={4} />
            th Year
          </span>
          <h5 className="text-lg ml-4 mdd:ml-0 smm:text-center dark:text-lightSnow">
            Software Student
          </h5>
        </div>
        <div className=" rounded-lg flex flex-col items-start mdd:items-center">
          <span className="font-bold text-start inline-block">
            <AnimatedNumber value={12} />+
          </span>
          <h5 className="text-lg ml-4 mdd:ml-0 smm:text-center dark:text-lightSnow">
            months of internship
          </h5>
        </div>

        {/* <div className=" rounded-lg flex flex-col items-end mdd:items-center">
        <span className=" font-bold text-end inline-block">
          <AnimatedNumber value={16} />+
        </span>
        <h5 className="text-sm ml-2 md:ml-0">Personal Projects</h5>
      </div> */}
        <div className=" rounded-lg flex flex-col items-start mdd:items-center">
          <span className=" font-bold text-start inline-block">
            <AnimatedNumber value={50} />+
          </span>
          <h5 className="text-lg ml-4 mdd:ml-0 smm:text-center dark:text-lightSnow">
            Projects{" "}
          </h5>
        </div>
      </div>

  );
}

export default Details