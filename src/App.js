import React, { Component, lazy, Suspense } from 'react';
import './App.css';

// import MyComp from './components/myComp';

const MyComp = lazy(() => import('./components/myComp'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another component</h1>
        <Suspense fallback={<div>...Loading</div>}>
          <MyComp />
        </Suspense>
      </div>
    );
  }
}

export default App;
