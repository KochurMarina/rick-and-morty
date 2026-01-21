import SearchBar from './SearchBar'

const FilterSection = ({ setPageNumber, setSearch, placeholderText }) => {


  return (
    <section className='mb-12 md:mb-16'>
      <form action="" className='flex items-center justify-center'>
        <SearchBar setPageNumber={setPageNumber} setSearch={setSearch} placeholderText={placeholderText} />
      </form>

    </section>
  )
}

export default FilterSection