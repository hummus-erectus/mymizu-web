import React, { useState } from 'react';
import FilterGroup from './FilterGroup';

const ModalFilter = ({ onClose, tagGroups }) => {
//   const [selectedSpotType, setSelectedSpotType] = useState([]);
//   const [selectedWaterType, setSelectedWaterType] = useState([]);
//   const [selectedFacilities, setSelectedFacilities] = useState([]);

//   const handleSelectSpotType = (value) => {
//     if (selectedSpotType.includes(value)) {
//       setSelectedWaterType(selectedWaterType.filter((type) => type !== value));
//     } else {
//       setSelectedWaterType([...selectedWaterType, value]);
//     }
//   };

//   const handleSelectWaterType = (value) => {
//     if (selectedWaterType.includes(value)) {
//       setSelectedWaterType(selectedWaterType.filter((type) => type !== value));
//     } else {
//       setSelectedWaterType([...selectedWaterType, value]);
//     }
//   };

//   const handleSelectFacilities = (value) => {
//     if (selectedFacilities.includes(value)) {
//       setSelectedFacilities(selectedFacilities.filter((facility) => facility !== value));
//     } else {
//       setSelectedFacilities([...selectedFacilities, value]);
//     }
//   };

console.log("Modal filter:", tagGroups)


  return (
    <>
        <div className="filter-modal-overlay" onClick={onClose}></div>
        <div className="filter-modal-container">
            <div className="filter-modal-content">
                <h2>Filter Options</h2>
                {(tagGroups || []).map((tagGroup, i) => (
                    <FilterGroup key={i}
                        tagGroup={tagGroup}
                    />
                ))}
                <button type="button" className="btn" onClick={onClose}>
                    Apply Filters
                </button>
            </div>
        </div>
      </>
      );
    };

    export default ModalFilter;
