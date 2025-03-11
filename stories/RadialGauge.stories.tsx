import React, { useState, useEffect } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadialGauge from '../static/components/radial-gauge/RadialGauge';

export default {
  title: 'Components/Radial gauge',
  component: RadialGauge,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    maxValue: { control: 'number' },
    text: { control: 'text' },
    backgroundColorWidth: { control: 'number' },
    lineWidth: { control: 'number' },
    gaugeColor: { control: 'color' },
    canvasSize: { control: 'number'},
  },
}as Meta<typeof RadialGauge>; 

const Template: StoryFn<typeof RadialGauge> = (args) => <RadialGauge {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 75,
  maxValue: 100,
  text: "75%",
  backgroundColorWidth: 20,
  lineWidth: 20,
  gaugeColor: 'rgba(62, 152, 199, 1)',
  canvasSize: 300,
};

export const CustomValue = Template.bind({});
CustomValue.args = {
  value: 63,
  maxValue: 100,
  text: '63%',
  backgroundColorWidth: 30,
  lineWidth: 30,
  gaugeColor: 'rgb(90, 136, 86)',
  canvasSize: 150,
};

export const EmptyGauge = Template.bind({});
EmptyGauge.args = {
  value: 0,
  maxValue: 100,
  text: '0%',
  backgroundColorWidth: 20,
  lineWidth: 20,
  gaugeColor: 'rgba(62, 152, 199, 1)',
  canvasSize: 200,
};

export const Animated: StoryFn<typeof RadialGauge> = () => {
  const [value, setValue] = useState(50);
  const maxValue = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue + 10) % (maxValue + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, [maxValue]);

  return (
    <RadialGauge
      value={value}
      maxValue={maxValue}
      text={`${value}%`}
    />
  );
};