import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery, Link } from "gatsby"


import Bottombar from "../components/apps/bottombar";
// import Layout from "../components/apps/layout";
import Layout from '../components/Layout';

import {Box, ButtonGroup, Button, Heading} from '@primer/components'

const M9App = () => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const [starsCount, setStarsCount] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setStarsCount(resultData.stargazers_count)
      }) // set data for the number of stars
  }, [])

  return (
    <Layout title={data.site.siteMetadata.title}>
      <Box m={10}>

          <Heading mb={2}>Hello, world!</Heading>
          <p>{data.site.siteMetadata.title}</p>
          <p>v1</p>

          <p>Star count for the Gatsby repo: {starsCount}</p>

        
          <Bottombar />
      </Box>

    </Layout>
  )
};

export default M9App