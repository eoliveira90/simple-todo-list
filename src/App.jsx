import React from 'react';

import ErrorWrapper from './components/ErrorWrapper';
import ThemeWrapper from './components/ThemeWrapper';
import NotifyWrapper from './components/NotifyWrapper';

import Router from './components/Router';

function App() {
  return (
    <ThemeWrapper>
      <ErrorWrapper>
        <NotifyWrapper>
          <Router />
        </NotifyWrapper>
      </ErrorWrapper>
    </ThemeWrapper>
  );
}

export default App;
