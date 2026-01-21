import React from 'react'
import LocationCard from './LocationCard'

const LocationsList = (
    { results }
) => {

    let show;
    results
        ? show = results.map((locationData) => {
            return <LocationCard locationData={locationData} key={locationData.id} />
        })
        : show = "Error"

    return <ul className='flex flex-wrap justify-center mb-8 gap-3 md:justify-between md:mb-12'>{show}</ul>
}

export default LocationsList