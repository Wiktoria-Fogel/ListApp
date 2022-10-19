import {useState} from 'react';
import {createContainer} from 'unstated-next';

const useEvents = createContainer(() => {
  const [publicEvents, setPublicEvents] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchPublicEvents = () => {};

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
