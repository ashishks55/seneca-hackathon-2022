import * as React from "react"
import Layout from "../components/layout"
import HeroNew from "../components/reusable/HeroNew"
import About from "../components/home/about"
import KeyNotes from "../components/home/keynote"
import Timeline from "../components/home/timeline"
import Challengesets from "../components/home/challengesets"
import Sponsors from "../components/home/sponsors"
import Organizers from "../components/home/organizers"
import Spotlight from "../components/home/spotlight"
import FAQ from "../components/home/faq"
import SectionBreak from "../components/reusable/sectionbreak"
import Seo from "../components/seo"
import Prizes from "../components/home/prizes"
import Winners from '../components/home/winners'
import SolutionTechnologies from "../components/home/solutiontechnologies"
import YogFrontSessions from "../components/home/yogfrontsessions"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroNew/>
    <SectionBreak id={'about'}/>
    <About />
    <SectionBreak id={'timeline'}/>
    <Timeline/>
    <SectionBreak id={'challengesets'}/> 
    <Challengesets />
    <SectionBreak id={'solutiontechnologies'} />
    <SolutionTechnologies />
    <SectionBreak id={'prizes'} />
    <Prizes />
    <SectionBreak id={'keynotes'} />
        <KeyNotes />
        <SectionBreak id={'yog-front-sessions'} />
        <YogFrontSessions />
    <SectionBreak id={'sponsors'}/>
    <Sponsors/>
    {/* <SectionBreak id={'winners'}/>
    <Winners/> */}
    <SectionBreak id={'winners'}/>
    <Spotlight/>
    <SectionBreak id={'faq'}/>
    <FAQ/>
  </Layout>
)

export default IndexPage
