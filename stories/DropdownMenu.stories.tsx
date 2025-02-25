import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DropdownMenu from './DropdownMenu';

export default {
  title: 'Components/Dropdown menu',
  component: DropdownMenu,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta<typeof DropdownMenu>;

const Template: StoryFn<typeof DropdownMenu> = (args) => <DropdownMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Choose an option',
  options: [
    { value: '1', text: 'Option 1' },
    { value: '2', text: 'Option 2' },
    { value: '3', text: 'Option 3' },
  ],
  value: '1',
  onChange: (option) => console.log(option),
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: 'Select your favorite fruit',
  options: [
    { value: 'apple', text: 'Apple' },
    { value: 'banana', text: 'Banana' },
    { value: 'orange', text: 'Orange' },
  ],
  value: 'banana',
  onChange: (option) => console.log(option),
};
