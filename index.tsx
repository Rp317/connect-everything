import React, { Component } from 'react';
import { render } from 'react-dom';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }
//classname="..." for tailwind css
//try to make something that connects all the things. (includes discord, gmail, github, spotify, youtube and more!)
//*ambition intensifys*
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
