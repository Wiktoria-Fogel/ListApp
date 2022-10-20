import React from 'react';
import {EventsStateProvider} from './containers/events';
import {Home} from './screens/Home';

const App = () => {
  return (
    <EventsStateProvider>
      <Home />
    </EventsStateProvider>
  );
};

export default App;
