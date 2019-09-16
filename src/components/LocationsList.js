import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from "axios";

export default function LocationsList() {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
             .then(res => {
                 console.log('LocationList', res)
                 setLocations(res.data.results)
             }, )
    }, [])

    return (
        <section className = 'location-list grid-view'>
            {locations.map(item => {
                return (
                    <LocationCard 
                    key={item.name} 
                    name={item.name} 
                    dimension={item.dimension} 
                    residents={item.residents.length}/>
                )
            })}
        </section>
    )
}
