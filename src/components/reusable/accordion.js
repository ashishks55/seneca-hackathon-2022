import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({title, info}) => {

    const [isFlipped, setFlipped] = useState(false);

    return (
        <div className='accordion-item'>
            <p onClick={() => {setFlipped(!isFlipped)}} className='a-title pointer'>{title} <span><FontAwesomeIcon icon={isFlipped ? faChevronDown : faChevronRight} /></span></p>
            {isFlipped ? <p className='a-info'>{info}</p> : null}
        </div>
    )
}

export default Accordion