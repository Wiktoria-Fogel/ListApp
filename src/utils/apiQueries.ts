import {ApiToken} from './tokens';

export const getPublicEventsFromApi = (page: number) =>
  fetch(`https://api.github.com/events?page=${page}&per_page=20`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: ApiToken,
    },
  }).then(response => response.json());
