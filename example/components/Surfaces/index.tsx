import * as React from 'react';
import { Card, styled, Text, Heading } from '../../../.';

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '$150',
});

export function Surfaces() {
  return (
    <>
      <Heading as="h2" size="5xl">
        Surfaces
      </Heading>
      <Heading as="h3" size="4xl">
        Cards
      </Heading>
      <Grid>
        <Card>
          <Heading as="h4" size="3xl" css={{ marginTop: '$3' }}>Heading</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eaque ad magnam mollitia ipsa, cumque recusandae explicabo suscipit quis, iure, dolore dignissimos aut ab voluptatibus eum in odio harum earum.</Text>
        </Card>
        <Card>
          <Heading as="h4" size="3xl" css={{ marginTop: '$3' }}>Heading</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eaque ad magnam mollitia ipsa, cumque recusandae explicabo suscipit quis, iure, dolore dignissimos aut ab voluptatibus eum in odio harum earum.</Text>
        </Card>
        <Card>
          <Heading as="h4" size="3xl" css={{ marginTop: '$3' }}>Heading</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eaque ad magnam mollitia ipsa, cumque recusandae explicabo suscipit quis, iure, dolore dignissimos aut ab voluptatibus eum in odio harum earum.</Text>
        </Card>
      </Grid>
    </>
  );
}
