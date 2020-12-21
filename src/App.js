import React, { Suspense } from 'react';
import Router from './router/router';
import LoadingScreen from './components/LoadingScreen';
import './assets/css/style.css';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <Suspense fallback={<LoadingScreen />}>
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
