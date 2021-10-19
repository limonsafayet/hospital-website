import React, { useState, useEffect } from 'react'
import useServices from '../../hooks/useServices';




function Service() {

    const [services, setServices] = useServices();
    
    console.log(services)
    return (
        <div>
            {
                //console.log(services)
            }
            {/*  {
                services.filter(service => service.slug === slug).map(filteredService => (
                    <h2>{filteredService.name}</h2>
                ))
            } */}
        </div>
    );
}

export default Service
