import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Demo = () => (
  <Layout>
    <h1>the new demo page</h1>
    <p>Welcome to yub  page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Demo
