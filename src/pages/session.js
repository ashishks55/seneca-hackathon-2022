import React, { useState } from 'react';
import ReactPlayer from "react-player"
import ItemsCarousel from 'react-items-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import "./session.css";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Session = () => {

    const sessions = [
        {
            title: 'Annamaya Kosha - Sustainability Program',
            link: 'https://www.youtube.com/embed/Tyn78ECtV6s',
            author: 'Yog Front Organization',
            disable: false
        },
        {
            title: 'Pranamaya Kosha',
            link: 'https://www.youtube.com/embed/xivp1kWZ7W0',
            author: 'Yog Front Organization',
            disable: false
        },
        {
            title: 'Manomaya Kosha',
            link: 'https://www.youtube.com/embed/GrdmHHsM4o4',
            author: 'Yog Front Organization',
            disable: false
        },
        {
            title: 'VIGYANMAY KOSHA ...​',
            link: 'https://www.youtube.com/embed/HqTcsVe4pak',
            author: 'Yog Front Organization',
            disable: false
        },
        {
            title: 'AnandMaya Kosha',
            link: 'https://www.youtube.com/embed/IW1INghHtwc',
            author: 'Yog Front Organization',
            disable: false
        }
    ]

    const [selectedIndex, setVideoIndex] = useState(0);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [playing, setPlaying] = useState(false);
    const chevronWidth = 25;

    return (
        <Layout>
            <Seo title="Yog Front Session" />
        <section className="" >
            <div className="full">
                <div className='container'>
                    <div className="streamContainer">
                        <div className="stream appear-first">
                            <ReactPlayer
                                url={sessions[selectedIndex].link}
                                controls={true}
                                width="100%"
                                height="800px"
                                playing={playing}
                            />
                        </div>
                    </div>
                    {/*<div className='column carousel-1 is-hidden-mobile' style={{ padding: `0 ${chevronWidth}px`, width:'30%'}}>*/}
                    <div className="schedule">
                        <h3 className="header">Yog Front Sessions</h3>
                        <br />
                        <div className='is-hidden-mobile'>
                            {
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
                                        sessions.map((session, index) => (
                                            <div className="talk" key={index} onClick={() => { setVideoIndex(index); setPlaying(false) }}>
                                                <div className={`play-button ${selectedIndex === index ? 'opacity-1' : ''}`}><FontAwesomeIcon icon={faPlayCircle} /></div>
                                                <div className="card-body">
                                                    <h4 title={session.title} className="title">{session.title}</h4>
                                                    <div className="speaker">
                                                        <h5 className="name">{session.author}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </ItemsCarousel>
                            }
                        </div>

                        <div className='is-hidden-desktop'>{
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
                                    sessions.map((session, index) => (
                                        <div className="talk" key={index} onClick={() => { setVideoIndex(index); setPlaying(false) }}>
                                            <div className={`play-button ${selectedIndex === index ? 'opacity-1' : ''}`}><FontAwesomeIcon icon={faPlayCircle} /></div>
                                            <div className="card-body">
                                                <h4 title={session.title} className="title">{session.title}</h4>
                                                <div className="speaker">
                                                    <h5 className="name">{session.author}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </ItemsCarousel>
                        }
                        </div>
                    </div>
                </div>
            </div>
            </section>
            </Layout>
    )
}

export default Session