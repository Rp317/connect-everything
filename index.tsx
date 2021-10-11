import React, { Component } from 'react';
import { render } from 'react-dom';

interface AppProps {}
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
        
        <div id="heading">
          <h1 className="text-3xl text-green-400 text-center">SuperFit</h1>
        </div>
        <div id="paragraphs">
          <h2>It's litteraly the all-in-one app to store all your apps!</h2>
          <h2>Cutstom placements for your apps!</h2>
          <h2>
            Tired of diffrent themes for each app? How about have one cool theme
            instead?
          </h2>
          <h2>You can intigrate gmail, discord, github, spotify, etc!</h2>
        </div>
        <div id="ending">
          <h1 id="shit">Download now!</h1>
          <h5>(please wait not yet avalible though)</h5>
        </div>
      </div>
    );
  }
}
function tabs() {
  let a = 1;
  let b = 2;
  let c = a + b;
  console.log(c);
}
tabs();
render(<App />, document.getElementById('root'));
