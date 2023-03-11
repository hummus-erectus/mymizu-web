import React from 'react'

const FilterGroup = ({tagGroup}) => {
    console.log("Filter summary", tagGroup)

    return (
        <div className="filter-group">
            <h3>{tagGroup.name}</h3>
            <ul>
                {(tagGroup?.tags || []).map((tag, i) => (
                    <li key={i}>{tag.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default FilterGroup