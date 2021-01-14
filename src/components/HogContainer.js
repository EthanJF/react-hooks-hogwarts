import React from 'react'

import Hog from './Hog'

const HogContainer = ({hogs}) => {

   const renderedHogs = hogs.map((eachHog, index) => {
    return <li key={index}><Hog key={index} hog={eachHog}/></li>
})

    return(
        <div>
            <ul className="ui grid container">
                {renderedHogs}
            </ul>
        </div>
    )
}

export default HogContainer