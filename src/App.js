import React, { Component } from 'react';
import { HousesList } from './components/HousesList';


class App extends Component {
  render() {
    return (
      <div className="container py-3">
        <HousesList />
      </div>
    )
  }
}

export default App;