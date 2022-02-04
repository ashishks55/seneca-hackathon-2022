import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import About from "../components/home/about"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <Hero/>
    <About/>
  </Layout>
)

export default IndexPage
