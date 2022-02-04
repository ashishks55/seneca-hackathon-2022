import React from 'react'
import Countdown from 'react-countdown'
import hero_logo from '../../images/hero-banner.svg'

const hero = () => {

    const date = new Date("February 28, 2022 23:59:59");

    const renderer = (time_left) => {
        return <div className='time-left'>
            <span className='value'>{time_left.days}<br/><span className='unit'>Days</span></span>
            <span className='value'>{time_left.hours}<br/><span className='unit'>Hours</span></span>
            <span className='value'>{time_left.minutes}<br/><span className='unit'>Mins</span></span>
            <span className='value'>{time_left.seconds}<br/><span className='unit'>Secs</span></span>
        </div>;
    };

    return (
        <section className="hero is-medium is-white">
            <div className="hero-body">
                <div className='columns'>
                    <div className='column is-12-tablet is-5-desktop is-offset-1 hero-content'>
                        <p className="title">
                            From Industrial Revolution
                        </p>
                        <p className="title">
                            to <span className='has-text-green'>Sustainable Planet</span>
                        </p>
                        <p className="title">
                            <a className='button is-success' target='_blank' rel="noopener noreferrer" href='https://www.eventbrite.ca/e/senecas-sustainability-hackathon-2022-registration-205162405277'>
                                <span>Register here</span>
                            </a>
                        </p>
                        <p className="subtitle has-text-grey is-size-6">
                            *registrations have started
                        </p>
                        <p>
                        <Countdown
                            date={date}
                            renderer={renderer}
                        />
                        </p>
                        <img src={hero_logo} alt="Sustainable Planet" width="100%" className='is-hidden-tablet'/>
                    </div>
                    <div className='column is-5 is-hidden-touch hero-img'>
                        <img src={hero_logo} alt="Sustainable Planet" width="100%"/>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default hero;
