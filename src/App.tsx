/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

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
