import React from 'react';
import { Dimensions } from 'react-native';
import Card from './Card';

import { FILLER } from '../../Assets/Images/Images.js'


export default [
  {
    renderItem: ({ item }) => <Card
        title="Sound Engineer"
        subtitle="Insert subtitle here"
        image={FILLER}
    />
  },
  {
    renderItem: ({ item }) => <Card
        title="Sign Language Interpreter"
        subtitle="Insert subtitle here"
        image={FILLER}
    />  },
  {
    renderItem: ({ item }) => <Card
        title="ENT"
        subtitle="Insert subtitle here"
        image={FILLER}
    />  },
  {
    renderItem: ({ item }) => <Card
        title="Audiologist"
        subtitle="Insert subtitle here"
        image={FILLER}
    />  },
    {
    renderItem: ({ item }) => <Card
        title="Speech Language Pathologist"
        subtitle="Insert subtitle here"
        image={FILLER}
    />  }
];