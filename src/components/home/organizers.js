import React from 'react';
import mark from '../../images/people/mark.jpg';
import josh from '../../images/people/josh.jpg';
import david from '../../images/people/david.jpg';
import shirlene from '../../images/people/shirlene.jpg';
import arturo from '../../images/people/arturo.jpg';
import reeti from '../../images/people/reeti.jpeg';
import gabriela from '../../images/people/gabriela.jpeg';
import neha from '../../images/people/neha.jpeg';
import leslie from '../../images/people/leslie.jpg';
import jamie from '../../images/people/jamie.jpg';
import jan from '../../images/people/jan.jpg';
import benjamin from '../../images/people/benjamin.jpg';
import arjan from '../../images/people/arjan.jpg';
import clairol from '../../images/people/clairol.jpeg';
import azher from '../../images/people/azher.jpeg';
import linkedin_icon from '../../images/linkedin.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
            email: 'shirlene-phyllis-lee.feliciano@senecacollege.ca',
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
            name: 'Neha',
            linkedin_url: 'https://www.linkedin.com/in/kartiksorathiya/',
            email: 'nldsouza2@gmail.com',
            title: 'IT Manager/Team Lead (Information Technology)',
            image: neha
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
        },
        {
            name: 'Jamie',
            linkedin_url: '',
            email: 'jmfabia@myseneca.ca',
            title: 'Events Information Manager (Registration)',
            image: jamie
        },
        {
            name: 'Clairol Zam Salazar',
            linkedin_url: '',
            email: 'csalazar5@myseneca.ca',
            title: 'Registrations Manager (Registration)',
            image: clairol
        },
        {
            name: 'Mohammed Ismail Azher Siddiqui',
            linkedin_url: '',
            email: 'miazher-siddiqui@myseneca.ca',
            title: 'SSO (Student Success Officer) (Hackathon)',
            image: azher
        },
        {
            name: 'Jan Danielle Bukiran',
            linkedin_url: '',
            email: 'jdbukiran@myseneca.ca',
            title: 'Event Information Manager (Registration)',
            image: jan
        },
        {
            name: 'Arjan Singh Bajwa',
            linkedin_url: '',
            email: 'asbajwa10@myseneca.ca',
            title: 'Student Success Officer for HP Canada (Challenge Set)',
            image: arjan
        }
    ]

    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-2">
                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                    <br/>
                    <br/>
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
                                                    <p className='subtitle designation is-size-6 has-text-weight-normal line-height-1'>
                                                        {organizer.title}
                                                        {organizer.linkedin_url ? <a target='_blank' rel="noopener noreferrer" href={organizer.linkedin_url}><img src={linkedin_icon} alt="linkedin" className='linkedin-icon-inline'/></a> : null}
                                                        {organizer.email ? <a target='_blank' rel="noopener noreferrer" href={`mailto:${organizer.email}`} className='email-icon'><FontAwesomeIcon icon={faEnvelope}/></a> : null}
                                                    </p>
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
