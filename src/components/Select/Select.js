import React from 'react'

const Select = ({options=[], onSelect}) => {
    const handleSelect  = (e) => {
        onSelect(e.target.value)
    }
    return (
        <select onChange={handleSelect}>
            {options.map((opt) => <option key={opt.value} value={opt.value}> {opt.label} </option>)}
        </select>
    )
}

export default Select;