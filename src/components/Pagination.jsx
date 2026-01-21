import React from 'react'
import { Button } from './Button'
import ReactPaginate from 'react-paginate'

const Pagination = ({ info, setPageNumber }) => {

  return (
    <ReactPaginate
      pageCount={info?.pages}
      onPageChange={(data) => { setPageNumber(data.selected + 1) }}
      containerClassName='flex justify-center gap-4 mb-11'
      previousLinkClassName='w-40 mb-4 text-center text-accent bg-lightest hover:text-lightest hover:bg-accent font-bold py-2 px-2 shadow-md rounded-md transition-colors duration-200 md:mb-11 md:w-30 cursor-pointer'
      nextLinkClassName='w-40 mb-4 text-center text-accent bg-lightest hover:text-lightest hover:bg-accent font-bold py-2 px-2 shadow-md rounded-md transition-colors duration-200 md:mb-11 md:w-30 cursor-pointer'
      pageClassName='hidden md:inline-block '
      pageLinkClassName='mb-4 text-center text-accent bg-lightest hover:text-lightest hover:bg-accent  py-2 px-2 shadow-md rounded-md transition-colors duration-200 cursor-pointer md:mb-11 md:w-10'
      activeLinkClassName="bg-sky-600 text-lightest"
    />

  )
}
export default Pagination
