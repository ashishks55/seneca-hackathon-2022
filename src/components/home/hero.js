import React from 'react'
import ReactPlayer from "react-player"
import Countdown from 'react-countdown'
import hero_logo from '../../images/hero-banner.svg'
import home_image from '../../images/home_image.png'

const hero = () => {

    const date = new Date("February 28, 2022 23:59:59");

    const renderer = (time_left) => {
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
                <div className='columns'>
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
                        <p className="title">
                            <a className='button is-success' target='_blank' rel="noopener noreferrer" href='https://www.eventbrite.ca/e/senecas-sustainability-hackathon-2022-registration-205162405277'>
                                <span>Register here</span>
                            </a>
                        </p>
                        <p className="subtitle is-size-6 mg-top-1 has-text-weight-semibold">
                            Last day to register is in
                        </p>
                        <Countdown
                            date={date}
                            renderer={renderer}
                        />
                        {/*<img src={hero_logo} alt="Sustainable Planet" width="100%" className='is-hidden-tablet'/>*/}
                        <ReactPlayer
                            url="https://www.youtube.com/embed/ytPY3CRvmO8?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Fwww.senecahackathon.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=5"
                            controls={true}
                            width="100%"
                            height="450px"
                            playing={true}
                            className='is-hidden-desktop hero-video-margin'
                            style={{ marginRight: '8.333%' }}
                        />
                    </div>
                    <div className='column is-hidden-touch hero-img hero-video-margin'>
                        {/*<img src={hero_logo} alt="Sustainable Planet" width="100%"/>*/}
                        <ReactPlayer
                            url="https://www.youtube.com/embed/ytPY3CRvmO8?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Fwww.senecahackathon.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=5"
                            controls={true}
                            width="180%"
                            height="376px"
                            playing={true}
                            style={{ marginTop: '16px' }}
                        />
                    </div>
                </div>
            </div>
        </section>
  );
};

export default hero;
