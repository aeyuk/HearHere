import React from 'react';
import { Dimensions } from 'react-native';
import Card from './Card';

import {  FILLER, 
          SOUND_ENGINEER, 
          SIGN_LANGUAGE_INTERPETER, 
          ENT,
          AUDIOLOGIST,
          SLP
        } from '../../Assets/Images/Images.js'


export default [
  {
    renderItem: ({ item }) => <Card
      title="Sound Engineer"
      subtitle="Tap to learn more"
      image={SOUND_ENGINEER}
    />,
    description: "description1",
  },
  {
    renderItem: ({ item }) => <Card
      title="Sign Language Interpreter"
      subtitle="Tap to learn more"
      image={SIGN_LANGUAGE_INTERPETER}
    />,
    description: "description2",
  },
  {
    renderItem: ({ item }) => <Card
      title="Ear-Nose-Throat Doctor"
      subtitle="Tap to learn more"
      image={ENT}
    />,
    description: "description3",
  },
  {
    renderItem: ({ item }) => <Card
      title="Audiologist"
      subtitle="Tap to learn more"
      image={AUDIOLOGIST}
    />,
    description: "description4",
  },
  {
    renderItem: ({ item }) => <Card
      title="Speech Language Pathologist"
      subtitle="Tap to learn more"
      image={SLP}
    />,
    description: "description5",
  }
];