import React from 'react'
import locationsLogo from '../assets/images/locationsLogo.png'

const Locations = () => {
  return (
    <div>
      <img src={locationsLogo} alt="logo" className='w-44 md:w-3xs mx-auto my-4' />
      <p className='text-center font-extra md:text-lg text-amber-600'>Секция Locations скоро появится здесь</p>
    </div>
  )
}

export default Locations