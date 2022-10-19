import {useEffect, useState} from 'react';
import {createContainer} from 'unstated-next';

const useEvents = createContainer(() => {
  const [publicEvents, setPublicEvents] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchPublicEvents();
  }, []);

  const fetchPublicEvents = () => {
    setIsLoading(true);
    return fetch('https://api.github.com/events?page=1&per_page=20', {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: 'Bearer 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',
      },
    })
      .then(response => response.json())
      .then(json => {
        setPublicEvents(json);
        setIsLoading(false);
        setIsError(false);
        //return json.movies;
      })
      .catch(() => {
        setIsError(true);
      });
  };

  return {
    fetchPublicEvents,
    publicEvents,
    setPublicEvents,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
  };
});

export const EventsStateProvider = useEvents.Provider;
export const useEventsState = useEvents.useContainer;
