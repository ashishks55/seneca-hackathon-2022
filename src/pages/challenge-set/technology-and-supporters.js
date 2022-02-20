import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ChallengeSetsDetails from '../../components/home/challengesetdetails';

const IndexPage = () => (
  <Layout>
    <Seo title="Challenge Set" />
    <ChallengeSetsDetails id={'technology-and-supporters'}/>
  </Layout>
)

export default IndexPage
