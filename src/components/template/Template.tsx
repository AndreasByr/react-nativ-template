import React from 'react';
import { Text } from 'react-native';

export interface ITemplate {
  sampleTextProp: string;
}

const Template = ({ sampleTextProp }) => {
  return <Text>{sampleTextProp}</Text>;
};

export default Template;
