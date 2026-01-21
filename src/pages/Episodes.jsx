import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterSection from '../components/FilterSection'
import EpisodesList from '../components/EpisodesList'
import Pagination from '../components/Pagination'

import episodesLogo from '../assets/images/episodesLogo.png'


const Episodes = () => {
  /*-----API Data-----*/
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [apiData, setApiData] = useState([]);
  const { info, results } = apiData;

  const baseUrl = `https://rickandmortyapi.com/api/episode/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setApiData(res.data);

    })
  }, [baseUrl])

  return (
    <div>
      <img src={episodesLogo} alt="logo" className='w-44 md:w-3xs mx-auto my-8' />
      <FilterSection setPageNumber={setPageNumber} setSearch={setSearch} placeholderText={'Name of episode...'} />
      <EpisodesList results={results} />
      <Pagination info={info} setPageNumber={setPageNumber} />
    </div>
  )
}

export default Episodes