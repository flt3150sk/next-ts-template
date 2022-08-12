import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import * as stories from './index.stories';

const { Primary } = composeStories(stories);

test('ボタンが表示されること', () => {
  render(<Primary label="Button" />);
  const button = screen.getByText(/Button/i);

  expect(button).not.toBeNull();
});

test('ボタンのクリックイベントが正しく発火すること', async () => {
  const spyFn = jest.fn();
  const { container } = render(<Primary onClick={spyFn} />);
  await Primary.play({ canvasElement: container });

  expect(spyFn).toHaveBeenCalled();
});
