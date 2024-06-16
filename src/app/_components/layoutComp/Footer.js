import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    //  w-4/5 bg-gradient-to-br from-gray-300 to-gray-400  ring-gray-500/50 ring-offset-2 ring-offset-zinc-950
    <footer className="p-4 mx-auto rounded-md  w-4/5 mt-8  px-4 py-2 text-lg text-zinc-50 ring-2transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98]">
      <div class="flex items-center sm:justify-start justify-center">
        <ul class="flex flex-wrap items-center mb-3 sm:mb-0 md:text-base text-xl mt-4 ">
          <li>
            <Link
              href={"#about"}
              class="md:mr-4  text-gray-500 hover:underline mr-6 dark:text-gray-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"#project"}
              class="md:mr-4 text-gray-500 hover:underline mr-6 dark:text-gray-400"
            >
              Project
            </Link>
          </li>

          <li>
            <Link
              href={"mailto:michiasshif@gmail.com"}
              class=" text-gray-500 hover:underline dark:text-gray-400"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
      <hr class="h-px mt-2 w-2/6 mx-auto bg-gray-700 border-0 dark:bg-gray-700" />
    </footer>
  );
}

export default Footer