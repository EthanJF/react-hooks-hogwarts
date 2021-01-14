import React, { useState } from 'react'

const SortHogs = (props) => {

    const [ sort, setSort ] = useState(props.sort)

    const handleChange = (event) => {
        const newSort = event.target.value
        setSort(newSort)
        props.changeSort(newSort)
    }
    return(
        <div>
            <h3>Sort by:</h3>
            <select value={sort} onChange={handleChange}>
                <option value="none">None</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
  
    )
}

export default SortHogs;