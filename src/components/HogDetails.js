import React from 'react'

const HogDetails = (props) => {
    const hog = props.hog
    return (
        <div>
            <ul>
                <li>Specialty: {hog.specialty}</li>
                <li>Weight: {hog.weight}</li>
                <li>Greased: {hog.greased? "yes" : "no"}</li>
                <li>Highest Medal Achieved: {hog["highest medal achieved"]}</li>
            </ul>
            <br/>
        </div>

    )
}

export default HogDetails;