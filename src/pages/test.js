import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const test = () => (
  <Layout>
    <h1>layout</h1>
    <p>Welcome to yub  page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default test
