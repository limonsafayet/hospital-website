import React, { useState, useEffect } from 'react'




function Service() {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
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
