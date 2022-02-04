import React from 'react';
import linkedin from '../../images/social/linkedin-white.svg'
import facebook from '../../images/social/facebook.svg'
import instagram from '../../images/social/instagram.svg'
import twitter from '../../images/social/twitter.svg'

const SocialMedia = () => {

    const social_media = [
        {
            icon: linkedin,
            link: 'https://www.linkedin.com/company/seneca-sustainability-hackathon/mycompany/'
        },
        {
            icon: facebook,
            link: 'https://www.facebook.com/SenecaHackathon2022'
        },
        {
            icon: twitter,
            link: 'https://twitter.com/SenecaHackathon'
        },
        {
            icon: instagram,
            link: 'https://www.instagram.com/senecahackathon/'
        }
    ]

    return (
        <div className='social-media'>
            {
                social_media.map((platform, index) => (
                    <div key={index} className="social-media-icon">
                        <a target='_blank' rel="noopener noreferrer" href={platform.link}><img src={platform.icon} alt="social"/></a>
                    </div>
                ))
            }
        </div>
    );
};

export default SocialMedia;
