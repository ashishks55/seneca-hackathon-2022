import React from 'react';
import PastEventsBackgroundImage from '../images/footer/past_events_background_image.png';
import Hackathon2021Logo from '../images/footer/hackathon_2021_logo.png';
import SocialMedia from './reusable/socialmedia';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '4px solid #1C444C',
            paddingTop: '3rem'
        }}>
            <div style={{ width: '100%', marginBottom: '2%' }}>
                <div className="has-text-centered" style={{
                    width: '50%', display: 'inline-block', verticalAlign: 'top'
                }}>
                    <div style={{ textAlign: 'left', display: 'inherit' }}>
                        <span style={{ color: '#1C444C', textAlign: 'left', }}><b>Need more information?</b></span><br />
                        <span style={{ color: '#459888', textAlign: 'left' }}><b>Contact us at <a href='mailto:info@senecahackathon.com' rel="noopener noreferrer" target="_blank" className='has-text-green is-underlined'>info@senecahackathon.com</a></b></span>                        
                    </div>
                </div>
                <div style={{
                    width: '50%', display: 'inline-block'
                }}>
                    <span style={{ color: '#1C444C', textAlign: 'left' }}><b>Our Past Events</b></span><br />
                    <div style={{
                        background: 'url(' + PastEventsBackgroundImage + ')', backgroundPosition: 'left',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', width: '70%'
                    }}><a href="http://digitalhealth.senecahackathon.com/"><img src={Hackathon2021Logo} style={{ backgroundColor: 'white', width: '20%', height: '20%', verticalAlign: 'right', marginLeft: '80%' }}></img></a></div>
                </div>
            </div>
            <div style={{
                marginBottom: '0rem',
                border: '10px solid rgb(28, 68, 76)',
                width: '100%',
                backgroundColor: 'rgb(28, 68, 76)',
                color: 'white'
            }}>
                <span>Copyright © {new Date().getFullYear()} Seneca Hackathon 2022. All rights reserved.</span>
            </div>
            <SocialMedia classes={'is-hidden-tablet'}/>
            {/*<div style={{*/}
            {/*    marginBottom: '0rem',*/}
            {/*    width: '100%',*/}
            {/*    height: '3rem',*/}
            {/*    backgroundColor: 'transparent',*/}
            {/*    color: '#1C444C'*/}
            {/*}}>  */}
            {/*</div>*/}
        </footer>
    );
};

export default Footer;
