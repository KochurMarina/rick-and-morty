import React from 'react'
import EpisodeCard from './EpisodeCard'

const EpisodesList = (
    { results }
) => {

    let show;
    results
        ? show = results.map((episodeData) => {
            return <EpisodeCard episodeData={episodeData} key={episodeData.id} />
        })
        : show = "Error"

    return <ul className='flex flex-wrap justify-center mb-8 gap-3 md:justify-between md:mb-12'>{show}</ul>
}

export default EpisodesList