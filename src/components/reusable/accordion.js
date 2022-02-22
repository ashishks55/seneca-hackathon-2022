import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import parse from 'html-react-parser'


const Accordion = ({title, info, logo, logo_height}) => {

    const [isFlipped, setFlipped] = useState(false);

    return (
        <div className='accordion-item has-background-white'>
            <p onClick={() => {setFlipped(!isFlipped)}} className='a-title pointer'>
                <span className='acc-wrapper'>
                    {logo ? <span><img src={logo} alt="logo" className='acc-logo' style={{height: logo_height}}/></span> : null}
                    <span className='acc-title'>{title}</span>
                </span>
                <span className='acc-wrapper'><FontAwesomeIcon icon={isFlipped ? faChevronDown : faChevronRight} /></span>
            </p>
            {isFlipped ? <p className='a-info'>{parse(info)}</p> : null}
        </div>
    )
}

export default Accordion