import React, {useState} from 'react'

const FilterHogs = (props) => {
    const [isGreased, setIsGreased] = useState(false)

    const handleChange = () => {
        setIsGreased(!isGreased)
        props.changeGreased()
    }
    return(
        <div>
            Greased? <input
            type="checkbox"
            checked={isGreased}
            onChange={handleChange}
            />
        </div>
    )
}
export default FilterHogs;