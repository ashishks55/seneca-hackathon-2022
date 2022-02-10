import React from 'react';
import nature from '../../images/challengesets/nature-challenge.png';
import sustainability from '../../images/challengesets/sustainability-challenge.png';
import tech from '../../images/challengesets/tech-challenge.png';
//import "./challengesets"


const Challengesets = () => {
    const challengesets = [
        {
            title: 'Develop affordable solutions to automate reduction of food wastage in restaurants',
            /* details: 'Integrate sustainability into curriculum regardless of area of study.', 
            image: sustainability,
            link: '#' */
        },
        {
            title: 'Consumer awareness programs towards sustainable electronic consumption methods​',
            /* details: 'How can we leverage from existing technologies to promote reforestation, increase canopy cover, and enhance biodiversity within the school grounds?​', 
            image: tech,
            link: '#' */
        },
        {
            title: 'Sustainable Product Delivery System​',
            /* details: 'A project with TDSB EcoSchools to help propagate the seeds that can be used in the tree planting.', 
            image: nature,
            link: '#' */
        },
        {
            title: 'How can we leverage from existing technologies to promote reforestation, increase canopy cover, and enhance biodiversity within the school grounds?​',
        },
        {
            title: 'How can we increase biodiversity, enhance our knowledge in growing more native plants, and support projects that mitigate the impact of climate change?​',
        },
        {
            title: 'Challenge set based on carbon footprint and mapping in collaboration with Kingbridge Centre is considered.',
        },
        {
            title: 'Maximize water use efficiency and minimize water wastage using innovative technologies, analytics and services.​',
        },
       {
            title: '"Use available information and technology to promote Natural Heritage and establish Brampton as an eco friendly neighborhood"',
        },
        /*{
            title: 'Introduce a membership system to encourage community to explore natural heritage',
        },
        {
            title: 'Develop a tool/methodology/checklist to measure the degree of resilience and green building requirements(GBR) compliance. Also, a recommendation system to achieve greater resilience and to meet GBRs',
        },
        {
            title: 'Build a solution that can analyse the Toronto waterfront area using GIS data and make recommendations related to the tree planting.',
        },
        {
            title: 'Propose a solution to increase the awareness about these public places. Also, provide ways to monitor statistics from the past and predict for the future.',
        },
        {
            title: 'International Travelers Carbon footprint reduction and credit management',
        },
        {
            title: 'Food waste reduction',
        },
        {
            title: 'Data mining and data analytics',
        },
        {
            title: 'Implement an innovative solution that can help reduce the carbon emissions during the supply chain phase based on net zero carbon and circular economy baselines.',
        },
        {
            title: 'Propose an innovative solution that can help increase the post-consumer plastic consumption within and after the product lifecycle',
        },
        {
            title: 'Developing a Self-Help Application',
        },
        {
            title: 'Developing an AI application for delivering interactive Yoga Sessions and proposing market strategy or business idea for growth and expansion with focus on traditional and conventional methods of yogic practice and healing.',
        },
        {
            title: 'Providing a system which enables micro credentialing and eventually helps in gaining better job opportunities for people in this field.',
        },
        {
            title: 'To research the legal structure and laws in the field of Yoga worldwide and provide means or ways through which laws in the field of Yoga can be enforced.',
        }, */
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
                                    <div key={index} className='column is-12-tablet is-3-desktop'>
                                        <div className="card card-2">
                                            {/* <div className="card-image">
                                                <figure className="image is-2by1">
                                                    <img src={challengeset.image} alt="organizer"/>
                                                </figure>
                                            </div> */}
                                            <div className="card-content">
                                                <div className="content organizer-card-content">
                                                    <p className='subtitle name is-size-6 has-text-weight-bold line-height-1'>{challengeset.title}</p>
                                                    {/* <p className='subtitle designation has-text-grey is-size-6 has-text-weight-normal line-height-1'>{challengeset.details}</p> */}
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
