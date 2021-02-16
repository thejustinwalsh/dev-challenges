import React from 'react';
import { Select } from './Select';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Design System/Select',
  component: Select,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    size: {
      control: {
        type: 'select',
        options: [
          'sm',
          'md'
        ]
      }
    }
  }
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
  placeholder: 'Placeholder',
};

export const Error = Template.bind({});
Error.args = {
  ...Primary.args,
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

export const Value = Template.bind({});
  Value.args = {
  ...Primary.args,
  value: 'Text',
};

export const SizeSmall = Template.bind({});
  SizeSmall.args = {
  ...Primary.args,
  size: 'sm',
};

