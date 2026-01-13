import SearchBar from './SearchBar'

const FilterSection = ({ setPageNumber, setSearch }) => {


  return (
    <section className='mb-12 md:mb-16'>
      <form action="" className='md:flex md:justify-center'>
        <SearchBar setPageNumber={setPageNumber} setSearch={setSearch} placeholderText="Filter by name..."/>
      </form>

    </section>
  )
}

export default FilterSection