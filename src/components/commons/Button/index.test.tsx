import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './index.stories';

const { Primary } = composeStories(stories);

test('ボタンのクリックイベントが正しく発火すること', async () => {
  const spyFn = jest.fn();
  const { container } = render(<Primary onClick={spyFn} />);
  await Primary.play({ canvasElement: container });

  expect(spyFn).toHaveBeenCalled();
});
