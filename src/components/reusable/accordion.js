import React, { useState } from 'react';
import ReactPlayer from "react-player"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import parse from 'html-react-parser'


const Accordion = ({title, info, logo, logo_height, video_link}) => {

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
            {isFlipped ? 
            <p className='a-info'>
                {
                    video_link ? 
                        <div className='acc-video columns column is-8 is-offset-2'>
                            <ReactPlayer
                                url={video_link}
                                controls={true}
                                width="100%"
                                height="350px"
                                playing={false}
                                style={{ marginTop: '16px' }}
                            />
                        </div>
                    : null
                }
                {parse(info)}
            </p> 
            : null}
        </div>
    )
}

export default Accordion