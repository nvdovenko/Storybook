import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PieChart from '../static/components/pie-chart/PieChart';

export default {
  title: 'Components/Pie chart',
  component: PieChart,
  argTypes: {
    showPointerLines: { control: 'boolean' },
    showPercentages: { control: 'boolean' },
    gapSize: { control: 'number' },
    maxWidth: { control: 'number' },
  },
} as Meta<typeof PieChart>;

const Template: StoryFn<typeof PieChart> = (args) => <PieChart {...args} />;
const dataArray =  [300, 200, 40, 100];
const labelsArray = ['Agree', 'Disagree', 'More agree', 'More disagree'];
const colorsArray = ['#E0AC9D', '#996888', '#A37774', '#C99DA3'];

export const Default = Template.bind({});
Default.args = {
  data: dataArray,
  colors: colorsArray,
};

export const WithLabels = Template.bind({});
WithLabels.args = {
  data: dataArray,
  labels: labelsArray,
  colors: colorsArray,
};

export const WithPointerLines = Template.bind({});
WithPointerLines.args = {
  data: dataArray,
  labels: labelsArray,
  colors: colorsArray,
  showPointerLines: true,
};

export const WithPercentages = Template.bind({});
WithPercentages.args = {
  data: dataArray,
  labels: labelsArray,
  colors: colorsArray,
  showPercentages: true,
};

export const WithGap = Template.bind({});
WithGap.args = {
  data: dataArray,
  labels: labelsArray,
  colors: colorsArray,
  showPercentages: true,
  gapSize: 2,
};
