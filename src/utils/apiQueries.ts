export const getPublicEvents = (page: number) =>
  fetch(`https://api.github.com/events?page=${page}&per_page=20`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      //Authorization: 'Bearer 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',
      Authorization:
        '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',
    },
  }).then(response => response.json());
