import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbButton, AbCard } from '../.';

const App = () => {
  return (
    <div>
      <AbButton />

      <AbCard />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
