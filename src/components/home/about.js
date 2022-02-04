import React, { useState } from 'react';
import ReactPlayer from "react-player"
import video_thumbnail from '../../images/video-thumbnail.png'

const About = () => {

    const [video_clicked, playVideoOnClick] = useState(false);

    return (
        <section class="hero is-medium is-white">
            <div className="hero-body hero-body-2">
                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                        <h1 class="title">What is a Hackathon?</h1>
                        <div class="card">
                            <div class="card-content min-height-365">
                                <div class="content columns flex-wrap">
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
                                        <p class="has-text-green has-text-weight-bold">A call for everyone who is interested in solving the problem!</p>
                                        <p class="subtitle has-text-grey is-size-6 has-text-weight-normal line-height-2">
                                        A hackathon is a problem-solving competition in which a diverse group of people form a team and decide to collaborate intensively to develop solutions to given problems or “challenge sets”. A cause hackathon, such as this Sustainability hackathon, is an event focussed on increasing awareness of global causes and providing avenues for participation to become engaged and involved in making the world a better place.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
