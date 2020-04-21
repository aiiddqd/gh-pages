import React from "react";
import { graphql } from "gatsby"

import { Link } from "gatsby";

import Bottombar from "../components/apps/bottombar";
// import Layout from "../components/apps/layout";
import Layout from '../components/Layout';

import {Box, ButtonGroup, Button, Heading} from '@primer/components'


export default ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <Box m={10}>

        <Heading mb={2}>Hello, world!</Heading>

        <ButtonGroup display='block' my={2}>
          <Button as="a" href="/">Home</Button>
          <Button data-act="a2">Start</Button>
          <Button>Stop</Button>
        </ButtonGroup>
        {/* <Bottombar /> */}
    </Box>

  </Layout>
);


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`