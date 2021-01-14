import React, {useState} from 'react'
import HogImg from './HogImg'
import HogDetails from './HogDetails'

const Hog = (props) => {
    const hog = props.hog

    const [showDetails, setShowDetails] = useState(false)

    const handleClick = () => {
        setShowDetails(!showDetails)
    }

    return(
        <div className="ui eight wide card" onClick={handleClick}>
            <h1>{hog.name}</h1>
            <HogImg hogName={hog.name}/>
            { showDetails ? <HogDetails hog={hog}/> : ""}
        </div>
    )
}

export default Hog;