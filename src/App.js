import React, { Component } from 'react';

import SelectField from './SelectField';
import './App.css';

class App extends Component {
  render() {
    const items = ['item 1', 'item 2', 'item 3'];

    return (
      <div>
        <SelectField items={items} placeholder="Choose something" />
      </div>
    );
  }
}

export default App;
