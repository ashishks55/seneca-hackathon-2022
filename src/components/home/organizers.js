import React from 'react';
import mark from '../../images/people/mark.jpg';
import josh from '../../images/people/josh.jpg';
import david from '../../images/people/david.jpg';
import shirlene from '../../images/people/shirlene.jpg';
import arturo from '../../images/people/arturo.jpg';
import reeti from '../../images/people/reeti.jpeg';
import gabriela from '../../images/people/gabriela.jpeg';
import kartik from '../../images/people/kartik.jpg';
import leslie from '../../images/people/leslie.jpg';
import benjamin from '../../images/people/benjamin.jpg';
import linkedin_icon from '../../images/linkedin.jpg';

const Organizers = () => {

    const organizers = [
        {
            name: 'Mark Buchner',
            linkedin_url: 'https://www.linkedin.com/in/mark-buchner-bb6a7013/',
            title: 'Hackathon Chair',
            image: mark
        },
        {
            name: 'Josh Lee',
            linkedin_url: 'https://www.linkedin.com/in/joshsblee/',
            title: 'Hackathon Vice Chair',
            image: josh
        },
        {
            name: 'David Jeong',
            linkedin_url: 'https://www.linkedin.com/in/david-jeong/',
            title: 'Executive Director - Digital Marketing and Partner Experience',
            image: david
        },
        {
            name: 'Shirlene Phyllis Lee-Feliciano',
            linkedin_url: 'https://www.linkedin.com/in/splfeliciano/',
            title: 'Chief of Staff',
            image: shirlene
        },
        {
            name: 'Arturo Parrales',
            linkedin_url: 'https://www.linkedin.com/in/arturoparrales/',
            title: 'Director (Operations)',
            image: arturo
        },
        {
            name: 'Reeti Verma',
            linkedin_url: 'https://www.linkedin.com/in/reetiv/',
            title: 'Director (Marketing)',
            image: reeti
        },
        {
            name: 'Gabriela Coto Fernandez',
            linkedin_url: 'https://www.linkedin.com/in/gabriela-coto-fernandez/',
            title: 'Director (Channels and Communications)',
            image: gabriela
        },
        {
            name: 'Kartik Sorathiya',
            linkedin_url: 'https://www.linkedin.com/in/kartiksorathiya/',
            title: 'Director (Technology)',
            image: kartik
        },
        {
            name: 'Leslie Ann Lim',
            linkedin_url: 'https://www.linkedin.com/in/leslie-ann-dominguez-lim-87769b30/',
            title: 'Director (Registrations)',
            image: leslie
        },
        {
            name: 'Benjamin Joab Ruiz-Sarinana',
            linkedin_url: 'https://www.linkedin.com/in/ruiz-sarinana-benjamin/',
            title: 'Director (Social Media)',
            image: benjamin
        }
    ]

    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-2">
                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                    <h1 className="title">Our Organizing Committee</h1><br/>
                        <div className='organizers columns flex-wrap'>
                            {
                                organizers.map((organizer, index) => (
                                    <div key={index} className='column is-4-tablet is-3-desktop'>
                                        <div className="card card-3">
                                            <div className="card-image is-rounded-container">
                                                <figure className="image is-1by1">
                                                    <img src={organizer.image} alt="organizer"/>
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="content organizer-card-content">
                                                    <p className='subtitle name is-size-6 has-text-weight-bold line-height-1'>{organizer.name}</p>
                                                    <p className='subtitle designation is-size-6 has-text-weight-normal line-height-1'>{organizer.title}<a target='_blank' rel="noopener noreferrer" href={organizer.linkedin_url}><img src={linkedin_icon} alt="linkedin" className='linkedin-icon-inline'/></a></p>
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

export default Organizers;
