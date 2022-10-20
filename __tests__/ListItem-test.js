import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {ListItem} from '../src/components/atoms/ListItem';

const item = {
  id: '',
  type: 'test',
  actor: {
    id: 123,
    login: 'test',
    display_login: 'test',
    gravatar_id: '',
    url: '',
    avatar_url: '',
  },
  repo: {
    id: 123,
    name: 'test',
    url: '',
  },
};

test('SearchInput renders correctly', async () => {
  const result = renderer.create(<ListItem item={item} />).toJSON();
  await act(async () => {
    expect(result).toMatchSnapshot();
    return;
  });
});
