import React from 'react';
//import Layout from "../layout"
//import Seo from "../seo"
import Accordion from '../reusable/accordion-faq';
import "./faq.css"



const IndexPage = () => {
    const faqs = [
        {
            qn: 'Is the hackathon only for programmers?',
            ans: `Absolutely not! The hackathon is open to all disciplines. If you are passionate about sustainable causes, you can participate in this hackathon! `
        },
        {
            qn: 'How can I participate? What will I do?',
            ans: `You must have registered through Eventbrite by now. Through the next two weeks, we will gradually release information on challenge sets. If you see a solution to a challenge set, update your registration on Eventbrite and lock in your position as a contender. Over the hackathon week, you will work with your team to come up with a solution to your chosen challenge to be presented in video format.`
        },
        {
            qn: 'What are the challenge sets? How many are there? ',
            ans: `We are expecting 12-15 challenge sets. The latest challenge set information is available in the challenge set section of this website! `
        },
        {
            qn: 'Who are the Student Success Officers (SSO)? ',
            ans: `Once you have chosen your challenge set, you will be assigned an SSO. The SSO is your go-to person for any questions you have about your hackathon experience. They will be in contact with you throughout the hackathon to help you make a successful submission. `
        },
        {
            qn: 'What are the prizes? ',
            ans: `Winners will receive some cash, exclusive hackathon merch, and hackathon winner micro-credential. Some challenge sets have additional prizes so make sure to check them all out!`
        }
    ]
    const faqsright = [
        {
            qn: 'Are there team requirements? ',
            ans: `You are expected to participate with at least one other person. However, the maximum team size is 5. Participants from any school are welcome, but if your school is not listed as one of our hackathon partner schools, you will need to work with at least one Seneca student. Partner schools: PIM, U del Rosario, St. Clair College, Conestoga College. `
        },
        {
            qn: 'What is the event schedule?',
            ans: `The event is scheduled to run during reading week: From Feb 28 to Mar 4. An official event schedule will be available soon.`
        },
        {
            qn: 'Will I get free stuff?  ',
            ans: `Our social media is the best place to win free stuff. Check out our social media for the latest hackathon giveaways! `
        }, 
        {
            qn: 'What are the requirements to get a micro-credential?',
            ans: `You will be awarded with one of two micro-credentials: Participant or Winner. Winner micro-credentials are reserved for challenge set winners, category winners, and the best-in-show. Participant micro-credentials will be awarded to teams that document their daily progress and make a submission. More detailed micro-credential information will be available soon. `
        }
    ]
    return (

            <section className="hero is-medium is-white"> 
                <div className="hero-body hero-body-2">
                <div className='columns'>
                <div className='column is-10 is-offset-1'>
                    <h1 className="title">Frequently Asked Questions</h1>
                    {/* <div className='columns'>
                        <div className='column is-10 is-offset-1'>
                            <h1 className="title">Frequently Asked Questions</h1>
                            <div className='accordion-list'>
                                {
                                    faqs.map((faq, index) => (
                                        <Accordion title={faq.qn} info={faq.ans} key={index}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div> */}
                    
                    <div class="flex-container">
                        <div class="flex-item-left">
                            {
                                faqs.map((faq, index) => (
                                    <div className='faq-list'><Accordion className='faqtitle' title={faq.qn} style={{ fontSize: '1rem' }} info={faq.ans} key={index}/></div>
                                ))
                            }
                        </div>
                        <div class="flex-item-right">  
                            {
                                faqsright.map((faql, index) => (
                                    <div className='faq-list'><Accordion title={faql.qn} info={faql.ans} key={index}/></div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </section>

    );
};

export default IndexPage
