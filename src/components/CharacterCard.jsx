import React from 'react'


const CharacterCard = ({ character }) => {
let {name, species, image} = character;

    return (
        <li className='max-w-60 shadow-md rounded-md overflow-hidden'>
            <img src={image} alt="Character-img" className='w-60 mb-3 bg-contain' />
            <div className='mb-3 px-4'>
                <h6 className='text-xl font-primary-medium '>{name}</h6>
                <p className='text-gray-500'>{species}</p>
            </div>
        </li>

    )
}

export default CharacterCard