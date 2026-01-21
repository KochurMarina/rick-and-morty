// import React from 'react'
// import locationsLogo from '../assets/images/locationsLogo.png'

// const Locations = () => {
//   return (
//     <div>
//       <img src={locationsLogo} alt="logo" className='w-44 md:w-3xs mx-auto my-4' />
//       <p className='text-center font-extra md:text-lg text-amber-600'>Секция Locations скоро появится здесь</p>
//     </div>
//   )
// }

// export default Locations

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterSection from '../components/FilterSection'
import LocationsList from '../components/LocationsList'
import Pagination from '../components/Pagination'

import locationsLogo from '../assets/images/locationsLogo.png'


const Locations = () => {
  /*-----API Data-----*/
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [apiData, setApiData] = useState([]);
  const { info, results } = apiData;

  const baseUrl = `https://rickandmortyapi.com/api/location/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setApiData(res.data);

    })
  }, [baseUrl])

  return (
    <div>
      <img src={locationsLogo} alt="logo" className='w-44 md:w-3xs mx-auto my-12' />
      <FilterSection setPageNumber={setPageNumber} setSearch={setSearch} placeholderText={'Name of location...'} />
      <LocationsList results={results} />
      <Pagination info={info} setPageNumber={setPageNumber} />
    </div>
  )
}

export default Locations