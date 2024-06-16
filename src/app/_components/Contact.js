import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="contact lg:text-center">
      <h1 className="text-5xl font-black">Say hi!</h1>

      <Link
        href={"mailto:michiasshif@gmail.com"}
        className="px-1 inline-block py-1 w-50 sm:w-fit rounded-full hover:bg-transparent border-2 border-transparent hover:border-lightyinBlue bg-transparent dark:bg-transparent dark:hover:border-lightSnow dark:hover:bg-transparent text-white dark:text-darkRaisin hover:text-lightyinBlue hover:font-medium mt-3"
      >
        <span className="block bg-lightyinBlue hover:bg-transparent rounded-full px-5 py-2 dark:bg-darkVanilla">
          Contact Me
        </span>
      </Link>
    </div>
  );
}

export default Contact