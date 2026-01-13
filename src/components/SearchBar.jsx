import React from 'react'
import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({ setPageNumber, setSearch, placeholderText }) => {
  return (

    <div className='relative md:max-w-96'>
      <RiSearchLine color='grey' className='size-5 absolute m-4' />
      <input
        onChange={(e) => {
          setPageNumber(1)
          setSearch(e.target.value)
        }} type="text"
        placeholder={placeholderText}
        className='p-4 pl-10 rounded-md shadow-md border border-lightest placeholder:text-grey-500 placeholder:text-base focus:outline-2 focus:outline-accent md:min-w-60' />
    </div>



  )
}

export default SearchBar