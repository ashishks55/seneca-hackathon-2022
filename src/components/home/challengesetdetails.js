import React from 'react';
import Accordion from '../reusable/accordion';


const ChallengeSetsDetails = ({id}) => {

    const challengesets = {
        'corporate-social-responsibility' :{
            title: 'Corporate Social Responsibility',
            details: 'Integrate sustainability into curriculum regardless of area of study.', 
            info_items:  [
                {
                    title: 'International Travelers carbon footprint reduction',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                },
                {
                    title: 'International Travelers carbon footprint reduction',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                },
                {
                    title: 'International Travelers carbon footprint reduction',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                }
            ]
        },
        'global-cause' : {
            title: 'Global Causes',
            details: 'How can we leverage from existing technologies to promote reforestation, increase canopy cover, and enhance biodiversity within the school grounds?​', 
            info_items:  [
                {
                    title: 'International Travelers carbon footprint reduction',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                },
                {
                    title: 'International Travelers carbon footprint reduction',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                },
                {
                    title: 'International Travelers carbon footprint reduction',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                }
            ]
        },
        'net-zero-goals' : {
            title: 'Net Zero Goals​',
            details: 'A project with TDSB EcoSchools to help propagate the seeds that can be used in the tree planting.', 
            info_items:  [
                {
                    title: 'International Travelers carbon footprint reduction',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                },
                {
                    title: 'International Travelers carbon footprint reduction',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                },
                {
                    title: 'International Travelers carbon footprint reduction',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                }
            ]
        },
        'cities-and-municipalities' :{
            title: 'Cities and Municipalities',
            details: 'A project with TDSB EcoSchools to help propagate the seeds that can be used in the tree planting.', 
            info_items:  [
                {
                    title: 'International Travelers carbon footprint reduction',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                },
                {
                    title: 'International Travelers carbon footprint reduction',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                },
                {
                    title: 'International Travelers carbon footprint reduction',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                }
            ]
        }
    }

    return (
    <section className="hero is-medium is-white">
        <div className="hero-body hero-body">
            <div className='columns'>
                <div className='column is-10 is-offset-1'>
                    <h1 className="title">{challengesets[id].title}</h1>
                    <p>{challengesets[id].details}</p>
                    <div className='accordion-list'>
                        {
                            challengesets[id].info_items.map((item, index) => (
                                <Accordion title={item.title} info={item.info} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ChallengeSetsDetails;
