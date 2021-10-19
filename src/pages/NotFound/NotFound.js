import React, { useState, useEffect } from 'react'

function NotFound() {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    console.log(services)
    return (
        <div>
            <h1>404 page</h1>
        </div>
    )
}

export default NotFound
