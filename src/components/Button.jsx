import React from 'react'

export const Button = ({btnText, handleButtonClick}) => {
    return (
        <button onClick={handleButtonClick} className='w-40 mb-4 cursor-pointer text-accent bg-lightest hover:text-lightest hover:bg-accent font-bold py-2 px-2 shadow-md rounded-md transition-colors duration-200 md:mb-11 md:w-36 ' >{btnText.toUpperCase()}</button>

    )
}
