//import React from 'react';
import React, { useState } from 'react';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import parse from 'html-react-parser'


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

import Ashish from '../../images/people/Ashish.jpg';
import Greeshma from '../../images/people/GREESHMA.jpeg';
import HemLata from '../../images/people/HemLata.jpeg';
import Mini from '../../images/people/Mini.jpeg';
import Nisha from '../../images/people/Nisha.jpeg';
import Rugma from '../../images/people/Rugma.jpg';
import Thrishya from '../../images/people/Thrishya.jpeg';
import Viren from '../../images/people/Viren.jpg';

import linkedin_icon from '../../images/linkedin.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import cm_1 from '../../images/logos/cm-1.jpg'
import cm_2 from '../../images/logos/cm-2.png'
import cm_3 from '../../images/logos/cm-3.png'
import cm_4 from '../../images/logos/cm-4.png'

import csr_1 from '../../images/logos/csr-1.png'
import csr_2 from '../../images/logos/csr-2.png'
import csr_3 from '../../images/logos/csr-3.png'
import csr_4 from '../../images/logos/csr-4.png'
import csr_5 from '../../images/logos/csr-5.jpg'

import gco_1 from '../../images/logos/gco-1.png'
import gco_2 from '../../images/logos/gco-2.png'
import gco_3 from '../../images/logos/gco-3.png'
import gco_4 from '../../images/logo.png'

import nzc_1 from '../../images/logos/nzc-1.svg'
import nzc_2 from '../../images/logos/nzc-2.png'
import nzc_3 from '../../images/logos/nzc-3.png'
import nzc_4 from '../../images/logos/nzc-4.png'
import nzc_5 from '../../images/logos/nzc-5.svg'
import nzc_6 from '../../images/logos/nzc-6.jpg'
import nzc_7 from '../../images/logos/nzc-7.png'

import ts_1 from '../../images/logos/ts-1.png'
import ts_2 from '../../images/logos/ts-2.png'
import ts_3 from '../../images/logos/ts-3.png'
import ts_4 from '../../images/logos/ts-4.png'
import ts_5 from '../../images/logos/ts-5.png'

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
        }
    ]

    const directors = [
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
            name: 'Neha Dsouza',
            linkedin_url: 'https://www.linkedin.com/in/nehaxdsouza/',
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
        // {
        //     name: 'Mohammed Ismail Azher Siddiqui',
        //     linkedin_url: '',
        //     email: 'miazher-siddiqui@myseneca.ca',
        //     title: 'SSO (Student Success Officer) (Hackathon)',
        //     image: azher
        // },
        {
            name: 'Jan Danielle Bukiran',
            linkedin_url: '',
            email: 'jdbukiran@myseneca.ca',
            title: 'Event Information Manager (Registration)',
            image: jan
        },
        // {
        //     name: 'Arjan Singh Bajwa',
        //     linkedin_url: '',
        //     email: 'asbajwa10@myseneca.ca',
        //     title: 'Student Success Officer for HP Canada (Challenge Set)',
        //     image: arjan
        // }
    ]

    const challenge_set_people = [
        {
            category: 'Corporate Social Responsibility',
            people_details: [
                {
                    sponsor: csr_1,
                    width: '130px',
                    people: [
                        {
                            name: 'Mohammed Ismail Azher Siddiqui',
                            title: 'Student Success Officer',
                            email: 'miazher-siddiqui@myseneca.ca'
                        },
                        {
                            name: 'Nishant Adekar',
                            title: 'Student Success Officer',
                            email: 'nadekar@myseneca.ca'
                        },
                        {
                            name: 'Chandni Patel',
                            title: 'Partner experience officer',
                            email: 'cspatel11@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: csr_2,
                    width: '100px',
                    people: [
                        {
                            name: 'Arjan Bajwa',
                            title: 'Student Success Officer',
                            email: 'asbajwa10@myseneca.ca'
                        },
                        {
                            name: 'Karamvir Grewal',
                            title: 'Student Success Officer',
                            email: 'kgrewal23@myseneca.ca'
                        },
                        {
                            name: 'Palak Chalana',
                            title: 'Partner experience officer',
                            email: 'pchalana@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: csr_3,
                    width: '130px',
                    people: [
                        {
                            name: 'Shubra Verma',
                            title: 'Student Success Officer',
                            email: 'sverma91@myseneca.ca'
                        },
                        {
                            name: 'Vishnu Prasanth Suresh Kumar',
                            title: 'Partner experience officer',
                            email: 'vpsuresh-kumar@myseneca.ca'
                        }
                    ]
                }
            ]
        },
        {
            category: 'Cities and Municipalities',
            people_details: [
                {
                    sponsor: cm_1,
                    width: '130px',
                    people: [
                        {
                            name: 'Akriti Singh',
                            title: 'Student Success Officer',
                            email: 'asingh947@myseneca.ca'
                        },
                         {
                            name: 'Jeffrey George Pinto',
                            title: 'Partner experience officer',
                            email: 'jgpinto@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: cm_2,
                    width: '130px',
                    people: [
                        {
                            name: 'Kanchan',
                            title: 'Student Success Officer',
                            email: 'k39@myseneca.ca'
                        },
                         {
                            name: 'Vrinda Agrawal',
                            title: 'Partner experience Officer',
                            email: 'vagrawal2@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: cm_3,
                    width: '100px',
                    people: [
                        {
                            name: 'Navjyot Singh Sawhney',
                            title: 'Student Success Officer',
                            email: 'nssawhney@myseneca.ca'
                        },
                         {
                            name: 'Gautam Kumar Lalan Prasad Singh',
                            title: 'Partner experience Officer',
                            email: 'gklpsingh@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: cm_4,
                    width: '100px',
                    people: [
                        {
                            name: 'Shlok Vijay Salunke',
                            title: 'Student Success Officer',
                            email: 'svsalunke@myseneca.ca'
                        },
                         {
                            name: 'Emily Sapitan',
                            title: 'Partner experience Officer',
                            email: 'esapitan@myseneca.ca'
                        }
                    ]
                }
            ]
        },
        {
            category: 'Global Causes and Organizations',
            people_details: [
                {
                    sponsor: 'PRME',
                    width: '100px',
                    is_string: true,
                    people: [
                        {
                            name: 'Shubham Sharma',
                            title: 'Student Success Officer',
                            email: 'ssharma470@myseneca.ca'
                        },
                         {
                            name: 'Annalyn Bislig',
                            title: 'Partner experience Officer',
                            email: 'adbislig@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: gco_1,
                    width: '100px',
                    people: [
                        {
                            name: 'Shivika Adhwaryu',
                            title: 'Student Success Officer',
                            email: ''
                        },
                         {
                            name: 'Neha',
                            title: 'Partner experience Officer',
                            email: 'n52@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: gco_2,
                    width: '100px',
                    people: [
                        {
                            name: 'Karishma Patel',
                            title: 'Student Success Officer, Partner experience Officer',
                            email: 'kpatel394@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: gco_4,
                    width: '100px',
                    people: [
                        {
                            name: 'Neha Badhran',
                            title: 'Student Success Officer, Partner experience Officer',
                            email: 'nbadhran@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: gco_3,
                    width: '100px',
                    people: [
                        {
                            name: 'Benjamin Ruiz-Sarinana',
                            title: 'Partner experience Officer',
                            email: 'bruiz2@myseneca.ca'
                        }
                    ]
                }
            ]
        },
         {
            category: 'Net-Zero Goals',
            people_details: [
                {
                    sponsor: nzc_1,
                    width: '100px',
                    people: [
                        {
                            name: 'Emon Kaur',
                            title: 'Student Success Officer',
                            email: 'ekaur11@myseneca.ca'
                        },
                         {
                            name: 'Hiralkumari Priyan Solanki  ',
                            title: 'Partner Experience Officer',
                            email: 'hpsolanki@myseneca.ca '
                        }
                    ]
                },
                {
                    sponsor: nzc_2,
                    width: '100px',
                    people: [
                        {
                            name: 'Ankush Bansal',
                            title: 'Student Success Officer',
                            email: 'abansal18@myseneca.ca'
                        },
                         {
                            name: 'Abhishek Zala',
                            title: 'Partner Experience Officer',
                            email: 'apzala@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: nzc_3,
                    width: '100px',
                    people: [
                        {
                            name: 'Gurpreet Ghataura',
                            title: 'Student Success Officer',
                            email: 'gkghataura@myseneca.ca'
                        },
                         {
                            name: 'Muhammad Saifur Rahman',
                            title: 'Partner Experience Officer',
                            email: 'msrahman34@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: nzc_4,
                    width: '100px',
                    people: [
                        {
                            name: 'Sanchit Aggarwal',
                            title: 'Student Success Officer',
                            email: 'saggarwal14@myseneca.ca'
                        },
                         {
                            name: 'Richa Pavankumar Bhatia',
                            title: 'Partner Experience Officer',
                            email: 'rpbhatia@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: nzc_6,
                    width: '60px',
                    people: [
                        {
                            name: 'Avlika Kathrotiya',
                            title: 'Student Success Officer, Partner Experience Officer',
                            email: 'amkathrotiya@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: nzc_7,
                    width: '100px',
                    people: [
                        {
                            name: 'Ana Maria Rojas',
                            title: 'Student Success Officer',
                            email: 'amavendano-rojas@myseneca.ca'
                        },
                         {
                            name: 'Kaveh Eshraghian',
                            title: 'Partner Experience Officer',
                            email: ''
                        }
                    ]
                }
            ]
        },
        {
            category: 'Solution Technologies',
            people_details: [
                {
                    sponsor: ts_3,
                    width: '100px',
                    people: [
                         {
                            name: 'Pratik Khatri',
                            title: 'Partner Experience Officer',
                            email: 'pkkhatri@myseneca.ca'
                        }
                    ]
                },
                {
                    sponsor: ts_2,
                    width: '100px',
                    people: [
                        {
                            name: 'Shalmal Soni',
                            title: 'Student Success Officer',
                            email: 'scsoni1@myseneca.ca'
                        },
                         {
                            name: 'Gopalakrishnan Vilwadri',
                            title: 'Partner Experience Officer',
                            email: 'gopalakrishnan-vilwa@myseneca.ca'
                        }
                    ]
                }
            ]
        }
    ]

    const it_team = [
        {
            name: 'Neha Dsouza',
            email: 'nldsouza2@gmail.com',
            title: 'IT Manager/Team Lead',
            image: neha
        },
        {
            name: 'Thrishya Nagarajan Karthikeyan',
            email: 'tnagarajan-karthikey@myseneca.ca',
            title: 'UX/UI Designer',
            image: Thrishya
        },
        {
            name: 'Ashish Kanwar Singh',
            email: 'aksingh27@myseneca.ca',
            title: 'Developer',
            image: Ashish
        },
        {
            name: 'Nisha Magnani',
            email: 'npmagnani@myseneca.ca',
            title: 'Full Stack Developer',
            image: Nisha
        },
        {
            name: 'Mini Krishnankutty',
            email: 'mkrishnankutty@myseneca.ca',
            title: 'Developer',
            image: Mini
        },
        {
            name: 'Rugma Muraleedharan Sandhya',
            email: 'rmuraleedharan-sandh@myseneca.ca',
            title: 'Developer',
            image: Rugma
        },
        {
            name: 'Viren Dhingra',
            email: 'vdhingra1@myseneca.ca',
            title: 'Quality Analyst Lead',
            image: Viren
        },
        {
            name: 'Greeshma Gopal',
            email: 'ggopal2@myseneca.ca',
            title: 'Quality Analyst',
            image: Greeshma
        },
        {
            name: 'Hem Lata',
            email: 'hlata@myseneca.ca',
            title: 'Quality Analyst',
            image: HemLata
        }
    ]

    const [isFlipped, setFlipped] = useState(false);
    const [isFlipped2, setFlipped2] = useState(false);
    const [isFlipped3, setFlipped3] = useState(false);

    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-2">
                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                        <br/>
                        <br/>
                        <h1 className="title" style={{textAlign: "center"}}>Meet Our Organizers</h1><br/><br/>
                        <div className='organizers columns flex-wrap'>
                            {
                                organizers.map((organizer, index) => (
                                    <div key={index} className='column is-4-tablet is-2-5-desktop'>
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
                
                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                        <div className='organizers-list'>
                            <div className='accordion-item'>
                                <p onClick={() => {setFlipped(!isFlipped)}} className='faq-title pointer'><h1 className="title">Directors</h1><span><FontAwesomeIcon icon={isFlipped ? faChevronDown : faChevronRight} /></span></p>
                                {isFlipped ? <p className='a-info'>
                                    {
                                        <div className='organizers columns flex-wrap'>
                                        {
                                            directors.map((dir, index) => (
                                                <div key={index} className='column is-4-tablet is-2-5-desktop'>
                                                    <div className="card card-3">
                                                        <div className="card-image is-rounded-container">
                                                            <figure className="image is-1by1">
                                                                <img src={dir.image} alt="organizer"/>
                                                            </figure>
                                                        </div>
                                                        <div className="card-content">
                                                            <div className="content organizer-card-content">
                                                                <p className='subtitle name is-size-6 has-text-weight-bold line-height-1'>{dir.name}</p>
                                                                <p className='subtitle designation is-size-6 has-text-weight-normal line-height-1'>
                                                                    {dir.title}
                                                                    {dir.linkedin_url ? <a target='_blank' rel="noopener noreferrer" href={dir.linkedin_url}><img src={linkedin_icon} alt="linkedin" className='linkedin-icon-inline'/></a> : null}
                                                                    {dir.email ? <a target='_blank' rel="noopener noreferrer" href={`mailto:${dir.email}`} className='email-icon'><FontAwesomeIcon icon={faEnvelope}/></a> : null}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    }
                                </p>: null}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                        <div className='organizers-list'>
                            <div className='accordion-item'>
                                <p onClick={() => {setFlipped2(!isFlipped2)}} className='faq-title pointer'><h1 className="title">Challenge Set Organizers</h1><span><FontAwesomeIcon icon={isFlipped2 ? faChevronDown : faChevronRight} /></span></p>
                                {isFlipped2 ? <p className='a-info'>
                                    {
                                        challenge_set_people.map(challenge => (
                                            <div className="challenge-container">
                                                <h1 className="subtitle">{challenge.category}</h1><br/>
                                                <div className="columns flex-wrap">
                                                    {
                                                        challenge.people_details.map(people_data => (
                                                            <div className="sponsor-item column is-12-mobile is-12-tablet is-4-desktop columns is-align-items-center">
                                                                <div className="column is-4 is-paddingless is-marginless sponsor-image">{people_data.is_string ? people_data.sponsor : <img src={people_data.sponsor} alt="sponsor" width={people_data.width}/>}</div>
                                                                <div className="column is-paddingless is-flex is-flex-direction-column people-list">
                                                                {
                                                                    people_data.people.map(people => (
                                                                        <div className="people-item">
                                                                            <br className="is-hidden-desktop"/>
                                                                            <p className="name">{people.name}</p>
                                                                            <p className="desig">{people.title} {people.email ? <a target='_blank' rel="noopener noreferrer" href={`mailto:${people.email}`} className='email-icon'><FontAwesomeIcon icon={faEnvelope}/></a> : null}</p>
                                                                        </div>
                                                                    ))
                                                                }
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        )) 
                                    }
                                </p>: null}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='columns'>
                    <div className='column is-10 is-offset-1'>
                        <div className='organizers-list'>
                            <div className='accordion-item'>
                                <p onClick={() => {setFlipped3(!isFlipped3)}} className='faq-title pointer'><h1 className="title">IT Team</h1><span><FontAwesomeIcon icon={isFlipped3 ? faChevronDown : faChevronRight} /></span></p>
                                {isFlipped3 ? <p className='a-info'>
                                    {
                                        <div className='organizers columns flex-wrap'>
                                        {
                                            it_team.map((it, index) => (
                                                <div key={index} className='column is-4-tablet is-2-5-desktop'>
                                                    <div className="card card-3">
                                                        <div className="card-image is-rounded-container">
                                                            <figure className="image is-1by1">
                                                                <img src={it.image} alt="organizer"/>
                                                            </figure>
                                                        </div>
                                                        <div className="card-content">
                                                            <div className="content organizer-card-content">
                                                                <p className='subtitle name is-size-6 has-text-weight-bold line-height-1'>{it.name}</p>
                                                                <p className='subtitle designation is-size-6 has-text-weight-normal line-height-1'>
                                                                    {it.title}
                                                                    {it.linkedin_url ? <a target='_blank' rel="noopener noreferrer" href={it.linkedin_url}><img src={linkedin_icon} alt="linkedin" className='linkedin-icon-inline'/></a> : null}
                                                                    {it.email ? <a target='_blank' rel="noopener noreferrer" href={`mailto:${it.email}`} className='email-icon'><FontAwesomeIcon icon={faEnvelope}/></a> : null}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    }
                                </p>: null}
                            </div>
                        </div>
                    </div>
                </div>
            

            
            </div>
        </section>
    );
};

export default Organizers;
