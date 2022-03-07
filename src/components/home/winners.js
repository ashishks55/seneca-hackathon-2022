import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from "react-player"

const Winners = () => {
    const winners = [
        {
            title: 'Cities and Municipalities',
            description: 'Richmond Hill Cats',
            email: 'hyu99@myseneca.ca',
            video_link: 'https://youtu.be/UVWP-B1sMjc'
        },
        {
            title: 'Corporate Social Responsibility',
            description: 'AKR3',
            email: 'achan167@myseneca.ca',
            video_link: 'https://youtu.be/zVTwj7oSswI'
        },
        {
            title: 'NetZero',
            description: 'HighFive',
            email: 'rwu30@myseneca.ca',
            video_link: 'https://youtu.be/v43Thw9M-t4'
        },
        {
            title: 'Global Causes',
            description: 'Hack it Up',
            email: 'vgparmar@myseneca.ca',
            video_link: 'https://youtu.be/FREwxtXQylo'
        }
    ]
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 25;

    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-2">
                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                        <h1 className="title">Winners 2022</h1>
                            <div className='carousel-1' style={{ padding: `0 ${chevronWidth}px` }}>
                                <ItemsCarousel
                                    requestToChangeActive={setActiveItemIndex}
                                    activeItemIndex={activeItemIndex}
                                    numberOfCards={1}
                                    gutter={20}
                                    leftChevron={<button className='left-button c-button button'>{'<'}</button>}
                                    rightChevron={<button className='right-button c-button button'>{'>'}</button>}
                                    outsideChevron
                                    chevronWidth={chevronWidth}
                                >
                                    {
                                        winners.map((winner, index) => (
                                            /* <div className='winner-item columns' style={{ padding: `15px ${chevronWidth}px` }} key={index}>
                                                <div className='column columns winner-details-2' >
                                                    <div classes="column is-4">
                                                        <h2>{winner.title}</h2>
                                                        <h3><FontAwesomeIcon icon={faTrophy}/> {winner.description}</h3>
                                                        <p><FontAwesomeIcon icon={faEnvelope}/>  {winner.email}</p>
                                                    </div>
                                                    <div className='column video-winner'>
                                                        <ReactPlayer url={winner.video_link} controls={true} width="100%" playing={false} />
                                                    </div>
                                                </div>
                                            </div> */

                                            <div class="winners-container">
                                                <div class="winners-item-left">
                                                    <div class="winners-desc">
                                                        <h2>{winner.title}</h2>
                                                        <h3><FontAwesomeIcon icon={faTrophy}/> {winner.description}</h3>
                                                        <p><FontAwesomeIcon icon={faEnvelope}/>  {winner.email}</p>  
                                                    </div>
                                                      
                                                </div>
                                                <div class="winners-item-right">
                                                <ReactPlayer url={winner.video_link} controls={true} width="100%" playing={false} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </ItemsCarousel>
                            </div>
                    </div>
                </div>
            </div>
        </section>		
    );
};

export default Winners;