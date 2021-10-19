import React, { useState, useEffect } from 'react'
import useServices from '../../hooks/useServices';




function Service({location: {state}}) {

      return (
        <div>
           <h2>{state.name}</h2>
        </div>
    );
}

export default Service
