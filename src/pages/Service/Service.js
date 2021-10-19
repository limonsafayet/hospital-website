import React from 'react'
import { useParams } from 'react-router';

function Service() {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
}

export default Service
