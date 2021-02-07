import React from 'react';
import '../index.css';
import { Button } from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Design System/Button',
  component: Button,
  argTypes: {
    variant: { 
      control: {
        type: 'select',
        options: [
          'none',
          'outline',
          'text',
        ]
      }
    },
    size: {
      control: {
        type: 'select',
        options: [
          'sm',
          'md',
          'lg'
        ]
      }
    },
    color: {
      control: {
        type: 'select',
        options: [
          'default',
          'primary',
          'secondary',
          'danger',
        ]
      }
    },
    disableShadow: { control: 'boolean' },
    disabled: { control: 'boolean' },
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'none',
  color: 'default',
  size: 'md',
  label: 'Default',
  startIcon: '',
  endIcon: '',
  disableShadow: false,
  disabled: false,
};

export const Outline = Template.bind({});
Outline.args = {
  ...Primary.args,
  color: 'primary',
  variant: 'outline',
};

export const Text = Template.bind({});
Text.args = {
  ...Primary.args,
  color: 'primary',
  variant: 'text',
};

export const DisableShadow = Template.bind({});
DisableShadow.args = {
  ...Primary.args,
  color: 'primary',
  disableShadow: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  label: 'Disabled',
  disabled: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  ...Primary.args,
  color: 'primary',
  startIcon: 'local_grocery_store',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  ...Primary.args,
  color: 'primary',
  endIcon: 'local_grocery_store',
};


export const Small = Template.bind({});
Small.args = {
  ...Primary.args,
  color: 'primary',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  ...Primary.args,
  color: 'primary',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  color: 'primary',
  size: 'lg',
};
