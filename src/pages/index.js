import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import About from "../components/home/about"
import Timeline from "../components/home/timeline"
import Sponsors from "../components/home/sponsors"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <About/>
    <Timeline/>
    <Sponsors/>
  </Layout>
)

export default IndexPage
