import React from 'react';
import hero_logo from '../../images/hero-banner.svg';

const hero = () => {
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
