import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 className="has-text-centered">404: Not Found</h1>
    <p className="has-text-centered mg-bottom-100"><Link to="/" className="button is-success">Go back to the homepage</Link></p>
  </Layout>
)

export default NotFoundPage
