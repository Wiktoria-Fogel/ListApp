import {useEffect, useState} from 'react';
import {createContainer} from 'unstated-next';
import {PublicEvent} from '../api/models/PublicEvent';

const useEvents = createContainer(() => {
  const [publicEvents, setPublicEvents] = useState<Array<PublicEvent>>();
  const [controlPage, setControlPage] = useState<Array<PublicEvent>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchPublicEvents();
  }, []);

  const fetchPublicEvents = () => {
    setIsLoading(true);
    return fetch('https://api.github.com/events?page=1&per_page=10', {
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
      })
      .catch(() => {
        setIsError(true);
      });
  };

  const refetchPublicEvents = (page: number) => {
    setIsLoading(true);
    //setControlPage([]);
    return fetch(`https://api.github.com/events?page=${page}&per_page=10`, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: 'Bearer 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',
      },
    })
      .then(response => response.json())
      .then(json => {
        //const x = json.map(i => i.id);
        setControlPage(json);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  return {
    fetchPublicEvents,
    refetchPublicEvents,
    publicEvents,
    setPublicEvents,
    controlPage,
    setControlPage,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
  };
});

export const EventsStateProvider = useEvents.Provider;
export const useEventsState = useEvents.useContainer;
