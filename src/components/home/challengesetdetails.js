import React from 'react';
import Accordion from '../reusable/accordion';


const ChallengeSetsDetails = ({id}) => {

    const challengesets = {
        'corporate-social-responsibility' :{
            title: 'Corporate Social Responsibility',
            details: 'Integrate sustainability into curriculum regardless of area of study.', 
            info_items:  [
                {
                    title: 'Using Health Data to Identify and Inform Healthcare Sustainability Initiatives in Canada',
                    info: 
                    `
                    <h4>Background & Context</h4>
                    <p>The Organisation for Economic Co-operation and Development (OECD) maintains a comprehensive database of health and health systems statistics across many different countries (including Canada). These statistics relate to health care expenditure, resources, utilization, quality indicators and many others. This extensive database has the potential to reveal parts of the health system where sustainability efforts could be impactful. However, there is limited literature on how this data has been used to improve the sustainability of the Canadian Healthcare System.</p>
                    <h4>Objective/Solutions</h4>
                    <ul>
                        <li>Your team’s solution should encompass one of the following: </li>
                        <li><b>Sustainability Insights:</b> Based on the OECD data, can your team find insights that reveal a potential healthcare sustainability issue(s) in Canada. What would your team’s recommendation be on a potential area(s) that needs a healthcare sustainability initiative?  </li>
                        <ul>
                            <li>Solutions should be able to clearly explain the rationale on why a selected area(s) was chosen </li>
                            <li>Identifying an area for a healthcare sustainability initiative would already be a good solution, but if your team is feeling ambitious, teams are welcome to propose ideas to address any sustainability challenges uncovered </li>
                        </ul>
                        <li><b>Tool Development:</b> Can we build a data tool to more easily identify and extract insights from the OECD data set? This tool should be able to help easily flag potential healthcare sustainability issues from the data set. </li>
                        <li>Teams are welcome to include both insights and tool development in their solutions, but this is not an expectation due to time limitations </li>
                    </ul>
                    <h4>Resources/Data</h4>
                    <p><a class="has-text-green is-underlined" href="https://stats.oecd.org/Index.aspx?ThemeTreeId=9" target="_blank">Click here</a> for resources/data.</p>
                    `
                },
                {
                    title: 'The Electronic Products Recycling Association of Canada reports that there is 1,000,000 metric tons of e-waste is landfilled every year[1]. In 2019 only 17.4% of e-waste was recycled[2] Lead and Mercury in e-waste can lead to anemia, nausea, and other diseases to humans and other organisms.',
                    info: 
                    `
                    <h4>Background & Context</h4>
                    <ul>
                        <li>Recycling e-waste in a sustainable manner</li>
                        <li>Quantify landfill usage and carbon emission usage that is used by recycling and present it in a dashboard.</li>
                        <li>Develop design systems that will make it easier to recycle electronics at end of life.</li>
                    </ul>
                    <h4>Resources/Data</h4>
                    <p>1. The story of Canada's Digital Dumping Ground. The story of Canada's digital dumping ground | Open Case Studies. (n.d.). Retrieved January 27, 2022, from <a class="has-text-green is-underlined" href="https://cases.open.ubc.ca/w17t2cons200-26/#cite_note-VanderPol-15" target="_blank">https://cases.open.ubc.ca/w17t2cons200-26/#cite_note-VanderPol-15</a></p>
                    <p>2. Mckenzie, K. H. & R. (n.d.). Waste reduction week in Canada: E-waste. Environment 911. Retrieved January 27, 2022, from <a class="has-text-green is-underlined" href="https://www.environment911.org/Waste-Reduction-Week-in-Canada-E-Waste" target="_blank">https://www.environment911.org/Waste-Reduction-Week-in-Canada-E-Waste</a></p>
                    `
                }
            ]
        },
        'global-cause' : {
            title: 'Global Causes',
            details: 'How can we leverage from existing technologies to promote reforestation, increase canopy cover, and enhance biodiversity within the school grounds?​', 
            info_items:  [
                {
                    title: 'Background and Context',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                },
                {
                    title: 'Objective/Solutions',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                },
                {
                    title: 'Resources/Data',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                }
            ]
        },
        'net-zero-goals' : {
            title: 'Net Zero Goals​',
            details: 'A project with TDSB EcoSchools to help propagate the seeds that can be used in the tree planting.', 
            info_items:  [
                {
                    title: 'International Travelers Carbon footprint reduction and credit management',
                    info: 
                    `
                    <h4>Background & Context</h4>
                    <p>Recommender systems for individual travelers to help them select chose most sustainable travel plans b. Carbon footprint data aggregator, reward system, and credit management</p>
                    <h4>Resources/Data</h4>
                    <p>Sponsor website about Sustainable Development <a class="has-text-green is-underlined" href="https://www.gpcanada.ca/nos-actions/" target="_blank">https://www.gpcanada.ca/nos-actions/</a></p>
                    `
                },
                {
                    title: 'Food waste reduction',
                    info: `
                    <h4>Background & Context</h4>
                    <p>a. Awareness and research.</p>
                    <p>b. Recommender and reward systems.</p>
                    <h4>Resources/Data</h4>
                    <p>Sponsor website about Sustainable Development <a class="has-text-green is-underlined" href="https://www.gpcanada.ca/nos-actions/" target="_blank">https://www.gpcanada.ca/nos-actions/</a></p>
                    `
                },
                {
                    title: 'Develop affordable solutions to automate reduction of food wastage in restaurants',
                    info: 
                    `
                    <h4>Background & Context</h4>
                    <p>According to CBC and Canada.ca, 58% of food produced in Canada is either lost or wasted. 86% of that wastage comes directly from the food industry. Over $31 billion is lost in revenue each year to food wastage. Methane is 25 times more potent than Carbon dioxide.</p>
                    <h4>Resources/Data</h4>
                    <p><a class="has-text-green is-underlined" href="https://seneca.sharepoint.com/:w:/s/SustainabilityHackathon2022/EYBrlXJQmWJHqMv11hpS1YYBOlOIOuCzM7t8DkyvZ0zaHA" target="_blank">How Students Can Contribute?</a></p>
                    `
                }
            ]
        },
        'cities-and-municipalities' :{
            title: 'Cities and Municipalities',
            details: 'A project with TDSB EcoSchools to help propagate the seeds that can be used in the tree planting.', 
            info_items:  [
                {
                    title: 'Background and Context',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                },
                {
                    title: 'Objective/Solutions',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                },
                {
                    title: 'Resources/Data',
                    info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                }
            ]
        }
    }

    return (
    <section className="hero is-medium is-white">
        <div className="hero-body hero-body">
            <div className='columns'>
                <div className='column is-10 is-offset-1'>
                    <h1 className="title">{challengesets[id].title}</h1>
                    <div className='accordion-list'>
                        {
                            challengesets[id].info_items.map((item, index) => (
                                <Accordion title={item.title} info={item.info} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ChallengeSetsDetails;
