import React from 'react';
import '../index.css';
import { Input } from './Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Design System/Input',
  component: Input,
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

const Template = (args) => <Input {...args} />;

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

export const HelperText = Template.bind({});
HelperText.args = {
  ...Primary.args,
  helperText: 'Some interesting text',
};

export const HelperTextError = Template.bind({});
HelperTextError.args = {
  ...HelperText.args,
  error: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  ...Primary.args,
  startIcon: 'local_phone',
};

export const EndIcon = Template.bind({});
  EndIcon.args = {
  ...Primary.args,
  endIcon: 'lock',
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

export const FullWidth = Template.bind({});
  FullWidth.args = {
  ...Primary.args,
  fullWidth: true,
};

export const Multiline = Template.bind({});
  Multiline.args = {
  ...Primary.args,
  multiline: true,
  row: 4,
};