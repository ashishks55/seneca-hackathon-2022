import React, { useState } from 'react'
import ReactPlayer from "react-player"
import Countdown from 'react-countdown'
import hero_logo from '../../images/hero-banner.svg'
import home_image from '../../images/home_image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import day2 from '../../images/day1.png'

const HeroNew = () => {

    const date = new Date("March 4, 2022 10:59:59");
    const [timer_done, setTimerDone] = useState(false);

    const Renderer = (time_left) => {
        setTimerDone(time_left.completed)
        if(time_left.completed){
            return '';
        }
        return <div className='time-left'>
            <span className='value'>{time_left.days}<br/><span className='unit'>Days</span></span>
            <span className='value'>{time_left.hours}<br/><span className='unit'>Hours</span></span>
            <span className='value'>{time_left.minutes}<br/><span className='unit'>Mins</span></span>
            <span className='value'>{time_left.seconds}<br/><span className='unit'>Secs</span></span>
        </div>;
    };

    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-3">
                <div className='columns flex-wrap'>
                    <div className='column is-12-tablet is-5-desktop is-offset-1 hero-content hero-custom-width'>
                        <div className='is-hidden-desktop'><br/><br/></div>
                        <p className="title">
                            <span>From</span>
                        </p>
                        <p className="title has-text-green-light">
                            Industrial Revolution
                        </p>
                        <p className="title">
                            <span>To</span>
                        </p>
                        <p className="title">
                           <span className='has-text-green-light'>Sustainable Planet</span>
                        </p>
                        <p className="subtitle is-size-8 mg-top-1 has-text-green">
                            <b>February 28th - March 4th | ONLINE</b>
                        </p>
                        <p className="title">
                            <p className="subtitle is-size-6 has-text-green"><a href='https://www.eventbrite.ca/e/senecas-sustainability-hackathon-2022-registration-205162405277' target="_blank"><b>To participate, <u>Register now</u>    <FontAwesomeIcon icon={faExternalLinkAlt} /></b></a></p>
                        </p>
                        <div>
                                    <div className="submit-task-2">
                                        <br/>
                                        {timer_done ? 
                                            <p>
                                                <button disabled={true} className='button is-primary submit-button has-text-weight-bold'>
                                                    <span>Final submission</span>
                                                </button>
                                            </p>
                                        :
                                            <p>
                                                <a className='button is-primary submit-button has-text-weight-bold' target='_blank' rel="noopener noreferrer" href='https://script.google.com/macros/s/AKfycbxXi8dyz-6sUbT-h-bMsfgaV9RUFu5YMgkObRHzcvZwV1dFoo8/exec'>
                                                    <span>Final submission</span>
                                                </a>
                                            </p>
                                        }
                                        <p className="subtitle is-size-6 has-text-green submit-info has-text-weight-bold">Submission <a href='https://1drv.ms/b/s!AjVZxwfdWPW8dz2tFk57Fj8uGao?e=WAAbpQ' target="_blank"><u>Guidelines and Evaluation.</u></a></p>     
                                        <Countdown
                                            date={date}
                                            renderer={Renderer}
                                        />
                                    </div>
                        </div>
                    </div>
                    <div className='column has-text-centered'>
                        <div>
                            <img src={day2} width="90%"/>
                        </div>
                    </div>
                    {/* <div className='column hero-img'>
                        <ReactPlayer
                            url="https://www.youtube.com/embed/ytPY3CRvmO8"
                            controls={true}
                            width="100%"
                            height="355px"
                            playing={false}
                            style={{ marginTop: '16px' }}
                        />
                    </div> */}
                </div>
            </div>
        </section>
  );
};

export default HeroNew;
