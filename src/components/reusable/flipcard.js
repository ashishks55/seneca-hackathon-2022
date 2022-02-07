import React, { useState } from 'react';
import parse from 'html-react-parser';
import FlipCard from 'flip-card-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const FlipCardComponent = ({front_content, back_content}) => {

    const cardStyle = {
        padding: 25,
        border: "0px",
        borderRadius: 5,
        backgroundColor: "#fff",
        width: '100%',
        height: '250px',
        overflow: 'auto',
        position: 'relative',
        border: `2px solid #1C444C`,
        boxShadow: `0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02)`
    };
    
    const [isFlipped, setFlipped] = useState(false);
 
    const front = (
        <>
            {/* <div className='is-hidden-touch' onMouseEnter={() => setFlipped(true)} onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#fff" }}>
                {parse(front_content)}
            </div> */}
            <div onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#fff" }}>
                {parse(front_content)}
                <div className='right-icon'><FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
        </>
    );
 
    const back = (
        <>
            {/* <div className='is-hidden-touch' onMouseLeave={() => setFlipped(false)} onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#fff" }}>
                <div className='left-icon is-hidden-tablet'><FontAwesomeIcon icon={faArrowLeft} /></div>
                {parse(back_content)}
            </div> */}
            <div onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#fff" }}>
                <div className='left-icon'><FontAwesomeIcon icon={faArrowLeft} /></div>
                {parse(back_content)}
            </div>
        </>
    );
 
    return (
        <FlipCard isFlipped={isFlipped} front={front} back={back}/>
    );
};

export default FlipCardComponent;
