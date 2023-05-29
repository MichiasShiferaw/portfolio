import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`${className} w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8`}>{children}</div>
  )
}

export default Layout