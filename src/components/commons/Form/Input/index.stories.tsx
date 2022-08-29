import { type ComponentMeta, type Story } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { useState } from 'react';

import { Input, InputProps } from '.';
export default {
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args: InputProps) => {
  const [value, setValue] = useState('');

  return <Input {...args} value={value} onChange={(event) => setValue(event.target.value)} />;
};

export const Default: Story<InputProps> = Template.bind({});

Default.args = {
  labelName: 'label',
  name: 'name',
  errMessage: '',
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = await canvas.findByRole('textbox');

  await userEvent.type(input, 'test');
};

export const WithErrorMessage: Story<InputProps> = Template.bind({});
WithErrorMessage.args = {
  labelName: 'label',
  name: 'name',
  errMessage: '入力してください',
};
