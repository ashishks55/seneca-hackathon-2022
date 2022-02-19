import React from 'react';
import Accordion from '../reusable/accordion';
import coming_soon from '../../images/coming-soon.png';


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
                    <h3>Background & Context</h3>
                    <p>The Organisation for Economic Co-operation and Development (OECD) maintains a comprehensive database of health and health systems statistics across many different countries (including Canada). These statistics relate to health care expenditure, resources, utilization, quality indicators and many others. This extensive database has the potential to reveal parts of the health system where sustainability efforts could be impactful. There is an opportunity for us to better use this data to improve the sustainability of the Canadian Healthcare System.</p>
                    <p>Key Question: How can we best use the OECD Health Data to help inform healthcare sustainability initiatives in Canada? </p>
                    <h3>Objective/Solutions</h3>
                    <ul>
                        <li>Your team’s solution should encompass one of the following: </li>
                        <li><b>Sustainability Insights:</b> Based on the OECD data, can your team find insights that reveal a potential healthcare sustainability issue(s) in Canada. What would your team’s recommendation be on a potential area(s) that needs a healthcare sustainability initiative?  </li>
                        <ul>
                            <li>Solutions should be able to clearly explain the rationale on why a selected area(s) was chosen  </li>
                            <li>Identifying an area for a healthcare sustainability initiative would already be a good solution, but if your team is feeling ambitious, teams are welcome to propose ideas to address any sustainability challenges uncovered </li>
                        </ul>
                        <li><b>Tool Development:</b> Can we build a data tool to more easily identify and extract insights from the OECD data set? This tool should be able to help easily flag potential healthcare sustainability issues from the data set. </li>
                        <li>Teams are welcome to include both insights and tool development in their solutions, but this is not an expectation due to time limitations </li>
                    </ul>
                    <h4>Thought starters:</h4>
                    <ul>
                        <li>Can we identify trends in the data that might pose a sustainability issue (e.g. hospital bed numbers going down, decreasing long term care workers for the older population)?</li>
                        <li>Can we identify correlations between different healthcare statistics that signify a potential sustainability issue in the healthcare system (e.g. Hospital average length of stay for cataract increasing while number of cataract surgeries are also increasing)?</li>
                        <li>Are there data trends that highlight challenges in our healthcare system to sustainability manage potential future waves of COVID-19?</li>
                        <li>Does the data from other countries help reveal sustainability issues in Canada’s healthcare system?</li>
                        <li>Are there any improvements that can be made to better visualize and analyze the available OECD data?</li>
                        <li>Feel free to explore public examples on how the OECD data (in health and other areas) has been used. For example, Canadian Institute for Health Information (CIHI)’s interactive web tool: <a class="has-text-green is-underlined" href="https://www.cihi.ca/en/oecd-interactive-tool-international-comparisons" target="_blank">https://www.cihi.ca/en/oecd-interactive-tool-international-comparisons</a></li>
                        <li>Teams are also welcome to explore other topics in the OECD data set if helpful (e.g. environment, demography and population etc.): <a class="has-text-green is-underlined" href="https://stats.oecd.org/" target="_blank">https://stats.oecd.org/</a> </li>
                    </ul>
                    <h3>Resources/Data</h3>
                    <p><a class="has-text-green is-underlined" href="https://stats.oecd.org/Index.aspx?ThemeTreeId=9" target="_blank">Click here</a> for resources/data.</p>
                    <p>The OECD Health Database is comprehensive source of comparable statistics on health and health systems across OECD countries </p>
                    <p>
                    Includes statistics around Health Expenditure and Financing, Health Care Resources, Health Care Utilization, Health Care Quality Indicators, Pharmaceutical Market, Long-term Care Resources and Utilization and others 
                    <ul>
                        <li>Data Dictionary: <a class="has-text-green is-underlined" href="https://www.oecd.org/els/health-systems/Table-of-Content-Metadata-OECD-Health-Statistics-2021.pdf" target="_blank">https://www.oecd.org/els/health-systems/Table-of-Content-Metadata-OECD-Health-Statistics-2021.pdf</a> </li>
                    </ul>
                    </p>
                    `
                },
                // {
                //     title: 'The Electronic Products Recycling Association of Canada reports that there is 1,000,000 metric tons of e-waste is landfilled every year[1]. In 2019 only 17.4% of e-waste was recycled[2] Lead and Mercury in e-waste can lead to anemia, nausea, and other diseases to humans and other organisms.',
                //     info: 
                //     `
                //     <h3>Background & Context</h3>
                //     <ul>
                //         <li>Recycling e-waste in a sustainable manner</li>
                //         <li>Quantify landfill usage and carbon emission usage that is used by recycling and present it in a dashboard.</li>
                //         <li>Develop design systems that will make it easier to recycle electronics at end of life.</li>
                //     </ul>
                //     <h4>Resources/Data</h4>
                //     <p>1. The story of Canada's Digital Dumping Ground. The story of Canada's digital dumping ground | Open Case Studies. (n.d.). Retrieved January 27, 2022, from <a class="has-text-green is-underlined" href="https://cases.open.ubc.ca/w17t2cons200-26/#cite_note-VanderPol-15" target="_blank">https://cases.open.ubc.ca/w17t2cons200-26/#cite_note-VanderPol-15</a></p>
                //     <p>2. Mckenzie, K. H. & R. (n.d.). Waste reduction week in Canada: E-waste. Environment 911. Retrieved January 27, 2022, from <a class="has-text-green is-underlined" href="https://www.environment911.org/Waste-Reduction-Week-in-Canada-E-Waste" target="_blank">https://www.environment911.org/Waste-Reduction-Week-in-Canada-E-Waste</a></p>
                //     `
                // }
            ]
        },
        'global-cause' : {
            title: 'Global Causes',
            details: 'How can we leverage from existing technologies to promote reforestation, increase canopy cover, and enhance biodiversity within the school grounds?​', 
            info_items:  [
                // {
                //     title: 'Background and Context',
                //     info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                // },
                // {
                //     title: 'Objective/Solutions',
                //     info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                // },
                // {
                //     title: 'Resources/Data',
                //     info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                // }
            ]
        },
        'net-zero-goals' : {
            title: 'Net Zero Goals​',
            details: 'A project with TDSB EcoSchools to help propagate the seeds that can be used in the tree planting.', 
            info_items:  [
                {
                    title: 'International Travelers Carbon footprint reduction and credit management ',
                    info: 
                    `
                    <h3>Background & Context</h3>
                    <p>International Travelers Carbon footprint reduction and credit management.</p>
                    <h3>Objective</h3>
                    <p>The circuit is located on the island in middle of the St. Lawrence River.  Fans from all over the globe travel to experience this event by using different modes of travel suitable as per their convenience and distance, according to GPCanada, 98% of the fans travel by public transport for the race event which lasts three days, and they need help to offset and decrease the carbon footprint generated by the fan travelling to help environment being greener.</p>
                    <h4>What we need to do </h4>
                    <p>Recommender systems for individual travelers to help them select chose most sustainable travel plans.</p>
                    <p>Carbon footprint data aggregator, reward system, and credit management.</p>
                    <ul>
                        <li>System which provides the amount of carbon emission, travelers helped them to reduce. </li>
                        <li>Reward system, rewarding people to help reduce the carbon footprint. </li>
                        <li>A system GPCanada can use to organize data related to fan travel.</li>
                    </ul>
                    <p>Example – No. of participants, origin of their city/state/country and many more.</p>
                    `
                },
                {
                    title: 'Food waste reduction',
                    info: 
                    `
                    <h3>Objective</h3>
                    <p>During the event, over 300,000 people from around the world gathered to be a part of this international event. There are two ways people can get food in the circuit, either bring their own food or buy it from inside the circuit. When it comes to food wastage, GP Canada contains the data of wastage done inside their premises, but they do not have any control over the data for the food wastage outside the premises. Regarding food wastage, they do not compose anything, so the food, which is not consumed, directly goes into trash. </p>
                    <h4>What we need to do </h4>
                    <p>To make the event eco-friendly and sustainable, bring new ways to reduce food wastage and build a platform which will make people aware about the possible ways to reduce it and reward them.</p>
                    <ul>
                        <li>Awareness and research. </li>
                        <li>Recommender and reward systems. </li>
                        <li>System which will help them to gather food logs as well as use that data to calculate food waste and help decrease it.</li>
                    </ul>
                    `
                },
                {
                    title: 'Data mining and data analytics.',
                    info: 
                    `
                    <h3>Objective</h3>
                    <p>Being such a huge organization, they need a lot of data to improve the experience of the fans as well as make the event more exciting for Formula 1 too. And for that they need information which is difficult to gather all together. Whether it is about reducing the carbon footprint, collecting garbage data as well as another sustainability information, there is a need for data mining for GP Canada.</p>
                    <h4>What we need to do </h4>
                    <p>Use data publicly available from the Cities and Municipalities nearby as well as using satellite data like GIS (Geographic Information System).</p>
                    `
                },
                {
                    title: 'One Stop E-Waste Bank',
                    info: 
                    `
                    <h3>Background and Context</h3>
                    <h4>ABOUT FUTURETEL</h4>
                    <ul>
                        <li>Since 1998, Authorized Electronics Service Center.</li>
                        <li>Troubleshoot and fixing/refurbishment of cellular handsets, smartphones, laptops, tablets, and other portable data devices.</li>
                        <li>Long Term Value-Fast Quality Service for providing consumer, retail, and business-to-business solutions.</li>
                        <li>It is a small-scale business for refurbishment and repurpose and the e-waste generated are processed through a third-party organization.</li>
                        <li>They are looking for a Carbon friendly service that can be provided to their customers.</li>
                    </ul>
                    <h4>PROBLEMS</h4>
                    <ul>
                        <li>Latest and Upgrade version of new devices release every year.</li>
                        <li>Transportation/ Delivery of devices to the branch from all over Canada through different delivery methods.</li>
                        <li>Less financial support for such small-scale organizations to collect all unused devices to repurpose or dispose of.</li>
                    </ul>
                    <h3>Objective</h3>
                    <p>The focus of this challenge set is to provide a one stop solution to solve the above-mentioned problems. It depends on which part of the problem we are dealing with. There are several ways to get the solution and one of these is One Stop E-Waste Bank. This E-Waste Bank will be able to contribute to sustainability.</p>
                    <p><b>What is a One Stop E-Waste Bank?</b></p>
                    <p>One stop E-waste Bank will have three modules incorporated. Firstly, it will collect the E-waste either in working or non-working conditions. It can either act as a donation or collection centres. Secondly, a Consumer awareness program will guide consumers towards sustainable electronic consumption methods and finally, a redesign analysis will support the longevity of technology. Let's discuss each module functionality in detail.</p>
                    <p><b>E-waste Bank (EB)</b></p>
                    <ul>
                        <li>Collection of E-waste like cell phones, laptops, hard-drives etc.</li>
                        <li>Organizing Repair/ Refurbish Via FutureTel.</li>
                        <li>Distribute Repaired/ Refurbished products within Canada.</li>
                        <li>Distribute Repaired/ Refurbished products outside Canada with the help of another organization.</li>
                        <li>E-waste bank can be created to provide consumers for FutureTel.</li>
                    </ul>
                    <p><b>Note:</b> It will require project proposal, physical and IT (Information Technology) components.</p>
                    <p><b>Consumer Awareness Program (CAP)</b></p>
                    <ul>
                        <li>Promoting consumers not to replace electronic devices unless it is necessary.</li>
                        <li>Educate them with the benefits of eco-friendly concept.</li>
                        <li>Add sustainability/eco-friendly in your leaflets and service center outlets.</li>
                    </ul>
                    <p><b>Note:</b> It will require research proposal and IT components.</p>
                    <p><b>Redesign Analysis (RD)</b></p>
                    <ul>
                        <li>Enhancing the quality and longevity of the existing product with minor modification.</li>
                        <li>Once the device is collected by E-waste Bank in Working/Non-working conditions a detailed analysis report is required to compute the cost and feasibility to redesign the product.</li>
                        <li>This will require lots of physical analysis of the device component and answer that question that is it feasible to repair device.</li>
                    </ul>
                    <h3>Resources/Data</h3>
                    <ul>
                        <li><a class="has-text-green is-underlined" href="https://www.futuretel.ca/" target="_blank">FutureTel</a></li>
                        <li><a class="has-text-green is-underlined" href="https://green.harvard.edu/news/exploring-three-r%E2%80%99s-e-waste-refurbish-redesign-and-repurpose" target="_blank">Exploring the Three R’s of E-Waste: Refurbish, Redesign, and Repurpose | Sustainability at Harvard </a></li>
                    </ul>
                    <h3>FAQ</h3>
                    <p>What are the 3 Rs of E-Waste?</p>
                    <ul>
                        <li><b>Refurbish</b>: Solving/fixing the issues of existing devices by replacing the same type or similar components. - Cost saving, reliable, eco-friendly, certified testing.</li>
                        <li><b>Redesign</b>: Utilizing the same product or parts of the product for another purpose.</li>
                        <li><b>Repurpose</b>: Utilizing the same product or parts of the product for another purpose.</li>
                    </ul>
                    `
                },
                {
                    title: 'Restaurant Food Waste – Management and Reduction.',
                    info: 
                    `
                    <h3>Background</h3>
                    <p>According to CBC.ca and Canada.ca, food wastage is a huge problem. Around 58% of food produced in Canada is either lost or wasted. 86% of that wastage comes directly from the food industry. Over $31 billion is lost in revenue each year to food wastage. Apart from the loss in revenue, there is also a significant cost our planet needs to pay. The disposal of food waste generates powerful greenhouse gas called Methane. Methane is 25 times more potent than Carbon dioxide. UN environment programme (UNEP) states that exposure to methane causes 1 million premature death every year. UNEP is hopeful that we can reduce Human-caused methane emissions by 45% within the decade averting 0.3°C of global warming by 2045. Subsequent reduction of methane each year will prevent premature deaths, asthma-related hospitalizations and reduce a million tonnes of crops.</p>
                    <h3>Objective & Solution</h3>
                    <p><b>Challenge Statement 1: Rotating Inventory</b></p>
                    <p>Imagine you went grocery shopping and bought fresh produce. By the time you returned home you were already tired and just dumped all the contents into the fridge pushing older items towards the back. Next day when you had to cook you simply grabbed items from the front and used them. Over time the items in the back of the fridge expired resulting in loss of product and revenue. This same issue occurs regularly at restaurants too. If a restaurant could smartly manage and detect items that are about to expire without human intervention it could reduce wastage and loss of revenue significantly.</p>
                    <p>Hint: Inventory management with IoT sensor that detects which food is about to expire.</p>
                    <p><b>Challenge Statement 1: Finding patterns</b></p>
                    <p>Restaurants can get busy from time to time. Things thrown out regularly in thrash could have a pattern. Maybe the restaurant is buying more lettuce than it needs.   It’s not the product that got wasted. The business is losing money too.  A waste log could be a great source of data. These data could be mined, and patterns might emerge. This pattern of wastage will help restaurants predict future consumption and plan accordingly.</p>
                    <p>Hint: Many restaurants already have a waste log. Many of them are handwritten. The data might be scarce in the beginning but planning the schema is awesome too.</p>
                    <p><b>We are looking for solutions that are feasible, easy to deploy, affordable and shouldn’t hamper the restaurant's overall productivity. Automation of the entire process is highly desirable. Special pointers for being creative. The sky is the limit.</b></p>
                    `
                },
            ]
        },
        'cities-and-municipalities' :{
            title: 'Cities and Municipalities',
            details: 'A project with TDSB EcoSchools to help propagate the seeds that can be used in the tree planting.', 
            info_items:  [
                {
                    title: 'Quantifier/Recommender Mechanism for Urban Resilience',
                    info: 
                    `
                    <h3>Background & Context</h3>
                    <p><One of the best ways to revitalize the designated waterfront area in Toronto is by undertaking new development projects. This may include residential buildings, offices, and public spaces. These developments must be resilient enough to withstand any harm that extreme climate changes or man-made calamities may possess in far future for about 30-40 years. /p>
                    <h4>Objective</h4>
                    <p>How do we enable the organization to achieve higher degree of Urban Resilience and Green Building Requirements Compliance for upcoming development projects at the Toronto Waterfront Area? </p>
                    <h4>Solution</h4>
                    <p>Develop a tool / methodology / checklist to measure the degree of resilience and green building requirements (GBR) compliance. Also, a recommendation system to  
                    achieve greater resilience and to meet GBRs. </p>
                    <h3>Resources/Data </h3>
                    <ul>
                        <li>Future Weather File (at least up to 2050) – Available here.</li>
                        <li>Canada Green Building Council Data – Available here</li>
                        <li>Waterfront Toronto Resilience and Innovation Framework for Sustainability – Available here </li>
                        <li>Waterfront Toronto Green Building Requirements v3.0 – Available here </li>
                    </ul>
                    `
                },
                // {
                //     title: 'Objective/Solutions',
                //     info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                // },
                // {
                //     title: 'Resources/Data',
                //     info: 'International Travelers carbon footprint reduction International Travelers carbon footprint reduction'
                // }
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
                            challengesets[id] && challengesets[id].info_items.length ? 
                                challengesets[id].info_items.map((item, index) => (
                                    <Accordion title={item.title} info={item.info} key={index}/>
                                ))
                            :
                            <div className='coming-soon'>
                                {
                                    <div className='has-text-centered'><img src={coming_soon} alt="coming soon" width={'250px'}/></div>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ChallengeSetsDetails;
