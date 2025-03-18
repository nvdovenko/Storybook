import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PieChart from '../static/components/pie-chart/PieChart';

export default {
  title: 'Components/Data visualisation/Pie chart',
  component: PieChart,
  tags: ['autodocs'],
  argTypes: {
    showPointerLines: {
      control: 'boolean',
      description: 'Controls whether pointer lines are displayed to indicate the segments of the pie chart.'
    },
    showPercentages: {
      control: 'boolean',
      description: 'Controls whether the percentage values are displayed on the pie chart segments.'
    },
    gapSize: {
      control: 'number',
      description: 'Defines the gap size between the pie chart segments. A value of 0 means no gap, while higher values create larger gaps.'
    },
    maxWidth: {
      control: 'number',
      description: 'Sets the maximum width of the labels. If the label text is longer than this value, it will pass to the next line.'
    },
    data: {
      description: 'An array of numerical values representing the data for the pie chart segments. Each value corresponds to the size of a segment.'
    },
    labels: {
      description: 'An array of labels for the pie chart segments. Each label corresponds to the data in the same position in the `data` array.'
    },
    colors: {
      description: 'An array of colors for the pie chart segments. Each color corresponds to the segment in the same position as the `data` array.'
    },
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
