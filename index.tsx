import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './accurateIndex.css';
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
        <img src="https://icon-library.com/images/drop-down-menu-icon/drop-down-menu-icon-9.jpg" className=" z-0 w-24 h-20 bg-transparent"></img>
        <button className="absolute w-24 h-8 top-0 z-10 align-middle bg-transparent p-4" onClick={() => { i = i + 1, (i % 2) ? document.getElementById("tabs").style.display = "block" : document.getElementById("tabs").style.display = "none"}} id="pp"></button>
          <TabList className="absolute font-extrabold inline-block rounded-lg bg-green-500 hidden focus: block" id="tabs">
            <Tab className="rounded-lg pb-4 bg-green-500 block">Who we are</Tab>
            <Tab className="pb-4 block"> team</Tab>
            <Tab className=" block rounded-lg bg-green-500  pb-4">download</Tab>
          </TabList>
          <TabPanel>
            <div id="stuffs">
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
              <h1>Download now!</h1>
              <h5>(please wait not yet avalible though)</h5>
            </div>
            </div>
          </TabPanel>
          <TabPanel>
            J u s t  M e
          </TabPanel>
          <TabPanel>
            <h1 className="text-center">test</h1>
            <div className="text-center">
            <h1 className="rounded-sm items-center  bg-white">e</h1>
            <h2 className="rounded-sm items-center  bg-red-600 p-4">a</h2>
            <p className="rounded-sm items-center bg-white ">GAMES</p>
            <h3 className="rounded-sm items-center  bg-white ">owo</h3>
            <h3 className="rounded-sm items-center  bg-white ">owo</h3>
            <h3 className="rounded-sm items-center  bg-white ">owo</h3>
            <h3 className="rounded-sm items-center  bg-white ">owo</h3>
            <h3 className="rounded-sm items-center  bg-white ">owo</h3>
            <h3 className="rounded-sm items-center  bg-white ">owo</h3>
            <h3 className="rounded-sm items-center  bg-white ">owo</h3>
            <h3 className="rounded-sm items-center  bg-white ">owo</h3>
            <h3 className="rounded-sm items-center  bg-white ">owo</h3>
            <h3 className="rounded-sm items-center  bg-white ">owo</h3>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            
            <h1>a</h1>
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
