import React from 'react'
import episodesLogo from '../assets/images/episodesLogo.png'

const Episodes = () => {
  return (
    <div>
      <img src={episodesLogo} alt="logo" className='w-44 md:w-3xs mx-auto my-4' />
      <p className='text-center font-extra md:text-lg text-amber-600'>Секция Episodes скоро появится здесь</p>
    </div>
  )
}

export default Episodes