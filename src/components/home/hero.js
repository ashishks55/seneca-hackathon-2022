import React from 'react'
import ReactPlayer from "react-player"
import Countdown from 'react-countdown'
import hero_logo from '../../images/hero-banner.svg'
import home_image from '../../images/home_image.png'
import day1 from '../../images/day1.png'

const hero = () => {

    const date = new Date("February 26, 2022 23:59:59");

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
                        <p className="title">
                            <a className='button is-success' target='_blank' rel="noopener noreferrer" href='https://www.eventbrite.ca/e/senecas-sustainability-hackathon-2022-registration-205162405277'>
                                <span>Register here</span>
                            </a>
                        </p>
                        <p className="subtitle is-size-8 mg-top-1 has-text-green">
                            <b>February 28th - March 4th | ONLINE</b>
                        </p>
                        <p className="subtitle is-size-8 mg-top-1 has-text-green">
                            <a href="https://onedrive.live.com/?authkey=%21AE%5Fhci7DI8BNPC8&cid=BCF558DD07C75935&id=BCF558DD07C75935%21119&parId=BCF558DD07C75935%21117&o=OneUp" target="_blank"><b><u>Hackathon Guidelines</u></b></a>
                        </p>
                        <Countdown
                            date={date}
                            renderer={renderer}
                        />
                    </div>
                    <div className='column hero-img'>
                        {/* <ReactPlayer
                            url="https://www.youtube.com/embed/ytPY3CRvmO8"
                            controls={true}
                            width="100%"
                            height="355px"
                            playing={false}
                            style={{ marginTop: '16px' }}
                        /> */}
                        <div className="has-text-centered"><img src={day1} width="90%" alt="day1"/></div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default hero;
