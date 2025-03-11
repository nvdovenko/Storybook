import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DropdownMenu from '../static/components/dropdown-menu/DropdownMenu';

export default {
  title: 'Components/Dropdown menu',
  component: DropdownMenu,
  tags: ['autodocs'],
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
  label: 'Select city you want to visit',
  options: [
    { value: 'london', text: 'London' },
    { value: 'paris', text: 'Paris' },
    { value: 'new_york', text: 'New York' },
    { value: 'tokyo', text: 'Tokyo' },
    { value: 'berlin', text: 'Berlin' },
    { value: 'sydney', text: 'Sydney' },
    { value: 'rome', text: 'Rome' },
    { value: 'madrid', text: 'Madrid' },
    { value: 'amsterdam', text: 'Amsterdam' },
  ],
  value: 'london',
  onChange: (option) => console.log(option),
};
