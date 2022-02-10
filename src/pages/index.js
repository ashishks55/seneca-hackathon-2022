import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import About from "../components/home/about"
import KeyNotes from "../components/home/keynotes"
import Timeline from "../components/home/timeline"
import Challengesets from "../components/home/challengesets"
import Sponsors from "../components/home/sponsors"
import Organizers from "../components/home/organizers"
import Spotlight from "../components/home/spotlight"
import SectionBreak from "../components/reusable/sectionbreak"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <SectionBreak id={'about'}/>
        <About />
        <SectionBreak id={'keynotes'} />
        <KeyNotes />
    <SectionBreak id={'timeline'}/>
    <Timeline/>
    <SectionBreak id={'challengesets'}/>
    <Challengesets/> 
    <SectionBreak id={'sponsors'}/>
    <Sponsors/>
    <SectionBreak id={'organizers'}/>
    <Organizers/>
    <SectionBreak id={'spotlight'}/>
    <Spotlight/>
  </Layout>
)

export default IndexPage
