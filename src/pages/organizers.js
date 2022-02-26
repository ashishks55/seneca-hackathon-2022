import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Organizers from "../components/home/organizers"

const IndexPage = () => (
  <Layout>
    <Seo title="Challenge Set" />
    <Organizers/>
  </Layout>
)

export default IndexPage
