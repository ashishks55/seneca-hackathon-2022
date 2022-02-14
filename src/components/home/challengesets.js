import React, { useState } from 'react'
import Icon1 from '../../images/challengesets/Icon3-white.png';
import Icon2 from '../../images/challengesets/Icon4-white.png';
import Icon3 from '../../images/challengesets/Icon2-white.png';
import Icon4 from '../../images/challengesets/Icon1-white.png';
import { Link } from 'gatsby';


const Challengesets = () => {

    const challengesets = [
        {
            title: 'Corporate Social Responsibility',
            image: Icon1,
            link: '/challenge-set/corporate-social-responsibility',
            disable: false
        },
        {
            title: 'Global Causes',
            image: Icon2,
            link: '/challenge-set/global-cause',
            disable: false
        },
        {
            title: 'Net Zero Goals​',
            image: Icon3,
            link: '/challenge-set/net-zero-goals',
            disable: false
        },
        {
            title: 'Cities and Municipalities',
            image: Icon4,
            link: '/challenge-set/cities-and-municipalities',
            disable: false
        }
    ]

    return (
    <section className="hero is-medium is-white">
        <div className="hero-body hero-body-2">
            <div className='columns'>
                <div className='column is-10 is-offset-1'>
                    <h1 className="title">Categories</h1><br/>
                        <div className='challengesets columns flex-wrap'>
                            {
                                challengesets.map((challengeset, index) => (
                                    <div key={index} className='column is-12-tablet is-3-desktop'>
                                        {
                                            challengeset.disable 
                                            ?
                                                <div className="card card-2">
                                                    <div className="card-image">
                                                        <div className='card-content pd-bottom-0'>
                                                            <figure className="image-challenge">
                                                                <img src={challengeset.image} alt="organizer"/>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="card-content">
                                                        <div className="content card-front">
                                                            <p className='subtitle name is-size-5 has-text-weight-bold line-height-1'>{challengeset.title}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            :
                                                <Link to={challengeset.link}  rel="noopener noreferrer" target="_blank" >
                                                    <div className="card card-2">
                                                        <div className="card-image">
                                                            <div className='card-content pd-bottom-0'>
                                                                <figure className="image-challenge">
                                                                    <img src={challengeset.image} alt="organizer"/>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <div className="card-content">
                                                            <div className="content card-front">
                                                                <p className='subtitle name is-size-5 has-text-weight-bold line-height-1'>{challengeset.title}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                        }
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

export default Challengesets;
