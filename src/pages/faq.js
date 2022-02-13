import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Accordion from '../components/reusable/accordion';

const IndexPage = () => {
    const faqs = [
        {
            qn: 'How to Register',
            ans: `All you need to do is click on the <a target='_blank' rel="noopener noreferrer" href='https://www.eventbrite.ca/e/senecas-sustainability-hackathon-2022-registration-205162405277' class='has-text-bold is-underlined has-text-green'>registration link</a> and register using our eventbrite page.`
        },
        {
            qn: 'Who can attend?',
            ans: `Registration are open to Seneca students. For additional colleges and universities open from <b>Jan 21, 2022</b>. Participating colleges and universities will be listed. If you are NOT a student in any of the qualifying institutions, you may still participate, but MUST be assigned to a team anchored by Seneca Students. The Student Success Team will help you accomplish this.`
        },
        {
            qn: 'First Time Hackers?',
            ans: `No worries, We will help start your hackathon journey with awesome workshops and events which will help strengthen your problem solving skills.`
        },
        {
            qn: 'Team Formation?',
            ans: `You can form team of a maximum of <b>5 members</b>. If you don't have a team, you can meet other peer hackers from across the globe at the event and form a team!`
        }
    ]
    return (
  <Layout>
    <Seo title="FAQ" />
    <section className="hero is-medium is-white">
        <div className="hero-body hero-body">
            <div className='columns'>
                <div className='column is-10 is-offset-1'>
                    <h1 className="title">FAQ</h1>
                    <div className='accordion-list'>
                        {
                            faqs.map((faq, index) => (
                                <Accordion title={faq.qn} info={faq.ans} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  </Layout>
);
};

export default IndexPage
