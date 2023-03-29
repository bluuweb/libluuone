import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PButton } from '../.';

const App = () => {
  return (
    <div>
      <PButton className="bg-orange-500">Example</PButton>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
