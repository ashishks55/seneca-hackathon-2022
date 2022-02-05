import React, { useState } from 'react'
import parse from 'html-react-parser'
import ReactPlayer from "react-player"
import video_thumbnail from '../../images/video-thumbnail.png'
import image_1 from '../../images/about/1.png'
import image_2 from '../../images/about/2.png'
import image_3 from '../../images/about/3.png'
import image_4 from '../../images/about/4.png'

const About = () => {

    const [video_clicked, playVideoOnClick] = useState(false);

    const questions = [
        {
            title: 'How do I register myself in the hackathon?',
            info: `All you need to do is click on the <a target='_blank' rel="noopener noreferrer" href='https://www.eventbrite.ca/e/senecas-sustainability-hackathon-2022-registration-205162405277' class='has-text-bold is-underlined has-text-success'>registration link</a> and register using our eventbrite page.`,
            image: image_1
        },
        {
            title: 'I am a first time hacker, what should I do?',
            info: `No worries, we love to welcome first time hackers and start their journey. We have help them start their hackathon journey. We have some awesome workshops and events which will help you strengthen your problem solving skills.`,
            image: image_3
        },
        {
            title: 'Who can attend?',
            info: `Early registration is open to Seneca students. This will be opened up for additional colleges and universities by <b>Jan 21, 2022</b>. Participating colleges and universities will be listed. If you are NOT a student in any of the qualifying institutions, you may still participate, but MUST be assigned to a team anchored by Seneca Students. The Student Success Team will help you accomplish this.`,
            image: image_2
        },
        {
            title: 'How team formation works?',
            info: `You can form team of a maximum of <b>5 members</b>. If you don't have a team, there'll be plenty of opportunities for you to meet other peer hackers across the globe and form a team!`,
            image: image_4
        }
    ]

    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-2">
                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                        <h1 className="title">What is a Hackathon?</h1>
                        <div className="card">
                            <div className="card-content min-height-365">
                                <div className="content columns flex-wrap">
                                    <div className='column is-6-desktop is-12-tablet video-container'> 
                                        {video_clicked 
                                        ? 
                                            <ReactPlayer
                                                url="https://www.youtube.com/watch?v=foA8JE2WcJk"
                                                controls={true}
                                                width="100%"
                                                height="316px"
                                                playing={true}
                                            />
                                        : 
                                            <img src={video_thumbnail} alt="What is a Hackathon?" className='pointer is-marginless' width="100%" onClick={() => {playVideoOnClick(true)}}/>
                                        }
                                    </div>
                                    <div className='column text-container'> 
                                        <p className="has-text-green has-text-weight-bold">A call for everyone who is interested in solving the problem!</p>
                                        <p className="subtitle has-text-grey is-size-6 has-text-weight-normal line-height-2">
                                        A hackathon is a problem-solving competition in which a diverse group of people form a team and decide to collaborate intensively to develop solutions to given problems or “challenge sets”. A cause hackathon, such as this Sustainability hackathon, is an event focussed on increasing awareness of global causes and providing avenues for participation to become engaged and involved in making the world a better place.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='about-questions'>
                            {
                                questions.map((question, index) => (
                                    <div key={index} className='about-question-item'>
                                        <div className='is-flex'>
                                            <img src={question.image} alt="about" width={'60px'}/>
                                            <span className="title is-size-5 title-text">{question.title}</span>
                                        </div>
                                        <p className="subtitle has-text-grey is-size-6 has-text-weight-normal line-height-2">{parse(question.info)}</p>
                                    </div>
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
