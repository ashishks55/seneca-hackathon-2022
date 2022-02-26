import React from 'react';
import Accordion from '../reusable/accordion';
import coming_soon from '../../images/coming-soon.png';

import cm_1 from '../../images/logos/cm-1.jpg'
import cm_2 from '../../images/logos/cm-2.png'
import cm_3 from '../../images/logos/cm-3.png'
import cm_4 from '../../images/logos/cm-4.png'

import csr_1 from '../../images/logos/csr-1.png'
import csr_2 from '../../images/logos/csr-2.png'
import csr_3 from '../../images/logos/csr-3.png'
import logo from '../../images/logo.png'

import gco_1 from '../../images/logos/gco-1.png'
import gco_2 from '../../images/logos/gco-2.png'
import gco_3 from '../../images/logos/gco-3.png'

import nzc_1 from '../../images/logos/nzc-1.svg'
import nzc_2 from '../../images/logos/nzc-2.png'
import nzc_3 from '../../images/logos/nzc-3.png'
import nzc_4 from '../../images/logos/nzc-4.png'
import nzc_5 from '../../images/logos/nzc-5.svg'
import nzc_6 from '../../images/logos/nzc-6.jpg'
import nzc_7 from '../../images/logos/nzc-7.png'

import hp1 from '../../images/logos/hp1.png'
import hp2 from '../../images/logos/hp2.png'
import hp3 from '../../images/logos/hp3.png'

import wf1 from '../../images/logos/waterfront-1.png'

const ChallengeSetsDetails = ({id}) => {

    const challengesets = {
        // 'technology-and-supporters' :{
        //     title: 'Technology and Supporters',
        //     details: 'Integrate sustainability into curriculum regardless of area of study.', 
        //     info_items:  [
        //         {
        //             title: 'Drones, Image Processing and Solar Panels.',
        //             info: 
        //             `
        //             <h3>Background</h3>
        //             <p>Residential and manufacturing activity in North America has left polluted soils unoccupied, such as old gas stations, factories, and even defunct dry cleaners. With cities' land supply becoming scarce, property developers, planners, and governments are attempting to reclaim and remediate brownfields, or former industrial and commercial sites. Cities across Canada have conducted long-term environmental feedback to facilitate responsible brownfield redevelopment. </p>
        //             <p>Researchers have also developed a method to compare several options or assess the capacity of one option to generate renewable energy like solar energy; on a brownfield site with or without environmental cleanup.</p>
        //             <p>Seneca Hackathon’s association with Voltaire Power may assist the company in locating such brownfields that are feasible so that the company can provide services tailored to residential, commercial, and utility-scale solar plants in such locations.</p>
        //             <p>Students, through this challenge set, must demonstrate that the environmental site conditions are suitable for the intended use and qualify various criteria such as soil condition, solar exposure, and practicality and demand for power supply in that area.</p>
        //             <h3>Objective & Solution</h3>
        //             <p>To use Lidar ("light detection and ranging"), image processing and satellite photo analysis to evaluate suitable locations for solar panel installation.</p>
        //             <p>Imagine a brown field data image provided to you that needs to be assessed. By using LIDAR and image processing technology you can analyze the data for its feasibility and other criterions mentioned above and provide ranking to the locations. Further, you can divide the area based on the rankings and provide the location that is suitable for solar panel installation.</p>
        //             <p>Tools that can be used:</p>
        //             <ul>
        //                 <li>1. Machine Learning</li>
        //                 <li>2. LIDAR </li>
        //                 <li>3. Artificial Intelligence</li>
        //                 <li>4. Image processing</li>
        //                 <li>5. Data Analytics</li>
        //             </ul>
        //             <h3>Resources /Data</h3>
        //             <ul>
        //                 <li><a class="has-text-green is-underlined" href="https://d1wqtxts1xzle7.cloudfront.net/68421536/V10I7202117-with-cover-page-v2.pdf?Expires=1645168718&Signature=GVBh-ioirwl6y0XDuAVr2ydW2DCIAE75Ui2HWLgG9VnPCEnRrZh8UPzYhRUZdRUYjnIuIE5NBTA9sxzfvrE9pr~x7KPFLEMpgo3kovaMb2aXMFNhBSlBUfq18c4OWt8LZxvM1NehKQMcP67e1yJHd7a98NPjFO0IX4AUqhEFyTPxU-qYOUT8B-CkrSVNo5pWfxwJSrMfvJh65LqgoQMCVsmzzVGu1V4hIbdfFo-D7kgofF~6kn0B0aDnVwUAYlVpuNInRT1z6U-GSe60GAoCcKcB~m~SgVlcGxOgrXdHmqmaZKbPQu9WWK51XJVb~Qay6kurDrZfGU2NFR13BFMMZQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA" target="_blank">MACHINE LEARNING BASED SEARCH ENGINE WITH CRAWLING, INDEXING AND RANKING </a></li>
        //                 <li><a class="has-text-green is-underlined" href="https://link.springer.com/article/10.1007/s12525-021-00475-2" target="_blank">Machine learning and deep learning</a></li>
        //                 <li><a class="has-text-green is-underlined" href="https://oceanservice.noaa.gov/facts/lidar.html" target="_blank">What is lidar?</a></li>
        //                 <li><a class="has-text-green is-underlined" href="https://coast.noaa.gov/data/digitalcoast/pdf/lidar-101.pdf" target="_blank">Lidar 101:  An Introduction to Lidar Technology,   Data, and Applications</a></li>
        //             </ul>
        //             `
        //         },
        //         {
        //             title: 'Drones, Satellite scans and image processing',
        //             info: `
        //             <h3>Background</h3>
        //             <p>Kingbridge is building a forest accelerator program linked to data collection and analytics to overcome some of the challenges in achieving the 2 billion tree goal.</p>
        //             <p>With an ambitious federal goal of planting 2 Billion trees, the challenges of supply chains, protecting native species and finding cost efficient ways to plant trees at scale, in areas other than northern and remote communities, there are many opportunities for innovation.</p>
        //             <p>They have developed a Forest Management plan for the 55+ acres of forested land onsite and is in the process of obtaining a Managed Forest designation with the Province of Ontario.</p>
        //             <h3>Objective & Solution </h3>
        //             <p>A typical tree can absorb around 21 kilograms of carbon dioxide (CO2) per year, however this figure is only achieved when the tree is fully grown - saplings will absorb significantly less than this. Over a lifetime of 100 years, one tree could absorb around a ton of CO2.</p>
        //             <p>On this account, our focus will be identifying opportunities of tree planting and areas in most need of it. Therefore, below challenge set has been introduced to tackle the challenge of scanning and presenting Kingbridge with suitable areas.</p>
        //             <p class="has-text-weight-bold">Challenge Set:</p>
        //             <p class="has-text-weight-bold">Image processing using drone and satellite images, as well as publicly available data, to identify canopy coverage, tree types and ages. </p>
        //             <p class="has-text-weight-bold">Possible approaches:</p>
        //             <p>A number of approaches can be applied in order to identify the canopy coverage, tree types and ages.</p>
        //             <ul>
        //                 <li><b>Carbon Offsets:</b> in addition to identifying objects with the images, the amount of carbon offset happening due to the presence of the identified species can be calculated and reported for further analysis.</li>
        //                 <li><b>Machine Learning:</b> This approach can include the use of machine learning to implement a training algorithm to identify the requested objects. Google Cloud has provided participants with access to machine learning workshops to familiarize themselves with the new technology surrounding it.  </li>
        //                 <li><b>AppEngine:</b> This platform can be used to run the final version of your application. </li>
        //                 <li><b>Google Cloud</b> has provided participants with recordings of related workshops.</li>
        //             </ul>
        //             <h3>Resources/Data </h3>
        //             <p>Carbon Budget model <a class="has-text-green is-underlined" href="https://www.nrcan.gc.ca/climate-change-adapting-impacts-and-reducing-emissions/climate-change-impacts-forests/carbon-accounting/carbon-budget-model/13107 " target="_blank">https://www.nrcan.gc.ca/climate-change-adapting-impacts-and-reducing-emissions/climate-change-impacts-forests/carbon-accounting/carbon-budget-model/13107 </a></p>
        //             <h3>FAQ</h3>
        //             <p><b>1. What type of data will be used for image processing?</b> <br><br>Image of drones, satellite images and publicly available data will be used for image processing. </p>
        //             <p><b>2. Where Can we find the images?</b> <br><br>The dataset is publicly available through the link provided. A simple registration is needed to access the data. Other resources may be added to the database from providers such as Esri.</p>
        //             <p><b>3. How should be approach the image processing technic?</b> <br><br>You are open to different approaches to implement your idea, as long as it serves towards the same objective.</p>
        //             `
        //         }
        //     ]
        // },
        'corporate-social-responsibility' :{
            title: 'Corporate Social Responsibility',
            details: 'Integrate sustainability into curriculum regardless of area of study.', 
            info_items:  [
                {
                    title: 'Using Health Data to Identify and Inform Healthcare Sustainability Initiatives in Canada',
                    sponsor_logo: csr_1,
                    logo_height: '40px',
                    video_link: 'https://youtu.be/Mvl6DRxVDt4',
                    info: 
                    `
                    <h3>Background & Context</h3>
                    <p>The Organisation for Economic Co-operation and Development (OECD) maintains a comprehensive database of health and health systems statistics across many different countries (including Canada). These statistics relate to health care expenditure, resources, utilization, quality indicators and many others. This extensive database has the potential to reveal parts of the health system where sustainability efforts could be impactful. There is an opportunity for us to better use this data to improve the sustainability of the Canadian Healthcare System.</p>
                    <p><b>Key Question:</b> How can we best use the OECD Health Data to help inform healthcare sustainability initiatives in Canada? </p>
                    <h3>Objective/Solutions</h3>
                    <ol>
                        <li>Your team’s solution should encompass one of the following: </li>
                        <li><b>Sustainability Insights:</b> Based on the OECD data, can your team find insights that reveal a potential healthcare sustainability issue(s) in Canada. What would your team’s recommendation be on a potential area(s) that needs a healthcare sustainability initiative?  </li>
                        <ul>
                            <li>a. Solutions should be able to clearly explain the rationale on why a selected area(s) was chosen  </li>
                            <li>b. Identifying an area for a healthcare sustainability initiative would already be a good solution, but if your team is feeling ambitious, teams are welcome to propose ideas to address any sustainability challenges uncovered </li>
                        </ul>
                        <li><b>Tool Development:</b> Can we build a data tool to more easily identify and extract insights from the OECD data set? This tool should be able to help easily flag potential healthcare sustainability issues from the data set. </li>
                        <li>Teams are welcome to include both insights and tool development in their solutions, but this is not an expectation due to time limitations </li>
                    </ol>
                    <h4>Thought starters:</h4>
                    <ol>
                        <li>Can we identify trends in the data that might pose a sustainability issue (e.g. hospital bed numbers going down, decreasing long term care workers for the older population)?</li>
                        <li>Can we identify correlations between different healthcare statistics that signify a potential sustainability issue in the healthcare system (e.g. Hospital average length of stay for cataract increasing while number of cataract surgeries are also increasing)?</li>
                        <li>Are there data trends that highlight challenges in our healthcare system to sustainability manage potential future waves of COVID-19?</li>
                        <li>Does the data from other countries help reveal sustainability issues in Canada’s healthcare system?</li>
                        <li>Are there any improvements that can be made to better visualize and analyze the available OECD data?</li>
                        <li>Feel free to explore public examples on how the OECD data (in health and other areas) has been used. For example, Canadian Institute for Health Information (CIHI)’s interactive web tool: <a class="has-text-green is-underlined" href="https://www.cihi.ca/en/oecd-interactive-tool-international-comparisons" target="_blank">https://www.cihi.ca/en/oecd-interactive-tool-international-comparisons</a></li>
                        <li>Teams are also welcome to explore other topics in the OECD data set if helpful (e.g. environment, demography and population etc.): <a class="has-text-green is-underlined" href="https://stats.oecd.org/" target="_blank">https://stats.oecd.org/</a> </li>
                    </ol>
                    <h3>Resources/Data</h3>
                    <p><a class="has-text-green is-underlined" href="https://stats.oecd.org/Index.aspx?ThemeTreeId=9" target="_blank">Click here</a> for resources/data.</p>
                    <p>1. The OECD Health Database is comprehensive source of comparable statistics on health and health systems across OECD countries. </p>
                    <p>
                    2. Includes statistics around Health Expenditure and Financing, Health Care Resources, Health Care Utilization, Health Care Quality Indicators, Pharmaceutical Market, Long-term Care Resources and Utilization and others 
                    <ul>
                        <li>a. Data Dictionary: <a class="has-text-green is-underlined" href="https://www.oecd.org/els/health-systems/Table-of-Content-Metadata-OECD-Health-Statistics-2021.pdf" target="_blank">https://www.oecd.org/els/health-systems/Table-of-Content-Metadata-OECD-Health-Statistics-2021.pdf</a> </li>
                    </ul>
                    </p>
                    `
                },
                {
                    title: 'Develop a design system which can be used to recycle the e-waste in a sustainable manner',
                    sponsor_logo: csr_3,
                    logo_height: '20px',
                    info: 
                    `
                    <h3>Background & Context</h3>
                    <ul>
                        <li>1. The Electronic Products Recycling Association of Canada reports that there is 1,000,000 metric tons of e-waste is landfilled every year. [1]</li>
                        <li>2. In 2019 only 17.4% of e-waste was recycled. [2]</li>
                        <li>3. Lead and Mercury in e-waste can lead to anemia, nausea, and other diseases to humans and other organisms.[1]</li>
                    </ul>
                    <p><b>Key Question:</b> How to recycle the e-waste in a sustainable manner by developing a design system?</p>
                    <h3>Solutions</h3>
                    <p>The solution must contain the following:</p>
                    <ul>
                        <li>1. The team must provide a model that can be used to recycle e-waste in a sustainable manner.</li>
                        <li>2. The team must implement that idea in the form of a design system which will make it easier to recycle electronics at end of life.</li>
                        <li>3. The solution must include a dashboard that quantifies and show the number of landfills and carbon emissions that it has saved by using the proposed design system.</li>
                    </ul>
                    <p class="has-text-weight-bold">Thought starters:</p>
                    <ul>
                        <li>1. What are the recycling methods used at present?</li>
                        <li>2. What are the electronic design principles and best practices that allows for more efficient recycling at end of life?</li>
                        <li>3. What about the 'right to repair' this could be suggested policy framework?</li>
                        <li>4. What is leading the process of e-waste recycling to be a threat to the environment?</li>
                        <li>5. What are the side-effects/consequences of the current recycling process?</li>
                        <li>6. How can we get rid of the side-effects/consequences caused by the current recycling process?</li>
                        <li>7. How can we quantify the number of landfills and carbon emissions that is being prevented by the proposed system?</li>
                        <li>8. How can we recycle e-waste sustainably?</li>
                        <li>9. Is there a way to fold this into a public awareness campaign?</li>
                    </ul>
                    <h3>References</h3>
                    <p>[1] <i>The story of Canada's Digital Dumping Ground.</i> The story of Canada's digital dumping ground | Open Case Studies. (n.d.). Retrieved January 27, 2022, from <a class="has-text-green is-underlined" href="https://cases.open.ubc.ca/w17t2cons200-26/#cite_note-VanderPol-15" target="_blank">https://cases.open.ubc.ca/w17t2cons200-26/#cite_note-VanderPol-15</a></p>
                    <p>[2] Mckenzie, K. H. & R. (n.d.). <i>Waste reduction week in Canada: E-waste</i>. Environment 911. Retrieved January 27, 2022, from <a class="has-text-green is-underlined" href="https://www.environment911.org/Waste-Reduction-Week-in-Canada-E-Waste" target="_blank">https://www.environment911.org/Waste-Reduction-Week-in-Canada-E-Waste</a></p>
                    `
                },
                {
                    title: 'The Circular and net zero carbon economy',
                    sponsor_logo: csr_2,
                    logo_height: '32px',
                    info: `
                    <h3>Background & Context</h3>
                    <div class="has-text-centered"><img src=${hp1} alt="hp" width="100%" class="inline-img-cc"></div>
                    <p>From the latest CDP report  managing impacts from the supply chain is now the ONLY way to leverage change at the scale required (to prevent catastrophic climate change) From the report - the biggest takeaway is that the necessary cascade of action down the supply chain is not happening. With the majority of impacts (Climate Water Forests Biodiversity) lying in a company’s supply chian it is a key indicator of the efficacy of a company’s environmental strategies. The 2020 HP carbon footprint report shows that 64% of the carbon emissions are in the Supply Chain . ​</p>
                    <p><b>HP’s sustainable Impact Goals: ​</b></p>
                    <ul>
                        <li>1. Reduce first-tier production supplier and product transportation-related GHG emissions intensity by 10% by 2025, compared to 2015.</li>
                        <li>2. Help suppliers cut 2 million tonnes of CO2e by 2025​</li>
                        <li>3. Reach 75% circularity for products and packaging by 2030.​</li>
                        <li>4. Reduce absolute value chain GHG emissions by 50% by 2030​.</li>
                    </ul>
                    <p><b>​Current Goal Progress:</b> Through December 2019 (the most recent year data is available),</p>
                    <ul>
                        <li>1. GHG emissions intensity decreased 3%, compared to 2015.​</li>
                        <li>2. Suppliers avoided 1.38 million tonnes of CO2e ​</li>
                    </ul>
                    <p><b>Key Question:​</b></p>
                    <ul>
                        <li>1. Implement a circular innovative solution that can help reduce the carbon emissions during the supply chain phase based on net zero carbon and circular economy baselines.</li>
                        <li><b>NOTE:</b> The solution need not be a technology. It can be a business model as well that aims at circularity.​</li>
                    </ul>
                    <p><b>Barriers to Overcome:​</b></p>
                    <ul>
                        <li>1. Getting products back & recovering parts economically enough?​</li>
                        <li>2. Circular models disrupts the status quo and new business models can destroy or cannibalize an existing value proposition.​</li>
                    </ul>
                    <h3>References</h3>
                    <ul>
                        <li>1. <a class="has-text-green is-underlined" href="https://h20195.www2.hp.com/v2/getpdf.aspx/c04945685.pdf" target="_blank">HP’s Supply Chain Responsibility</a></li>
                        <li>2. <a class="has-text-green is-underlined" href="https://www.cdp.net/en/research/global-reports/engaging-the-chain" target="_blank">Engaging the chain: driving speed and scale​</a></li>
                        <li>3. <a class="has-text-green is-underlined" href="https://h20195.www2.hp.com/v2/getpdf.aspx/c07539064.pdf" target="_blank">HP’s Sustainable Impact Report – 2020</a></li>
                        <li>4. <a class="has-text-green is-underlined" href="https://h20195.www2.hp.com/v2/getpdf.aspx/c04797682.pdf" target="_blank">HP Supply Chain Social and Environmental Responsibility Policy​</a></li>
                    </ul>
                    `
                },
                {
                    title: 'Increasing Post-consumer Plastic consumption',
                    sponsor_logo: csr_2,
                    logo_height: '32px',
                    info: `
                    <h3>Background & Context</h3>
                    <div class="has-text-centered"><img src=${hp2} alt="hp" width="100%" class="inline-img-cc"></div>
                    <p>The Circular Economy requires the use of circualr inputs to services & goods. HP is both a supplier and user of recovered materials, incorporating increasing amounts of recycled and recyclable content into new HP products and packaging. Their Initial focus has been on post consumer (PCR) and ocean bound recycled plastics due to issues related to plastic waste and pollution. HP has steadily increased the % of PCR with a goal of 30% by 2025. (industry average is assumed to be <3%)​</p>
                    <p><b>HP’s sustainable Impact Goal:</b> Use 30% postconsumer recycled content plastic across HP’s personal systems and print product portfolio by 2025.​</p>
                    <p><b>Current Goal Progress:</b> During 2020, we used 27,490 tonnes of postconsumer recycled content plastic in HP personal systems and print products =11% of total plastic used​</p>
                    <p><b>Key Question:</b> Propose an innovative solution that can help increase the post-consumer plastic consumption within and after the product lifecycle.​</p>
                    <p><b>NOTE:</b> The solution need not be a technology. It can be a business model as well that aims at circularity.</p>
                    <p><b>Barriers to Overcome:​</b></p>
                    <ul>
                        <li>1. Virgin plastic is typically cheaper than PCR. Why would the customer want to pay extra for the post-consumer plastic products?​​</li>
                        <li>2. Material quality is essential to ensure technical performance in the Circular Economy​​</li>
                    </ul>
                    <h3>References</h3>
                    <ul>
                        <li>1. <a class="has-text-green is-underlined" href="https://h20195.www2.hp.com/v2/getpdf.aspx/c06614535.pdf" target="_blank">The battle against Plastic Pollution​</a></li>
                        <li>2. <a class="has-text-green is-underlined" href="https://h20195.www2.hp.com/v2/getpdf.aspx/c07539064.pdf" target="_blank">HP’s Sustainable Impact Report – 2020​</a></li>
                        <li>3. <a class="has-text-green is-underlined" href="https://www.greenbiz.com/article/plastic-pollution-bad-how-exactly-it-linked-climate-change?utm_medium=email&utm_source=newsletter&utm_campaign=newsletter-template&utm_content=02-18-2022%20Circularity%20Weekly&mkt_tok=MjExLU5KWS0xNjUAAAGCrBwsRIEXB-z9JWPeAsz_x-DRxqsjjB7i92FpOrtoIFLxUS-I6hYRwsA_mj8rdEC_2frpnMNKlDG6KRbk9faKsgdpHXiqMVLlDp-W41HF" target="_blank">Plastic pollution is bad, but how exactly is it linked to climate change?</a></li>
                    </ul>
                    `
                },
                {
                    title: 'Promoting Service Based Models​',
                    sponsor_logo: csr_2,
                    logo_height: '32px',
                    info: `
                    <h3>Background & Context</h3>
                    <div class="has-text-centered"><img src=${hp3} alt="hp" width="100%" class="inline-img-cc"></div>
                    <p>The Circular Economy requires offering product as a serivce (PaaS) . HP’s expanding Device as a Service (DaaS) offering provides customers the latest HP computer technology while improving cost predictability and enabling a better employee experience. In a LifeCycle Assessment (LCA) that HP conducted in 2019 showed that DaaS reduces GHG emissions by 25%, improves resource efficiency by 28%, decreases ecosystems impacts by 28%, and reduces human health impacts by 29% for a notebook PCs​</p>
                    <p><b>Key Question:</b> Propose an innovative solution that can help enhance the usage of XaaS ( Everything as a service).</p>
                    <p><b>NOTE:</b> The solution need not be a technology. It can be a business model as well that aims at circularity.​</p>
                    <p><b>Barriers to Overcome:​</b></p>
                    <ul>
                        <li>1. Retail channels and salesforces are traditionally incentivized to sell products not services.​</li>
                        <li>2. Will customers buy refurbished products?​​</li>
                        <li>3. Customers typically want to own products & business finance systems are not flexible when shifting to a service (Capex moving to Opex) . (Capital expenditures (CAPEX) are major purchases a company makes that are designed to be used over the long term. Operating expenses (OPEX) are the day-to-day expenses a company incurs to keep its business operational)​</li>
                    </ul>
                    <h3>References</h3>
                    <ul>
                        <li>1. <a class="has-text-green is-underlined" href="https://h20195.www2.hp.com/v2/getpdf.aspx/c06646300.pdf" target="_blank">Assessment Shows Service-based Models Deliver Positive Environmental Impact​</a></li>
                        <li>2. <a class="has-text-green is-underlined" href="https://h20195.www2.hp.com/v2/getpdf.aspx/c07539064.pdf" target="_blank">HP’s Sustainable Impact Report – 2020​</a></li>
                        <li>3. <a class="has-text-green is-underlined" href="https://h20195.www2.hp.com/v2/getpdf.aspx/4AA7-1229ENW.pdf" target="_blank">Take the hassle out of device management​</a></li>
                    </ul>
                    `
                }
            ]
        },
        'global-cause' : {
            title: 'Global Causes',
            details: 'How can we leverage from existing technologies to promote reforestation, increase canopy cover, and enhance biodiversity within the school grounds?​', 
            info_items:  [
                {
                    title: 'Developing a self-help gamified application for self-realization about gambling and social media addiction',
                    sponsor_logo: gco_2,
                    logo_height: '50px',
                    info: 
                    `
                    <h3>Background and Context</h3>  
                    <p>Research suggests that addiction to gambling and social media is an addiction like any other and is a fundamental problem that has only gotten worse with the pandemic and related isolation. This endangers society's sustainability, and it is time to take note and do something about it. According to the research 1 of every 5 people in Canada are experiencing lack of sleep due to Social Media addiction and almost 220,000 people residing in Canada are addicted to Gambling, which will rise to almost 1 million in coming years. </p>
                    <p>The Centre for Addiction and Mental Health (CAMH) is one of Canada’s largest mental health teaching hospitals setting the standards for care, research, education, and leading social change. Research suggests addiction to gambling and social media is an addiction like any other and is a fundamental problem which has only gotten worse with the pandemic and related isolation. This endangers society sustainability, and it is time to take note, and do something about it.</p>
                    <p>To solve this issue of rising gambling and social media addiction, can participants create an application and awareness tools which provide preventative maintenance by raising awareness of problematic behavior and incorrect beliefs before it leads to acute problems and interventions. And the main question to ask, how could we support users to control and prevent their behavior and keep them motivated along the way (gamification).</p>
                    <h3>Thought Starters</h3>  
                    <p>Some of the thought starters for developing the application are: </p>
                    <ul>
                        <li>1. When it comes to addiction, users should not be comparing themselves to their friends, family, or their social circle, but the general population as most of these habits are influenced indirectly by their behavioral patterns. Could a self-help application be developed which would help users identify addictions, and their level by showing a visual representation of the results compared to population normal distribution?</li>
                        <li>2. What kind of materials and information could be shared via application educate the users about the nature of gambling and social media addition? Will this be in the form of a blog, or games? </li>
                        <li>3. Could we develop an application which would have a game feature to keep the users motivated – such as daily goals, challenges, and rewards. What more could be offered to them that helps them reduce their addiction? </li>
                        <li>4. Would creating a healthy and competitive community via application support the users to prevent and control their addiction at earlier stages? – A user-based forum to ask questions, share progress with other users and talk about problems. Connecting with people facing similar issues? </li>
                    </ul>
                    <h3>Objective</h3>  
                    <p>How could we leverage gamified software applications to promote self-realization to one’s addiction, and support them to control & prevent it to increase human sustainability in Canada?</p>
                    <h3>Solution</h3>  
                    <p>Developing a mobile application that would help users to identify their gambling and social media addiction issues and level of its impact.</p>
                    <ul>
                        <li>1. The application should offer them self-help solutions and methods such as an alternative breathing technique or a sport / activities suggestion which would help the users control their urge towards their addiction?</li>
                        <li>2. Feature where users can set their daily goals and challenges should be offered along with some healthy wager and incentive to keep them motivated throughout the process.</li>
                        <li>3. Design an application feature of community space and area for them to connect with people going through a similar issue?</li>
                    </ul>
                    <p>Use Machine Learning to learn about the patterns and timings at which patients experience urges. Could AI (Artificial Intelligence) then be leveraged to warn the users about an upcoming trigger and suggest alternatives like:</p>
                    <ul>
                        <li>1. Practice meditating using the 4-7-8 breathing method or any other sport or activity.</li>
                        <li>2. Activities such as the user’s hobbies or show motivational videos/images.</li>
                        <li>3. An option to connect with AI chat bot or a representative to talk to while experiencing urge.</li>
                    </ul>
                    <p>Groups could create an application to provide recovery resources and focus on two key areas:</p>
                    <ul>
                        <li>1. Making software which is cross-platform so that it is available to a wide range of users.</li>
                        <li>2. Heavy focus on UI and UX of the application as patients need to be able to use the application efficiently and the application should be fun to use.</li>
                        <li>3. Offer informational resources and articles for the users.</li>
                        <li>4. Gamify the application – offer challenges to users, users could set personal goals and offer healthy wager to the users to keep them motivated.</li>
                        <li>5. One option of scheduling an appointment with CAMH team but the application should be more of Self-Help Application.</li>
                    </ul>
                    <h3>Resources/Data</h3>  
                    <ul>
                        <li>1. <a class="has-text-green is-underlined" href="https://canadasafetycouncil.org/gambling-addiction/" target="_blank">Gambling Addiction</a></li>
                        <li>2. <a class="has-text-green is-underlined" href="https://www.tandfonline.com/doi/full/10.1080/10550887.2021.1897064" target="_blank">Exploring the public’s perception of gambling addiction on Twitter during the COVID-19 pandemic: Topic modelling and sentiment analysis</a></li>
                        <li>3. <a class="has-text-green is-underlined" href="https://link.springer.com/article/10.1007/s10899-021-10089-0" target="_blank">Longitudinal Assessment of a Manualized Group Treatment Program for Gambling Disorder: The Ohio Problem Gambling Treatment Model for Adults with Co-Occurring Disorders</a></li>
                        <li>4. <a class="has-text-green is-underlined" href="https://www.liebertpub.com/doi/full/10.1089/cyber.2021.0188" target="_blank">Social Media Use and Its Link to Physical Health Indicators</a></li>
                    </ul>
                    <h3>FAQ</h3>  
                    <p>SSOs and PEOs, what were your questions when you were starting out on this challenge set development journey? What answers have you found? What do students need to know before they get started?</p>
                    `
                },
                {
                    title: 'Sustainability as part of the curriculum',
                    sponsor_logo: logo,
                    logo_height: '40px',
                    info: 
                    `
                    <h3>Background and Context</h3>
                    <p>Education for Sustainable Development (ESD) has been identified as a key enabler of all Sustainable Development Goals (SDGs). </p>
                    <p>Seneca College does not have sustainability-focused or related courses as part of every program's requirement and consequently, a lot of students don't think about it.</p>
                    <p>Fortunately, the prevalence of sustainability topics in courses has seen an increase in the last few years. As education becomes more accessible, initiatives become more common, and we move closer to a sustainable future.</p>
                    <p>“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” - Malcolm X</p>
                    <h3>Objective</h3>
                    <p>1. Integrate sustainability into the curriculum regardless of area of study.</p>
                    <p>2. This is a broad topic and has many solutions.</p>
                    <h3>Solution</h3>
                    <p>1. Map to core literacy: Developing a module for Sustainability course in Seneca for each classroom to create awareness about sustainable goals.</p>
                    <p>2. Assessment: Carrying out surveys to check the level of understanding among students regarding Seneca’s sustainable goals. </p>
                    <p>3. Curriculum development: Assisting the staff at Seneca to develop a graded course focused on sustainability goals and their implementation.</p>
                    <p>4. Building community: Creating a Seneca student club with primary target to get students engaged in environmentally sustainable activities like sapling plantations, rainwater harvesting, etc.</p>
                    <h3>Resources/Data</h3>
                    <ul>
                        <li>1. <a class="has-text-green is-underlined" href="https://www.senecacollege.ca/about/reports/a-reports/Seneca-College-2019-CDM-Plan.pdf" target="_blank">Seneca’s Conservation and Demand Management (CDM) Plan</a></li>
                        <li>2. <a class="has-text-green is-underlined" href="https://sustainabilityknowledgegroup.com/sustainability-and-the-sdgs-to-become-part-of-the-primary-and-secondary-school-curriculum-a-next-step/" target="_blank">Sustainability and the SDGs to become part of the Primary and Secondary School Curriculum: A Next Step?</a></li>
                        <li>3. <a class="has-text-green is-underlined" href="https://www.mdpi.com/2071-1050/13/5/2779/htm" target="_blank">An Analysis of Sustainability Integration in Business School Curricula: Evidence from Korea</a></li>
                        <li>4. <a class="has-text-green is-underlined" href="https://www.tandfonline.com/doi/abs/10.1080/13504509.2021.1880983" target="_blank">Impact of sustainability-focused learning intervention on teachers’ agency to teach for sustainable development</a></li>
                    </ul>
                    <h3>FAQ</h3>
                    <p>SSOs and PEOs, what were your questions when you were starting out on this challenge set development journey? What answers have you found? What do students need to know before they get started?</p>
                    <p class="has-text-weight-bold">What are Seneca’s sustainability goals?</p>
                    <p>Seneca is committed to stewarding, conserving and protecting our environment — both on our campuses and in our broader communities. This is being done in help with the Sustainable Seneca Committee which takes initiatives such as: </p>
                    <ul>
                        <li>1. encouraging, celebrating and advocating for excellence in environmental sustainability</li>
                    </ul>
                    `
                },
                {
                    title: '[PRME] Sustainable Development Goals',
                    info: 
                    `
                    <h3>Background and Context</h3>
                    <p>The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future. At its heart are the 17 Sustainable Development Goals (SDGs), which are an urgent call for action by all countries - developed and developing - in a global partnership. They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, and spur economic growth – all while tackling climate change and working to preserve our oceans and forests. </p>
                    <h3>Objective/Solution</h3>
                    <p>1. Choose one of the United Nations’ Sustainable Development Goals and try to implement it on a local level.</p>
                    <p>2. Open challenge set with many possible solutions.</p>
                    <h3>Resources/Data</h3>
                    <p>1. <a class="has-text-green is-underlined" href="https://sdgs.un.org/goals" target="_blank">THE 17 GOALS</a></p>
                    <p>2. <a class="has-text-green is-underlined" href="https://sdgs.un.org/2030agenda" target="_blank">Transforming our world: the 2030 Agenda for Sustainable Development</a></p>
                    <h3>FAQ</h3>
                    <p>SSOs and PEOs, what were your questions when you were starting out on this challenge set development journey? What answers have you found? What do students need to know before they get started?</p>
                    `
                },
                {
                    title: 'Yoga – for the being',
                    sponsor_logo: gco_1,
                    logo_height: '50px',
                    info: 
                    `
                    <h3>Background and Context</h3>
                    <p>Yoga Front Organization is working on different projects, one of which is to get law enforcement in the field of Yoga so that Yoga Teachers and Yoga enthusiasts get the rightful place. There must be rightful law in this sector that would protect the rights of Yoga Teachers and give the right place to Ancient Yogic Science in society.</p>
                    <p>In the Covid pandemic, many sectors of the world suffered, so did the Yoga Teachers and they ended up being unemployed. So, there should be a means via which they could connect with the customers/clients through a platform that enables them to render the services online without being affected much due to the pandemic or other upcoming issues in the future. A system wherein different tutorials could be added, live lectures could be delivered, and much more.</p>
                    <p>Adding to this there is an ongoing issue that talks about the micro-credentialing of a yoga teacher or enthusiast. There should be a system or way through which the expertise of an individual could be assessed because nowadays there are many people who end up doing 1-2 weeks of training and come up as yogis or gurus but lack the right knowledge. This has a major impact on the quality of content delivered to the customer/client. The goal or key is to have a sustainable and healthy society which can be achieved by incorporating the right standards and learning methods which impart the right knowledge about the practice for the common welfare of society and its people.</p>
                    <h3>Objective/Solution</h3>
                    <p>1. To create an AI-based application that helps the yogic folks to connect and deliver content based on conventional and sustainable yogic practices all on a single platform.</p>
                    <p>2. What are all the laws in the field of Yoga worldwide and the legal structure which exists? How could this help in the enforcement of law and legal structure in India in the field of Yoga?</p>
                    <p>3. A micro-credentialing system that shall help in enabling or generating employment in this field.</p>
                    <h3>FAQ</h3>
                    <p>Before starting the challenge set, we were skeptical about the whole idea of Yoga but after deep-diving into the aspects and issues which we have around, we could understand that Yoga helps us to attain a balance by incorporating the conventional practices which are sustainable and aims at benefitting the society in its own ways.</p>
                    <p>Students need to understand that Yoga is not just about doing exercises, it’s a discipline, an art, and an ancient science which works on mind, body, and soul. The conventional methods help in increasing the natural healing mechanism of the body, increase the resistance power of the body, work on the cellular level, and help in achieving a balance between the conscious and the subconscious state.</p>
                    
                    `
                },
                {
                    title: 'Goal 11',
                    sponsor_logo: gco_3,
                    logo_height: '30px',
                    info: 
                    `
                    <h3>Background and Context </h3>
                    <p>While housing affordability is a key element in building sustainable urban places, Canada’s largest cities have been facing a chronic housing crisis just like their international counterparts. The affordability crisis has since spilled over to rural and smaller communities in recent years.  Marginalized and racialized communities impacted particularly hard by the crisis as decades of systemic racism has deeply entrenched in housing arrangement. The increasing cost of homeownership push these communities away from achieving positive health, social, education and career outcomes.</p>
                    <p>Traditionally, tackling housing affordability is perceived to be the government and non-profit sectors’ jurisdictions. However, we should recognize the far-reaching impact of the housing crisis, the need for prompt responses, as well as the capacities from the private sector that could be leveraged.  Historically, governments focus on demand-side solutions that aim to cool down the property market. The trend for home prices demonstrated that these measures are insufficient as population growth continues to outpace the supply of new homes. It is important to recognize that demand-side solutions are as effective as the numbers of units available in the market. Unless more housing units are being created, our society will continue to be impacted by the negative outcomes from the housing affordability crisis.</p>
                    <p>There are a number of other issues that the housing sector also needs to tackle. There are misaligned interest amongst housing stakeholders (e.g., developers, new-homebuyers, existing homeowners, governments, non-profit organizations, consultants and contractors etc.) that slows down or prevent sufficient supply of housing. Developing affordable homes is particularly difficult because of the financial and feasibility constraints. The system is also fragmented and lack transparency as affordable home seekers do not have a centralized and easy to navigate channel to find and apply for affordable housing units / programs. Lastly, marginalized and racialized communities are often neglected in the decision-making process for housing policies. These inefficiencies further add to the difficulties in providing equitable access to affordable homes.</p>
                    <h3>Objective/Solution</h3>
                    <p>Our objective is to use technological innovations to create an ecosystem that could mitigate if not eliminate the inefficiencies and misalignments amongst stakeholders. As the Province commits to create 1.5 million housing units in the next 10 years to fulfill the latent and projected demand, our solution intends to serve as a platform that support this cause. We intend to create more meaningful partnerships, and therefore the creation of more housing units.</p>
                    <p>We are challenging you to create an ecosystem that may incorporate some of the following: blockchain technologies, NFTs, machine learning and data intelligence, with the following objectives in mind:</p>
                    <ul>
                        <li>1. Facilitate the formation of lasting partnerships among stakeholders</li>
                        <li>2. Incorporate different housing stakeholders into this solution</li>
                        <li>3. Reduce misaligned incentives among stakeholders</li>
                        <li>4. Streamline the affordable home finding and application processes</li>
                        <li>5. Improve transparency of the affordable housing allocation and lifecycle tracking processes</li>
                        <li>6. Create Long term impacts to housing affordability</li>
                        <li>7. Attract new ideas and resources from members of the ecosystem</li>
                        <li>8. Empower marginalized and racialized communities in the decision-making process.</li>
                        <li>9. Consider the needs of all stakeholders, particularly those who will be most affected by this solution</li>
                    </ul>
                    <p>The final product will be a no-code working prototype created using Bubble.io. We will provide you with access.</p>
                    <p>Be creative!</p>
                    <h3>Resources/Data</h3>
                    <ol>
                        <li><a class="has-text-green is-underlined" href="https://sdgs.un.org/topics/sustainable-cities-and-human-settlements" target="_blank">Goal 11</a></li>
                        <li><a class="has-text-green is-underlined" href="https://www.scotiabank.com/ca/en/about/economics/economics-publications/post.other-publications.housing.housing-note.housing-note--may-12-2021-.html" target="_blank">Background Study on the Scale of Housing Affordability Crisis in Canada Scotia Bank – Estimating the Structural Housing Shortage in Canada: Are we 100 Thousand or Nearly 2 Million Units Short</a></li>
                        <li><a class="has-text-green is-underlined" href="https://files.ontario.ca/mmah-housing-affordability-task-force-report-en-2022-02-07-v2.pdf" target="_blank">Background Study on Most Recent Update about Ontario’s Housing Affordability and the Task Force’s Recommendations: Report of the Ontario Housing Affordability Task Force</a></li>
                        <li><a class="has-text-green is-underlined" href="https://www.toronto.ca/wp-content/uploads/2020/04/94f0-housing-to-2020-2030-action-plan-housing-secretariat.pdf" target="_blank">Background Study on City of Toronto’s Housing Affordability Vision and Plans for This Decade: City of Toronto – Housing TO 2020 – 2030 Action Plan</a></li>
                        <li><a class="has-text-green is-underlined" href="https://eppdscrmssa01.blob.core.windows.net/cmhcprodcontainer/sf/project/placetocallhome/pdfs/canada-national-housing-strategy.pdf" target="_blank">Background Study on the Federal Government’s Housing Policy Vision and Plans: Government of Canada – National Housing Strategy</a></li>
                        <li><a class="has-text-green is-underlined" href="https://www.placetocallhome.ca/stories#sort=relevancy" target="_blank">Reference on Projects that are Selected by CMHC: Projects Funded through CMHC Affordable Housing Innovation Fund</a></li>
                        <li><a class="has-text-green is-underlined" href="https://www.toronto.ca/legdocs/mmis/2021/ph/bgrd/backgroundfile-165633.pdf" target="_blank">Reference on the Digital Access System to be Created by the City of Toronto: Creation of a Fair and Streamlined Access System for Affordable Housing</a></li>
                        <li><a class="has-text-green is-underlined" href="https://canurb.org//wp-content/uploads/CUIPublication.ScalingUpAffordableHousingGTA.2017.pdf" target="_blank">Reference on Funding Program Models Offered by Non-Profit Organizations: P.19 – P.23 of Canadian Urban Institute’s Report on Scaling Up Affordable Ownership Housing in the GTA </a></li>
                        <li><a class="has-text-green is-underlined" href="https://www.usebraintrust.com/hubfs/%5BWhitepaper%5D%20Braintrust_The_Decentralized_Talent_Network_9_2_21.pdf" target="_blank">Example of a Network Marketplace for the Talent Acquisition Space: Braintrust White Paper</a></li>
                        <li><a class="has-text-green is-underlined" href="https://decentraland.org/whitepaper.pdf" target="_blank">Example of a Decentralized Property Ownership Ledger for Digital Land: Decentraland White Paper </a></li>
                        <li><a class="has-text-green is-underlined" href="https://whitepaper.io/document/623/flow-dapper-labs-whitepaper" target="_blank">Example of a Decentralized and Open-Source Blockchain: Flow White Paper </a></li>
                    </ol>
                    <h3>FAQ</h3>
                    <p>What were your questions when you were starting out on this challenge set development journey? What answers have you found? What do students need to know before they get started?</p>
                    <p>Q: How did we come up with the Challenge Topic?</p>
                    <p>Q: What is housing affordability? </p>
                    <p>Q: What is affordable housing? </p>
                    <p>Q: What is demand-side and supply-side solutions?</p>
                    <p>Q: Why doesn’t the solution aim to directly create more units?</p>
                    <p>Q: What benefits are there to participating in this challenge?  </p>
                    `
                },
            ]
        },
        'net-zero-goals' : {
            title: 'Net Zero Goals​',
            details: 'A project with TDSB EcoSchools to help propagate the seeds that can be used in the tree planting.', 
            info_items:  [
                {
                    title: 'International Travelers Carbon footprint reduction and credit management ',
                    sponsor_logo: nzc_2,
                    info: 
                    `
                    <h3>Background & Context</h3>
                    <p>Formula One is a significant motorsport event that takes place all over the world. As it has shifted towards carbon neutral energy and back in 2019, they unveiled an ambitious sustainability goal in 2019 to achieve a net-zero carbon footprint by 2030. GP Canada (Grand Prix Canada), as a key part of Formula 1 and one of the most popular and anticipated circuits in the world, has the same objective of going carbon neutral by 2025 and actively investing in sustainable accounting. </p>
                    <h3>Problem Statement</h3>
                    <p>On an island in the midst of the St. Lawrence River, the circuit is placed. Fans travel from all over the world to attend this event, using various modes of transportation depending on their convenience and distance. According to GP Canada, 98 percent of fans travel by public transportation for the three-day race event, and they require assistance to offset and reduce the carbon footprint generated by the fans travelling in order to help the environment become greener. </p>
                    <h4>What we need to do </h4>
                    <p>a. Recommender systems for individual travelers to help them select chose most sustainable travel plans.</p>
                    <p>Carbon footprint data aggregator, reward system, and credit management. </p>
                    <ul>
                        <li>1. System which provides the amount of carbon emission, travelers helped them to reduce.   </li>
                        <li>2. Reward system, rewarding people to help reduce the carbon footprint. </li>
                        <li>3. A system GP Canada can use to organize data related to fan travel.</li>
                    </ul>
                    <p>Example – No. of participants, origin of their city/state/country and many more.</p>
                    `
                },
                {
                    title: 'Food waste reduction',
                    sponsor_logo: nzc_2,
                    info: 
                    `
                    <h3>Problem Statement</h3>
                    <p>Over 300,000 individuals from all over the world gathered to participate in this international event. Food is available in the circuit in two ways: visitors can bring their own food or purchase it from within the circuit. When it comes to food waste, GP Canada has control over the information for food waste that occurs on their premises, but not over the data for food waste that occurs outside the premises. In terms of food waste, they don't compost anything, so any food that isn't consumed ends up in the trash. </p>
                    <h4>What we need to do </h4>
                    <p>To make the event more environmentally friendly and sustainable, introduce new approaches to reduce food waste and create a platform that will educate and reward people who do so. </p>
                    <ul>
                        <li>1. Awareness and research. </li>
                        <li>2. Recommender and reward systems. </li>
                        <li>3. System which will help them to gather food logs as well as use that data to calculate food waste and help decrease it.</li>
                    </ul>
                    <p>Note: Suitable for IT and Non-IT participants </p>
                    `
                },
                {
                    title: 'Data mining and data analytics.',
                    sponsor_logo: nzc_2,
                    info: 
                    `
                    <h3>Problem Statement</h3>
                    <p>Because they are such a large organization, they require a large amount of data in order to improve the spectator experience as well as make the event more interesting for Formula One. And for that, they'll need information that's difficult to come by. There is a need for data analytics for GP Canada, whether it is to reduce the carbon footprint, collect garbage data, or gather other sustainability statistics. </p>
                    <h4>What we need to do </h4>
                    <p>Use data publicly available from the Cities and Municipalities nearby as well as using satellite data like GIS (Geographic Information System). </p>
                    `
                },
                /* {
                    title: 'One Stop E-Waste Bank',
                    sponsor_logo: nzc_1,
                    logo_height: '40px',
                    info: 
                    `
                    <h3>Background and Context</h3>
                    <h4>ABOUT FUTURETEL</h4>
                    <ul>
                        <li>1. Since 1998, Authorized Electronics Service Center.</li>
                        <li>2. Troubleshoot and fixing/refurbishment of cellular handsets, smartphones, laptops, tablets, and other portable data devices.</li>
                        <li>3. Long Term Value-Fast Quality Service for providing consumer, retail, and business-to-business solutions.</li>
                        <li>4. It is a small-scale business for refurbishment and repurpose and the e-waste generated are processed through a third-party organization.</li>
                        <li>5. They are looking for a Carbon friendly service that can be provided to their customers.</li>
                    </ul>
                    <h4>PROBLEMS</h4>
                    <ul>
                        <li>1. Latest and Upgrade version of new devices release every year.</li>
                        <li>2. Transportation/ Delivery of devices to the branch from all over Canada through different delivery methods.</li>
                        <li>3. Less financial support for such small-scale organizations to collect all unused devices to repurpose or dispose of.</li>
                    </ul>
                    <h3>Objective</h3>
                    <p>The focus of this challenge set is to provide a one stop solution to solve the above-mentioned problems. It depends on which part of the problem we are dealing with. There are several ways to get the solution and one of these is One Stop E-Waste Bank. This E-Waste Bank will be able to contribute to sustainability.</p>
                    <p><b>What is a One Stop E-Waste Bank?</b></p>
                    <p>One stop E-waste Bank will have three modules incorporated. Firstly, it will collect the E-waste either in working or non-working conditions. It can either act as a donation or collection centres. Secondly, a Consumer awareness program will guide consumers towards sustainable electronic consumption methods and finally, a redesign analysis will support the longevity of technology. Let's discuss each module functionality in detail.</p>
                    <p><b>E-waste Bank (EB)</b></p>
                    <ul>
                        <li>1. Collection of E-waste like cell phones, laptops, hard-drives etc.</li>
                        <li>2. Organizing Repair/ Refurbish Via FutureTel.</li>
                        <li>3. Distribute Repaired/ Refurbished products within Canada.</li>
                        <li>4. Distribute Repaired/ Refurbished products outside Canada with the help of another organization.</li>
                        <li>5. E-waste bank can be created to provide consumers for FutureTel.</li>
                    </ul>
                    <p><b>Note:</b> It will require project proposal, physical and IT (Information Technology) components.</p>
                    <p><b>Consumer Awareness Program (CAP)</b></p>
                    <ul>
                        <li>1. Promoting consumers not to replace electronic devices unless it is necessary.</li>
                        <li>2. Educate them with the benefits of eco-friendly concept.</li>
                        <li>3. Add sustainability/eco-friendly in your leaflets and service center outlets.</li>
                    </ul>
                    <p><b>Note:</b> It will require research proposal and IT components.</p>
                    <p><b>Redesign Analysis (RD)</b></p>
                    <ul>
                        <li>1. Enhancing the quality and longevity of the existing product with minor modification.</li>
                        <li>2. Once the device is collected by E-waste Bank in Working/Non-working conditions a detailed analysis report is required to compute the cost and feasibility to redesign the product.</li>
                        <li>3. This will require lots of physical analysis of the device component and answer that question that is it feasible to repair device.</li>
                    </ul>
                    <h3>Resources/Data</h3>
                    <ul>
                        <li>1. <a class="has-text-green is-underlined" href="https://www.futuretel.ca/" target="_blank">FutureTel</a></li>
                        <li>2. <a class="has-text-green is-underlined" href="https://green.harvard.edu/news/exploring-three-r%E2%80%99s-e-waste-refurbish-redesign-and-repurpose" target="_blank">Exploring the Three R’s of E-Waste: Refurbish, Redesign, and Repurpose | Sustainability at Harvard </a></li>
                    </ul>
                    <h3>FAQ</h3>
                    <p>What are the 3 Rs of E-Waste?</p>
                    <ul>
                        <li><b>1. Refurbish</b>: Solving/fixing the issues of existing devices by replacing the same type or similar components. - Cost saving, reliable, eco-friendly, certified testing.</li>
                        <li><b>2. Redesign</b>: Utilizing the same product or parts of the product for another purpose.</li>
                        <li><b>3. Repurpose</b>: Utilizing the same product or parts of the product for another purpose.</li>
                    </ul>
                    `
                }, */
                {
                    title: 'Restaurant Food Waste – Management and Reduction.',
                    sponsor_logo: nzc_3,
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
                {
                    title: 'Rapid, efficient, automated processes',
                    sponsor_logo: nzc_6,
                    info: 
                    `
                    <h3>Background</h3>
                    <p>RideAlike provides Toronto's ultimate peer-to-peer vehicle sharing marketplace where approved users can share, rent and swap approved vehicles.</p>
                    <h3>Challenge Statement</h3>
                    <p>Rapid, efficient, automated processes required for:</p>
                    <ul>
                        <li>1. Identity and vehicle verification to ensure data provided by users about themselves and their cars is authentic, is consistent/matches other data, meets RideAlike screening requirements and facilitates creation of profiles used for risk scoring.  Data used for verification can include:
                            <ul>
                                <li>a. Name, email, phone number, drivers license provided, facial photo, vehicle make/model, mileage, age, value, VIN, ownership certificate, insurance certificate, multiple photos of vehicle provided by user.</li>
                                <li>b. Location, MTO driving record, vehicle value, social media profiles pulled from location based services, APIs, government databases, social media sites etc.</li>
                            </ul>
                        </li>
                        <li>2. Location, MTO driving record, vehicle value, social media profiles pulled from location based services, APIs, government databases, social media sites etc
                            <ul>
                                <li>a. Mileage</li>
                                <li>b. Fuel (gas/charge) level</li>
                                <li>c. Interior damage</li>
                                <li>d. Interior cleanliness</li>
                                <li>e. Exterior damage</li>
                                <li>f. Exterior cleanliness</li>
                                <li>g. Time of Scheduled Pick up/return</li>
                                <li>h. Time of Actual Pick up/return</li>
                                <li>i. Use of correct fuel type substantiated by fuel receipts</li>
                            </ul>
                        </li>
                        <li>3. Post trip claims such as parking tickets and tolls, damage not identified at return, etc.  Data would include scanned tickets, additional photos, etc.</li>
                        <p>For more details, please visit: <a class="has-text-green is-underlined" href="https://faq.ridealike.com/" target="_blank">https://faq.ridealike.com/</a></p>
                    </ul>
                    `
                },
                {
                    title: 'Drones, Image Processing and Solar Panels.',
                    sponsor_logo: nzc_4,
                    info: 
                    `
                    <h3>Background</h3>
                    <p>Residential and manufacturing activity in North America has left polluted soils unoccupied, such as old gas stations, factories, and even defunct dry cleaners. With cities' land supply becoming scarce, property developers, planners, and governments are attempting to reclaim and remediate brownfields, or former industrial and commercial sites. Cities across Canada have conducted long-term environmental feedback to facilitate responsible brownfield redevelopment. </p>
                    <p>Researchers have also developed a method to compare several options or assess the capacity of one option to generate renewable energy like solar energy; on a brownfield site with or without environmental cleanup.</p>
                    <p>Seneca Hackathon’s association with Voltaire Power may assist the company in locating such brownfields that are feasible so that the company can provide services tailored to residential, commercial, and utility-scale solar plants in such locations.</p>
                    <p>Students, through this challenge set, must demonstrate that the environmental site conditions are suitable for the intended use and qualify various criteria such as soil condition, solar exposure, and practicality and demand for power supply in that area.</p>
                    <h3>Objective & Solution</h3>
                    <p>To use Lidar ("light detection and ranging"), image processing and satellite photo analysis to evaluate suitable locations for solar panel installation.</p>
                    <p>Imagine a brown field data image provided to you that needs to be assessed. By using LIDAR and image processing technology you can analyze the data for its feasibility and other criterions mentioned above and provide ranking to the locations. Further, you can divide the area based on the rankings and provide the location that is suitable for solar panel installation.</p>
                    <p>Tools that can be used:</p>
                    <ul>
                        <li>1. Machine Learning</li>
                        <li>2. LIDAR </li>
                        <li>3. Artificial Intelligence</li>
                        <li>4. Image processing</li>
                        <li>5. Data Analytics</li>
                    </ul>
                    <h3>Resources /Data</h3>
                    <ul>
                        <li>1. <a class="has-text-green is-underlined" href="https://d1wqtxts1xzle7.cloudfront.net/68421536/V10I7202117-with-cover-page-v2.pdf?Expires=1645168718&Signature=GVBh-ioirwl6y0XDuAVr2ydW2DCIAE75Ui2HWLgG9VnPCEnRrZh8UPzYhRUZdRUYjnIuIE5NBTA9sxzfvrE9pr~x7KPFLEMpgo3kovaMb2aXMFNhBSlBUfq18c4OWt8LZxvM1NehKQMcP67e1yJHd7a98NPjFO0IX4AUqhEFyTPxU-qYOUT8B-CkrSVNo5pWfxwJSrMfvJh65LqgoQMCVsmzzVGu1V4hIbdfFo-D7kgofF~6kn0B0aDnVwUAYlVpuNInRT1z6U-GSe60GAoCcKcB~m~SgVlcGxOgrXdHmqmaZKbPQu9WWK51XJVb~Qay6kurDrZfGU2NFR13BFMMZQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA" target="_blank">MACHINE LEARNING BASED SEARCH ENGINE WITH CRAWLING, INDEXING AND RANKING </a></li>
                        <li>2. <a class="has-text-green is-underlined" href="https://link.springer.com/article/10.1007/s12525-021-00475-2" target="_blank">Machine learning and deep learning</a></li>
                        <li>3. <a class="has-text-green is-underlined" href="https://oceanservice.noaa.gov/facts/lidar.html" target="_blank">What is lidar?</a></li>
                        <li>4. <a class="has-text-green is-underlined" href="https://coast.noaa.gov/data/digitalcoast/pdf/lidar-101.pdf" target="_blank">Lidar 101:  An Introduction to Lidar Technology,   Data, and Applications</a></li>
                    </ul>
                    `
                },
                {
                    title: 'Drones, Satellite scans and image processing',
                    sponsor_logo: nzc_7,
                    logo_height: '40px',
                    info: `
                    <h3>Background</h3>
                    <p>Kingbridge is building a forest accelerator program linked to data collection and analytics to overcome some of the challenges in achieving the 2 billion tree goal.</p>
                    <p>With an ambitious federal goal of planting 2 Billion trees, the challenges of supply chains, protecting native species and finding cost efficient ways to plant trees at scale, in areas other than northern and remote communities, there are many opportunities for innovation.</p>
                    <p>They have developed a Forest Management plan for the 55+ acres of forested land onsite and is in the process of obtaining a Managed Forest designation with the Province of Ontario.</p>
                    <h3>Objective & Solution </h3>
                    <p>A typical tree can absorb around 21 kilograms of carbon dioxide (CO2) per year, however this figure is only achieved when the tree is fully grown - saplings will absorb significantly less than this. Over a lifetime of 100 years, one tree could absorb around a ton of CO2.</p>
                    <p>On this account, our focus will be identifying opportunities of tree planting and areas in most need of it. Therefore, below challenge set has been introduced to tackle the challenge of scanning and presenting Kingbridge with suitable areas.</p>
                    <p class="has-text-weight-bold">Challenge Set:</p>
                    <p class="has-text-weight-bold">Image processing using drone and satellite images, as well as publicly available data, to identify canopy coverage, tree types and ages. </p>
                    <p class="has-text-weight-bold">Possible approaches:</p>
                    <p>A number of approaches can be applied in order to identify the canopy coverage, tree types and ages.</p>
                    <ul>
                        <li><b>1. Carbon Offsets:</b> in addition to identifying objects with the images, the amount of carbon offset happening due to the presence of the identified species can be calculated and reported for further analysis.</li>
                        <li><b>2. Machine Learning:</b> This approach can include the use of machine learning to implement a training algorithm to identify the requested objects. Google Cloud has provided participants with access to machine learning workshops to familiarize themselves with the new technology surrounding it.  </li>
                        <li><b>3. AppEngine:</b> This platform can be used to run the final version of your application. </li>
                        <li><b>4. Google Cloud</b> has provided participants with recordings of related workshops.</li>
                    </ul>
                    <h3>Resources/Data </h3>
                    <p>Carbon Budget model <a class="has-text-green is-underlined" href="https://www.nrcan.gc.ca/climate-change-adapting-impacts-and-reducing-emissions/climate-change-impacts-forests/carbon-accounting/carbon-budget-model/13107 " target="_blank">https://www.nrcan.gc.ca/climate-change-adapting-impacts-and-reducing-emissions/climate-change-impacts-forests/carbon-accounting/carbon-budget-model/13107 </a></p>
                    <h3>FAQ</h3>
                    <p><b>1. What type of data will be used for image processing?</b> <br><br>Image of drones, satellite images and publicly available data will be used for image processing. </p>
                    <p><b>2. Where Can we find the images?</b> <br><br>The dataset is publicly available through the link provided. A simple registration is needed to access the data. Other resources may be added to the database from providers such as Esri.</p>
                    <p><b>3. How should be approach the image processing technic?</b> <br><br>You are open to different approaches to implement your idea, as long as it serves towards the same objective.</p>
                    `
                }
            ]
        },
        'cities-and-municipalities' :{
            title: 'Cities and Municipalities',
            details: 'A project with TDSB EcoSchools to help propagate the seeds that can be used in the tree planting.', 
            info_items:  [
                /* {
                    title: 'Quantifier/Recommender Mechanism for Urban Resilience',
                    sponsor_logo: cm_3,
                    logo_height: '60px',
                    info: 
                    `
                    <h3>Background & Context</h3>
                    <p>One of the best ways to revitalize the designated waterfront area in Toronto is by undertaking new development projects. This may include residential buildings, offices, and public spaces. These developments must be resilient enough to withstand any harm that extreme climate changes or man-made calamities may possess in far future for about 30-40 years. </p>

                    <h3>Objective</h3>
                    <p>How do we enable the organization to achieve higher degree of Urban Resilience and Green Building Requirements Compliance for upcoming development projects at the Toronto Waterfront Area? </p>

                    <h3>Solution</h3>
                    <p>Develop a tool / methodology / checklist to measure the degree of resilience and green building requirements (GBR) compliance. Also, a recommendation system to  
                    achieve greater resilience and to meet GBRs. </p>

                    <h3>Resources/Data </h3>
                    <ul>
                        <li>1. Climate Data
                            <ul>
                                <li>a. <a class="has-text-green is-underlined" href="https://services.pacificclimate.org/wx-files/app/" target="_blank">Wx Files (pacificclimate.org) </a></li>
                                <li>b. <a class="has-text-green is-underlined" href="https://climate.weather.gc.ca/prods_servs/engineering_e.html" target="_blank">Engineering Climate Datasets - Climate - Environment and Climate Change Canada (weather.gc.ca)  </a></li>
                                <li>c. <a class="has-text-green is-underlined" href="https://www.worldclim.org/data/cmip6/cmip6climate.html" target="_blank">Future climate data — WorldClim 1 documentation </a></li>
                                <li>d. <a class="has-text-green is-underlined" href="https://climatedata.ca/download/" target="_blank">Download — Climate Data Canada </a></li>
                                <li>e. <a class="has-text-green is-underlined" href="https://climate.onebuilding.org/WMO_Region_4_North_and_Central_America/CAN_Canada/" target="_blank">\climatewebsite\WMO_Region_4_North_and_Central_America\CAN_Canada (onebuilding.org) </a></li>
                                <li>f. <a class="has-text-green is-underlined" href="https://www.climate.gov/maps-data/all?listingMain=datasetgallery" target="_blank">Dataset Gallery | NOAA Climate.gov </a></li>
                                <li>g. <a class="has-text-green is-underlined" href="https://learn.arcgis.com/en/projects/explore-future-climate-projections/" target="_blank">Explore future climate projections | Learn ArcGIS  </a></li>
                            </ul>
                        </li>
                        <li>2. Canada Green Building Council Data 
                            <ul>
                                <li>a. <a class="has-text-green is-underlined" href="https://www.cagbc.org/CAGBC/projects/case_studies/CAGBC/Resources/Green_Building_Case_Studies.aspx?hkey=acde052d-fafd-4cce-9b41-cec06498e6bf" target="_blank">Green Building Case Studies (cagbc.org) </a></li>
                                <li>b. <a class="has-text-green is-underlined" href="https://leed.cagbc.org/LEED/projectprofile_EN.aspx" target="_blank">Canada Green Building Council – Project Database </a></li>
                            </ul>
                        </li>
                        <li>3. Waterfront Toronto Resilience and Innovation Framework for Sustainability 
                            <ul>
                                <li>a. <a class="has-text-green is-underlined" href="https://waterfrontoronto.ca/nbe/wcm/connect/waterfront/4a8f0eea-ad2c-44f6-85f8-0024c70dada2/WTRI-+Framework.20171013+FINAL.pdf?MOD=AJPERES" target="_blank">Framework </a></li>
                                <li>b. <a class="has-text-green is-underlined" href="https://waterfrontoronto.ca/nbe/wcm/connect/waterfront/fc11156b-5cad-4d96-95ed-b13f66e4a5d2/Resilience+and+Innovation+Framework+for+Sustainability+Action+Plan+-+September+2019.pdf?MOD=AJPERES" target="_blank">Action Plan </a></li>
                            </ul>
                        </li>
                        <li>4. Green Living 
                            <ul>
                                <li>a. <a class="has-text-green is-underlined" href="https://www.toronto.ca/city-government/planning-development/official-plan-guidelines/toronto-green-standard/toronto-green-standard-version-3/mid-to-high-rise-residential-all-non-residential-version-3/" target="_blank">Mid to High-Rise Residential & all Non-Residential Version 3 – City of Toronto  </a></li>
                                <li>b. <a class="has-text-green is-underlined" href="https://waterfrontoronto.ca/nbe/wcm/connect/waterfront/db7b12c6-3155-4f55-a545-9ae0f24869f2/Waterfront+Toronto+Green+Building+Requirements+%28GBR%29+Version+3.0+-+January+2021.pdf?MOD=AJPERES" target="_blank">Waterfront Toronto Green Building Requirements (GBR) Version 3.0 - January 2021 (waterfrontoronto.ca)  </a></li>
                            </ul>
                        </li>
                        <li>5. Waterfront Toronto Annual Reports and Strategic Plans 
                            <ul>
                                <li>a. <a class="has-text-green is-underlined" href="https://www.waterfrontoronto.ca/nbe/portal/waterfront/bannerlinks/docs/documents/annual%20reports/annual%20reports/!ut/p/a0/04_Sj9CPykssy0xPLMnMz0vMAfGjzOL9DF1cDQ39DbwNXF2MDBydfSyc_DxDjAyNjfQLsh0VAbwbhwQ!/?category=Waterfront_Content_Library/Waterfront%20Home/document%20library/documents/Annual%20Reports" target="_blank">Document Library (waterfrontoronto.ca) </a></li>
                            </ul>
                        </li>
                    </ul>

                    <h3>FAQ</h3>
                    <p class="has-text-weight-bold">1. What is Urban Resilience? </p>
                    <ul>
                        <li>Urban resilience is the capacity of a city’s systems, businesses, institutions, communities, and individuals to survive, adapt, and grow, no matter what chronic stresses (such as recurrent flooding, high unemployment, limited social safety nets) and acute shocks (i.e., sudden, intense events that threaten a community, such as earthquakes, hurricanes) they experience. Urban resilience responds to three converging global megatrends: climate change, urbanization, and globalization.  </li>
                    </ul>

                    <p class="has-text-weight-bold">2. What are the factors that contribute to higher degree of Urban Resilience? </p>
                    <ul>
                        <li>Urban Resilience is assessed on multiple dimensions like Health & Wellbeing, Economy & Society, Infrastructure & Ecosystems, and Leadership & Strategy.  </li>
                    </ul>

                    <p class="has-text-weight-bold">3. Is this Challenge set for Computer programmers only? </p>
                    <ul>
                        <li>No. Student(s) from any academic background can participate in the challenge set. </li>
                    </ul>

                    <p class="has-text-weight-bold">4. Does the final deliverable have to be a software or computer program? </p>
                    <ul>
                        <li>No. The final deliverable can be anything that covers a detailed solution to the said challenge of quantifying/measuring the degree of urban resilience. It can be as simple as a descriptive checklist with a precise scoring mechanism or as complex as preparing a model/prototype and demonstrating resilience to various natural/man-made problems. </li>
                    </ul>

                    <p class="has-text-weight-bold">5. Do we need to confine our research based on just the data inputs made available with the challenge set? </p>
                    <ul>
                        <li>Not at all. In fact, the teams are expected to take this up as an exploratory work to bring on the table better ideas. At the same time, the datasets used must be relevant and verifiable. </li>
                    </ul>

                    <p class="has-text-weight-bold">6. Do we need to compulsorily address both the dimensions: Urban Resilience as well as Green Building Requirements (GBR) compliance? </p>
                    <ul>
                        <li>Despite both the topics overlapping up to certain extent, Urban Resilience must be addressed while GBR is optional to cover. </li>
                    </ul>

                    <p class="has-text-weight-bold">7. Can we model our response in the context of some other city/area for which more public data is available? </p>
                    <ul>
                        <li>We understand the scarcity of public data specific to the designated waterfront area of Toronto. Hence, you may choose to make submission by applying the model to a different city/area. However, the model must be reusable without many modifications for the waterfront area provided required data is made accessible. Also, it must be ensured that the chosen city/area resembles the geological conditions around Toronto Waterfront; for example, the fact that it is located at the shore of a large water body – Lake Ontario presents the requirement to mitigate situations like flooding. </li>
                    </ul>

                    <p class="has-text-weight-bold">8. Is there any rubric against which the submission will be assessed? </p>
                    <ul>
                        <li>While it can be a non-exhaustive list, some of the aspects to keep in mind are understanding of the problem statement, thoroughness of research done, relevance of the solution proposed, and feasibility and affordability in terms of real-world implementation. </li>
                    </ul>
                    `
                }, */
                {
                    title: 'Achieving Urban Resilience for Sustainable Future',
                    sponsor_logo: cm_3,
                    logo_height: '60px',
                    info: 
                    `
                    <h3>Background & Context</h3>
                    <p>Revitalization of Toronto’s Waterfront is the largest urban revitalization project in the North America. Waterfront Toronto envisions the designated waterfront area to be a priceless public asset that is accessible to everyone. To achieve this the organization is undertaking various new development projects: residential buildings, offices, and public spaces. These developments must be resilient enough to withstand any harm that extreme climate changes or man-made calamities may possess in far future for about 30-40 years. </p>

                    <h3>Objective</h3>
                    <p>How do we enable the organization to achieve higher degree of Urban Resilience and Green Building Requirements Compliance for upcoming development projects at the Toronto Waterfront Area? </p>

                    <h3>Solution</h3>
                    <p>Participants can focus on one or more below mentioned dimensions related to Urban Resilience and Green Building Requirements: </p>
                    <img src=${wf1} alt="hp" width="100%" class="inline-img-cc">
                    <p>The final submission can be a plan / tool / checklist / model / system that can help achieve greater degree of Urban resilience and compliance to the Green Building Requirements (GBR). </p>
                    <p>It is highly recommended to assist your submission with a 4–5-minute video that covers all aspects of your submission and any model/system demonstrations. </p>
                    <p>Potential ideas for addressing this challenge sets are including but not limited to below: </p>
                    <ol>
                        <li>Design a descriptive scoring mechanism that takes numerous inputs of the newly planned project and applies calculations to derive the resilience index of the location and the planned project. </li>
                        <li>Analyze the Climate Data to come with recommended measures for increasing the resilience of waterfront against natural shocks and stresses like flooding, snowstorm, extreme heat, hurricanes, etc.</li>
                        <li>Analyze GIS data and Green Building Requirements to propose project plans that address aspects like affordable housing, renewable energy source installations, transportation connectivity, accessibility to well-being facilities, etc. </li>
                        <li>Analyze the Land cover data and Areal imagery data to prepare a tree-plantation scheme for the Waterfront Area using suitable plantation techniques based on the terrain and soil characteristics. </li>
                    </ol>

                    <h3>Resources/Data </h3>
                    <p><a class="has-text-green is-underlined" href="https://seneca-my.sharepoint.com/:w:/g/personal/gklpsingh_myseneca_ca/EVCqpSDWnOZDs0UdKkdv_BsBJF465vegnIhuOACOP6CHcQ?e=dDXaAz" target="_blank">Dataset - Waterfront Toronto Challenge Set </a></p>

                    <h3>FAQ</h3>
                    <p class="has-text-weight-bold">1. What is Urban Resilience? </p>
                    <ul>
                        <li>Urban resilience is the capacity of a city’s systems, businesses, institutions, communities, and individuals to survive, adapt, and grow, no matter what chronic stresses (such as recurrent flooding, high unemployment, limited social safety nets) and acute shocks (i.e., sudden, intense events that threaten a community, such as earthquakes, hurricanes) they experience. Urban resilience responds to three converging global megatrends: climate change, urbanization, and globalization.  </li>
                    </ul>

                    <p class="has-text-weight-bold">2. What are the factors that contribute to higher degree of Urban Resilience? </p>
                    <ul>
                        <li>Urban Resilience is assessed on multiple dimensions like Health & Wellbeing, Economy & Society, Infrastructure & Ecosystems, and Leadership & Strategy. </li>
                    </ul>

                    <p class="has-text-weight-bold">3. Is this Challenge set for Computer programmers only? </p>
                    <ul>
                        <li>No. Student(s) from any academic background can participate in the challenge set. </li>
                    </ul>

                    <p class="has-text-weight-bold">4. Does the final deliverable have to be a software or computer program? </p>
                    <ul>
                        <li>No. The final deliverable can be anything that covers a detailed solution to the said challenge of uplifting the degree of urban resilience. It can be as simple as a descriptive checklist with a precise scoring mechanism or as complex as preparing a model/prototype and demonstrating resilience to various natural/man-made problems. </li>
                    </ul>

                    <p class="has-text-weight-bold">5. Do we need to confine our research based on just the data inputs made available with the challenge set? </p>
                    <ul>
                        <li>Not at all. In fact, the teams are expected to take this up as an exploratory work to bring on the table better ideas. At the same time, the datasets used must be relevant and verifiable. </li>
                    </ul>

                    <p class="has-text-weight-bold">6. Do we need to compulsorily address both the dimensions: Urban Resilience as well as Green Building Requirements (GBR) compliance? </p>
                    <ul>
                        <li>Despite both the topics overlapping up to certain extent, Urban Resilience must be addressed while GBR is optional to cover. </li>
                    </ul>

                    <p class="has-text-weight-bold">7. Can we model our response in the context of some other city/area for which more public data is available? </p>
                    <ul>
                        <li>We understand the scarcity of public data specific to the designated waterfront area of Toronto. Hence, you may choose to make submission by applying the model to a different city/area. However, the model must be reusable without many modifications for the waterfront area provided required data is made accessible. Also, it must be ensured that the chosen city/area resembles the geological conditions around Toronto Waterfront; for example, the fact that it is located at the shore of a large water body – Lake Ontario presents the requirement to mitigate situations like flooding. </li>
                    </ul>

                    <p class="has-text-weight-bold">8. Is there any rubric against which the submission will be assessed? </p>
                    <ul>
                        <li>While it can be a non-exhaustive list, some of the aspects to keep in mind are understanding of the problem statement, thoroughness of research done, relevance of the solution proposed, and feasibility and affordability in terms of real-world implementation. </li>
                    </ul>
                    `
                },
                {
                    title: 'Building Connections for Brampton',
                    sponsor_logo: cm_2,
                    video_link: 'https://youtu.be/LlNV2jkZYp4',
                    info: 
                    `
                    <h3>Background & Context</h3>
                    <p>Our main goal is to highlight Brampton’s NHS (Natural Heritage System) as an important part of the city’s legacy for both current and future generations. Building awareness and providing residents with unique opportunities to engage with, value, and learn from the diverse natural landscapes and features that NHS has to offer.</p>
                    <p>To do so, Developing an innovative app that creates an interactive experience to encourage residents to explore, learn and connect with Brampton’s NHS.</p>
                    <p>This app should increase residents' connection to Brampton’s NHS by:</p>
                    <ul>
                        <li>1. Promoting various trails, sites and unique features in Brampton’s Natural Heritage System and green spaces;</li>
                        <li>2. Educate residents on the benefits of Brampton’s natural areas and features;</li>
                        <li>3. Provide interactive activities that enable residents to foster connections with nature; </li>
                        <li>4. Ensuring local interests and needs of Brampton’s population and demographics are reflected; </li>
                        <li>5. Help empower and build a community around the Natural Heritage System by connecting people with similar interests.  </li>
                    </ul>
                    <h3>Objective/Solution </h3>
                    <p>How do we promote City of Brampton's legacy through an interactive system, building connections and engaging residents to explore and learn city's natural system, and maintain a sustainable and resilient community? </p>
                    <ul>
                        <li>1. Gamification such as Treasure Hunt, Quest, Social Media Contest </li>
                        <li>2. Improve social media presence by linking available platforms </li>
                        <li>3. Sharing clips about their experiences </li>
                        <li>4. Educate the community about the natural heritage landmarks </li>
                        <li>5. Increase awareness about community events organized within the city to foster connections with nature</li> 
                        <li>6. Promote healthy living and active lifestyle by giving rewards for walking </li>
                    </ul>
                    <h3>Resources/Data</h3>
                    <p>Links to papers, research, databases, and instructions on how to make best use of them.</p>
                    <p>Dataset from City of Brampton : <a class="has-text-green is-underlined" href="https://seneca-my.sharepoint.com/:w:/g/personal/vagrawal2_myseneca_ca/ERJtkSTnK0NJtJG9k2l43Y0BDRks0ojpHVqf7GcFB1aINA?e=KlWi6w" target="_blank">Click here.</a></p>
                    <h3>FAQ</h3>
                    <p class="has-text-weight-bold">1. What is the expected solution out of this app?</p>
                    <ul>
                        <li>To Provide a solution with an interactive app for the community that will help them explore more natural heritage sites, including a <b>security feature by integrating GIS (Geographic Information Systems) which maps data.</b></li>
                    </ul>
                    <p class="has-text-weight-bold">2. How does the data provided help and how will it build towards building an app?</p>
                    <ul>
                        <li>Identifying nature and consumption from the data provided by the City of Brampton will help to analyze the natural landmarks and demographic patterns of the community by the data provided. This data will help to build an app highlighting the city’s Natural Heritage System by connecting people with nature responsibly by integrating gamification. </li>
                    </ul>
                    <p class="has-text-weight-bold">3. What are a few of the most important and/or prominent features that the sponsors are looking for? </p>
                    <p>The solution needs to be interactive. Few of them talked about features that we are looking forward to would be: </p>
                    <ul>
                        <li>1. Gamification (Hint: Treasure Hunt)</li>
                        <li>2. Social media integration</li>
                        <li>3. Discussion Boards</li>
                        <li>4. Check-in rewards</li>
                    </ul>
                    <p>These are a few ideas. The application must not be limited to these features.</p>
                    <p class="has-text-weight-bold">4. Am I allowed to share the datasets with other contributors? </p>
                    <ul>
                        <li>No. These datasets must only be used by the group members participating in the City of Brampton challenge set.</li>
                    </ul>
                    `
                },
                {
                    title: 'Data Driven Water Conservation',
                    sponsor_logo: cm_1,
                    logo_height: '60px',
                    info: 
                    `
                    <h3>Background and Context</h3>
                    <p>The process of identifying patterns and problems in the complete water provision and circulation life cycle and differentiate between issues such as excessive use of water and any possible leakage of water which could result in the waste of millions of gallons of water.</p>
                    <p>How can we use water consumption data from the city and analyze the data to identify the specific areas of water wastage? Creating innovative technology and applied science to improve water utilization and minimizing water wastage. Tracking of water theft is an added feature using geospatial data and other technologies from open water bodies.</p>
                    <h3>Objective/Solution</h3>
                    <p>How can we identify the properties and attributes in the city using geospatial data to locate water consumption, leakages, and water thefts from hydrants?</p>
                    <p>Identify techniques/solutions or recommendations by analysing the water consumption data provided in the challenge set to build a framework solution addressing the factors of water wastage like excessing consumption for households, leakage of tanks, enclosed water bodies like swimming pools, water consumption, leakage at a factory and thefts from water hydrants.</p>
                    <h3>Resources/Data</h3>
                    <p>Links to papers, research, databases, and instructions on how to make best use of them.</p>
                    <ul>
                        <li>1. <a class="has-text-green is-underlined" href="https://vaughancloud-my.sharepoint.com/personal/alison_munro_vaughan_ca/_layouts" target="_blank">Dataset from City of Vaughan</a></li>
                        <li>2. <a class="has-text-green is-underlined" href="https://www.satpalda.com/blogs/water-conservation-planning-and-management" target="_blank">WATER - CONSERVATION, PLANNING AND MANAGEMENT</a></li>
                        <li>3. <a class="has-text-green is-underlined" href="https://www.epa.gov/waterdata/waters-geospatial-data-downloads" target="_blank">WATERS Geospatial Data Downloads</a></li>
                    </ul>
                    <h3>FAQ</h3>
                    <p class="has-text-weight-bold">1. What is the expected solution out of this analysis?</p>
                    <ul>
                        <li>The analysis should provide reasoning on how and where water consumption is going above the limits. Is it genuine water consumption or is it due to water leakage.</li>
                    </ul>
                    <p class="has-text-weight-bold">2. How does the data provided help and how will it build towards analysis?</p>
                    <ul>
                        <li>Identifying the nature of consumers from the data provided by the City of Vaughan will help to analyze the pattern of consumption over the periodic data provided. The solution can state how the consumption has increased or decreased over the period and what could be reason for increase or decrease in consumer billing data.</li>
                    </ul>
                    <p class="has-text-weight-bold">3. Combination of geospatial data and water consumption data to analyze the data and its advantages? </p>
                    <ul>
                        <li>The geospatial data will addon the nature of analysis by providing more information of the terrain and the resident. Considering that the consumer is a domestic resident or a factory or a person with farmlands using the water for their respective nature of consumption. </li>
                    </ul>
                    `
                },
                {
                    title: 'Effective Road Transport Management',
                    sponsor_logo: cm_1,
                    logo_height: '60px',
                    info: 
                    `
                    <h3>Background and Context</h3>
                    <p>By comparing the travel times during peak hours with those under free-flowing traffic conditions, traffic data can be used to identify congestion hotspots throughout the road network. Compare hotspots or bottlenecks, with each other and formulate actions and policies to reduce delays. The use of FCD (Floating Car Data) in this type of analysis makes it possible to assess all road categories throughout the entire road network. Real-time traffic data gathering and Traffic congestion prevention.</p>
                    <h3>Objective/Solution</h3>
                    <p>How to analyze the traffic data and produce viable solutions or recommendations to improve road traffic management or emergency response management within the City of Vaughan?</p>
                    <p>Analyzing the datasets to identify the peak hours, nature of travel, estimated congestion time, geolocations of the traffic load and producing reliable solutions or recommendations on the analysis performed to improve the road traffic management or the emergency response management in the City of Vaughan.</p>
                    <h3>Resources/Data</h3>
                    <p>Links to papers, research, databases, and instructions on how to make best use of them.</p>
                    <ol>
                        <li><a class="has-text-green is-underlined" href="https://seneca.sharepoint.com/:f:/s/SustainabilityHackathon2022/EuqSlAjMRadDrv9h8GSoRMgBW5uKMUkLdWu3KSmvsfm0Ew?e=UNZrux" target="_blank">Dataset from City of Vaughan</a></li>
                        <li><a class="has-text-green is-underlined" href="https://www.smatstraffic.com/" target="_blank">Collect, Analyze, & Interpret Traffic Data</a></li>
                    </ol>
                    <h3>FAQ</h3>
                    <p class="has-text-weight-bold">1. What is the expected solution out of this analysis? </p>
                    <ul>
                        <li>The traffic data analysis to improve road traffic management and bring solutions for improved traffic efficiency, quicker emergency response time, or preventing traffic congestion.</li>
                    </ul>
                    <p class="has-text-weight-bold">2. How does the data provided help and how will it build towards analysis?</p>
                    <ul>
                        <li>Focusing on the peak hours, nature of travel, estimated congestion time, geolocations of the traffic load and analyzing the data should make you focus on these points that should output an analysis report on points to improve the road traffic management.</li>
                    </ul>
                    `
                },
                {
                    title: 'Promoting Natural Heritage',
                    sponsor_logo: cm_1,
                    logo_height: '60px',
                    info: 
                    `
                    <h3>Background and Context</h3>
                    <p>Physically exploring a place and enjoying the natural ecosystem is almost vanishing these days. Especially since the time, Covid has come in people have been restricted and later they have been reluctant to go out and explore. Identifying a system that improves the experience of exploring nature using gamification or rewards is going to help people explore and educate better. How can we integrate data mapping, a visualization tool, AI (Artificial Intelligence), and GIS (Geographic Information Systems) to develop a possible model.</p>
                    <h3>Objective/Solution</h3>
                    <p>How can we integrate data mapping, a visualization tool, AI, and GIS to develop a model for promoting the natural heritage and tourism of the City of Vaughan?</p>
                    <p>Creating a mobile application or creating a prototype use case solution of this challenge set on how the user experience can be enhanced while they are exploring the city’s natural heritage. This can focus on various aspects of gamification and rewards mechanism or usability of AR (Augmented Reality) and VR (Virtual Reality).</p>
                    <h3>Resources/Data</h3>
                    <p>Links to papers, research, databases, and instructions on how to make best use of them.</p>
                    <ul>
                        <li>1. Dataset from City of Vaughan</li>
                    </ul>
                    `
                },
                {
                    title: 'AI-Powered Recommender System',
                    sponsor_logo: cm_4,
                    logo_height: '60px',
                    info: 
                    `
                    <h3>Background and Context</h3>
                    <p>There are challenges in sustaining and expanding the urban forest. These include forest health threats, climate change impacts, and balancing urbanization impacts. With the use of AI and modern technologies, we can help bring possible solutions.  </p>
                    <p>Artificial Intelligence and deep analytics are keys to successful and efficient forecasting, planning, and making strategic decisions. We can use this information to increase canopy cover in strategic areas, such as those close to schools and communities. These data are also helpful in building resiliency, increasing biodiversity to reduce vulnerability to infestations and invasive species, and mitigating the impacts of climate change. </p>
                    <p>Moreover, Toronto’s ravine system has a unique charm that brings enjoyment and protection to surrounding neighborhoods and the city. Trees bring more shade to gathering areas, and promote better health, especially to students participating in active play. Outdoor environments help promote learning and offer green spaces to relax and rejuvenate. With increased access and knowledge about these natural areas, we build a healthier environment and community, connected with nature and ready to explore.  </p>
                   
                    <h3>Objective/Solution</h3>
                    <p class="has-text-weight-bold">How can we leverage existing technologies to help in rewilding the school grounds, tree planting, increasing biodiversity, and in identifying areas with high potential to connect schools and neighborhoods to nearby green spaces? </p>
                    <p>Create a design or plan a recommender system that can be used to increase canopy cover and enhance resiliency. You can also combine data sets for use in improving accessibility and knowledge of Toronto’s ravine system to connect school grounds and nearby communities. </p>
                    <p class="has-text-weight-bold">Possible solutions could focus on: </p>
                    <ul>
                        <li>1. Using mapping, geomatics, and visualization tools to model possible strategies and applying deep analytics to present a data set for use in resiliency projects </li>

                        <li>2. Providing recommendations on the best species / variety of trees that will thrive in a land area  </li>
                        
                        <li>3. Providing recommendations on viable locations where we can increase accessibility, familiarity, safety, and knowledge of these green spaces </li>
                        
                        <li>4. Gamification to increase awareness and exploration, and promote maintenance and care of schoolgrounds </li>
                    </ul>
                    <p class="has-text-weight-bold">What you will submit:</p>
                    <ol>
                        <li>Design Document / Plan</li>
                        <li>Code (if needed) via GitHub</li>
                        <li>A 4 to 5-minute mp4 video of your plan ready for YouTube.</li>
                    </ol>
                    <h3>Resources/Data</h3>
                    <p>Links to papers, research, databases, and instructions on how to make best use of them.</p>
                    <ul>
                        <li>1. <a class="has-text-green is-underlined" href="https://docs.google.com/spreadsheets/d/1gdlJcdsgfnieJttkomt4MyvRW-xED5stxpfg9rjLtSs/edit#gid=0" target="_blank">Seneca Sustainability Hackathon 2022 - TDSB Challenge Set - DATA SET </a></li>
                    </ul>
                    <h3>FAQ</h3>
                    <p class="has-text-weight-bold">1. What are the key considerations when building the challenge set? </p>
                    <p>The key considerations when building the challenge set are: </p>
                    <ul>
                        <li>1. Re-wilding TDSB school grounds.</li>
                        <li>2. How TDSB school grounds can connect and enhance Toronto's ravine system.</li>
                        <li>3. Objective of increasing biodiversity and mitigating climate change impacts.</li>
                        <li>
                        4. TDSB’s Action Item regarding Urban Forest.
                            <ul>
                                <li>a. Double the size of the TDSB’s large tree planting program.</li>
                            </ul>
                        </li>
                        <li>5. City of Toronto Strategic Forest Management objectives 
                            <ul>
                                <li>a. Increase canopy cover.</li>
                                <li>b. Achieve equitable distribution</li>
                                <li>c. Increase biodiversity</li>
                                <li>d. Increase awareness</li>
                                <li>e. Promote stewardship</li>
                                <li>f. Improve monitoring </li>
                            </ul>
                        </li>
                    </ul>
                    <p class="has-text-weight-bold">2. What is the importance of connecting the school grounds and neighborhoods to surrounding green spaces? </p>
                    <p>School grounds is the extension of the classroom, where kids can learn, play, experience and interact with nature. We can help make these untapped green spaces a safe and exciting place for kids to learn, and people living nearby enjoy doing recreational activities and relaxation, promoting mental and physical health. </p>

                    <p class="has-text-weight-bold">3. What are the challenges to sustaining and expanding Toronto’s urban forest? </p>
                    <p>Six (6) key challenges:</p>
                    <ul>
                        <li>1. Forest Health Threats</li>
                        <li>2. Tree Maintenance Requirements and Expectations</li>
                        <li>3. Balancing Urbanization Impacts and Sustaining the Urban Forest</li>
                        <li>4. Climate Change Impacts</li>
                        <li>5. Recreational Pressures on the Urban Forest</li>
                        <li>6. Increasing Public Awareness of the Value and Sensitivity of the Urban Forest</li>
                    </ul>
                    <p>(Source: Toronto’s Strategic Forest Management Plan 2012-2022)</p>
                    <p class="has-text-weight-bold">4. What types of data sets are available for use?</p>
                    <ul>
                        <li>1. Articles</li>
                        <li>2. Maps</li>
                        <li>3. Reports</li>
                        <li>4. Management Plans</li>
                        <li>5. Spreadsheets with data set</li>
                    </ul>
                    `
                },
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
                                    <Accordion title={item.title} logo={item.sponsor_logo} logo_height={item.logo_height ? item.logo_height : ''} info={item.info} video_link={item.video_link ? item.video_link : ''} key={index}/>
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
