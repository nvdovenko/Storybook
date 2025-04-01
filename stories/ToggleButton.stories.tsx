import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ToggleButton from "../static/components/toggle-button/ToggleButton"; 

export default {
  title: "Components/Simple/Toggle Button",
  component: ToggleButton,
  tags: ["autodocs"],
  argTypes: {
    onToggle: {
      action: "toggled",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      description: "The size of the toggle button. Choose from 'small', 'medium', or 'large'.",
    },
    onLabel: {
      description: "The label displayed on the active button.",
    },
    offLabel: {
      description: "The label displayed on the inactive button.",
    },
    initialState: {
      description: "The initial state of the toggle button. If true, the button starts in the 'on' position.",
    },
  },
} as Meta<typeof ToggleButton>;

const Template: StoryFn<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onLabel: "On",
  offLabel: "Off",
  size: "medium",
  initialState: true,
};

export const Large = Template.bind({});
Large.args = {
  onLabel: "On",
  offLabel: "Off",
  size: "large",
  initialState: true,
};

export const Small = Template.bind({});
Small.args = {
  onLabel: "On",
  offLabel: "Off",
  size: "small",
  initialState: true,
};

