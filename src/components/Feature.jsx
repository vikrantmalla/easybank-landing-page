import React from 'react'
import featureApi from '../API/featureApi'
const Feature = () => {
    return (
        <>
            { featureApi.map((curElem) => {
                const { id, icon, iconAlt, title, para } = curElem;
                return (
                  
                        <div key={id} className="features">
                            <img src={icon} alt={iconAlt} />
                            <h2>{title}</h2>
                            <p>{para}</p>
                        </div>
                )
            })}
        </>
    )
}

export default Feature

