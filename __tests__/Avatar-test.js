import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {Avatar} from '../src/components/atoms/Avatar';

test('Avatar renders correctly', async () => {
  const result = renderer.create(<Avatar source="test" />).toJSON();
  await act(async () => {
    expect(result).toMatchSnapshot();
    return;
  });
});
