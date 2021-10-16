import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
    let i:number = 1;
    return (
      <div>
        <Tabs>
        <img src="https://cdn.discordapp.com/attachments/839915088017227806/897618742471692308/unknown.png" className="relative z-0"></img>
        <button className="absolute w-16 h-16 top-0 z-10 align-middle bg-transparent p-4" onClick={() => { i = i + 1, (i % 2) ? document.getElementById("tabs").style.display = "block" : document.getElementById("tabs").style.display = "none"}} ></button>
          <TabList className="absolute font-extrabold inline-block rounded-lg bg-green-500 hidden focus: block" id="tabs">
            <Tab className="rounded-lg pb-4 bg-green-500 block">Who we are</Tab>
            <Tab className="pb-4 block"> team</Tab>
            <Tab className=" block rounded-lg bg-green-500  pb-4">download</Tab>
          </TabList>
          <TabPanel>
            <div id="heading">
              <h1 className="text-3xl text-green-400 text-center">SuperFit</h1>
            </div>
            <div id="paragraphs">
              <h2>It's litteraly the all-in-one app to store all your apps!</h2>
              <h2>Cutstom placements for your apps!</h2>
              <h2>
                Tired of diffrent themes for each app? How about have one cool
                theme instead?
              </h2>
              <h2>You can intigrate gmail, discord, github, spotify, etc!</h2>
            </div>
            <div id="ending">
              <h1 id="shit">Download now!</h1>
              <h5>(please wait not yet avalible though)</h5>
            </div>
          </TabPanel>
          <TabPanel>
            J u s t  M e
          </TabPanel>
          <TabPanel>
            <h1 className="text-center">test</h1>
            <div className="grid grid-cols-3 gap-x-8 gap-y-5 text-center">
            <h1 className="rounded-full items-center w-16 bg-red-600 ">e</h1>
            <h2>a</h2>
            <p>GAMES</p>
            <h3>shit</h3>
            </div>

          </TabPanel>
        </Tabs>
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
render(<App />, document.getElementById('root'));
