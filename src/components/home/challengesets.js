import React from 'react';
import nature from '../../images/challengesets/nature-challenge.png';
import sustainability from '../../images/challengesets/sustainability-challenge.png';
import tech from '../../images/challengesets/tech-challenge.png';


const Challengesets = () => {
    const challengesets = [
        {
            title: 'Sustainability in Curriculum',
            details: 'Integrate sustainability into curriculum regardless of area of study.', 
            image: sustainability,
            link: '#'
        },
        {
            title: 'Technology-Based Challenge Set​',
            details: 'How can we leverage from existing technologies to promote reforestation, increase canopy cover, and enhance biodiversity within the school grounds?​', 
            image: tech,
            link: '#'
        },
        {
            title: 'Nature-Based Challenge Set​',
            details: 'A project with TDSB EcoSchools to help propagate the seeds that can be used in the tree planting.', 
            image: nature,
            link: '#'
        },
    ]
    return (
    <section className="hero is-medium is-white">
        <div className="hero-body hero-body-2">
            <div className='columns'>
                <div className='column is-10 is-offset-1'>
                    <h1 className="title">Challenge sets</h1><br/>
                        <div className='challengesets columns flex-wrap'>
                            {
                                challengesets.map((challengeset, index) => (
                                    <div key={index} className='column is-12-tablet is-4-desktop'>
                                        <div className="card card-2">
                                            <div className="card-image">
                                                <figure className="image is-2by1">
                                                    <img src={challengeset.image} alt="organizer"/>
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="content organizer-card-content">
                                                    <p className='subtitle name is-size-6 has-text-weight-bold line-height-1'>{challengeset.title}</p>
                                                    <p className='subtitle designation has-text-grey is-size-6 has-text-weight-normal line-height-1'>{challengeset.details}</p>
                                                </div>
                                            </div>
                                        </div>
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
