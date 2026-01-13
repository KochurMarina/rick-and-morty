import React from 'react'

const Main = ({children}) => {
  return (
    <div className='max-w-5xl mx-auto px-6 font-primary text-sm md:px-0'>
        {children}
    </div>
  )
}

export default Main