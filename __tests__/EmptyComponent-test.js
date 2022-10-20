import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {EmptyComponent} from '../src/components/atoms/EmptyComponent';

test('EmptyComponent renders correctly', async () => {
  const result = renderer.create(<EmptyComponent title="test" />).toJSON();
  await act(async () => {
    expect(result).toMatchSnapshot();
    return;
  });
});
