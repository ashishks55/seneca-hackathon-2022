import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import ReactPlayer from "react-player"
import winner_img from '../../images/winners.png';
import classnames from 'classnames'
import parse from 'html-react-parser'

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

    const winners_2022 = [
        {
            heading: 'Grand Prize Winner',
            title: 'Team name - AKR3',
            video_link: 'https://www.youtube.com/watch?v=zVTwj7oSswI',
            description: `
               <p> Reneware aims to reduce e-waste by providing a platform for consumers and corporations to make tech donations which are then sent to less fortunate communities, such as schools or low-income families, while also utilizing internal components from damaged devices in our computing network made from recycled processing power. </p>
                <p class="has-text-left"><b>Team Members</b></p>
                <ul>
                    <li>Yu-Kai Wu</li>
                    <li>Jexequiel Ravni Arador</li>
                    <li>Kayden Nguyen</li>
                    <li>Aaron Chan</li>
                    <li>Swati Chourey</li>
                </ul>
            `,
        },
        {
            heading: 'Cities and Municipalities',
            title: 'Team name - Richmond Hill Cats',
            video_link: 'https://www.youtube.com/watch?v=UVWP-B1sMjc',
            description: `
               <p> Building connections for natural heritage in Brampton by creating a mobile app that is interactive, attracts users through gamification and allows people to connect within the community.</p>
                <p class="has-text-left"><b>Team Members</b></p>
                <ul>
                    <li>Beth Sun</li>
                    <li>Hanyang Yu</li>
                    <li>Shirley Gu</li>
                </ul>
            `,
        },
        {
            heading: 'Global Causes',
            title: 'Team name - Hack it up',
            video_link: 'https://www.youtube.com/watch?v=FREwxtXQylo',
            description: `
               <p> Create a self-help problem gambling app called “Play Wisely” are: Assess Reasons of Gambling, Diagnose Severity of Gambling, Generate Individualized Treatment Plan.</p>
                <p class="has-text-left"><b>Team Members</b></p>
                <ul>
                    <li>Yancy Liu</li>
                    <li>Samantha Belnavis</li>
                    <li>Gajan Ketheeswaran</li>
                    <li>Vaibhav Parmar</li>
                    <li>Eric Rak</li>
                </ul>
            `,
        },
        {
            heading: 'Net Zero',
            title: 'Team name - HighFive',
            video_link: 'https://www.youtube.com/watch?v=v43Thw9M-t4',
            description: `
               <p> A novel inventory management solution leveraging barcode and smell sensors to record and track food wastage in the restaurant while predicting daily consumption patterns for smart buying recommendations.</p>
                <p class="has-text-left"><b>Team Members</b></p>
                <ul>
                    <li>Qian Tang</li>
                    <li>Lomia Wu</li>
                    <li>Wenhan Rong</li>
                    <li>Jennifer Wang</li>
                    <li>QING ZHANG</li>
                </ul>
            `,
        },
    ]

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 25;

    const [selected_tab, setSelectedTab] = useState(0);

    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-2">
                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                        <h1 className="title">Hackathon Winners</h1>
                        <div className="tabs winner-tabs is-centered is-toggle">
                            <ul className="is-marginless">
                                <li onClick={() => {setSelectedTab(0);setActiveItemIndex(0)}} className={classnames('', {"is-active" : selected_tab === 0, 'has-background-white': selected_tab !== 0})}>
                                    <a>
                                        <span>Winners 2022</span>
                                    </a>
                                </li>
                                <li onClick={() => {setSelectedTab(1);setActiveItemIndex(0)}} className={classnames('', {"is-active" : selected_tab === 1, 'has-background-white': selected_tab !== 1})}>
                                    <a>
                                        <span>Winners 2021</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
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
                                        selected_tab === 1 
                                        ?
                                            winners.map((winner, index) => (
                                                <div className='winner-item columns' style={{ padding: `15px ${chevronWidth}px` }} key={index}>
                                                    <div className='column is-5-desktop is-12-touch winner-details'>
                                                        <h2>WINNING APP {index+1}</h2>
                                                        <h3>{winner.title}</h3>
                                                        <div className="mg-bottom-1"><p>{parse(winner.description)}</p></div>
                                                        <p className='has-text-centered'><a href='http://digitalhealth.senecahackathon.com'  rel="noopener noreferrer" target="_blank" className='button is-success has-text-weight-semibold'>Learn More</a></p>
                                                    </div>
                                                    <div className='column winner-image is-hidden-touch'>
                                                        <img src={winner.image} width="100%" alt='winner'/>
                                                    </div>
                                                </div>
                                            ))
                                        :
                                            winners_2022.map((winner, index) => (
                                                <div className='winner-item columns' style={{ padding: `15px ${chevronWidth}px` }} key={index}>
                                                    <div className='column is-5-desktop is-12-touch winner-details-3'>
                                                        <h2>{winner.heading}</h2>
                                                        <h3>{winner.title}</h3>
                                                        <div className="mg-bottom-1">{parse(winner.description)}</div>
                                                        <p className='has-text-centered is-hidden-desktop'><a href={winner.video_link}  rel="noopener noreferrer" target="_blank" className='button is-success has-text-weight-semibold'>Learn More</a></p>
                                                    </div>
                                                    <div className='column winner-image is-hidden-touch'>
                                                        <ReactPlayer url={winner.video_link} controls={true}  width="100%" playing={false} />
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