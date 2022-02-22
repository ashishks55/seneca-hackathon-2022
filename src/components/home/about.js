import React, { useState } from 'react'
import ReactPlayer from "react-player"
import parse from 'html-react-parser'
import FlipCard from '../reusable/flipcard'
import video_thumbnail from '../../images/video-thumbnail.png'
import image_1 from '../../images/about/1.png'
import image_2 from '../../images/about/2.png'
import image_3 from '../../images/about/3.png'
import image_4 from '../../images/about/4.png'

const About = () => {

    const [video_clicked_desktop, playVideoOnClickDesktop] = useState(false);
    const [video_clicked_mobile, playVideoOnClickMobile] = useState(false);

    const questions = [
        {
            title: 'How to Register?',
            info: `All you need to do is click on the <a target='_blank' rel="noopener noreferrer" href='https://www.eventbrite.ca/e/senecas-sustainability-hackathon-2022-registration-205162405277' class='has-text-bold is-underlined has-text-green'>registration link</a> and register using our eventbrite page.`,
            image: image_1
        },
        {
            title: 'Who can attend?',
            info: `Registrations are open to Seneca students. For additional colleges and universities open from <b>Jan 21, 2022</b>. Participating colleges and universities will be listed. If you are NOT a student in any of the qualifying institutions, you may still participate, but MUST be assigned to a team anchored by Seneca Students. The Student Success Team will help you accomplish this.`,
            image: image_2
        },
        {
            title: 'First Time Hackers?',
            info: `No worries, We will help start your hackathon journey with awesome workshops and events which will help strengthen your problem solving skills.`,
            image: image_3
        },
        {
            title: 'Team Formation?',
            info: `You can form team of a maximum of <b>5 members</b>. If you don't have a team, you can meet other peer hackers from across the globe at the event and form a team!`,
            image: image_4
        }
    ]

    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-2">
                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                                <h1 className="title is-marginless">What is a Hackathon?</h1>
                                <div className='text-container'> 
                                    {/* <p className="has-text-green has-text-weight-bold">A call for everyone who is interested in solving the problem!</p> */}
                                    <p className="subtitle is-size-6 has-text-weight-normal line-height-2 font-2">
                                    A hackathon is a problem-solving competition in which a diverse group of people form a team and decide to collaborate intensively to develop solutions to given problems or “challenge sets”. A cause hackathon, such as this Sustainability hackathon, is an event focussed on increasing awareness of global causes and providing avenues for participation to become engaged and involved in making the world a better place.
                                    </p>
                                    <br/>
                                </div>
                                <div className='video-container is-hidden-touch'> 
                                    <div className='video-container-content'>
                                    {video_clicked_desktop 
                                    ? 
                                        <ReactPlayer
                                            url="https://www.youtube.com/watch?v=foA8JE2WcJk"
                                            controls={true}
                                            width="100%"
                                            height="450px"
                                            playing={true}
                                        />
                                    : 
                                        <img src={video_thumbnail} alt="What is a Hackathon?" className='pointer is-marginless video-image' width="100%" onClick={() => {playVideoOnClickDesktop(true)}}/>
                                    }
                                    </div>
                                </div>
                                <div className='video-container-2 is-hidden-desktop'> 
                                    {video_clicked_mobile 
                                    ? 
                                        <ReactPlayer
                                            url="https://www.youtube.com/watch?v=foA8JE2WcJk"
                                            controls={true}
                                            width="100%"
                                            height="300px"
                                            playing={true}
                                        />
                                    : 
                                        <img src={video_thumbnail} alt="What is a Hackathon?" className='pointer is-marginless' height={'300px'} onClick={() => {playVideoOnClickMobile(true)}}/>
                                    }
                                </div>
                        <div className='about-questions columns flex-wrap'>
                            {
                                questions.map((question, index) => (
                                    <React.Fragment key={index}>
                                        <div className='column is-hidden-desktop is-12'>
                                            <div className='card card-2 has-background-white card-content'>
                                                <div className='is-flex'>
                                                    <span className="title is-size-5 title-text">{question.title}</span>
                                                </div>
                                                <p className="subtitle is-size-6 has-text-weight-normal line-height-2">{parse(question.info)}</p>
                                            </div>
                                        </div>
                                        <div className='column is-hidden-touch is-6-tablet is-3-desktop'>
                                                <FlipCard
                                                    front_content={`
                                                        <div class="card-front">
                                                            <p class="title is-size-5 title-text">${question.title}</p>
                                                            <div><span></span></div>
                                                        </div>`
                                                    }
                                                    back_content={`
                                                        <p class="subtitle is-size-6 has-text-weight-normal line-height-2">
                                                            ${question.info}
                                                        </p>`
                                                    }
                                                />
                                        </div>
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
