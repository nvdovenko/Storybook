import React, { useState, useEffect } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadialGauge from '../static/components/radial-gauge/RadialGauge';

export default {
  title: 'Components/Data visualisation/Radial gauge',
  component: RadialGauge,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'The current value of the gauge. This is the percentage to be displayed on the radial gauge (0 to maxValue).'
    },
    maxValue: {
      control: 'number',
      description: 'The maximum value of the gauge. The gauge will fill up as the `value` approaches this number.'
    },
    text: {
      control: 'text',
      description: 'The text to be displayed in the center of the gauge. Often used for the value or a label.'
    },
    backgroundColorWidth: {
      control: 'number',
      description: 'The width of the background circle that forms the gauge, in pixels.'
    },
    lineWidth: {
      control: 'number',
      description: 'The width of the gauge line, in pixels. This determines the thickness of the radial arc.'
    },
    gaugeColor: {
      control: 'color',
      description: 'The color of the gauge line, representing the current value. Any valid CSS color value can be used.'
    },
    canvasSize: {
      control: 'number',
      description: 'The size of the canvas in pixels. This defines the overall size of the radial gauge.'
    },
  },
} as Meta<typeof RadialGauge>;

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