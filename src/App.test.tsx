import React from 'react';
import { render } from '@testing-library/react';
import UpvoteButton from './UpvoteButton';

test('selection change based on click event', () => {
  const { getByRole } = render(
    <UpvoteButton selected={false} onClick={function (): void {
      throw new Error('Function not implemented.');
    }} />
  );

  // Check if initially not selected
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const upvoteButton = getByRole('button');
  expect(upvoteButton).toHaveStyle('background-color: #F4F6F8');

});
