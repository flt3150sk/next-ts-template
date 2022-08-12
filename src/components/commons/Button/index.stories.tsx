import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { Button } from '.';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    primary: true,
    label: 'Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole('button');

    await userEvent.click(button);
  },
};
