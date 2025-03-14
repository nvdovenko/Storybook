import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import InputField from '../static/components/input-field/InputField';

export default {
  title: "Components/Simple/Input Field",
  component: InputField,
  tags: ["autodocs"],
   argTypes: {
    onChange: { action: "changed" },
    iconName: {
      options: ['search', 'arrow-down-square-svgrepo-com', 'arrow-left-right-svgrepo-com', 'arrow-right-circle-svgrepo-com', 'arrow-right-square-svgrepo-com', 'bell-svgrepo-com', 'fire-2-svgrepo-com', 'comment-3-svgrepo-com', 'gallery-svgrepo-com', 'heart-like-svgrepo-com', 'home-svgrepo-com'],
      control: { type: 'select' }, 
    },
  },
} as Meta<typeof InputField>;
const Template: StoryFn<typeof InputField> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  type: "text",
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  label: "Search",
  iconName: "search", 
  iconPosition: "left",
  placeholder: "Search item",
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: "Search",
  iconName: "search", 
  iconPosition: "right",
  placeholder: "Search item",
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  placeholder: "Search item",

};

export const Date = Template.bind({});
Date.args = {
    label: "Chose a date",
    type: "date",
};