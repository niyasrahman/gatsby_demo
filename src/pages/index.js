import React from 'react'
//import { Link } from 'gatsby'
import Banner from '../components/mainbanner'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Banner
    	imageURL="http://a3.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1160867_1296x729.jpg&w=920&h=518&scale=crop&cquality=40&location=origin"
		headline="To deploy to a different project than the one specified in the firebase.json, use the project key in your .travis.yml:"
    />
  </Layout>
)

export default IndexPage
