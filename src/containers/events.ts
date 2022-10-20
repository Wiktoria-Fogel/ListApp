import {useCallback, useEffect, useState} from 'react';
import {createContainer} from 'unstated-next';
import {PublicEvent} from '../api/models/PublicEvent';
import {getPublicEvents} from '../utils/apiQueries';

const useEvents = createContainer(() => {
  const [publicEvents, setPublicEvents] = useState<Array<PublicEvent>>([]);
  const [controlPage, setControlPage] = useState<Array<PublicEvent>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchPublicEvents = useCallback((page: number) => {
    setIsLoading(true);
    getPublicEvents(page)
      .then(json => {
        setControlPage(json);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPublicEvents(1)
      .then(json => {
        setPublicEvents(json);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      });
    fetchPublicEvents(2);
  }, [fetchPublicEvents]);

  return {
    fetchPublicEvents,
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
