import React, {useState} from 'react'
import ModalFilter from './ModalFilter'

const FilterSummary = ({tagGroups}) => {
    console.log(tagGroups)

    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = () => {
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };
    return (
        <div>
            <button className="btn" onClick={handleOpenModal}>
            <img src="/public/images/filter.svg" alt="" />
            </button>
            {showModal && (
                <ModalFilter
                    tagGroups = {tagGroups}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    )
}

export default FilterSummary