import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import winner_img from '../../images/winners.png';

const Spotlight = () => {
    const winners = [
        {
            title: 'Duets: A Healthy Social Media Alternative',
            image: winner_img,
            description: 'Duets is a mental health-conscious goal-setting social media platform where users can pair up with like-minded individuals to support and hold each other accountable for achieving their goals without feeling the need to compete with others. ',
        },
        {
            title: 'Vassport',
            image: winner_img,
            description: 'Our mobile application Vassport makes it easy for individuals, parent, and guardians to verify themselves as well as their family member’s vaccination status and view their vaccination information.',
        },
        {
            title: 'DeLight',
            image: winner_img,
            description: 'DeLight is a smart lamp that connects elderly and their family by allowing them to change each others’ light colours remotely. The smart lamp uses existing technology to bring a simple premise to life. The change in colour represents thoughts and emotions that people far away may want to share with the elderly and vice versa. Different colours can signal different emotions and these messages can be adapted over time. Alone in your apartment, it’s a warm glow signalling someone far away cares about you, cutting through your lonely moment. ',
        },
        {
            title: 'Decissio: Clinical Diagnostic Support Tool',
            image: winner_img,
            description: 'Our team collaborated to create a dashboard based on a simple framework for our clinical decision tool (Decissio). We conducted a variety of data analyses and visualization through Python and Tableau to create a proof-of-concept of our solution vision. Furthermore, we created a business proposal along with other documentation to support our approach.',
        },
        {
            title: 'Telemedicine Solution – Centralized Healthcare Data System',
            image: winner_img,
            description: 'By proposing a centralized healthcare data system, we solved the dilemma of decentralized private patient data. This allows for easy and quick access by any physician or patient and will lessen the burden on any healthcare worker or provider when they require valuable patient data history on the spot right away.',
        },
        {
            title: 'Night Wolf',
            image: winner_img,
            description: 'Business Case, main use case diagram & class diagram, use case demo, example code with demo surrounding blockchain / AI solution.',
        },
        {
            title: 'CONTIENT',
            image: winner_img,
            description: 'Designed an adoptable, easy to use, user-friendly web portal that ensures what medical data can be viewed or blocked to ensure the user’s privacy.',
        },
        {
            title: 'Hospital Expert HR System',
            image: winner_img,
            description: 'We created a web app, mobile app, a chatbot and referenced a similar open source project that can be used to drive in the business case proposal for Octochain\'s Blockchain system. We solved the problem by creating an interactive and informative way for employees to view their benefits information and also created a business case model for Octochain\'s Blockchain system',
        },
    ]
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 25;

    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-2">
                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                        <h1 className="title">Previous Hackathon Winners</h1>
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
                                            <div className='winner-item columns' style={{ padding: `15px ${chevronWidth}px` }} key={index}>
                                                <div className='column is-5 winner-details'>
                                                    <h2>WINNING APP {index+1}</h2>
                                                    <h3>{winner.title}</h3>
                                                    <p>{winner.description}</p>
                                                </div>
                                                <div className='column winner-image is-hidden-mobile'>
                                                    <img src={winner.image} width="100%" alt='winner'/>
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

export default Spotlight;