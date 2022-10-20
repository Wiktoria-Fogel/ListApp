import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {SearchInput} from '../src/components/atoms/SearchInput';

test('SearchInput renders correctly', async () => {
  const result = renderer
    .create(<SearchInput onClear={() => jest.fn} />)
    .toJSON();
  await act(async () => {
    expect(result).toMatchSnapshot();
    return;
  });
});
