import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Checkbox from "../static/components/checkbox/Checkbox"; 

export default {
  title: "Components/Simple/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
    { value: 'Click here', checked: false },
  ],
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
    options: [
    { value: 'Click here', checked: false },
  ],
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  options: [
    { value: 'Click here', checked: false },
  ],
  size: "large",
};

export const Multiple = Template.bind({});
Multiple.args = {
  size: 'medium',
  options: [
    { value: 'Option 1', checked: false },
    { value: 'Option 2', checked: false },
    { value: 'Option 3', checked: false },
    { value: 'Option 4', checked: false },
    { value: 'Option 5', checked: false },
  ],
};
