import React from 'react';
import PastEventsBackgroundImage from '../images/footer/past_events_background_image.png';
import Hackathon2021Logo from '../images/footer/hackathon_2021_logo.png';

const Footer = () => {
    return (
        <footer style={{
            marginBottom: `2rem`,
            borderTop: '4px solid #1C444C',
            paddingTop: '3rem'
        }}>
            <div style={{ width: '100%', marginBottom: '5%' }}>
                <div className="has-text-centered" style={{
                    width: '50%', display: 'inline-block', verticalAlign: 'top'
                }}>
                    <span style={{ color: '#1C444C', textAlign: 'left',  }}><b>Need more information?</b></span><br />
                    <span style={{ color: '#459888', textAlign: 'left' }}><b>Contact us at <u>info@senecahackathon.com</u></b></span>
                </div>
                <div style={{
                    width: '50%', display: 'inline-block'
                }}>
                    <span style={{ color: '#1C444C', textAlign: 'left' }}><b>Our Past Events</b></span><br />
                    <div style={{
                        background: 'url(' + PastEventsBackgroundImage + ')', backgroundPosition: 'left',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}><a href="http://digitalhealth.senecahackathon.com/"><img src={Hackathon2021Logo} style={{ backgroundColor: 'white', width: '20%', height: '20%', verticalAlign: 'right', marginLeft: '80%' }}></img></a></div>
                </div>
            </div>
            <div style={{
                marginBottom: '0rem',
                border: '10px solid rgb(28, 68, 76)',
                width: '100%',
                height: '3rem',
                backgroundColor: 'rgb(28, 68, 76)',
                color: 'white'
            }}>
                <span>Copyright © {new Date().getFullYear()} Seneca Hackathon 2022. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
