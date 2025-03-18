import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BarChartComponent from '../static/components/bar-chart/BarChart';

export default {
    title: 'Components/Data visualisation/Bar chart',
    component: BarChartComponent,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'color',
            description: 'The color of the bars in the chart. Use any valid CSS color value.'
        },
        height: {
            control: 'number',
            description: 'The height of the chart in pixels.'
        },
        width: {
            control: 'number',
            description: 'The width of the bars in the chart, in pixels.'
        },
        onChange: {
            action: 'changed',
            description: 'Callback function triggered when the chart data changes.'
        },
        
    },
} as Meta<typeof BarChartComponent>;
  
const Template: StoryFn<typeof BarChartComponent> = (args) => <BarChartComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { name: 'Page A', value: 4000 },
    { name: 'Page B', value: 3000 },
    { name: 'Page C', value: 2000 },
    { name: 'Page D', value: 2780 },
    { name: 'Page E', value: 1890 },
    { name: 'Page F', value: 2390 },
    { name: 'Page G', value: 3490 },
  ],
  height: 300,
 width: 40,
};
