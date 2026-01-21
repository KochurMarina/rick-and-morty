import React from 'react'


const LocationCard = ({ locationData }) => {
let {name, type} = locationData;

    return (
        <li className='w-60 py-7 shadow-md rounded-md border-1 border-gray-200 overflow-hidden'>

            <div className='mb-3 px-4 text-center'>
                <h6 className='mb-2.5 text-xl font-primary-medium '>{name}</h6>
                <p className='text-gray-500'>{type}</p>
            </div>
        </li>

    )
}

export default LocationCard
