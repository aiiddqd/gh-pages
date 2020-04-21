import React from "react";
// import { Link } from "gatsby";
import {Box, ButtonGroup, Button, Heading} from '@primer/components'


export default () => (

  <ButtonGroup display='block' my={2}>
    <Button as="a" href="/">Home</Button>
    <Button data-act="a2">Start</Button>
    <Button>Stop</Button>
  </ButtonGroup>
);
