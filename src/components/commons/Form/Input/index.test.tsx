import { composeStories } from '@storybook/testing-react';
import { render, screen, waitFor } from '@testing-library/react';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

test('フォームの入力が正しく処理されること', async () => {
  const { container } = render(<Default />);
  await waitFor(() => Default.play({ canvasElement: container }));

  const input = screen.getByRole('textbox') as HTMLInputElement;

  expect(input.value).toBe('test');
});
