import React from 'react';
import "./spotlight.css"
import winner_img from '../../images/winners.png';

const Spotlight = () => {
    const winners = [
        {
            title: 'Duets: A Healthy Social Media Alternative',
            description: 'Duets is a mental health-conscious goal-setting social media platform where users can pair up with like-minded individuals to support and hold each other accountable for achieving their goals without feeling the need to compete with others. ',
        },
        {
            title: 'Vassport',
            description: 'Our mobile application Vassport makes it easy for individuals, parent, and guardians to verify themselves as well as their family member’s vaccination status and view their vaccination information.',
        },
        {
            title: 'DeLight',
            description: 'DeLight is a smart lamp that connects elderly and their family by allowing them to change each others’ light colours remotely. The smart lamp uses existing technology to bring a simple premise to life. The change in colour represents thoughts and emotions that people far away may want to share with the elderly and vice versa. Different colours can signal different emotions and these messages can be adapted over time. Alone in your apartment, it’s a warm glow signalling someone far away cares about you, cutting through your lonely moment. ',
        },
        {
            title: 'Decissio: Clinical Diagnostic Support Tool',
            description: 'Our team collaborated to create a dashboard based on a simple framework for our clinical decision tool (Decissio). We conducted a variety of data analyses and visualization through Python and Tableau to create a proof-of-concept of our solution vision. Furthermore, we created a business proposal along with other documentation to support our approach.',
        },
        {
            title: 'Telemedicine Solution – Centralized Healthcare Data System',
            description: 'By proposing a centralized healthcare data system, we solved the dilemma of decentralized private patient data. This allows for easy and quick access by any physician or patient and will lessen the burden on any healthcare worker or provider when they require valuable patient data history on the spot right away.',
        },
        {
            title: 'Night Wolf',
            description: 'Business Case, main use case diagram & class diagram, use case demo, example code with demo surrounding blockchain / AI solution.',
        },
        {
            title: 'CONTIENT',
            description: 'Designed an adoptable, easy to use, user-friendly web portal that ensures what medical data can be viewed or blocked to ensure the user’s privacy.',
        },
        {
            title: 'Hospital Expert HR System',
            description: 'We created a web app, mobile app, a chatbot and referenced a similar open source project that can be used to drive in the business case proposal for Octochain\'s Blockchain system. We solved the problem by creating an interactive and informative way for employees to view their benefits information and also created a business case model for Octochain\'s Blockchain system',
        },
    ]
    return (
    <section className="hero is-medium is-white">
        <div className="hero-body hero-body-2">
            <div className='columns'>
                <div className='column is-10 is-offset-1'>
                    <h1 className="title">Previous Hackathon Winners</h1><br/>
                    <div className='spotlight columns flex-wrap'>
                            <div class="carrousel">
                                				<h2>Hackathon 2021</h2>	
                                <input type="radio" name="slides" id="radio-1" checked />
                                <input type="radio" name="slides" id="radio-2"/>
                                <input type="radio" name="slides" id="radio-3"/>
                                <input type="radio" name="slides" id="radio-4"/>
                                {/* <input type="radio" name="slides" id="radio-5"/>
                                <input type="radio" name="slides" id="radio-6"/>
                                <input type="radio" name="slides" id="radio-7"/>
                                <input type="radio" name="slides" id="radio-8"/> */}
                                <ul class="slides">
                                  {/*   {
                                        winners.map((win, index) => (
                                            <li key={index} class="slide">
                                        <div class="spotlight-column-left">
                                        <h2>{win.title}</h2>
                                        <p>{win.description}</p>
                                        </div>
                                        <div class="spotlight-column-right">
                                        <p>
                                            <q>It was a pleasure to work with him</q> 
                                            <span class="author">
                                                <img src="https://th.thgim.com/news/international/m1m01s/article26984481.ece/alternates/FREE_300/30TH-TOLKIEN"/>JR Tolkien
                                            </span>
                                        </p>
                                        </div>
                                    </li>  
                                        ))
                                    } */}
                                    
                                    <li class="slide">
                                        <div class="spotlight-column-left">
                                        <h1>Duets: A Healthy Social Media Alternative</h1>
                                        <p>Duets is a mental health-conscious goal-setting social media platform where users can pair up with like-minded individuals to support and hold each other accountable for achieving their goals without feeling the need to compete with others.</p>
                                        <a class="" target="_blank" rel="noopener noreferrer" href="http://digitalhealth.senecahackathon.com/"><span>Learn More</span></a>
                                        </div>
                                        <div class="spotlight-column-right">
                                            <img src={winner_img}/>
                                        </div>
                                    </li>  

                                    <li class="slide">
                                        <div class="spotlight-column-left">
                                        <h1>Vassport</h1>
                                        <p>Our mobile application Vassport makes it easy for individuals, parent, and guardians to verify themselves as well as their family member’s vaccination status and view their vaccination information.</p>
                                        <a class="" target="_blank" rel="noopener noreferrer" href="http://digitalhealth.senecahackathon.com/"><span>Learn More</span></a>
                                        </div>
                                        <div class="spotlight-column-right">
                                            <img src={winner_img}/>
                                        </div>
                                    </li>  

                                    <li class="slide">
                                        <div class="spotlight-column-left">
                                        <h1>DeLight</h1>
                                        <p>DeLight is a smart lamp that connects elderly and their family by allowing them to change each others’ light colours remotely. The smart lamp uses existing technology to bring a simple premise to life. The change in colour represents thoughts and emotions that people far away may want to share with the elderly and vice versa. Different colours can signal different emotions and these messages can be adapted over time. Alone in your apartment, it’s a warm glow signalling someone far away cares about you, cutting through your lonely moment.</p>
                                        <a class="" target="_blank" rel="noopener noreferrer" href="http://digitalhealth.senecahackathon.com/"><span>Learn More</span></a>
                                        </div>
                                        <div class="spotlight-column-right">
                                            <img src={winner_img}/>
                                        </div>
                                    </li>

                                    <li class="slide">
                                        <div class="spotlight-column-left">
                                        <h1>Decissio: Clinical Diagnostic Support Tool</h1>
                                        <p>Our team collaborated to create a dashboard based on a simple framework for our clinical decision tool (Decissio). We conducted a variety of data analyses and visualization through Python and Tableau to create a proof-of-concept of our solution vision. Furthermore, we created a business proposal along with other documentation to support our approach.</p>
                                        <a class="" target="_blank" rel="noopener noreferrer" href="http://digitalhealth.senecahackathon.com/"><span>Learn More</span></a>
                                        </div>
                                        <div class="spotlight-column-right">
                                            <img src={winner_img}/>
                                        </div>
                                    </li>

                                    {/* <li class="slide">
                                        <div class="spotlight-column-left">
                                        <h1>Telemedicine Solution – Centralized Healthcare Data System</h1>
                                        <p>By proposing a centralized healthcare data system, we solved the dilemma of decentralized private patient data. This allows for easy and quick access by any physician or patient and will lessen the burden on any healthcare worker or provider when they require valuable patient data history on the spot right away.</p>
                                        <a class="" target="_blank" rel="noopener noreferrer" href="http://digitalhealth.senecahackathon.com/"><span>Learn More</span></a>
                                        </div>
                                        <div class="spotlight-column-right">
                                            <img src={winner_img}/>
                                        </div>
                                    </li>  

                                    <li class="slide">
                                        <div class="spotlight-column-left">
                                        <h1>Night Wolf</h1>
                                        <p>Business Case, main use case diagram & class diagram, use case demo, example code with demo surrounding blockchain / AI solution.</p>
                                        <a class="" target="_blank" rel="noopener noreferrer" href="http://digitalhealth.senecahackathon.com/"><span>Learn More</span></a>
                                        </div>
                                        <div class="spotlight-column-right">
                                            <img src={winner_img}/>
                                        </div>
                                    </li>

                                    <li class="slide">
                                        <div class="spotlight-column-left">
                                        <h1>CONTIENT</h1>
                                        <p>Designed an adoptable, easy to use, user-friendly web portal that ensures what medical data can be viewed or blocked to ensure the user’s privacy.</p>
                                        <a class="" target="_blank" rel="noopener noreferrer" href="http://digitalhealth.senecahackathon.com/"><span>Learn More</span></a>
                                        </div>
                                        <div class="spotlight-column-right">
                                            <img src={winner_img}/>
                                        </div>
                                    </li> 

                                    <li class="slide">
                                        <div class="spotlight-column-left">
                                        <h1>Hospital Expert HR System</h1>
                                        <p>We created a web app, mobile app, a chatbot and referenced a similar open source project that can be used to drive in the business case proposal for Octochain\'s Blockchain system. We solved the problem by creating an interactive and informative way for employees to view their benefits information and also created a business case model for Octochain\'s Blockchain system</p>
                                        <a class="" target="_blank" rel="noopener noreferrer" href="http://digitalhealth.senecahackathon.com/"><span>Learn More</span></a>
                                        </div>
                                        <div class="spotlight-column-right">
                                            <img src={winner_img}/>
                                        </div>
                                    </li> */}  
                                  
                                </ul>
                                <div class="slidesNavigation">
                                    <label for="radio-1" id="dotForRadio-1"></label>
                                    <label for="radio-2" id="dotForRadio-2"></label>
                                    <label for="radio-3" id="dotForRadio-3"></label>
                                    <label for="radio-4" id="dotForRadio-4"></label>
                                    {/* <label for="radio-5" id="dotForRadio-5"></label>
                                    <label for="radio-6" id="dotForRadio-6"></label>
                                    <label for="radio-7" id="dotForRadio-7"></label>
                                    <label for="radio-8" id="dotForRadio-8"></label> */}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>		
    );
};

export default Spotlight;