import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import parse from 'html-react-parser'


const Accordion = ({title, info}) => {

    const [isFlipped, setFlipped] = useState(false);

    return (
        <div className='accordion-item'>
            <p onClick={() => {setFlipped(!isFlipped)}} className='faq-title pointer'>{title} <span><FontAwesomeIcon icon={isFlipped ? faMinus : faPlus} /></span></p>
            {isFlipped ? <p className='a-info'>{parse(info)}</p> : null}
        </div>
    )
}

export default Accordion