import React from 'react';
import Icon1 from '../../images/challengesets/Icon1.png';
import Icon2 from '../../images/challengesets/Icon2.png';
import Icon3 from '../../images/challengesets/Icon3.png';
import Icon4 from '../../images/challengesets/Icon4.png';
import "./challengesets"


const Challengesets = () => {
    const challengesets = [
        {
            title: 'Corporate Social Responsibility',
            //details: 'Integrate sustainability into curriculum regardless of area of study.', 
            image: Icon3,
            link: '#' 
        },
        {
            title: 'Global Causes',
            //details: 'How can we leverage from existing technologies to promote reforestation, increase canopy cover, and enhance biodiversity within the school grounds?​', 
            image: Icon4,
            link: '#' 
        },
        {
            title: 'Net Zero Goals​',
            //details: 'A project with TDSB EcoSchools to help propagate the seeds that can be used in the tree planting.', 
            image: Icon2,
            link: '#' 
        },
        {
            title: 'Cities and Municipalities',
            //details: 'A project with TDSB EcoSchools to help propagate the seeds that can be used in the tree planting.', 
            image: Icon1,
            link: '#' 
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
                                        <a href={challengeset.link}  rel="noopener noreferrer" target="_blank" >
                                        <div className="card card-2">
                                            <div className="card-image">
                                                <div className='card-content'>
                                                    <figure className="image is-1by1">
                                                        <img src={challengeset.image} alt="organizer"/>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <div className="content card-front">
                                                    <p className='subtitle name is-size-6 has-text-weight-bold line-height-1'>{challengeset.title}</p>
                                                    {/* <p className='subtitle designation has-text-grey is-size-6 has-text-weight-normal line-height-1'>{challengeset.details}</p> */}
                                                </div>
                                            </div>
                                        </div>
                                        </a>
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
