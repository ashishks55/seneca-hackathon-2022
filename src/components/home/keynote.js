import React, { useState } from 'react';
import ReactPlayer from "react-player"
import ItemsCarousel from 'react-items-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const Keynote = () => {

    const keynotes = [
        {
            title : 'Challenge Sets Strategy',
            link: 'https://www.youtube.com/watch?v=6JUx9QfOj9o'
        },
        {
            title : 'Students and Organizers answer: What is Sustainable Hackathon',
            link: 'https://www.youtube.com/watch?v=3jFy11Mn9Vk'
        },
        {
            title : '2022 Sustainability Hackathon Overview',
            link: 'https://www.youtube.com/watch?v=yFmsSgDN6-E'
        }
    ]

    const [selectedIndex, setVideoIndex] = useState(0);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 25;
    
    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-2">
                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                        <h1 className="title is-marginless">Keynote Sessions</h1>
                        <div className='keynotes'>
                            <div className='main-video'>
                                <ReactPlayer
                                    url={keynotes[selectedIndex].link}
                                    controls={true}
                                    width="100%"
                                    height="450px"
                                    playing={true}
                                />
                            </div>
                            <div className='carousel-1 is-hidden-mobile' style={{ padding: `0 ${chevronWidth}px` }}>
                                <ItemsCarousel
                                    requestToChangeActive={setActiveItemIndex}
                                    activeItemIndex={activeItemIndex}
                                    numberOfCards={3}
                                    gutter={20}
                                    leftChevron={<button className='left-button c-button button'>{'<'}</button>}
                                    rightChevron={<button className='right-button c-button button'>{'>'}</button>}
                                    outsideChevron
                                    chevronWidth={chevronWidth}
                                >
                                    {
                                        keynotes.map((keynote, index) => (
                                            <div className="card card-2 card-play" key={index} onClick={() => {setVideoIndex(index)}}>
                                                <div className={`play-button ${selectedIndex === index ? 'opacity-1' : ''}`}><FontAwesomeIcon icon={faPlayCircle} /></div>
                                                <div className="card-content">
                                                    <div className="content keynote-card-content">
                                                        <p className='subtitle name is-size-6 has-text-weight-bold line-height-1'>{keynote.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </ItemsCarousel>
                            </div>
                            <div className='carousel-1 carousel-1-icon-2 is-hidden-tablet' style={{ padding: `0 ${chevronWidth}px` }}>
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
                                        keynotes.map((keynote, index) => (
                                            <div className="card card-2 card-play mg-mob-1" key={index} onClick={() => {setVideoIndex(index)}}>
                                                <div className={`play-button ${selectedIndex === index ? 'opacity-1' : ''}`}><FontAwesomeIcon icon={faPlayCircle} /></div>
                                                <div className="card-content">
                                                    <div className="content keynote-card-content">
                                                        <p className='subtitle name is-size-6 has-text-weight-bold line-height-1'>{keynote.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </ItemsCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Keynote