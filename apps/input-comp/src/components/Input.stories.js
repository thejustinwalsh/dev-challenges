import React from 'react';
import '../index.css';
import { Input } from './Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Design System/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' }
  }
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
  placeholder: 'Placeholder',
}