import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby"


import Bottombar from "../components/apps/bottombar";
// import Layout from "../components/apps/layout";
import Layout from '../components/Layout';

import { Box, BaseStyles, Flash, Heading, LabelGroup, Label } from '@primer/components'

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
      <BaseStyles>
        <Box m={10}>

            <Heading mb={2}>Hello, world!</Heading>
            <p>{data.site.siteMetadata.title}</p>
            <p>v1</p>

            <p>Star count for the Gatsby repo: {starsCount}</p>

            <Flash m={4} scheme="green"> Flash green </Flash>

            <LabelGroup>
              <Label>Default label</Label>
              <Label bg='red.4'>Label with red background</Label>
              <Label outline>Default outline label</Label>
            </LabelGroup>

          
            <Bottombar />
        </Box>
      </BaseStyles>

    </Layout>
  )
};

export default M9App